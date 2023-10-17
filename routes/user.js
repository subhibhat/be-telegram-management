import express from 'express'
import userController from '../app/controllers/user-controller.js'

const router = express.Router()

router.get('/', userController.getAllUser)
router.get('/:id', userController.getOneUser)
router.put('/:id', userController.updateUser)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)

export default router
