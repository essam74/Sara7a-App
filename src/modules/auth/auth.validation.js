import joi from "joi";



export const signupSchema = {
    body: joi.object({
        userName:joi.string().alphanum().required(),
        email:joi.string().email().required(),
        password:joi.string().pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)),
        cPassword:joi.string().valid(joi.ref('password')).required()
        }).required(), 
        // query: joi.object({
        //     flag: joi.boolean()
        // })
        
}


export const loginSchema = {
    body: joi.object({
    email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)).required()
    }).required(),
    // query: joi.object({
    //     flag: joi.boolean()
    // })
}