import userModel from "../../DB/model/User.model.js";
import { verifyToken } from "../utils/GenerateAndVerifyToken.js";


const auth = async (req , res , next)=>{
   try {
    const {authorization} = req.headers
    
    if(!authorization?.startsWith(process.env.BEARER_KEY)){
        return res.json({message:"In-Valid Bearer key"})
    }

    const token =authorization.split(process.env.BEARER_KEY)[1]
    const decoded = verifyToken({token})
    if(!decoded?.id){
        return res.json({message:"not registered account"})
    }
    const authUser = await userModel.findById(decoded.id).select("userName email role status")
    if(!authUser){
        return res.json({message:"not registered account"})
    }

    req.user = authUser;
    return next()

   } catch (error) {
    return res.json({message:"Catch error" , error , stack:error.stack})

   }
}
export default auth