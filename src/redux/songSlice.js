import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songList: [],
}

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    getSongs: (state, action) => {
      state.songList = action.payload
    },
  },
})

export const { getSongs } = songSlice.actions
export default songSlice
