import mongoose from "mongoose";


const profileSchema =new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true},
    imageUrl:{type:String,required:true},
    name:{type:String,required:true},
    
})