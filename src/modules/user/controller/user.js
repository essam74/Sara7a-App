import userModel from "../../../../DB/model/User.model.js"
import  {asyncHandler}  from "../../../utils/errorHandling.js"
import  {hash , compare}  from "../../../utils/HashAndCompare.js"



 
export const profile = async(req , res , next)=>{
    const user = await userModel.findById(req.user._id)
    return res.json({message:"profile" , user})
} 

export const updatePassword =  asyncHandler(async (req, res, next)=>{
        
    const {oldPassword, newPassword} = req.body
    const user = await userModel.findById(req.user._id)
    const match = compare({plaintext: oldPassword , hashValue: user.password})
    if (!match){
        return next(new Error('Invalid old password' , {cause: 400}))
    }
    const hashPassword = hash({plaintext: newPassword})
    user.password = hashPassword;
    await user.save()
    return res.status(200).json({message: "Done"})


})

