import express from 'express'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getFileStream, s3, uploadAWS } from '../app/middleware/muter.js'
const router = express.Router()

router.post('/upload/images', uploadAWS.array('images'), (req, res) => {
  return res.status(200).json('Upload success')
})
router.post('/upload/audios', uploadAWS.array('audios'), (req, res) => {
  return res.status(200).json('Upload success')
})
router.post('/upload/videos', uploadAWS.array('videos'), (req, res) => {
  return res.status(200).json('Upload success')
})
router.use('/', async (req, res) => {
  const key = req.url.slice(1)

  //// Option 1:
  // const readStream = getFileStream(key)
  // readStream.pipe(res)

  // Option 2:
  const client = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    },
    region: process.env.AWS_BUCKET_REGION,
  })
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  })
  const url = await getSignedUrl(client, command, { expiresIn: 3600 })
  res.redirect(url)
})

export default router
