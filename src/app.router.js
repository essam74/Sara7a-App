import authRouter from './modules/auth/auth.router.js'
import userRouter from './modules/user/user.router.js'
import messageRouter from './modules/message/message.router.js'
import connectDB from '../DB/connectDB.js'
import { globalErrorHandling } from './utils/errorHandling.js'



const initApp = (app , express)=>{

    app.use(express.json({}))

    app.get('/' , (req , res)=> res.send('hello'))
    app.use('/auth' , authRouter )
    app.use('/user' , userRouter )
    app.use('/message' , messageRouter )

    app.all('*' , (req,res,next)=>{
        return res.json({message:"In-valid routing"})
    })
    app.use(globalErrorHandling)
    connectDB()
}

export default initApp