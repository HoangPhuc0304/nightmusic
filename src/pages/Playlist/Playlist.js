import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPlaylists } from '../../redux/apiCalls'

function Playlist() {
  const playlists = useSelector((state) => state.playlist.playlists)
  const dispatch = useDispatch()

  useEffect(() => {
    !playlists[0] && getAllPlaylists(dispatch)
  }, [])

  return (
    <div id="playlist">
      <div className="playlist-header">
        <div className="playlist-behavior">
          <Link to="/playlist/create" style={{ textDecoration: 'none' }}>
            <i className="bi bi-plus-square-fill"></i>
          </Link>
        </div>
      </div>
      <div className="playlist-body">
        <div className="playlist-body-list">
          {playlists.map((playlist, index) => (
            <Link
              to={`/playlist/${playlist.type}`}
              style={{ textDecoration: 'none', marginBottom: '20px' }}
              key={index}
            >
              <div
                className="playlist-body-item"
                style={{
                  backgroundColor: playlist.color,
                }}
              >
                <h4>{playlist.type.toUpperCase()}</h4>
                <img src={playlist.img} alt={playlist.img} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Playlist
