import authorRouter from './author.js'
import contactRouter from './contact.js'
import libraryRouter from './library.js'
import paymentRouter from './payment.js'
import singerRouter from './singers.js'
import songRouter from './songs.js'
import userRouter from './users.js'
import playlistRouter from './playlist.js'
import resourceRouter from './resource.js'
import weatherRouter from './weather.js'
import chartRouter from './chart.js'
import themeRouter from './theme.js'

function route(app) {
  app.use('/api/author', authorRouter)
  app.use('/api/contact', contactRouter)
  app.use('/api/library', libraryRouter)
  app.use('/api/payment', paymentRouter)
  app.use('/api/playlists', playlistRouter)
  app.use('/api/singers', singerRouter)
  app.use('/api/songs', songRouter)
  app.use('/api/users', userRouter)
  app.use('/api/weather', weatherRouter)
  app.use('/api/chart', chartRouter)
  app.use('/api/theme', themeRouter)
  app.use('/api/resources', resourceRouter)
}

export default route
