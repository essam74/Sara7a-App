import joi from "joi"



export const sendMessage =  joi.object({
        message: joi.string().required(),
        receiverId: joi.string().max(24).min(24).required()
    }).required()




export const deleteMessage = {
params: joi.object({
        id: joi.string().max(24).min(24).required()
    }).required()
}