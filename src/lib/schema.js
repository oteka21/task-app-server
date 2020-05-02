export const schema = `
  type Task{
    _id: ID
    title: String!
    description: String
  }

  type Query {
    "devuelve todas las tareas"
    getTasks: [Task]
    "devuelve una sola tarea"
    getTask(id: ID!): Task
  }
`