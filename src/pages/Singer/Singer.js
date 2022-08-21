import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSingers } from '../../redux/apiCalls'

function Singer() {
  const singerList = useSelector((state) => state.singer.singerList)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllSingers(dispatch)
  }, [])
  return (
    <div id="singer">
      <div className="singer-body">
        <div className="singer-header">
          <div className="singer-heading"></div>
          <div className="singer-behavior">
            <i className="bi bi-pencil-fill"></i>
          </div>
        </div>
        <div className="singer-container">
          <table className="singer-list">
            <tbody>
              <tr>
                <th colSpan="col">#</th>
                <th colSpan="col">Avatar</th>
                <th colSpan="col">Singer</th>
                <th colSpan="col">Most popular song</th>
                <th colSpan="col">Songs</th>
                <th colSpan="col">Plays</th>
                <th colSpan="col">Likes</th>
                <th colSpan="col">Behavior</th>
              </tr>
              {singerList.map((singer, index) => (
                <tr className="singer-item" key={singer._id}>
                  <td scope="row">{index + 1}</td>
                  <td>
                    <img
                      src={
                        singer.avatar ||
                        require('../../images/singer_avatar_default.png')
                      }
                      alt="avatar-singer"
                    />
                  </td>
                  <td>{singer.name}</td>
                  <td>
                    {singer.songs.length > 0
                      ? [...singer.songs].sort((a, b) => b.plays - a.plays)[0]
                          .song
                      : 'Not update'}
                  </td>
                  <td>{singer.songs.length}</td>
                  <td>{singer.plays}</td>
                  <td>{singer.likes}</td>
                  <td>
                    <i className="bi bi-trash-fill"></i>
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

export default Singer
