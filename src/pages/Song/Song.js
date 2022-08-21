import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllPlaylists,
  getAllSongs,
  requestDestroySong,
  requestEditSongFromPlayList,
} from '../../redux/apiCalls'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Button, Dropdown, Menu } from 'antd'

function Song() {
  const songList = useSelector((state) => state.song.songList)
  const playlists = useSelector((state) => state.playlist.playlists)
  const dispatch = useDispatch()

  const handleDeleteSong = (id) => {
    requestDestroySong(id, dispatch)
  }

  const handleSongAddIntoPlayList = (playlist, song) => {
    if (song.type.findIndex((item) => item === playlist.type) === -1) {
      const types = [...song.type, playlist.type]
      const data = new FormData()
      data.append('type', types)
      requestEditSongFromPlayList(playlist._id, song._id, data, 'addSong')
    }
  }

  useEffect(() => {
    getAllSongs(dispatch)
  }, [])

  useEffect(() => {
    !playlists[0] && getAllPlaylists(dispatch)
  }, [])

  return (
    <div id="song">
      <div className="song-header">
        <div className="song-behavior">
          <Link to="/song/create" style={{ textDecoration: 'none' }}>
            <i className="bi bi-plus-square-fill"></i>
          </Link>
        </div>
      </div>
      <div className="song-body">
        <div className="song-container">
          <table className="song-list">
            <tbody>
              <tr>
                <th colSpan="col">#</th>
                <th colSpan="col">Image</th>
                <th colSpan="col">Song</th>
                <th colSpan="col">Name</th>
                <th colSpan="col">Type</th>
                <th colSpan="col">Plays</th>
                <th colSpan="col">Likes</th>
                <th colSpan="col">Created At</th>
                <th colSpan="col">Behavior</th>
              </tr>
              {songList.map((song, index) => (
                <tr className="song-item" key={song._id}>
                  <td scope="row">{index + 1}</td>
                  <td>
                    <img
                      src={
                        song.img || require('../../images/song_img_default.png')
                      }
                      alt="avatar-song"
                    />
                  </td>
                  <td>{song.song}</td>
                  <td>{song.name}</td>
                  <td>{song.type.map((item) => ' ' + item).toString()}</td>
                  <td>{song.plays}</td>
                  <td>{song.likes}</td>
                  <td>{new Date(song.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Dropdown
                      overlay={
                        <Menu
                          items={playlists.map((playlist, index) => ({
                            key: index,
                            label: (
                              <span
                                onClick={() =>
                                  handleSongAddIntoPlayList(playlist, song)
                                }
                              >
                                {playlist.type}
                              </span>
                            ),
                          }))}
                        />
                      }
                      placement="bottomRight"
                      arrow={{
                        pointAtCenter: true,
                      }}
                    >
                      <Button style={{ width: '2rem', padding: '0' }}>
                        <i className="bi bi-plus-lg"></i>
                      </Button>
                    </Dropdown>
                    <i
                      className="bi bi-trash-fill"
                      onClick={() => handleDeleteSong(song._id)}
                    ></i>
                    <Link
                      to={`/song/edit/${song._id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
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

export default Song
