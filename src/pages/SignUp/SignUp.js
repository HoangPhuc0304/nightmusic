import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../config/requestMethod'
import { requestHandleSignUp } from '../../redux/apiCalls/apiUser'
import layoutSlice from '../../redux/slices/layoutSlice'
import userSlice from '../../redux/slices/userSlice'
import './SignUp.scss'
function SignUp() {
  const errorSignUp = useSelector((state) => state.user.errorSignUp)
  const [emailText, setEmailText] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const messageEmail = useRef()
  const emailGroup = useRef()
  const messageUsername = useRef()
  const usernameGroup = useRef()
  const messagePassword = useRef()
  const passwordGroup = useRef()
  const messageConfirmPassword = useRef()
  const confirmPasswordGroup = useRef()
  const closeModal = useRef()
  const dispatch = useDispatch()
  window.scrollTo(0, 0)

  const handleEmailChange = (e) => {
    setEmailText(e.target.value)
    messageEmail.current.innerHTML = ''
    emailGroup.current.classList.remove('invalid')
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    messageUsername.current.innerHTML = ''
    usernameGroup.current.classList.remove('invalid')
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    messagePassword.current.innerHTML = ''
    passwordGroup.current.classList.remove('invalid')
  }
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
    messageConfirmPassword.current.innerHTML = ''
    confirmPasswordGroup.current.classList.remove('invalid')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const checkMail = handleCheckEmail(emailText)
    const checkUsername = handleCheckUsername(username)
    const checkPassword = handleCheckPassword(password)
    const checkConfirmPassword = handleCheckConfirmPassword(confirmPassword)
    if (checkMail && checkUsername && checkPassword && checkConfirmPassword) {
      requestHandleSignUp(dispatch, {
        email: emailText,
        username: username,
        password: password,
      })
    }
  }
  const handleCheckEmail = (text) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regex.test(text)) {
      const message = 'This input must be an email'
      messageEmail.current.innerHTML = message
      emailGroup.current.classList.add('invalid')
      return false
    }
    return true
  }
  const handleCheckUsername = (text) => {
    if (text.length < 8) {
      const message = text
        ? 'This input must be at least 8 characters'
        : 'Please fill this input'
      messageUsername.current.innerHTML = message
      usernameGroup.current.classList.add('invalid')
      return false
    }
    return true
  }
  const handleCheckPassword = (text) => {
    if (text.length < 8) {
      const message = text
        ? 'This input must be at least 8 characters'
        : 'Please fill this input'
      messagePassword.current.innerHTML = message
      passwordGroup.current.classList.add('invalid')
      return false
    }
    return true
  }
  const handleCheckConfirmPassword = (text) => {
    let message
    if (!text) {
      message = 'Please fill this input'
      messageConfirmPassword.current.innerHTML = message
      confirmPasswordGroup.current.classList.add('invalid')
      return false
    } else if (text !== password) {
      message = "Confirm password doesn't exact"
      messageConfirmPassword.current.innerHTML = message
      confirmPasswordGroup.current.classList.add('invalid')
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

  const redirectToFacebookPage = async () => {
    window.open(`${BASE_URL}/api/author/facebook`, '_self')
  }

  const redirectToGooglePage = async () => {
    window.open(`${BASE_URL}/api/author/google`, '_self')
  }

  const redirectToGithubPage = async () => {
    window.open(`${BASE_URL}/api/author/github`, '_self')
  }

  useEffect(() => {
    dispatch(layoutSlice.actions.movingToAccessPage(true))
    return () => {
      dispatch(layoutSlice.actions.movingToAccessPage(false))
    }
  }, [])

  return (
    <div className="modal-sign-up" onClick={handleClickModal}>
      <form
        action=""
        method="POST"
        className="form"
        id="form-signUp"
        onSubmit={handleSubmit}
        onClick={handleClickForm}
      >
        <div className="form-header">
          <Link to="/" className="form-close" ref={closeModal}>
            <i className="ti-close"></i>
          </Link>
          <div className="form-heading">Sign Up</div>
        </div>

        <div className="form-body">
          <div className="form-group" ref={emailGroup}>
            <i className="bi bi-envelope-fill form-user-icon"></i>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="form-email"
              value={emailText}
              name="email"
              type="text"
              placeholder="Type your email"
              className="form-control-input"
              onChange={handleEmailChange}
              onBlur={(e) => handleCheckEmail(e.target.value)}
            />
            <div className="form-message" ref={messageEmail}></div>
          </div>
          <div className="form-group" ref={usernameGroup}>
            <i className="bi bi-person-fill form-user-icon"></i>
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="form-username"
              value={username}
              name="username"
              type="text"
              placeholder="Type your username"
              className="form-control-input"
              onChange={handleUsernameChange}
              onBlur={(e) => handleCheckUsername(e.target.value)}
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
              onBlur={(e) => handleCheckPassword(e.target.value)}
            />
            <div className="form-message" ref={messagePassword}></div>
          </div>
          <div className="form-group" ref={confirmPasswordGroup}>
            <i className="bi bi-check-lg form-user-icon"></i>
            <label htmlFor="confirm-password" className="form-label">
              Confirm password
            </label>
            <input
              id="form-confirm-password-signUp"
              value={confirmPassword}
              name="confirm-password"
              type="password"
              placeholder="Confirm your password"
              className="form-control-input"
              onChange={handleChangeConfirmPassword}
              onBlur={(e) => handleCheckConfirmPassword(e.target.value)}
            />
            <div className="form-message" ref={messageConfirmPassword}></div>
          </div>
          <span className="form-respond-error">
            {errorSignUp &&
              'Register failed, email or username have already existed !'}
          </span>
          <button className="form-submit">Sign Up</button>
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
              Already have an account?
              <Link to="/sign-in">
                <span className="change-signUp"> Sign in </span>
              </Link>{' '}
              here.
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp
