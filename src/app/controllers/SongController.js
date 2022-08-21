import Song from '../modules/Song.js'
import Singer from '../modules/Singer.js'
import { getAudioDurationInSeconds } from 'get-audio-duration'

const SongController = {
  //[POST] /api/songs/create  (admin)
  async createSong(req, res) {
    console.log(req.files)

    const newSong = new Song({
      song: req.body.song,
      name: req.body.name,
      img: req.files.img
        ? process.env.URL + '/api/resources/' + req.files.img[0].key
        : '',
      avatar: req.files.avatar
        ? process.env.URL + '/api/resources/' + req.files.avatar[0].key
        : '',
      type: req.body.type.split(',').map((type) => type.toLowerCase()),
      audio: process.env.URL + '/api/resources/' + req.files.audio[0].key,
      link: req.body.link,
    })

    if (!newSong.img) {
      const videoId = newSong.link.replace(
        'https://www.youtube.com/watch?v=',
        '',
      )
      newSong.img = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    }

    if (!newSong.avatar) {
      await Singer.findOne({ name: { $in: req.body.name } })
        .then((singer) => {
          if (singer) {
            newSong.avatar = singer.avatar
          }
        })
        .catch((err) => res.status(500).json(err))
    }

    await getAudioDurationInSeconds(newSong.audio)
      .then((duration) => {
        newSong.length = Math.floor(duration)
      })
      .catch((err) => res.status(500).json(err))

    newSong
      .save()
      .then((song) => res.status(200).json(song))
      .catch((err) => res.status(500).json(err))
  },

  //[POST] /api/songs/createMany  (admin)
  createManySong(req, res) {
    const data = req.body.map((song) => ({
      ...song,
      type: song.type.map((type) => type.toLowerCase()),
    }))
    Song.insertMany(data)
      .then(() => res.status(200).json('update songs success'))
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/songs/find/:id  (author)
  getSong(req, res) {
    Song.findById(req.params.id)
      .then((song) => res.status(200).json(song))
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/songs  (author)
  getAllSong(req, res) {
    let query = req.query.type
    const chart = req.query.chart

    if (query && query.includes('and')) {
      query = query.replace('and', '&')
    }

    if (query) {
      Song.find({ type: { $in: query } })
        .then((songs) => res.status(200).json(songs))
        .catch((err) => res.status(500).json(err))
    } else {
      if (chart) {
        Song.find({})
          .sort({ plays: 'desc', likes: 'desc' })
          .limit(50)
          .then((songs) => res.status(200).json(songs))
          .catch((err) => res.status(500).json(err))
      } else {
        Song.find({})
          .then((songs) => res.status(200).json(songs))
          .catch((err) => res.status(500).json(err))
      }
    }
  },

  //[PUT] /api/songs/update/:id (author)
  updateStatusSong(req, res) {
    const action = req.query.action
    const status = req.query.status

    switch (action) {
      case 'play': {
        Song.findByIdAndUpdate(req.params.id, {
          $inc: { plays: 1 },
        })
          .then((song) => res.status(200).json(song))
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'like': {
        if (status === 'true') {
          Song.findByIdAndUpdate(req.params.id, {
            $inc: { likes: 1 },
          })
            .then((song) => res.status(200).json(song))
            .catch((err) => res.status(500).json(err))
        } else {
          Song.findByIdAndUpdate(req.params.id, {
            $inc: { likes: -1 },
          })
            .then((song) => res.status(200).json(song))
            .catch((err) => res.status(500).json(err))
        }
        break
      }
      default:
        return res.status(500).json('request is invalid')
    }
  },

  //[PUT] /api/songs/edit/:id (admin)
  async editSong(req, res) {
    const { length, plays, likes, ...others } = req.body
    const { img, avatar, audio } = req.files

    if (img) {
      others.img = process.env.URL + '/api/resources/' + img[0].key
    }

    if (avatar) {
      others.avatar = process.env.URL + '/api/resources/' + avatar[0].key
    }

    if (audio) {
      others.audio = process.env.URL + '/api/resources/' + audio[0].key
      const duration = await getAudioDurationInSeconds(others.audio)
      others.length = Math.floor(duration)
    }
    if (others.type) {
      others.type = others.type.split(',').map((type) => type.toLowerCase())
    }

    await Song.findByIdAndUpdate(
      req.params.id,
      {
        $set: others,
      },
      {
        new: true,
      },
    )
      .then((song) => res.status(200).json(song))
      .catch((err) => res.status(500).json(err))
  },

  //[DELETE] /api/songs/destroy/:id   (admin)
  destroySong(req, res) {
    Song.findByIdAndDelete(req.params.id)
      .then((song) => res.status(200).json(song))
      .catch((err) => res.status(500).json(err))
  },

  //[DELETE] /api/songs/destroy   (admin)
  destroyAllSongs(req, res) {
    Song.deleteMany({})
      .then(() => res.status(200).json('Destroy all songs'))
      .catch((err) => res.status(500).json(err))
  },
}

export default SongController
