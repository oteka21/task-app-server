// import db from '../../../db.json'

import { connectDB } from '../db'

export const resolvers = {
 async  getTasks(){
   let db,tasks
   try{
    db = await connectDB()
    tasks = await db.collection('tasks').find().toArray()
   }catch{
     throw new Error("Error al traer los datos")
   }
    return tasks
  },
  getTask({id}){
    const task = db.tasks.filter(item => console.log(item) || item._id === +id)
    return task.pop()
  }
}