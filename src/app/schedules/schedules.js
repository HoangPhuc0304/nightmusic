import { updateChart, updatePlaylist, updateSinger } from '../config/update.js'
import cron from 'node-cron'

const schedules = () => {
  cron.schedule(
    '0 0 20 * * *',
    () => {
      updatePlaylist()
    },
    {
      scheduled: true,
      timezone: 'Asia/Ho_Chi_Minh',
    },
  )

  cron.schedule(
    '0 0 0 * * *',
    () => {
      updateSinger()
    },
    {
      scheduled: true,
      timezone: 'Asia/Ho_Chi_Minh',
    },
  )

  cron.schedule(
    '0 0 0 * * 0',
    () => {
      updateChart()
    },
    {
      scheduled: true,
      timezone: 'Asia/Ho_Chi_Minh',
    },
  )
}

export default schedules
