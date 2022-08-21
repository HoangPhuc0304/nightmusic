import Playlist from '../modules/Playlist.js'
import Song from '../modules/Song.js'

const PlaylistController = {
  //[POST] /api/playlists/create  (admin)
  createPlaylist: (req, res) => {
    console.log(req.file)
    const newPlaylist = new Playlist({
      type: req.body.type.toLowerCase(),
      img: process.env.URL + '/api/resources/' + req.file.key,
      color: req.body.color,
    })
    newPlaylist
      .save()
      .then((playlist) => res.status(200).json(playlist))
      .catch((err) => res.status(500).json(err))
  },

  //[POST] /api/playlists/createMany  (admin)
  createManyPlaylist: (req, res) => {
    Playlist.insertMany(req.body)
      .then(() => res.status(200).json('Add success'))
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/playlists/find  (author)
  getPlaylist: (req, res) => {
    const type = req.query.type
    Playlist.findOne({ type: type })
      .then((playlist) => res.status(200).json(playlist))
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/playlists  (author)
  getAllPlaylists: (req, res) => {
    Playlist.find({})
      .then((playlists) => res.status(200).json(playlists))
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/playlists/info  (author)
  getAllInfoPlaylists: (req, res) => {
    Playlist.find({})
      .then((playlists) => {
        const playlistInfo = playlists.map((item) => {
          const { songs, ...others } = item._doc
          return others
        })
        return res.status(200).json(playlistInfo)
      })
      .catch((err) => res.status(500).json(err))
  },

  //[PUT] /api/playlists/edit/:id (admin)
  editPlaylist: (req, res) => {
    const addSong = req.query.addSong
    const deleteSong = req.query.deleteSong
    const song = req.body
    if (addSong) {
      Playlist.updateOne(
        { _id: req.params.id },
        {
          $push: { songs: song },
          $inc: {
            duration: song.length,
            plays: song.plays,
            likes: song.likes,
          },
        },
      )
        .then(() => res.status(200).json('Update Success'))
        .catch((err) => res.status(500).json(err))
    } else {
      if (deleteSong) {
        Playlist.updateOne(
          { _id: req.params.id },
          {
            $pull: { songs: { _id: song._id } },
            $inc: {
              duration: -song.length,
              plays: -song.plays,
              likes: -song.likes,
            },
          },
        )
          .then(() => res.status(200).json('Update Success'))
          .catch((err) => res.status(500).json(err))
      } else {
        Playlist.findOneAndUpdate(
          { _id: req.params.id },
          {
            $set: req.body,
          },
          {
            new: true,
          },
        )
          .then(() => res.status(200).json('Update Success'))
          .catch((err) => res.status(500).json(err))
      }
    }
  },

  //[PUT] /api/playlists/edit (admin)
  editManyPlaylists: (req, res) => {
    const multiple = req.query.multiple
    const change = req.query.change
    const deleteSong = req.query.deleteSong

    if (change) {
      const song = req.body
      console.log(song)
      Playlist.updateMany(
        {
          type: { $in: song.type },
        },
        {
          $pull: { songs: { _id: song._id } },
          $inc: {
            duration: -song.length,
            plays: -song.plays,
            likes: -song.likes,
          },
        },
      )
        .then(() => {
          Playlist.updateMany(
            {
              type: { $in: song.type },
            },
            {
              $push: { songs: song },
              $inc: {
                duration: song.length,
                plays: song.plays,
                likes: song.likes,
              },
            },
          )
            .then((song) => res.status(200).json(song))
            .catch((err) => res.status(500).json(err))
        })
        .catch((err) => res.status(500).json(err))
    } else {
      if (deleteSong) {
        const song = req.body
        Playlist.updateMany(
          { type: { $in: song.type } },
          {
            $pull: { songs: { _id: song._id } },
            $inc: {
              duration: -song.length,
              plays: -song.plays,
              likes: -song.likes,
            },
          },
        )
          .then(() => res.status(200).json('Update playlist success'))
          .catch((err) => res.status(500).json(err))
      } else {
        if (!multiple) {
          const song = req.body
          Playlist.updateMany(
            { type: { $in: song.type } },
            {
              $push: { songs: song },
              $inc: {
                duration: song.length,
                plays: song.plays,
                likes: song.likes,
              },
            },
          )
            .then((song) => res.status(200).json(song))
            .catch((err) => res.status(500).json(err))
        } else {
          const songs = req.body
          songs.forEach((song) => {
            Playlist.updateMany(
              { type: { $in: song.type } },
              {
                $push: { songs: song },
                $inc: {
                  duration: song.length,
                  plays: song.plays,
                  likes: song.likes,
                },
              },
            )
              .then()
              .catch()
          })
          return res.json('Complete')
        }
      }
    }
  },
  //[PUT] /api/playlists/update (admin)
  updateSongManyPlaylist: (req, res) => {
    Playlist.find({})
      .then((playlists) => {
        playlists.forEach((item) => {
          Song.find({ type: { $in: item.type } })
            .then((songs) => {
              let durationPlaylist = 0
              songs.forEach((song) => {
                durationPlaylist += song.length
              })
              Playlist.updateOne(
                { _id: item._id },
                {
                  $set: {
                    songs: songs,
                    duration: durationPlaylist,
                  },
                },
                {
                  new: true,
                },
              )
                .then(() => {})
                .catch((err) => res.status(500).json(err))
            })
            .catch((err) => res.status(500).json(err))
        })
        return res.status(200).json('update songs in playlist successfully')
      })
      .catch((err) => res.status(500).json(err))
  },

  //[DELETE] /api/playlists/delete/:id   (admin)
  deletePlaylist: (req, res) => {
    Playlist.delete({ _id: req.params.id })
      .then(() => res.status(200).json('Delete success'))
      .catch((err) => res.status(500).json(err))
  },

  //[DELETE] /api/playlists/destroy/:id   (admin)
  destroyPlaylist: (req, res) => {
    Playlist.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json('Destroy success'))
      .catch((err) => res.status(500).json(err))
  },

  //[DELETE] /api/playlists/destroy   (admin)
  destroyAllPlaylists: (req, res) => {
    Playlist.deleteMany({})
      .then(() => res.status(200).json('Destroy success'))
      .catch((err) => res.status(500).json(err))
  },

  //[PATCH] /api/playlists/restore/:id   (admin)
  restorePlaylist: (req, res) => {
    Playlist.restore({ _id: req.params.id })
      .then(() => res.status(200).json('Restore success'))
      .catch((err) => res.status(500).json(err))
  },
}

export default PlaylistController
