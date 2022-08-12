import axios from 'axios'
import { userRequest } from '../../config/requestMethod'
import {
  getAllVideos,
  getSnippetVideo,
  getStatisticVideo,
} from '../slices/videoSlice'

//[GET]
const requestGetAllVideos = async (dispatch) => {
  try {
    const res = await userRequest.get('/api/playlists/find?type=v-pop')
    res.data && dispatch(getAllVideos(res.data.songs))
  } catch (err) {
    console.log(err)
  }
}

//[GET]
const requestGetAPIYoutube = async (dispatch, videoId) => {
  try {
    const res = await axios
      .all([
        axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyACW0zNNbEVsTaClaTKJy61Z_uUTX5bqt0&part=statistics`,
        ),
        axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyACW0zNNbEVsTaClaTKJy61Z_uUTX5bqt0&part=snippet`,
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          dispatch(getStatisticVideo(res1.data.items[0].statistics))
          dispatch(getSnippetVideo(res2.data.items[0].snippet))
        }),
      )
  } catch (err) {
    console.log(err)
  }
}

export { requestGetAPIYoutube, requestGetAllVideos }
