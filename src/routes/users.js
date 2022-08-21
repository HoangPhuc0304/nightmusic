import express from 'express'
import UserController from '../app/controllers/UserController.js'
import { uploadAWS, uploadClient } from '../app/middleware/muter.js'
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from '../app/middleware/verifyToken.js'
const router = express.Router()

router.get('/find/:id', verifyTokenAndAuthorization, UserController.getUser)
router.get('/', verifyTokenAndAdmin, UserController.getAllUsers)
router.get('/bin', verifyTokenAndAdmin, UserController.getDeletedUsers)
router.get('/stat', verifyTokenAndAdmin, UserController.getStatUsers)
router.post('/upload-auto', UserController.uploadAutoImage)
router.put(
  '/edit/:id',
  verifyTokenAndAuthorization,
  uploadAWS.single('user-avatar'),
  UserController.editUser,
)
router.delete('/delete/:id', verifyTokenAndAdmin, UserController.deleteUser)
router.post('/delete', verifyTokenAndAdmin, UserController.deleteMultipleUsers)
router.delete('/destroy/:id', verifyTokenAndAdmin, UserController.destroyUser)
router.post(
  '/destroy',
  verifyTokenAndAdmin,
  UserController.destroyMultipleUsers,
)
router.patch('/restore/:id', verifyTokenAndAdmin, UserController.restoreUser)
router.post(
  '/restore',
  verifyTokenAndAdmin,
  UserController.restoreMultipleUsers,
)

export default router
