import {
  adminRequest,
  BASE_URL,
  IS_ADMIN,
  publicRequest,
} from '../config/requestMethod'
import { loginFailure, loginStart, loginSuccess } from './authorSlice'
import { getSongs } from './songSlice'
import {
  getDeletedUsers,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from './userSlice'
import { addPlaylist, getPlaylists } from './playlistSlice'
import { getSingers } from './singerSlice'
import axios from 'axios'

//[POST]
const login = async (dispatch, data) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/api/author/login', data)
    console.log(res.data)
    if (res && res.data.isAdmin) {
      dispatch(loginSuccess(res.data))
      //Strick
      setTimeout(() => {
        window.location.reload(false)
      }, 200)
    }
  } catch (err) {
    dispatch(loginFailure())
  }
}

//[POST]
const requestCreateSong = async (dispatch, data) => {
  try {
    const res = await adminRequest.post('/api/songs/create', data)
    const resConfirm = await axios
      .all([
        adminRequest.put('/api/playlists/edit', res.data),
        adminRequest.put('/api/library/edit', res.data),
        adminRequest.put('/api/singers/edit', res.data),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          console.log(res1)
          console.log(res2)
          console.log(res3)
        }),
      )
  } catch (err) {
    console.log(err)
  }
}

//[POST]
const requestCreatePlaylist = async (dispatch, data) => {
  try {
    const res = await adminRequest.post('/api/playlists/create', data)
    console.log(res.data)
    dispatch(addPlaylist(res.data))
  } catch (err) {
    console.log(err)
  }
}

//[POST]
const uploadFileResources = async (images, audios, videos) => {
  try {
    const res = await axios
      .all([
        adminRequest.post('/api/resources//upload/images', images),
        adminRequest.post('/api/resources/upload/audios', audios),
        adminRequest.post('/api/resources/upload/videos', videos),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          console.log(res1)
          console.log(res2)
          console.log(res3)
        }),
      )
  } catch (err) {
    console.log(err)
  }
}

//[GET]
const getAllUser = async (dispatch) => {
  dispatch(getUsersStart())
  try {
    const res = await adminRequest.get('/api/users')
    dispatch(getUsersSuccess(res.data))
  } catch (err) {
    dispatch(getUsersFailure())
  }
}

const getAllDeletedUsers = async (dispatch) => {
  try {
    const res = await adminRequest.get('/api/users/bin')
    dispatch(getDeletedUsers(res.data))
  } catch (err) {
    console.log(err)
  }
}

const getAllSongs = async (dispatch) => {
  try {
    const res = await adminRequest.get('/api/songs')
    dispatch(getSongs(res.data))
  } catch (err) {
    console.log(err)
  }
}

const getAllPlaylists = async (dispatch) => {
  try {
    const res = await adminRequest.get('/api/playlists')
    console.log(res.data)
    dispatch(getPlaylists(res.data))
  } catch (err) {
    console.log(err)
  }
}

const getAllSingers = async (dispatch) => {
  try {
    const res = await adminRequest.get('/api/singers')
    console.log(res.data)
    dispatch(getSingers(res.data))
  } catch (err) {
    console.log(err)
  }
}

//[PUT]
const requestEditSong = async (id, data) => {
  try {
    const res = await adminRequest.put(`/api/songs/edit/${id}`, data)
    console.log(res.data)
    const resConfirm = await axios
      .all([
        adminRequest.put('/api/playlists/edit?change=true', res.data),
        adminRequest.put('/api/library/edit?change=true', res.data),
        adminRequest.put('/api/singers/edit?change=true', res.data),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          console.log(res1)
          console.log(res2)
          console.log(res3)
        }),
      )
  } catch (err) {
    console.log(err)
  }
}

//[PUT]
const requestEditSongFromPlayList = async (
  playListId,
  songId,
  data,
  action,
) => {
  try {
    const res = await adminRequest.put(`/api/songs/edit/${songId}`, data)
    const resConfirm = await axios
      .all([
        adminRequest.put(
          `/api/playlists/edit/${playListId}?${action}=true`,
          res.data,
        ),
        adminRequest.put('/api/library/edit?change=true', res.data),
        adminRequest.put('/api/singers/edit?change=true', res.data),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          console.log(res1)
          console.log(res2)
          console.log(res3)
        }),
      )
  } catch (err) {
    console.log(err)
  }
}

//[PATCH]
const requestRestoreUser = async (id, dispatch) => {
  try {
    const res = await adminRequest.patch(`/api/users/restore/${id}`)
    if (res) {
      getAllUser(dispatch)
      getAllDeletedUsers(dispatch)
    }
  } catch (err) {
    console.log(err)
  }
}
const requestRestoreMultipleUsers = async (ids, dispatch) => {
  try {
    const res = await adminRequest.post('/api/users/restore', ids)
    if (res) {
      getAllUser(dispatch)
      getAllDeletedUsers(dispatch)
    }
  } catch (err) {
    console.log(err)
  }
}

//[DELETE]
const requestDeleteUser = async (id, dispatch) => {
  try {
    const res = await adminRequest.delete(`/api/users/delete/${id}`)
    if (res) {
      getAllUser(dispatch)
      getAllDeletedUsers(dispatch)
    }
  } catch (err) {
    console.log(err)
  }
}

const requestDeleteMultipleUsers = async (ids, dispatch) => {
  try {
    const res = await adminRequest.post('/api/users/delete', ids)
    if (res) {
      getAllUser(dispatch)
      getAllDeletedUsers(dispatch)
    }
  } catch (err) {
    console.log(err)
  }
}

const requestDestroyUser = async (id, dispatch) => {
  try {
    const res = await adminRequest.delete(`/api/users/destroy/${id}`)
    if (res) {
      getAllUser(dispatch)
      getAllDeletedUsers(dispatch)
    }
  } catch (err) {
    console.log(err)
  }
}

const requestDestroyMultipleUsers = async (ids, dispatch) => {
  try {
    const res = await adminRequest.post('/api/users/destroy', ids)
    if (res) {
      getAllUser(dispatch)
      getAllDeletedUsers(dispatch)
    }
  } catch (err) {
    console.log(err)
  }
}

const requestDestroySong = async (id, dispatch) => {
  try {
    const res = await adminRequest.delete(`/api/songs/destroy/${id}`)
    const resConfirm = await axios
      .all([
        adminRequest.put('/api/playlists/edit?deleteSong=true', res.data),
        adminRequest.put('/api/library/edit?deleteSong=true', res.data),
        adminRequest.put('/api/singers/edit?deleteSong=true', res.data),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          console.log(res1)
          console.log(res2)
          console.log(res3)
        }),
      )
  } catch (err) {
    console.log(err)
  }
}

export {
  login,
  getAllUser,
  getAllSongs,
  getAllPlaylists,
  getAllSingers,
  getAllDeletedUsers,
  requestDeleteUser,
  requestRestoreUser,
  requestDestroyUser,
  requestDeleteMultipleUsers,
  requestDestroyMultipleUsers,
  requestRestoreMultipleUsers,
  requestCreateSong,
  requestDestroySong,
  requestEditSong,
  requestEditSongFromPlayList,
  requestCreatePlaylist,
  uploadFileResources,
}
