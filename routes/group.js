import express from 'express'
import groupController from '../app/controllers/group-controller.js'

const router = express.Router()

router.get('/', groupController.getAllGroup)
router.get('/:id', groupController.getOneGroup)
router.put('/:id', groupController.updateGroup)
router.post('/', groupController.createGroup)
router.delete('/:id', groupController.deleteGroup)

export default router
