import { publicRequest, userRequest } from '../../config/requestMethod'
import userSlice, { editUserInfo } from '../slices/userSlice'
import { USER_ID } from '../../config/requestMethod'

//[POST]
const requestHandleSignIn = async (dispatch, data) => {
  try {
    const res = await publicRequest.post('/api/author/login', data)
    if (res.data) {
      dispatch(userSlice.actions.handleSignIn(res.data))
      //Strick
      setTimeout(() => {
        window.location.reload(false)
      }, 200)
      // window.location.reload(false)
    }
  } catch (err) {
    dispatch(userSlice.actions.signInFailure())
  }
}

//[POST]
const requestHandleSignUp = async (dispatch, data) => {
  try {
    const res = await publicRequest.post('/api/author/register', data)
    res.data && dispatch(userSlice.actions.handleSignUp(res.data))
  } catch (err) {
    dispatch(userSlice.actions.signUpFailure())
  }
}

//[PUT]
const requestEditUser = async (dispatch, data) => {
  try {
    const res = await userRequest.put(`/api/users/edit/${USER_ID}`, data)
    res.data && dispatch(editUserInfo(res.data))
  } catch (err) {
    console.log(err)
  }
}

export { requestHandleSignIn, requestHandleSignUp, requestEditUser }
