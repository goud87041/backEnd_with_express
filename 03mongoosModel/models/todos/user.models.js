import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName :{
            type : String,
            require : true,
            isActive : true ,
            lowercase : true
        },
        email :{
            type : String ,
            require : true ,
            unique : true ,
            lowercase : true
        },
        password :{
            type : String ,
            require : [true , "password require"]

        }
},{timestamps:true});

export const User = mongoose.model("User",userSchema);