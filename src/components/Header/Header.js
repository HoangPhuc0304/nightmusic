import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { rootReducer } from '../../redux/store'
import OfficialLogo from '../OfficialLogo/OfficialLogo'

function Header() {
  const [accountTable, setAccountTable] = useState(false)
  const author = useSelector((state) => state.author.currentUser)
  const [energy, setEnergy] = useState(author.energy)
  const dispatch = useDispatch()

  const handleClickAccount = () => {
    setAccountTable((isOpen) => setAccountTable(!isOpen))
  }
  const handleLogOut = () => {
    localStorage.removeItem('persist:root')
    rootReducer(undefined)
  }

  return (
    <div id="header">
      <OfficialLogo />
      <div className="user-box">
        <a href="" className="user-energy">
          <i className="bi bi-lightning-charge-fill"></i>
          {`${energy}/${author.energy}`}
        </a>
        <div className="user-account" onClick={handleClickAccount}>
          <i className="bi bi-person-circle"></i>
          {author.name || author.username}
          <i
            className={`${
              accountTable ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill'
            } user-setting`}
          ></i>
          {accountTable && (
            <div className="header-account">
              <ul className="header-account-list">
                <li className="header-account-item">
                  <i className="bi bi-person-fill icon-account"></i>
                  Account
                </li>
                <li className="header-account-item">
                  <i className="bi bi-pencil-fill icon-account"></i>
                  Edit profile
                </li>
                <li className="header-account-item icon-account">
                  <i className="bi bi-gem"></i>
                  Upgrade to Premium
                </li>
                <Link
                  to="/"
                  style={{ textDecoration: 'none' }}
                  onClick={handleLogOut}
                >
                  <li className="header-account-item icon-account">
                    <i className="bi bi-box-arrow-up-right"></i>
                    Log out
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
