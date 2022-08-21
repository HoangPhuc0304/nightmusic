import { v4 as uuidv4 } from 'uuid';
import Library from '../modules/Library.js'
import Playlist from '../modules/Playlist.js'
import Song from '../modules/Song.js'

const LibraryController = {
  //[POST] /api/library/initialize/:id  (author)
  initializeLibrary: (req, res) => {
    const newLibrary = new Library({
      userId: req.params.id,
      list: [
        {
          songListId: uuidv4(),
          name: 'My playlist #1',
          songs: [],
        }
      ],
    })
    newLibrary
      .save()
      .then((library) => res.status(200).json(library))
      .catch((err) => res.status(500).json(err))
  },

  //[POST] /api/library/create/:id    (author)
  createLibrary: (req, res) => {
    const type = req.body.type.length > 0 ? req.body.type : ['v-pop']
    const singer = req.body.singer.length > 0 ? req.body.singer : []
    const songListId = req.body.songListId

    Song.find({
      $or: [{ type: { $in: type } }, { name: { $in: singer } }],
    })
      .limit(100)
      .then((filteredSongs) => {
        Library.findOneAndUpdate(
          {
            userId: req.params.id,
            "list.songListId": songListId
          },
          {
            $set: { "list.$.songs": filteredSongs }
          }
        )
          .then(library => res.status(200).json(library))
          .catch((err) => res.status(500).json(err))
      })
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/library/find/:userId    (author)
  getLibrary: (req, res) => {
    Library.findOne({ userId: req.params.userId })
      .then((songs) => res.status(200).json(songs))
      .catch((err) => res.status(500).json(err))
  },

  //[PUT] /api/library/edit/:id   (author)
  editLibrary: (req, res) => {
    const song = req.body
    const songListId = req.query.listId
    switch (req.query.action) {
      case 'add': {
        Library.findOne({
          _id: req.params.id,
          'list.songs._id': song._id,
          // 'songs._id': song._id,
        })
          .then((library) => {
            if (library) {
              return res.status(200).json('no change')
            } else {
              Library.updateOne(
                {
                  _id: req.params.id,
                  "list.songListId": songListId,
                },
                {
                  $push: {
                    "list.$.songs": song,
                  },
                },
              )
                .then(() => res.status(200).json('Add song success'))
                .catch((err) => res.status(500).json(err))
            }
          })
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'delete': {
        Library.updateOne(
          {
            _id: req.params.id,
            "list.songListId": songListId,
          },
          {
            $pull: { "list.$.songs": { _id: song._id } },
          },
        )
          .then(() => res.status(200).json('Delete success'))
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'like-song': {
        Library.findOne({
          _id: req.params.id,
          favoriteSong: song._id,
        })
          .then((item) => {
            if (item) {
              Library.findOneAndUpdate(
                {
                  _id: req.params.id,
                },
                {
                  $pull: { favoriteSong: song._id },
                },
              )
                .then(() => res.status(200).json('Unlike success'))
                .catch((err) => res.status(500).json(err))
            } else {
              Library.findOneAndUpdate(
                {
                  _id: req.params.id,
                },
                {
                  $push: { favoriteSong: song._id },
                },
              )
                .then(() => res.status(200).json('Like success'))
                .catch((err) => res.status(500).json(err))
            }
          })
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'like-video': {
        Library.findOne({
          _id: req.params.id,
          favoriteVideo: song._id,
        })
          .then((item) => {
            if (item) {
              Library.findOneAndUpdate(
                {
                  _id: req.params.id,
                },
                {
                  $pull: { favoriteVideo: song._id },
                },
              )
                .then(() => res.status(200).json('Unlike success'))
                .catch((err) => res.status(500).json(err))
            } else {
              Library.findOneAndUpdate(
                {
                  _id: req.params.id,
                },
                {
                  $push: { favoriteVideo: song._id },
                },
              )
                .then(() => {
                  Library.findOne({
                    _id: req.params.id,
                    dislikedVideo: song._id,
                  })
                    .then((item) => {
                      if (item) {
                        Library.findOneAndUpdate(
                          {
                            _id: req.params.id,
                          },
                          {
                            $pull: { dislikedVideo: song._id },
                          },
                        )
                          .then(() => res.status(200).json('Like success'))
                          .catch((err) => res.status(500).json(err))
                      } else {
                        return res.status(200).json('Like success')
                      }
                    })
                    .catch((err) => res.status(500).json(err))
                })
                .catch((err) => res.status(500).json(err))
            }
          })
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'dislike-video': {
        Library.findOne({
          _id: req.params.id,
          dislikedVideo: song._id,
        })
          .then((item) => {
            if (item) {
              Library.findOneAndUpdate(
                {
                  _id: req.params.id,
                },
                {
                  $pull: { dislikedVideo: song._id },
                },
              )
                .then(() => res.status(200).json('unDislike success'))
                .catch((err) => res.status(500).json(err))
            } else {
              Library.findOneAndUpdate(
                {
                  _id: req.params.id,
                },
                {
                  $push: { dislikedVideo: song._id },
                },
              )
                .then(() => {
                  Library.findOne({
                    _id: req.params.id,
                    favoriteVideo: song._id,
                  }).then((item) => {
                    if (item) {
                      Library.findOneAndUpdate(
                        {
                          _id: req.params.id,
                        },
                        {
                          $pull: { favoriteVideo: song._id },
                        },
                      )
                        .then(() => res.status(200).json('Dislike success'))
                        .catch((err) => res.status(500).json(err))
                    } else {
                      return res.status(200).json('Dislike success')
                    }
                  })
                })
                .catch((err) => res.status(500).json(err))
            }
          })
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'change-theme': {
        Library.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
              theme: req.body,
            },
          },
          {
            new: true,
          },
        )
          .then((library) => res.status(200).json(library))
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'add-list': {
        Library.findOne({ _id: req.params.id })
          .then((library) => {
            // console.log(req.params.id)
            const size = library.list.length
            const newSongList = {
              songListId: uuidv4(),
              name: `My playlist #${size + 1}`,
              songs: [],
            }
            Library.updateOne(
              { _id: req.params.id },
              {
                $push: {
                  list: newSongList,
                }
              })
              .then(() => res.status(200).json(newSongList))
              .catch((err) => res.status(500).json(err))
          })
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'remove-list': {
        Library.updateOne(
          { _id: req.params.id },
          {
            $pull: {
              list: {
                songListId: songListId,
              },
            }
          })
          .then(() => res.status(200).json('Delete song list success'))
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'rename': {
        Library.updateOne(
          {
            _id: req.params.id,
            "list.songListId": songListId,
          },
          {
            "list.$.name": req.body.name
          })
          .then(() => res.status(200).json('Rename list success'))
          .catch((err) => res.status(500).json(err))
        break
      }
      case 'remove-all-song': {
        Library.findOneAndUpdate({
          _id: req.params.id,
          "list.songListId": songListId,
        }, {
          "list.$.songs": [],
        })
          .then((library) => res.status(200).json(library))
          .catch((err) => res.status(500).json(err))
        break
      }
      default:
        return res.status(500).json('Error')
    }
  },

  //(Not complete !!!)
  //[PUT] /api/library/edit   (admin) 
  editManyLibrary: (req, res) => {
    const deleteSong = req.query.deleteSong
    const song = req.body
    const change = req.query.change
    console.log(song._id)
    if (deleteSong) {
      Library.updateMany(
        {
          "list.songs": { _id: song._id },
        },
        {
          $pull: {
            "list.$.songs": { _id: song._id }
          },
        },
      )
        .then(() => res.status(200).json('Update library success'))
        .catch((err) => res.status(500).json(err))
    } else {
      Library.updateMany(
        {
          'list.songs._id': song._id,
        },
        {
          $set: {
            'list.songs.$': song,
          },
        },
        {
          new: true,
        },
      )
        .then((songs) => res.status(200).json(songs))
        .catch((err) => res.status(500).json(err))
    }
  },

  //[DELETE] /api/library/destroy/:id    (admin)
  destroyLibrary: (req, res) => {
    Library.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json('Delete success'))
      .catch((err) => res.status(500).json(err))
  },
}

export default LibraryController
