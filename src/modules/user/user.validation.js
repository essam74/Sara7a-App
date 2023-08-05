import joi from "joi"


export const updatePassword = {
    body: joi.object({
    oldPassword:joi.string().pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)).required(),
    newPassword:joi.string().invalid(joi.ref('oldPassword')).pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)).required(),
    cPassword:joi.string().valid(joi.ref('newPassword')).required()
    }).required()

}