import mongoose from "mongoose";


const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"
    ]
}
,
    password:{
         type:String,
        required:true
    },
    cartData:{
        type:Object,
        default:{}
    }
},{timestamps:true,minimize:false})

const User=mongoose.model("User",userSchema)
export default User;