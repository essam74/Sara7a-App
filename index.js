import express from 'express'
import * as dotenv from "dotenv"
dotenv.config()
import initApp from './src/app.router.js'
const app = express()
const port = process.env.PORT

initApp(app , express)
app.listen(port , () => console.log(`success to connect ${port}`))