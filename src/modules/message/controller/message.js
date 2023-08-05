import userModel from '../../../../DB/model/User.model.js'
import messageModel from '../../../../DB/model/message.model.js'
import { asyncHandler } from '../../../utils/errorHandling.js'


// get all messages
export const getMessages = asyncHandler(async (req , res , next)=>{
    
    const message = await messageModel.find({receiverId:req.user._id})
    return res.status(200).json({message:"Done" , message})
})

// delete message

export const deleteMessage = asyncHandler(async (req , res , next)=>{
    const {id} = req.params;
    const message = await messageModel.deleteOne({receiverId:req.user._id , _id:id})
    return message.deletedCount? res.status(200).json({message:"Done" , message}):
    next(new Error("In-valid owner-id or message-id"))
})
 

// send message

export const sendMessage = asyncHandler( async (req,res,next)=>{

    const {receiverId} = req.params
    const {message} = req.body

    const user = await userModel.findById(receiverId)
    if(!user){
        return next(new Error('Not registered account ' , {cause: 404}))
    }
    const createMessage = await messageModel.create({message , receiverId})
    return res.status(201).json({message:"Done"})

})

