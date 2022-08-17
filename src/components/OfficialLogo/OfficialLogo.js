import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../resources/images/SongNavAPI'
import './OfficialLogo.scss'

function OfficialLogo() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="official-logo">
          <img
            src={logo || require('../../common/header_icon.png')}
            alt="logo"
          />
          <h3>Night Music</h3>
        </div>
      </Link>
    </div>
  )
}

export default OfficialLogo
