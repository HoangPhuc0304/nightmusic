import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songListId: null,
  songBroadcast: [],
  songCurrent: -1,
  memorySaveBroadcast: [],
  songPlaylist: [],
  songCurrentPlaylist: -1,
  memorySavePlaylist: [],
  allSong: [],
  isReturnTopSong: false,
  isRandom: false,
  isEmpty: true,
}

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    getBroadcast: (state, action) => {
      const { songListId, songBroadcast } = action.payload
      state.songListId = songListId
      state.songBroadcast = songBroadcast
    },
    getAllSong: (state, action) => {
      state.allSong = action.payload
    },
    searchSong: (state, action) => {
      state.search = action.payload
    },
    changeStatusEmpty: (state, action) => {
      state.isEmpty = action.payload
    },
    changeCurrentSong: (state, action) => {
      if (state.songCurrentPlaylist === -1) {
        let indexSong = state.songCurrent + action.payload
        if (indexSong < 0 || indexSong >= state.songBroadcast.length) {
          indexSong < 0
            ? (indexSong = state.songBroadcast.length - 1)
            : (indexSong = 0)
        }
        state.songCurrent = indexSong
      } else {
        let indexSongPlaylist = state.songCurrentPlaylist + action.payload
        if (
          indexSongPlaylist < 0 ||
          indexSongPlaylist >= state.songPlaylist.length
        ) {
          indexSongPlaylist < 0
            ? (indexSongPlaylist = state.songPlaylist.length - 1)
            : (indexSongPlaylist = 0)
        }
        state.songCurrentPlaylist = indexSongPlaylist
      }
    },
    randomSong: (state, action) => {
      state.isRandom = action.payload
      if (action.payload) {
        if (state.songCurrentPlaylist === -1) {
          let songArray = [...state.songBroadcast]
          let newSongArray = [state.songBroadcast[state.songCurrent]]
          songArray = songArray.filter((item) => item._id !== newSongArray._id)
          while (songArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * songArray.length)
            newSongArray.push(songArray[randomIndex])
            songArray.splice(randomIndex, 1)
          }
          state.memorySaveBroadcast = [...state.songBroadcast]
          state.songBroadcast = [...newSongArray]
          state.songCurrent = 0
        } else {
          let songArrayPlaylist = [...state.songPlaylist]
          let newSongArrayPlaylist = [
            state.songPlaylist[state.songCurrentPlaylist],
          ]
          songArrayPlaylist = songArrayPlaylist.filter(
            (item) => item._id !== newSongArrayPlaylist._id,
          )
          while (songArrayPlaylist.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * songArrayPlaylist.length,
            )
            newSongArrayPlaylist.push(songArrayPlaylist[randomIndex])
            songArrayPlaylist.splice(randomIndex, 1)
          }
          state.memorySavePlaylist = [...state.songPlaylist]
          state.songPlaylist = [...newSongArrayPlaylist]
          state.songCurrentPlaylist = 0
        }
      } else {
        if (state.songCurrentPlaylist === -1) {
          if (state.memorySaveBroadcast) {
            state.songCurrent = state.memorySaveBroadcast.findIndex(
              (item) => item._id === state.songBroadcast[state.songCurrent]._id,
            )
            state.songBroadcast = [...state.memorySaveBroadcast]
            state.memorySaveBroadcast = []
          }
        } else {
          if (state.memorySavePlaylist) {
            state.songCurrentPlaylist = state.memorySavePlaylist.findIndex(
              (item) =>
                item._id === state.songPlaylist[state.songCurrentPlaylist]._id,
            )
            state.songPlaylist = [...state.memorySavePlaylist]
            state.memorySavePlaylist = []
          }
        }
      }
    },
    finishSong: (state, action) => {
      if (state.songCurrentPlaylist === -1) {
        if (
          action.payload &&
          state.songCurrent === state.songBroadcast.length - 1
        ) {
          state.isReturnTopSong = true
        } else {
          if (state.isReturnTopSong) {
            state.isReturnTopSong = false
          }
        }
      } else {
        if (
          action.payload &&
          state.songCurrentPlaylist === state.songPlaylist.length - 1
        ) {
          state.isReturnTopSong = true
        } else {
          if (state.isReturnTopSong) {
            state.isReturnTopSong = false
          }
        }
      }
    },
    requestSongBroadcast: (state, action) => {
      state.songCurrent = state.songBroadcast.findIndex(
        (item) => item._id === action.payload._id,
      )
    },
    addNextBroadcast: (state, action) => {
      if (state.songCurrentPlaylist === -1) {
        state.songBroadcast.splice(state.songCurrent + 1, 0, {
          ...action.payload,
        })
      } else {
        state.songPlaylist.splice(state.songCurrentPlaylist + 1, 0, {
          ...action.payload,
        })
      }
    },
    removeSongAtBroadcast: (state, action) => {
      const indexSong = state.songBroadcast.findIndex(
        (item) => item._id === action.payload._id,
      )
      state.songBroadcast.splice(indexSong, 1)
      indexSong < state.songCurrent && state.songCurrent--
    },
    getSongListFromPlaylist: (state, action) => {
      if (state.songCurrentPlaylist !== -1) {
        const songCurrent = state.songPlaylist[state.songCurrentPlaylist]
        state.songPlaylist = action.payload
        state.songCurrentPlaylist = state.songPlaylist.findIndex(
          (item) => item._id === songCurrent._id,
        )
        state.isRandom = false
      } else {
        state.songPlaylist = action.payload
      }
    },
    requestSongPlaylist: (state, action) => {
      state.songCurrentPlaylist = state.songPlaylist.findIndex(
        (item) => item._id === action.payload._id,
      )
    },
    preventSongPlaylist: (state, action) => {
      state.songCurrentPlaylist = action.payload
    },
    addSongAtBroadcast: (state, action) => {
      state.songBroadcast.push(action.payload)
    },
    playSongFromSearch: (state, action) => {
      const indexSong = state.songBroadcast.findIndex(
        (item) => item._id === action.payload._id,
      )
      if (indexSong === -1) {
        state.songBroadcast.splice(0, 0, action.payload)
        state.songCurrent = 0
      } else {
        state.songCurrent = indexSong
      }
    },
  },
})

const getBroadcast = (state) => state.song.songBroadcast
const getCurrentSong = (state) => {
  if (state.song.songCurrent === -1) {
    return null
  }
  return state.song.songBroadcast[state.song.songCurrent]
}
const getSongListBroadcast = (state) => state.song.songBroadcast
const getInformationStopBroadcast = (state) => state.song.isReturnTopSong
const getSongCurrentPlaylist = (state) => {
  if (state.song.songCurrentPlaylist === -1) {
    if (state.song.songCurrent === -1) {
      return null
    }
    return state.song.songBroadcast[state.song.songCurrent]
  } else {
    return state.song.songPlaylist[state.song.songCurrentPlaylist]
  }
}
const getStatusRandom = (state) => state.song.isRandom

export default songSlice
export {
  getCurrentSong,
  getSongListBroadcast,
  getInformationStopBroadcast,
  getSongCurrentPlaylist,
  getStatusRandom,
  getBroadcast,
}
