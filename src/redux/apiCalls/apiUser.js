import {
  BASE_URL,
  publicRequest,
  userRequest,
} from '../../config/requestMethod'
import userSlice, { editUserInfo } from '../slices/userSlice'
import { USER_ID } from '../../config/requestMethod'
import axios from 'axios'
import { getAllLibrary } from '../slices/librarySlice'

//[POST]
const requestHandleSignIn = async (dispatch, data) => {
  try {
    const res = await publicRequest.post('/api/author/login', data)
    if (res.data) {
      dispatch(userSlice.actions.handleSignIn(res.data))
      //Strick
      setTimeout(() => {
        window.location.reload(false)
      }, 100)
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
    if (res.data) {
      dispatch(userSlice.actions.handleSignUp(res.data))
      const request = axios.create({
        baseURL: BASE_URL,
        headers: {
          token: `Bearer ${res.data.accessToken}`,
        },
      })
      const initialLibraryRes = await request.post(
        `/api/library/initialize/${res.data._id}`,
      )
      dispatch(getAllLibrary(initialLibraryRes.data))

      //Strick
      setTimeout(() => {
        window.location.reload(false)
      }, 100)
    }
  } catch (err) {
    dispatch(userSlice.actions.signUpFailure())
  }
}

//[GET]
const requestGetUser = async (dispatch) => {
  fetch(`${BASE_URL}/api/author/login/success`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      throw new Error("authentication has been failed!");
    })
    .then((data) => {
      console.log(data)
      dispatch(userSlice.actions.handleSignIn(data))
      //Strick
      setTimeout(() => {
        window.location.reload(false)
      }, 100)
      // window.location.reload(false)
    })
    .catch((err) => {
      console.log(err);
    })

  // try {
  //   const res = await publicRequest.get('/api/author/login/success', {
  //     credentials: "include",
  //     withCredentials: true
  //   })
  //   if (res.data) {
  //     dispatch(userSlice.actions.handleSignIn(res.data))
  //     //Strick
  //     setTimeout(() => {
  //       window.location.reload(false)
  //     }, 100)
  //     // window.location.reload(false)
  //   }
  // } catch (err) {
  //   console.log(err)
  // }
}

//[Delete]
const requestLogout = async () => {
  // const res = await userRequest.delete('/api/author/logout', {
  //   withCredentials: true,
  //   credentials: "include",
  // })
  fetch(`${BASE_URL}/api/author/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then(() => {})
    .catch((err) => {
      console.log(err);
    })
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

export { requestHandleSignIn, requestHandleSignUp, requestGetUser, requestEditUser, requestLogout }
