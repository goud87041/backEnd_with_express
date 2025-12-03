import mongoose from "mongoose";
// import { subTodo } from "./subTodo.models";

const TodoSchema = new mongoose.Schema(
    {
        content :{
            type : String,
            resquire : true 
        },
        compelet : {
            type : Boolean,
            default : false
        },
        createdBy : { 
            type : mongoose.Schema.Types.ObjectId,
            ref : User 
        },
        subTodos : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "subTodo"
        }]
},{timestamps : true})


export const Todo = mongoose.model("Todo",TodoSchema)