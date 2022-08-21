import express from 'express'
const router = express.Router()
import PlaylistController from '../app/controllers/PLaylistController.js'
import { uploadAWS, uploadSever } from '../app/middleware/muter.js'
import {
  verifyToken,
  verifyTokenAndAdmin,
} from '../app/middleware/verifyToken.js'

router.post(
  '/create',
  verifyTokenAndAdmin,
  uploadAWS.single('img'),
  PlaylistController.createPlaylist,
)
router.post(
  '/createMany',
  verifyTokenAndAdmin,
  PlaylistController.createManyPlaylist,
)
router.get('/find', verifyToken, PlaylistController.getPlaylist)
router.get('/', verifyToken, PlaylistController.getAllPlaylists)
router.get('/info', verifyToken, PlaylistController.getAllInfoPlaylists)
router.put('/edit/:id', verifyTokenAndAdmin, PlaylistController.editPlaylist)
router.put('/edit', verifyTokenAndAdmin, PlaylistController.editManyPlaylists)
router.put(
  '/update',
  verifyTokenAndAdmin,
  PlaylistController.updateSongManyPlaylist,
)
router.delete(
  '/delete/:id',
  verifyTokenAndAdmin,
  PlaylistController.deletePlaylist,
)
router.delete(
  '/destroy/:id',
  verifyTokenAndAdmin,
  PlaylistController.destroyPlaylist,
)
router.delete(
  '/destroy',
  verifyTokenAndAdmin,
  PlaylistController.destroyAllPlaylists,
)
router.patch(
  '/restore/:id',
  verifyTokenAndAdmin,
  PlaylistController.restorePlaylist,
)

export default router
