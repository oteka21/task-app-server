import express from 'express'
import { buildSchema } from 'graphql'
import gqlMiddleware from 'express-graphql'
import { schema as cleanSchema } from './lib/schema'
import { resolvers } from './lib/resolvers/index'


const schema  = buildSchema(cleanSchema)



const PORT = process.env.PORT || 3000

const app = express();

app.use('/graphql', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: true
}))


app.listen(PORT, () => {
    console.log(`Connected in Port ${3000}`);
})
