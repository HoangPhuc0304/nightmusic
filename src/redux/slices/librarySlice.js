import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  currentList: {
    songListId: '',
    name: '',
    songs: [],
  },
  list: [],
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
      state.list = action.payload.list
      if (action.payload.list[0]) {
        state.currentList = action.payload.list[0]
      }
      state.favoriteSong = action.payload.favoriteSong
      state.favoriteVideo = action.payload.favoriteVideo
      state.dislikedVideo = action.payload.dislikedVideo
      state.theme = action.payload.theme
    },
    getSongList: (state, action) => {
      state.list = action.payload
      // const indexList = state.list.findIndex(item => item.songListId === state.currentList.songListId)
      // if (indexList >= 0) {
      //   state.currentList = state.list[indexList]
      // }
    },
    getSongs: (state, action) => {
      state.list = action.payload
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
    changeCurrentSongList: (state, action) => {
      const indexList = state.list.findIndex(
        (item) => item.songListId === action.payload,
      )
      state.currentList = state.list[indexList]
    },
    removeSongAtLibrary: (state, action) => {
      const { songListId, song } = action.payload
      const indexList = state.list.findIndex(
        (item) => item.songListId === songListId,
      )
      const indexSong = state.list[indexList].songs.findIndex(
        (item) => item._id === song._id,
      )
      state.list[indexList].songs.splice(indexSong, 1)
      if (state.list[indexList].songListId === state.currentList.songListId) {
        state.currentList = state.list[indexList]
      }
    },
    addSongAtLibrary: (state, action) => {
      const { songListId, song } = action.payload
      const indexList = state.list.findIndex(
        (item) => item.songListId === songListId,
      )
      state.list[indexList].songs.push(song)
      if (state.list[indexList].songListId === state.currentList.songListId) {
        state.currentList = state.list[indexList]
      }
    },
    addTempSongIntoLibrary: (state, action) => {
      const { songListId, song } = action.payload
      const indexList = state.list.findIndex(
        (item) => item.songListId === songListId,
      )
      const indexSong = state.list[indexList].songs.findIndex(
        (item) => item._id === song._id,
      )
      indexSong === -1 && state.list[indexList].songs.splice(0, 0, song)
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
    addNewSongList: (state, action) => {
      state.list.push(action.payload)
    },
    removeSongList: (state, action) => {
      const indexList = state.list.findIndex(
        (item) => item.songListId === action.payload,
      )
      state.list.splice(indexList, 1)
    },
    renameSongList: (state, action) => {
      const { songListId, name } = action.payload
      const indexList = state.list.findIndex(
        (item) => item.songListId === songListId,
      )
      state.list[indexList].name = name
    },
    cleanAllSong: (state, action) => {
      const indexList = state.list.findIndex(
        (item) => item.songListId === action.payload,
      )
      state.list[indexList].songs = []
      if (state.list[indexList].songListId === state.currentList.songListId) {
        state.currentList = state.list[indexList]
      }
    },
  },
})

const getAllListInfo = (state) => {
  if (state.library.list) {
    return state.library.list.map((list) => {
      const { songs, ...others } = list
      return others
    })
  }
  return []
}

export default librarySlice
export const {
  getAllLibrary,
  getSongList,
  getSongs,
  getFavoriteSong,
  getFavoriteVideo,
  getDislikedVideo,
  clickHeartIcon,
  changeCurrentSongList,
  removeSongAtLibrary,
  addSongAtLibrary,
  clickLikeVideo,
  clickDislikeVideo,
  addTempSongIntoLibrary,
  getTheme,
  addNewSongList,
  removeSongList,
  renameSongList,
  cleanAllSong,
} = librarySlice.actions
export { getAllListInfo }
