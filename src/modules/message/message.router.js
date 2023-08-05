import {Router} from 'express'
import auth from '../../middleware/auth.js'
import validation from '../../middleware/validation.js'
import * as messageController from './controller/message.js'
import { deleteMessage, sendMessage } from './message.validation.js'


const router = Router()

router.get("/" , auth, messageController.getMessages)
router.post("/:receiverId" ,auth , validation(sendMessage), messageController.sendMessage)
router.delete("/:id" , validation(deleteMessage) , auth, messageController.deleteMessage)

export default router 