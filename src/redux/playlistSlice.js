import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playlists: [],
  requestPlaylist: false,
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    getPlaylists: (state, action) => {
      state.playlists = action.payload
    },
    getSongsFromPlaylist: (state, action) => {
      state.requestPlaylist = state.playlists.find(
        (item) => item.type === action.payload,
      )
    },
    addPlaylist: (state, action) => {
      state.playlists.push(action.payload)
    },
  },
})

export const { getPlaylists, getSongsFromPlaylist, addPlaylist } =
  playlistSlice.actions
export default playlistSlice
