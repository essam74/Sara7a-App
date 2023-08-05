import mongoose, { Schema , model } from "mongoose";


// user schema for database

const userSchema = new Schema ({

    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:Number
    ,
    confirmEmail:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        default:'offline',
        enum:['offline' , 'online' , 'blocked']
    },
    gender:{
        type:String,
        default:'male',
        enum:['male' , 'female']
    }

},{
    timestamps:true
})


const userModel = mongoose.models.User || model('User' , userSchema)

export default userModel