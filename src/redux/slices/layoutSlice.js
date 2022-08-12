import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hideAllSongSetting: false,
  isMovingToAccessPage: false,
  isLoading: false,
  songNav: false,
  weather: {},
  colorThemes: [],
  idolThemes: [],
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    requestHideSongSetting: (state, action) => {
      state.hideAllSongSetting = action.payload
    },
    movingToAccessPage: (state, action) => {
      state.isMovingToAccessPage = action.payload
    },
    displayLoading: (state, action) => {
      state.isLoading = action.payload
    },
    getWeather: (state, action) => {
      state.weather = action.payload
    },
    hideSongNav: (state, action) => {
      state.songNav = action.payload
    },
    getThemes: (state, action) => {
      state.colorThemes = action.payload.filter((item) => !item.image)
      state.idolThemes = action.payload.filter((item) => item.image)
    },
  },
})
const getRequestHideSetting = (state) => state.layout.hideAllSongSetting
const getRequestMovingToAccessPage = (state) =>
  state.layout.isMovingToAccessPage

export default layoutSlice
export const { displayLoading, getWeather, hideSongNav, getThemes } =
  layoutSlice.actions
export { getRequestHideSetting, getRequestMovingToAccessPage }
