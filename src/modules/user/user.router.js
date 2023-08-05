import {Router} from 'express'
import auth from '../../middleware/auth.js'
import * as userController from './controller/user.js'
import validation from '../../middleware/validation.js'
import * as validators from './user.validation.js'


const router = Router()

router.get("/profile" ,auth, userController.profile)
router.patch("/password" , validation(validators.updatePassword) ,auth, userController.updatePassword)

export default router