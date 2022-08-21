import express from 'express'
import ChartController from '../app/controllers/ChartController.js'
const router = express.Router()
import { verifyToken } from '../app/middleware/verifyToken.js'

router.get('/week', verifyToken, ChartController.getWeekChart)

export default router
