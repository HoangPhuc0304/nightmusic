import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL, publicRequest } from '../../config/requestMethod'
import { requestHandleSignIn } from '../../redux/apiCalls/apiUser'
import layoutSlice from '../../redux/slices/layoutSlice'
import userSlice from '../../redux/slices/userSlice'
import './SignIn.scss'
function SignIn() {
  const errorSignIn = useSelector((state) => state.user.errorSignIn)
  const [usernameText, setUsernameText] = useState('')
  const [password, setPassword] = useState('')
  const messageUsername = useRef()
  const usernameGroup = useRef()
  const messagePassword = useRef()
  const passwordGroup = useRef()
  const closeModal = useRef()
  const dispatch = useDispatch()
  window.scrollTo(0, 0)

  const handleUsernameChange = (e) => {
    setUsernameText(e.target.value)
    messageUsername.current.innerHTML = ''
    usernameGroup.current.classList.remove('invalid')
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    messagePassword.current.innerHTML = ''
    passwordGroup.current.classList.remove('invalid')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const checkUsername = handleCheckInput('username', usernameText)
    const checkPassword = handleCheckInput('password', password)
    if (checkUsername && checkPassword) {
      requestHandleSignIn(dispatch, {
        username: usernameText,
        password: password,
      })
      // dispatch(userSlice.actions.handleSignIn({
      //     username: usernameText,
      //     password: password
      // }))
    }
  }

  const handleCheckInput = (type, text) => {
    if (!text) {
      const message = 'Please fill this input'
      if (type === 'username') {
        messageUsername.current.innerHTML = message
        usernameGroup.current.classList.add('invalid')
      } else if (type === 'password') {
        messagePassword.current.innerHTML = message
        passwordGroup.current.classList.add('invalid')
      } else {
        messageUsername.current.innerHTML = message
        messagePassword.current.innerHTML = message
        usernameGroup.current.classList.add('invalid')
        passwordGroup.current.classList.add('invalid')
      }
      return false
    }
    return true
  }
  const handleClickModal = (e) => {
    closeModal.current.click()
  }
  const handleClickForm = (e) => {
    e.stopPropagation()
  }

  const redirectToFacebookPage = () => {
    window.open(`${BASE_URL}/api/author/facebook`, '_self')
  }

  const redirectToGooglePage = () => {
    window.open(`${BASE_URL}/api/author/google`, '_self')
  }

  const redirectToGithubPage = () => {
    window.open(`${BASE_URL}/api/author/github`, '_self')
  }
  
  // useEffect(() => {
  //     dispatch(userSlice.actions.handleAccess(false))
  // },[])
  useEffect(() => {
    dispatch(layoutSlice.actions.movingToAccessPage(true))
    return () => {
      dispatch(layoutSlice.actions.movingToAccessPage(false))
    }
  }, [])
  // useEffect(() => {
  //     acceptAccess && closeModal.current.click()
  // }, [acceptAccess])

  return (
    <div className="modal-sign-in" onClick={handleClickModal}>
      <form
        action=""
        method="POST"
        className="form"
        id="form-signIn"
        onSubmit={handleSubmit}
        onClick={handleClickForm}
      >
        <div className="form-header">
          <Link to="/" className="form-close" ref={closeModal}>
            <i className="ti-close"></i>
          </Link>
          <div className="form-heading">Sign In</div>
        </div>

        <div className="form-body">
          <div className="form-group" ref={usernameGroup}>
            <i className="bi bi-person-fill form-user-icon"></i>
            <label htmlFor="username" className="form-label">
              Email/Username
            </label>
            <input
              id="form-username"
              value={usernameText}
              name="username"
              type="text"
              placeholder="Type your email or username"
              className="form-control-input"
              onChange={handleUsernameChange}
              onBlur={(e) => handleCheckInput('username', e.target.value)}
            />
            <div className="form-message" ref={messageUsername}></div>
          </div>

          <div className="form-group" ref={passwordGroup}>
            <i className="bi bi-key-fill form-user-icon"></i>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="form-password"
              value={password}
              name="password"
              type="password"
              placeholder="Type your password"
              className="form-control-input"
              onChange={handlePasswordChange}
              onBlur={(e) => handleCheckInput('password', e.target.value)}
            />
            <div className="form-message" ref={messagePassword}></div>
            <div className="forget-password-box">
              <a href="" className="forget-password" target="_blank">
                Forgot password?
              </a>
            </div>
          </div>
          <span className="form-respond-error">
            {errorSignIn && 'Login failed, please check again !'}
          </span>
          <button className="form-submit">Sign In</button>
        </div>
        <div className="form-footer">
          <div className="form-social">
            <p className="form-suggest">Or sign in using</p>
            <div className="form-social-icon">
              <img
                src={require('../../common/facebook.png')}
                alt=""
                className="social-size"
                onClick={redirectToFacebookPage}
                style={{ "cursor": "pointer" }}
              ></img>
              <img
                src={require('../../common/google.png')}
                alt=""
                className="social-size"
                onClick={redirectToGooglePage}
                style={{ "cursor": "pointer" }}
              ></img>
              <img
                src={require('../../common/github.png')}
                alt=""
                className="social-size"
                onClick={redirectToGithubPage}
                style={{ "cursor": "pointer" }}
              ></img>
            </div>
            <p className="change-text">
              New member?
              <Link to="/sign-up">
                <span className="change-signIn"> Sign up </span>
              </Link>{' '}
              here.
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn
