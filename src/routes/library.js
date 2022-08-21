import express from 'express'
const router = express.Router()
import LibraryController from '../app/controllers/LibraryController.js'
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from '../app/middleware/verifyToken.js'

router.post(
  '/initialize/:id',
  verifyTokenAndAuthorization,
  LibraryController.initializeLibrary,
)
router.post(
  '/create/:id',
  verifyTokenAndAuthorization,
  LibraryController.createLibrary,
)
router.get('/find/:userId', verifyToken, LibraryController.getLibrary)
router.put('/edit/:id', verifyToken, LibraryController.editLibrary)
router.put('/edit', verifyTokenAndAdmin, LibraryController.editManyLibrary)
router.delete(
  '/destroy/:id',
  verifyTokenAndAdmin,
  LibraryController.destroyLibrary,
)

export default router
