import express from 'express'
const router = express.Router()
import SongController from '../app/controllers/SongController.js'
import { uploadAWS } from '../app/middleware/muter.js'
import {
  verifyToken,
  verifyTokenAndAdmin,
} from '../app/middleware/verifyToken.js'

router.post(
  '/create',
  verifyTokenAndAdmin,
  uploadAWS.fields([
    { name: 'img', maxCount: 1 },
    { name: 'avatar', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]),
  SongController.createSong,
)
router.post('/createMany', verifyTokenAndAdmin, SongController.createManySong)
router.get('/find/:id', verifyToken, SongController.getSong)
router.get('/', verifyToken, SongController.getAllSong)
router.put('/update/:id', verifyToken, SongController.updateStatusSong)
router.put(
  '/edit/:id',
  verifyTokenAndAdmin,
  uploadAWS.fields([
    { name: 'img', maxCount: 1 },
    { name: 'avatar', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]),
  SongController.editSong,
)
router.delete('/destroy/:id', verifyTokenAndAdmin, SongController.destroySong)
router.delete('/destroy', verifyTokenAndAdmin, SongController.destroyAllSongs)

export default router
