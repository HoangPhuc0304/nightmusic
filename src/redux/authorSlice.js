import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
}

const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    loginStart: (state, action) => {
      state.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload
    },
    loginFailure: (state, action) => {
      state.error = true
      state.isFetching = false
    },
    requestLogout: (state, action) => {
      state.currentUser = null
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, requestLogout } =
  authorSlice.actions
export default authorSlice
