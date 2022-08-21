import React from 'react'
import './NavBar.scss'
import { Link, useLocation, useParams } from 'react-router-dom'
import OfficialLogo from '../OfficialLogo/OfficialLogo'
function NavBar() {
  const params = useLocation()
  return (
    <div className="navbar">
      <OfficialLogo />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div
          className={`navbar-item ${params.pathname === '/' ? 'active' : ''}`}
        >
          <i className="bi bi-house-fill"></i>
          <span className="navbar-name">Home</span>
        </div>
      </Link>
      <Link to="/user" style={{ textDecoration: 'none' }}>
        <div
          className={`navbar-item ${
            params.pathname === '/user' ? 'active' : ''
          }`}
        >
          <i className="bi bi-person-lines-fill"></i>
          <span className="navbar-name">User</span>
        </div>
      </Link>
      <Link to="/song" style={{ textDecoration: 'none' }}>
        <div
          className={`navbar-item ${
            params.pathname === '/song' ? 'active' : ''
          }`}
        >
          <i className="bi bi-music-note-beamed"></i>
          <span className="navbar-name">Song</span>
        </div>
      </Link>
      <Link to="/playlist" style={{ textDecoration: 'none' }}>
        <div
          className={`navbar-item ${
            params.pathname === '/playlist' ? 'active' : ''
          }`}
        >
          <i className="bi bi-music-player-fill"></i>
          <span className="navbar-name">Playlist</span>
        </div>
      </Link>
      <Link to="/singer" style={{ textDecoration: 'none' }}>
        <div
          className={`navbar-item ${
            params.pathname === '/singer' ? 'active' : ''
          }`}
        >
          <i className="bi bi-headset"></i>
          <span className="navbar-name">Singer</span>
        </div>
      </Link>
      <Link to="/payment" style={{ textDecoration: 'none' }}>
        <div
          className={`navbar-item ${
            params.pathname === '/payment' ? 'active' : ''
          }`}
        >
          <i className="bi bi-cash-coin"></i>
          <span className="navbar-name">Payment</span>
        </div>
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <div
          className={`navbar-item ${
            params.pathname === '/contact' ? 'active' : ''
          }`}
        >
          <i className="bi bi-chat-dots-fill"></i>
          <span className="navbar-name">Contact</span>
        </div>
      </Link>

      <div className="navbar-body">
        <div className="navbar-line"></div>

        <div className="navbar-notice"></div>
      </div>
    </div>
  )
}

export default NavBar
