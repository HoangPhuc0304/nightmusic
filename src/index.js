import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes/index.js'
import mongoose from 'mongoose'
import schedules from './app/schedules/schedules.js'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connect to cloud database successfully'))
  .catch((err) => console.log(err))

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(
  '/server',
  express.static(path.join(__dirname, '/app/resources/images/server')),
)
app.use(
  '/layout',
  express.static(path.join(__dirname, '/app/resources/images/layout')),
)
app.use(
  '/audios',
  express.static(path.join(__dirname, '/app/resources/audios')),
)
app.use(
  '/videos',
  express.static(path.join(__dirname, '/app/resources/videos')),
)
app.use(
  '/data',
  express.static(path.join(__dirname, '/app/resources/images/data')),
)

schedules()

route(app)

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})
