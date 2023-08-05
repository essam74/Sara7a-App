import userModel from "../../../../DB/model/User.model.js"
import { generateToken } from "../../../utils/GenerateAndVerifyToken.js"
import { compare, hash } from "../../../utils/HashAndCompare.js"
import {asyncHandler} from "../../../utils/errorHandling.js"
import { signupSchema } from "../auth.validation.js"







export const getAuthModule = (req , res , next)=>{
    
    return res.json({message:"Auth module"})
}

export const signup = asyncHandler(async (req ,res ,next) =>{


    const {userName , email , password} = req.body
    const checkUser = await userModel.findOne({email})
    if (checkUser) {
        return next(new Error("Email Exist"))
    }

    const hashPassword = hash({plaintext:password})

    const user = await userModel.create({userName , email , password:hashPassword})
    return res.json({message:"Done" , user:user._id})

  


})




export const login = asyncHandler(async (req, res, next)=>{
 
  
    const {email , password} = req.body;
    const user = await userModel.findOne({email})
    if(!user){
        return next(new Error("Email not exist"))
    }

    const match = compare({plaintext :password, hashValue:user.password})
    if(!match){
        return next(new Error("In-valid Password"))
       }

       const token = generateToken({payload:{id:user._id , isLoggedIn: true , role: user.role}, expiresIn:60*60*24*30})
        user.status = "online"
        await user.save()


       return res.json({message: "Done" , token})
    } 
) 

  
