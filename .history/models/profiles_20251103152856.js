import mongoose from "mongoose";


const profileSchema =new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true},
    imageUrl:{type:String,default:""},
    role:{type:String,enum:["user","admin"],default:"user"},
    refreshToken:{type:String,default:""}
    
})
const profiles = mongoose.model("profiles",profileSchema)

export 