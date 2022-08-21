import Chart from '../modules/Chart.js'
import History from '../modules/History.js'
import Song from '../modules/Song.js'
import Playlist from '../modules/Playlist.js'
import Singer from '../modules/Singer.js'

const updatePlaylist = () => {
  Playlist.find({})
    .then((playlists) => {
      playlists.forEach(async (playlist) => {
        let totalPlays = 0
        let totalLikes = 0
        let totalDuration = 0

        await Song.find({ type: { $in: playlist.type } })
          .then((songs) => {
            songs.forEach((item) => {
              totalPlays += item.plays
              totalLikes += item.likes
              totalDuration += item.length
            })
            Playlist.updateOne(
              { type: playlist.type },
              {
                $set: {
                  songs: songs,
                  plays: totalPlays,
                  likes: totalLikes,
                  duration: totalDuration,
                },
              },
              {
                new: true,
              },
            )
              .then()
              .catch((err) => {
                console.log(err)
              })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      console.log('Update playlists success')
    })
    .catch((err) => {
      console.log(err)
    })
}

const updateSinger = () => {
  Singer.find({})
    .then((singers) => {
      singers.forEach(async (singer) => {
        let totalPlays = 0
        let totalLikes = 0
        let totalDuration = 0

        await Song.find({ name: { $in: singer.name } })
          .then((songs) => {
            songs.forEach((item) => {
              totalPlays += item.plays
              totalLikes += item.likes
              totalDuration += item.length
            })
            Singer.updateOne(
              { name: singer.name },
              {
                $set: {
                  songs: songs,
                  plays: totalPlays,
                  likes: totalLikes,
                  duration: totalDuration,
                },
              },
              {
                new: true,
              },
            )
              .then()
              .catch((err) => {
                console.log(err)
              })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      console.log('Update singers success')
    })
    .catch((err) => {
      console.log(err)
    })
}

const updateChart = async () => {
  let countDoc
  await History.count()
    .then((number) => {
      countDoc = number
    })
    .catch((err) => {
      console.log(err)
      return
    })

  const newHistory = new History({
    songs: [],
  })
  await Song.find({})
    .then((songs) => {
      newHistory.songs = songs.map((song) => ({
        songId: song._id,
        plays: song.plays,
        likes: song.likes,
      }))
    })
    .catch((err) => {
      console.log(err)
      return
    })

  if (countDoc >= 10) {
    await History.find({})
      .sort({ createdAt: 'asc' })
      .limit(1)
      .then((history) => {
        History.deleteOne({ _id: history[0]._id })
          .then(() => {})
          .catch((err) => {
            console.log(err)
          })
      })
  }

  newHistory
    .save()
    .then(() => {
      console.log('Update History success')

      //Update Chart
      let songChart = []
      History.find({})
        .sort({ createdAt: 'desc' })
        .limit(2)
        .then(async (histories) => {
          const newChart = new Chart({
            startedTime: null,
            finishedTime: histories[0].createdAt,
            songs: [],
          })
          if (histories.length === 2) {
            songChart = histories[0].songs.map((song) => {
              const itemSong = histories[1].songs.find(
                (item) =>
                  JSON.stringify(item.songId) === JSON.stringify(song.songId),
              )
              return itemSong
                ? {
                    songId: song.songId,
                    plays: song.plays - itemSong.plays,
                    likes: song.likes - itemSong.likes,
                  }
                : song
            })
            newChart.startedTime = histories[1].createdAt
          } else {
            if (histories.length === 1) {
              songChart = histories[0].songs
            }
          }
          await Chart.count()
            .then((number) => {
              if (number >= 2) {
                Chart.find({})
                  .sort({ createdAt: 1 })
                  .limit(1)
                  .then((chart) => {
                    Chart.deleteOne({ _id: chart[0]._id })
                      .then(() => {})
                      .catch((err) => {
                        console.log(err)
                      })
                  })
                  .catch((err) => {
                    console.log(err)
                  })
              }
            })
            .catch((err) => {
              console.log(err)
              return
            })
          // await Chart.deleteMany({})
          //     .then(() => { })
          //     .catch(err => { console.log(err) })

          await Song.find({})
            .then((songs) => {
              newChart.songs = songs.map((song) => {
                const songItem = songChart.find(
                  (item) =>
                    JSON.stringify(item.songId) === JSON.stringify(song._id),
                )
                return songItem
                  ? {
                      _id: song._id,
                      song: song.song,
                      name: song.name,
                      img: song.img,
                      type: song.type,
                      plays: songItem.plays,
                      likes: songItem.likes,
                    }
                  : {
                      _id: song._id,
                      song: song.song,
                      name: song.name,
                      img: song.img,
                      type: song.type,
                      plays: song.plays,
                      likes: song.likes,
                    }
              })
              newChart
                .save()
                .then(() => {
                  Chart.updateMany(
                    {},
                    {
                      $push: {
                        songs: {
                          $each: [],
                          $sort: { plays: -1, likes: -1 },
                        },
                      },
                    },
                  )
                    .then(() => {
                      console.log('Update chart success')
                    })
                    .catch((err) => {
                      console.log(err)
                      return
                    })
                })
                .catch((err) => {
                  console.log(err)
                  return
                })
            })
            .catch((err) => {
              console.log(err)
              return
            })
        })
        .catch((err) => {
          console.log(err)
        })
    })
    .catch((err) => {
      console.log(err)
    })
}

export { updatePlaylist, updateChart, updateSinger }
