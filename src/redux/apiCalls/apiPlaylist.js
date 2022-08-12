import { userRequest } from '../../config/requestMethod'
import {
  getAllInfoPlaylists,
  getCurrentPlaylist,
} from '../slices/playlistSlice'

//[GET]
const requestGetAllInfoPlaylists = async (dispatch) => {
  try {
    const res = await userRequest.get('/api/playlists/info')
    res.data && dispatch(getAllInfoPlaylists(res.data))
  } catch (err) {
    console.log(err)
  }
}

//[GET]
const requestGetPlaylist = async (dispatch, type) => {
  try {
    const res = await userRequest.get(`/api/playlists/find?type=${type}`)
    res.data && dispatch(getCurrentPlaylist(res.data))
  } catch (err) {
    console.log(err)
  }
}

export { requestGetAllInfoPlaylists, requestGetPlaylist }
