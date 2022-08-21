import express from 'express'
const router = express.Router()
import AuthorController from '../app/controllers/AuthorController.js'

router.post('/register', AuthorController.register)
router.post('/login', AuthorController.login)

export default router
