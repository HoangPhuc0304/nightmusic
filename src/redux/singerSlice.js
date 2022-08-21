import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  singerList: [],
}

const singerSlice = createSlice({
  name: 'singer',
  initialState,
  reducers: {
    getSingers: (state, action) => {
      state.singerList = action.payload
    },
  },
})

export const { getSingers } = singerSlice.actions
export default singerSlice
