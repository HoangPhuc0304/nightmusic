import { userRequest } from '../../config/requestMethod'
import { getSongChart } from '../slices/playlistSlice'
import songSlice from '../slices/songSlice'

//[GET]
const requestGetSongChart = async (dispatch) => {
  try {
    const res = await userRequest.get('/api/chart/week')
    res.data && dispatch(getSongChart(res.data))
  } catch (err) {
    console.log(err)
  }
}

//[GET]
const requestGetAllSong = async (dispatch) => {
  try {
    const res = await userRequest.get('/api/songs')
    res.data && dispatch(songSlice.actions.getAllSong(res.data))
  } catch (err) {
    console.log(err)
  }
}

//[PUT]
const requestUpdateSong = async (item, { action, status }) => {
  try {
    const res = await userRequest.put(
      `/api/songs/update/${item._id}?action=${action}&status=${status}`,
    )
  } catch (err) {
    console.log(err)
  }
}

export { requestGetSongChart, requestGetAllSong, requestUpdateSong }
