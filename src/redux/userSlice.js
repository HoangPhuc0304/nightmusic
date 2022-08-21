import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userList: [],
  deletedUserList: [],
  isFetching: false,
  error: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsersStart: (state, action) => {
      state.isFetching = true
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false
      state.userList = action.payload
    },
    getUsersFailure: (state, action) => {
      state.error = true
      state.isFetching = false
    },
    getDeletedUsers: (state, action) => {
      state.deletedUserList = action.payload
    },
  },
})

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  getDeletedUsers,
} = userSlice.actions

export default userSlice
