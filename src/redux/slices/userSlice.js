import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  acceptAccess: false,
  errorSignIn: false,
  errorSignUp: false,
  sendMessage: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleSignIn: (state, action) => {
      state.currentUser = action.payload
      state.acceptAccess = true
    },
    signInFailure: (state, action) => {
      state.acceptAccess = false
      state.errorSignIn = true
    },
    handleSignUp: (state, action) => {
      state.currentUser = action.payload
      state.acceptAccess = true
    },
    signUpFailure: (state, action) => {
      state.errorSignUp = true
    },
    handleAccess: (state, action) => {
      state.acceptAccess = action.payload
    },
    handleSendMessage: (state, action) => {
      state.sendMessage.push(action.payload)
    },
    editUserInfo: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        ...action.payload,
      }
    },
  },
})

export const { editUserInfo } = userSlice.actions
export default userSlice
