import mongoose from 'mongoose'
import * as dotenv from "dotenv"
dotenv.config()



const connectDB = async ()=>{
    return await mongoose.connect(process.env.LOCAL_DB)
    .then(result => console.log(`DB connected successfully ............`))
    .catch(err => console.log(`Fail to connect DB .................${err}`))
}

export default connectDB