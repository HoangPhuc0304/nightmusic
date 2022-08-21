import express from 'express'
import WeatherController from '../app/controllers/WeatherController.js'
const router = express.Router()
import { verifyToken } from '../app/middleware/verifyToken.js'

router.post('/create', verifyToken, WeatherController.createUserWeather)

export default router
