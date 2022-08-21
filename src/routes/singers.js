import express from 'express'
const router = express.Router()
import SingerController from '../app/controllers/SingerController.js'
import {
  verifyToken,
  verifyTokenAndAdmin,
} from '../app/middleware/verifyToken.js'

router.post('/create', verifyTokenAndAdmin, SingerController.createSinger)
router.post(
  '/createMany',
  verifyTokenAndAdmin,
  SingerController.createManySingers,
)
router.get('/find/:id', verifyToken, SingerController.getSinger)
router.get('/', verifyToken, SingerController.getAllSingers)
router.put('/edit/:id', verifyTokenAndAdmin, SingerController.editSinger)
router.put('/edit', verifyTokenAndAdmin, SingerController.updateSingers)
router.put(
  '/update',
  verifyTokenAndAdmin,
  SingerController.updateSongManySingers,
)
router.delete(
  '/destroy/:id',
  verifyTokenAndAdmin,
  SingerController.destroySinger,
)
router.delete(
  '/destroy',
  verifyTokenAndAdmin,
  SingerController.destroyAllSingers,
)

export default router
