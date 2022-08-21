import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PhotoBackground from '../../images/photo_winter.jpg'
import { login } from '../../redux/apiCalls'

function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const messageError = useSelector((state) => state.author.error)

  const handleSubmit = (e) => {
    e.preventDefault()
    username && password && login(dispatch, { username, password })
  }

  return (
    <div
      className="sign-in"
      style={{
        background: `url(${PhotoBackground})`,
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <form action="" className="sign-in-box">
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <span className="message-error">
          {messageError && 'Login failed, please check again'}
        </span>
        <button type="submit" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
