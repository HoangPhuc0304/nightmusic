import multer from 'multer'
import multerS3 from 'multer-s3'
import AWS from 'aws-sdk'
import {
  fileStorageClientEngine,
  fileStorageServerEngine,
} from '../resources/distribute.js'
import dotenv from 'dotenv'
dotenv.config()

AWS.config.update({
  region: process.env.AWS_BUCKET_REGION,
  apiVersion: 'latest',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
})
const s3 = new AWS.S3()
const getFileStream = (fileKey) => {
  const downloadParams = {
    Key: fileKey,
    Bucket: process.env.AWS_BUCKET_NAME,
  }
  // console.log(s3.getObject(downloadParams))
  return s3.getObject(downloadParams).createReadStream()
}

const uploadSever = multer({
  storage: fileStorageServerEngine,
  fileFilter: (req, file, cb) => {
    switch (file.fieldname) {
      case 'img': {
        if (
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/jpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
        break
      }
      case 'images': {
        if (
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/jpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
        break
      }
      case 'avatar': {
        if (
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/jpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
        break
      }
      case 'audio': {
        if (
          file.mimetype == 'audio/mp3' ||
          file.mimetype == 'audio/wav' ||
          file.mimetype == 'audio/flac' ||
          file.mimetype == 'audio/mpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .mp3, .wav and .flac format allowed!'))
        }
        break
      }
      case 'audios': {
        if (
          file.mimetype == 'audio/mp3' ||
          file.mimetype == 'audio/wav' ||
          file.mimetype == 'audio/flac' ||
          file.mimetype == 'audio/mpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .mp3, .wav and .flac format allowed!'))
        }
        break
      }
      case 'video': {
        if (file.mimetype == 'video/mp4') {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .mp4'))
        }
        break
      }
      case 'videos': {
        if (file.mimetype == 'video/mp4') {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .mp4'))
        }
        break
      }
      default:
    }
  },
})

const uploadClient = multer({
  storage: fileStorageClientEngine,
  fileFilter: (req, file, cb) => {
    switch (file.fieldname) {
      case 'user-avatar': {
        if (
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/jpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
        break
      }
      default:
    }
  },
})

const uploadAWS = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'nightmusic-database',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      switch (file.fieldname) {
        case 'img':
          cb(null, `images/server/${file.originalname}`)
          break
        case 'avatar':
          cb(null, `images/server/${file.originalname}`)
          break
        case 'audio':
          cb(null, `audios/${file.originalname}`)
          break
        case 'video':
          cb(null, `videos/${file.originalname}`)
          break
        case 'images':
          cb(null, `images/layout/${file.originalname}`)
          break
        case 'audios':
          cb(null, `audios/${file.originalname}`)
          break
        case 'videos':
          cb(null, `videos/${file.originalname}`)
          break
        case 'user-avatar':
          cb(
            null,
            `images/data/${new Date().getTime() + '-' + file.originalname}`,
          )
          break
        default:
          cb(null, `images/layout/${file.originalname}`)
      }
    },
  }),
  fileFilter: (req, file, cb) => {
    console.log(file)
    switch (file.fieldname) {
      case 'img': {
        if (
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/jpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
        break
      }
      case 'images': {
        if (
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/jpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
        break
      }
      case 'avatar': {
        if (
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/jpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
        break
      }
      case 'audio': {
        if (
          file.mimetype == 'audio/mp3' ||
          file.mimetype == 'audio/wav' ||
          file.mimetype == 'audio/flac' ||
          file.mimetype == 'audio/mpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .mp3, .wav and .flac format allowed!'))
        }
        break
      }
      case 'audios': {
        if (
          file.mimetype == 'audio/mp3' ||
          file.mimetype == 'audio/wav' ||
          file.mimetype == 'audio/flac' ||
          file.mimetype == 'audio/mpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .mp3, .wav and .flac format allowed!'))
        }
        break
      }
      case 'video': {
        if (file.mimetype == 'video/mp4') {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .mp4'))
        }
        break
      }
      case 'videos': {
        if (file.mimetype == 'video/mp4') {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .mp4'))
        }
        break
      }
      case 'user-avatar': {
        if (
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/jpeg'
        ) {
          cb(null, true)
        } else {
          cb(null, false)
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
        break
      }
      default:
    }
  },
})

export { uploadSever, uploadClient, uploadAWS, getFileStream, s3 }
