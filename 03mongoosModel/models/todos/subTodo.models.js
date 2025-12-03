import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
    {
        youtube :{
            type : String,
            
        }
},{timestamps:true})

export const  subTodo = mongoose.model("subTodo",subTodoSchema)