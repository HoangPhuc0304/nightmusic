import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  singers: [],
}

const singerSlice = createSlice({
  name: 'singer',
  initialState,
  reducers: {
    getAllSingers: (state, action) => {
      state.singers = action.payload
    },
  },
})

export const { getAllSingers } = singerSlice.actions
export default singerSlice
