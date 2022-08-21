import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fileStorageServerEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file)
    switch (file.fieldname) {
      case 'img':
        cb(null, path.join(__dirname, '/images/server'))
        break
      case 'avatar':
        cb(null, path.join(__dirname, '/images/server'))
        break
      case 'audio':
        cb(null, path.join(__dirname, '/audios'))
        break
      case 'video':
        cb(null, path.join(__dirname, '/videos'))
        break
      case 'images':
        cb(null, path.join(__dirname, '/images/layout'))
        break
      case 'audios':
        cb(null, path.join(__dirname, '/audios'))
        break
      case 'videos':
        cb(null, path.join(__dirname, '/videos'))
        break
      default:
        cb(null, path.join(__dirname, '/images/layout'))
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const fileStorageClientEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    switch (file.fieldname) {
      case 'user-avatar':
        cb(null, path.join(__dirname, '/images/data'))
        break
      default:
        cb(null, path.join(__dirname, '/images/data'))
    }
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname)
  },
})

export { fileStorageServerEngine, fileStorageClientEngine }
