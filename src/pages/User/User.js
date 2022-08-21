import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getAllDeletedUsers,
  getAllUser,
  requestDeleteMultipleUsers,
  requestDeleteUser,
} from '../../redux/apiCalls'

function User() {
  const userList = useSelector((state) => state.user.userList)
  const deletedList = useSelector((state) => state.user.deletedUserList)
  const dispatch = useDispatch()
  const deleteWrap = useRef()
  const deleteAll = useRef()
  const deleteList = useRef([])

  const handleDelete = (id) => {
    requestDeleteUser(id, dispatch)
  }
  const handleSelectedDelete = () => {
    const idSelectedList = deleteList.current
      .filter((box) => box)
      .filter((box) => box.checked)
      .map((box) => box.value)
    requestDeleteMultipleUsers(idSelectedList, dispatch)
  }

  const handleClickDelete = () => {
    const boxes = deleteList.current.filter((box) => box).length
    if (deleteAll.current.checked && boxes > 0) {
      deleteWrap.current.classList.add('active')
      for (let i = 0; i < boxes; i++) {
        if (deleteList.current[i]) {
          deleteList.current[i].checked = true
        }
      }
    }
  }
  const handleClickDeleteItem = () => {
    const boxes = deleteList.current.filter((box) => box).length
    const checkedBoxes = deleteList.current
      .filter((box) => box)
      .filter((box) => box.checked).length

    checkedBoxes > 0
      ? deleteWrap.current.classList.add('active')
      : deleteWrap.current.classList.remove('active')

    checkedBoxes === boxes
      ? (deleteAll.current.checked = true)
      : (deleteAll.current.checked = false)
  }

  useEffect(() => {
    getAllUser(dispatch)
    getAllDeletedUsers(dispatch)
  }, [])

  return (
    <div id="user">
      <div className="user-header">
        <div className="user-behavior-delete">
          <Link to="/user/bin" style={{ textDecoration: 'none' }}>
            <span>{deletedList.length}</span>
            <i className="bi bi-trash-fill"></i>
          </Link>
        </div>
      </div>
      <div className="user-body">
        <div className="user-container">
          <div
            className="delete-wrap"
            ref={deleteWrap}
            onClick={handleSelectedDelete}
          >
            <i className="bi bi-trash-fill"></i>
          </div>
          <table className="user-list">
            <tbody>
              <tr>
                <th colSpan="col">
                  <div>
                    <input
                      type="checkbox"
                      ref={deleteAll}
                      onClick={handleClickDelete}
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
              {userList.map((user, index) => (
                <tr className="user-item" key={user._id}>
                  <td>
                    <div>
                      <input
                        type="checkbox"
                        value={user._id}
                        ref={(element) => {
                          deleteList.current[index] = element
                        }}
                        onClick={() => handleClickDeleteItem(index)}
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
                      className="bi bi-trash-fill"
                      onClick={() => handleDelete(user._id)}
                    ></i>
                    <i className="bi bi-pencil-square"></i>
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

export default User
