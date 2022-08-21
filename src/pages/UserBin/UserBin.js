import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getAllDeletedUsers,
  requestDestroyMultipleUsers,
  requestDestroyUser,
  requestRestoreMultipleUsers,
  requestRestoreUser,
} from '../../redux/apiCalls'
import { Link } from 'react-router-dom'

function UserBin() {
  const deletedUsers = useSelector((state) => state.user.deletedUserList)
  const dispatch = useDispatch()
  const behaviorWrap = useRef()
  const selectAll = useRef()
  const selectList = useRef([])

  useEffect(() => {
    getAllDeletedUsers(dispatch)
  }, [])

  const handleRestore = (id) => {
    requestRestoreUser(id, dispatch)
  }
  const handleDestroy = (id) => {
    requestDestroyUser(id, dispatch)
  }

  const handleDestroyUsers = () => {
    const idSelectedList = selectList.current
      .filter((box) => box)
      .filter((box) => box.checked)
      .map((box) => box.value)
    requestDestroyMultipleUsers(idSelectedList, dispatch)
  }
  const handleRestoreUsers = () => {
    const idSelectedList = selectList.current
      .filter((box) => box)
      .filter((box) => box.checked)
      .map((box) => box.value)
    requestRestoreMultipleUsers(idSelectedList, dispatch)
  }

  const handleClickSelectAll = () => {
    const boxes = selectList.current.filter((box) => box).length
    if (selectAll.current.checked && boxes > 0) {
      behaviorWrap.current.classList.add('active')
      for (let i = 0; i < boxes; i++) {
        if (selectList.current[i]) {
          selectList.current[i].checked = true
        }
      }
    }
  }
  const handleClickSelectItem = () => {
    const boxes = selectList.current.filter((box) => box).length
    const checkedBoxes = selectList.current
      .filter((box) => box)
      .filter((box) => box.checked).length

    checkedBoxes > 0
      ? behaviorWrap.current.classList.add('active')
      : behaviorWrap.current.classList.remove('active')

    checkedBoxes === boxes
      ? (selectAll.current.checked = true)
      : (selectAll.current.checked = false)
  }

  return (
    <div id="user-bin">
      <div className="user-bin-header">
        <div className="user-bin-heading"></div>
        <div className="user-bin-behavior">
          <Link to="/user" style={{ textDecoration: 'none' }}>
            <i className="bi bi-reply-all-fill"></i>
          </Link>
        </div>
      </div>
      <div className="user-bin-body">
        <div className="user-bin-container">
          <div className="behavior-wrap" ref={behaviorWrap}>
            <i className="bi bi-trash-fill" onClick={handleDestroyUsers}></i>
            <i className="bi bi bi-reply-fill" onClick={handleRestoreUsers}></i>
          </div>

          <table className="user-bin-list">
            <tbody>
              <tr>
                <th colSpan="col">
                  <div>
                    <input
                      type="checkbox"
                      ref={selectAll}
                      onClick={handleClickSelectAll}
                    />
                  </div>
                </th>
                <th colSpan="col">Avatar</th>
                <th colSpan="col">Name</th>
                <th colSpan="col">Birthday</th>
                <th colSpan="col">Energy</th>
                <th colSpan="col">Email</th>
                <th colSpan="col">Phone number</th>
                <th colSpan="col">Country</th>
                <th colSpan="col">Created Date</th>
                <th colSpan="col">Behavior</th>
              </tr>
              {deletedUsers.map((user, index) => (
                <tr className="user-bin-item" key={user._id}>
                  <td>
                    <div>
                      <input
                        type="checkbox"
                        value={user._id}
                        ref={(element) => {
                          selectList.current[index] = element
                        }}
                        onClick={() => handleClickSelectItem(index)}
                      />
                    </div>
                  </td>
                  <td>
                    <img
                      src={
                        user.avatar ||
                        require('../../images/user_avatar_default.png')
                      }
                      alt="avatar-user"
                    />
                  </td>
                  <td>{user.name || 'not update'}</td>
                  <td>
                    {new Date(user.birthday).toLocaleDateString() || 'NULL'}
                  </td>
                  <td>{user.energy}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber || 'not update'}</td>
                  <td>{user.country || 'not update'}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>
                    <i
                      className="bi bi-reply-fill"
                      onClick={() => handleRestore(user._id)}
                    ></i>
                    <i
                      className="bi bi-trash-fill"
                      onClick={() => handleDestroy(user._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserBin
