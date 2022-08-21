import Song from '../modules/Song.js'
import Chart from '../modules/Chart.js'

const ChartController = {
  //[GET] /api/chart/week  (user)
  getWeekChart(req, res) {
    Chart.find({})
      .sort({ createdAt: -1 })
      .limit(2)
      .then((charts) => {
        if (charts.length === 2) {
          const listSong = charts[0].songs.map((song, index) => {
            const beforeIndex = charts[1].songs.findIndex(
              (item) => JSON.stringify(item._id) === JSON.stringify(song._id),
            )
            return beforeIndex > -1
              ? {
                  ...song,
                  status: beforeIndex - index,
                }
              : {
                  ...song,
                  status: null,
                }
          })
          return res.status(200).json({
            ...charts[0].toObject(),
            songs: listSong.slice(0, 50),
          })
        } else {
          if (charts.length === 1) {
            return res.status(200).json({
              ...charts[0].toObject(),
              songs: charts[0].songs.slice(0, 50),
            })
          } else {
            return res.status(200).json('No data')
          }
        }
      })
      .catch((err) => res.status(500).json(err))
  },
}

export default ChartController
