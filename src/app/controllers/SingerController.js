import Singer from '../modules/Singer.js'
import Song from '../modules/Song.js'

const SingerController = {
  //[POST] /api/singers/create    (admin)
  createSinger: (req, res) => {
    const newSinger = new Singer({
      name: req.body.name,
      avatar: req.body.avatar,
    })
    newSinger
      .save()
      .then(() => res.status(200).json('Create success'))
      .catch((err) => res.status(500).json(err))
  },

  //[POST] /api/singers/createMany    (admin)
  createManySingers: (req, res) => {
    Singer.insertMany(req.body)
      .then(() => res.status(200).json('Add success'))
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/singers/find/:id   (user)
  getSinger: (req, res) => {
    Singer.findById(req.params.id)
      .then((singer) => res.status(200).json(singer))
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/singers    (user)
  getAllSingers: (req, res) => {
    const stat = req.query.stat
    if (stat) {
      Singer.find({})
        .sort({ plays: 'desc', likes: 'desc' })
        .then((singers) => res.status(200).json(singers))
        .catch((err) => res.status(500).json(err))
    } else {
      Singer.find({})
        .then((singers) => res.status(200).json(singers))
        .catch((err) => res.status(500).json(err))
    }
  },

  //[PUT] /api/singers/edit/:id   (admin)
  editSinger: (req, res) => {
    Singer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      },
    )
      .then((singer) => res.status(200).json(singer))
      .catch((err) => res.status(500).json(err))
  },

  //[PUT] /api/singers/edit   (admin)
  updateSingers: (req, res) => {
    const multiple = req.query.multiple
    const change = req.query.change
    const deleteSong = req.query.deleteSong

    if (change) {
      const song = req.body
      Singer.updateMany(
        {
          name: { $in: song.name },
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
          Singer.updateMany(
            {
              name: { $in: song.name },
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
        Singer.updateMany(
          { name: { $in: song.name } },
          {
            $pull: { songs: { _id: song._id } },
            $inc: {
              duration: -song.length,
              plays: -song.plays,
              likes: -song.likes,
            },
          },
        )
          .then(() => res.status(200).json('Update singer success'))
          .catch((err) => res.status(500).json(err))
      } else {
        if (!multiple) {
          const song = req.body
          Singer.updateMany(
            { name: { $in: song.name } },
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
            Singer.updateMany(
              { name: { $in: song.name } },
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

  //[PUT] /api/singers/update
  updateSongManySingers: (req, res) => {
    Singer.find({})
      .then((singers) => {
        singers.forEach((item) => {
          Song.find({ name: { $in: item.name } })
            .then((songs) => {
              Singer.updateOne(
                { _id: item._id },
                {
                  $set: { songs: songs },
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
        return res.status(200).json('update songs in singer successfully')
      })
      .catch((err) => res.status(500).json(err))
  },

  //[DELETE] /api/singers/destroy/:id (admin)
  destroySinger: (req, res) => {
    Singer.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json('Delete success'))
      .catch((err) => res.status(500).json(err))
  },

  //[DELETE] /api/singers/destroy (admin)
  destroyAllSingers: (req, res) => {
    Singer.deleteMany({})
      .then(() => res.status(200).json('Delete success'))
      .catch((err) => res.status(500).json(err))
  },
}

export default SingerController
