import {Router} from 'express'
import validation from '../../middleware/validation.js'
import { loginSchema, signupSchema } from './auth.validation.js'
import * as authController from './controller/auth.js'


// router pages of auth
const router = Router()

router.get("/" , authController.getAuthModule)
router.post("/signup" ,validation(signupSchema), authController.signup)
router.post("/login" ,validation(loginSchema), authController.login)

export default router