import { userRequest, USER_ID } from '../../config/requestMethod'
import {
  addNewSongList,
  addSongAtLibrary,
  cleanAllSong,
  clickDislikeVideo,
  clickHeartIcon,
  clickLikeVideo,
  getAllLibrary,
  getFavoriteSong,
  getSongList,
  getSongs,
  getTheme,
  removeSongAtLibrary,
  removeSongList,
  renameSongList,
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
    res.data && dispatch(getSongList(res.data.list))
  } catch (err) {
    console.log(err)
  }
}

//[PUT]
const requestEditLibrary = async (
  dispatch,
  libraryId,
  data,
  action,
  songListId,
) => {
  try {
    const res = await userRequest.put(
      `/api/library/edit/${libraryId}?action=${action}&listId=${songListId}`,
      data,
    )
    switch (action) {
      case 'add': {
        if (res.data !== 'no change') {
          dispatch(
            addSongAtLibrary({
              song: data,
              songListId: songListId,
            }),
          )
          dispatch(songSlice.actions.addSongAtBroadcast(data))
        }
        break
      }
      case 'delete': {
        if (res.data) {
          dispatch(
            removeSongAtLibrary({
              song: data,
              songListId: songListId,
            }),
          )
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
      case 'add-list': {
        if (res.data) {
          dispatch(addNewSongList(res.data))
        }
        break
      }
      case 'remove-list': {
        if (res.data) {
          dispatch(removeSongList(songListId))
        }
        break
      }
      case 'rename': {
        if (res.data) {
          dispatch(
            renameSongList({
              name: data.name,
              songListId: songListId,
            }),
          )
        }
        break
      }
      case 'remove-all-song': {
        if (res.data) {
          dispatch(cleanAllSong(songListId))
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
