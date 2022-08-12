import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPlaylist: {},
  playlistInfo: [],
  songChart: [],
  chartTime: [],
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    getAllInfoPlaylists: (state, action) => {
      const popularPlaylist = action.payload
      state.playlistInfo = popularPlaylist.sort((a, b) => b.plays - a.plays)
    },
    getCurrentPlaylist: (state, action) => {
      const { songs } = action.payload
      state.currentPlaylist = {
        ...action.payload,
        songs: songs.sort((a, b) => b.plays - a.plays),
      }
    },
    getSongChart: (state, action) => {
      if (action.payload.songs) {
        state.songChart = action.payload.songs
        state.chartTime = [
          action.payload.startedTime,
          action.payload.finishedTime,
        ]
      }
    },
  },
})

export const { getAllInfoPlaylists, getCurrentPlaylist, getSongChart } =
  playlistSlice.actions
export default playlistSlice
