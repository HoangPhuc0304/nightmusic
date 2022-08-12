import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mv: [],
  statistic: {},
  snippet: {},
}
const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    getAllVideos: (state, action) => {
      state.mv = action.payload
    },
    requestVideoDisplay: (state, action) => {
      const indexVideo = state.mv.findIndex(
        (item) => item._id === action.payload,
      )
      if (indexVideo !== -1) {
        const selectVideo = state.mv[indexVideo]
        state.mv.splice(indexVideo, 1)
        state.mv.splice(0, 0, selectVideo)
      }
    },
    getStatisticVideo: (state, action) => {
      state.statistic = action.payload
    },
    getSnippetVideo: (state, action) => {
      state.snippet = action.payload
    },
  },
})

export const {
  getAllVideos,
  requestVideoDisplay,
  getStatisticVideo,
  getSnippetVideo,
} = videoSlice.actions
export default videoSlice
