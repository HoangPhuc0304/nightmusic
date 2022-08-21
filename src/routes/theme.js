import express from 'express'
const router = express.Router()
import ThemeController from '../app/controllers/ThemeController.js'
import {
  verifyToken,
  verifyTokenAndAdmin,
} from '../app/middleware/verifyToken.js'

router.post('/create', verifyTokenAndAdmin, ThemeController.createTheme)
router.post('/createMany', verifyTokenAndAdmin, ThemeController.createManyTheme)
router.get('/', verifyToken, ThemeController.getThemes)

export default router
