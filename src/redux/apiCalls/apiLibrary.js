import { userRequest, USER_ID } from '../../config/requestMethod'
import {
  addSongAtLibrary,
  clickDislikeVideo,
  clickHeartIcon,
  clickLikeVideo,
  getAllLibrary,
  getFavoriteSong,
  getSongs,
  getTheme,
  removeSongAtLibrary,
} from '../slices/librarySlice'
import songSlice from '../slices/songSlice'
import { rootReducer } from '../store'

//[GET]
const requestGetLibrary = async (dispatch) => {
  try {
    const res = await userRequest.get(`/api/library/find/${USER_ID}`)
    res.data && dispatch(getAllLibrary(res.data))
  } catch (err) {
    console.log(err)
    if (err.response.data.message === 'Token is invalid') {
      localStorage.removeItem('persist:root')
      rootReducer(undefined)
    }
  }
}

//[POST]
const requestCreateLibrary = async (dispatch, data) => {
  try {
    const res = await userRequest.post(`/api/library/create/${USER_ID}`, data)
    res.data && dispatch(getAllLibrary(res.data))
  } catch (err) {
    console.log(err)
  }
}

//[PUT]
const requestEditLibrary = async (dispatch, libraryId, data, action) => {
  try {
    const res = await userRequest.put(
      `/api/library/edit/${libraryId}?action=${action}`,
      data,
    )
    switch (action) {
      case 'add': {
        if (res.data !== 'no change') {
          dispatch(addSongAtLibrary(data))
          dispatch(songSlice.actions.addSongAtBroadcast(data))
        }
        break
      }
      case 'delete': {
        if (res.data) {
          dispatch(removeSongAtLibrary(data))
          dispatch(songSlice.actions.removeSongAtBroadcast(data))
        }
        break
      }
      case 'like-song': {
        if (res.data) {
          dispatch(clickHeartIcon(data))
        }

        break
      }
      case 'like-video': {
        if (res.data) {
          dispatch(clickLikeVideo(data))
        }
        break
      }
      case 'dislike-video': {
        if (res.data) {
          dispatch(clickDislikeVideo(data))
        }
        break
      }
      case 'change-theme': {
        if (res.data) {
          dispatch(getTheme(data))
        }
        break
      }
      default:
    }
  } catch (err) {
    console.log(err)
  }
}

export { requestCreateLibrary, requestGetLibrary, requestEditLibrary }
