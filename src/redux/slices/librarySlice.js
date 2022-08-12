import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  songs: [],
  favoriteSong: [],
  favoriteVideo: [],
  dislikedVideo: [],
  theme: null,
}

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    getAllLibrary: (state, action) => {
      state.id = action.payload._id
      state.songs = action.payload.songs
      state.favoriteSong = action.payload.favoriteSong
      state.favoriteVideo = action.payload.favoriteVideo
      state.dislikedVideo = action.payload.dislikedVideo
      state.theme = action.payload.theme
    },
    getSongs: (state, action) => {
      state.songs = action.payload
    },
    getFavoriteSong: (state, action) => {
      state.favoriteSong = action.payload
    },
    getFavoriteVideo: (state, action) => {
      state.favoriteVideo = action.payload
    },
    getDislikedVideo: (state, action) => {
      state.dislikedVideo = action.payload
    },
    getTheme: (state, action) => {
      state.theme = action.payload
    },
    removeSongAtLibrary: (state, action) => {
      const indexSong = state.songs.findIndex(
        (item) => item._id === action.payload._id,
      )
      state.songs.splice(indexSong, 1)
    },
    addSongAtLibrary: (state, action) => {
      state.songs.push(action.payload)
    },
    addTempSongIntoLibrary: (state, action) => {
      const indexSong = state.songs.findIndex(
        (item) => item._id === action.payload._id,
      )
      indexSong === -1 && state.songs.splice(0, 0, action.payload)
    },
    clickHeartIcon: (state, action) => {
      const indexSong = state.favoriteSong.findIndex(
        (item) => item === action.payload._id,
      )
      if (indexSong === -1) {
        state.favoriteSong.push(action.payload._id)
      } else {
        state.favoriteSong.splice(indexSong, 1)
      }
    },
    clickLikeVideo: (state, action) => {
      const indexVideo = state.favoriteVideo.findIndex(
        (item) => item === action.payload._id,
      )
      if (indexVideo === -1) {
        state.favoriteVideo.push(action.payload._id)
        const indexItem = state.dislikedVideo.findIndex(
          (item) => item === action.payload._id,
        )
        if (indexItem !== -1) {
          state.dislikedVideo.splice(indexItem, 1)
        }
      } else {
        state.favoriteVideo.splice(indexVideo, 1)
      }
    },
    clickDislikeVideo: (state, action) => {
      const indexVideo = state.dislikedVideo.findIndex(
        (item) => item === action.payload._id,
      )
      if (indexVideo === -1) {
        state.dislikedVideo.push(action.payload._id)
        const indexItem = state.favoriteVideo.findIndex(
          (item) => item === action.payload._id,
        )
        if (indexItem !== -1) {
          state.favoriteVideo.splice(indexItem, 1)
        }
      } else {
        state.dislikedVideo.splice(indexVideo, 1)
      }
    },
  },
})

export default librarySlice
export const {
  getAllLibrary,
  getSongs,
  getFavoriteSong,
  getFavoriteVideo,
  getDislikedVideo,
  clickHeartIcon,
  removeSongAtLibrary,
  addSongAtLibrary,
  clickLikeVideo,
  clickDislikeVideo,
  addTempSongIntoLibrary,
  getTheme,
} = librarySlice.actions
