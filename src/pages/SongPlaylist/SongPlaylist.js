import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { changeTimeFromSecondForPlaylist } from '../../config/features'
import { requestEditSongFromPlayList } from '../../redux/apiCalls'
import { getSongsFromPlaylist } from '../../redux/playlistSlice'

function SongPlaylist() {
  const playlist = useSelector((state) => state.playlist.requestPlaylist)
  const dispatch = useDispatch()
  const params = useLocation()

  const handleRemoveSong = (playlist, song) => {
    const updatedType = song.type.filter((item) => item != playlist.type)
    if (updatedType.length > 0) {
      const data = new FormData()
      data.append('type', updatedType)
      requestEditSongFromPlayList(playlist._id, song._id, data, 'deleteSong')
    }
  }

  useEffect(() => {
    dispatch(getSongsFromPlaylist(params.pathname.split('/')[2]))
  }, [])
  console.log(playlist)

  return (
    <div className="song-playlist">
      {playlist ? (
        <>
          <div
            className="song-playlist-header"
            style={{ backgroundColor: `${playlist.color}` }}
          >
            <Link
              to="/playlist"
              className="song-playlist-icon"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-arrow-left-circle-fill"></i>
            </Link>
            <div className="song-playlist-info">
              <h3 className="song-playlist-header-title">
                {playlist.type.toUpperCase()}
              </h3>
              <div>
                <span>
                  <i className="bi bi-play-circle-fill"></i>
                  {playlist.plays}
                </span>
                <span>
                  <i className="bi bi-suit-heart-fill"></i>
                  {playlist.likes}
                </span>
                <span>
                  <i className="bi bi-clock-fill"></i>
                  {`${
                    new Date(playlist.updatedAt).toUTCString().split(' ')[2]
                  } ${
                    new Date(playlist.updatedAt).toUTCString().split(' ')[3]
                  } · ${
                    playlist.duration > 60
                      ? changeTimeFromSecondForPlaylist(playlist.duration)
                      : ''
                  }`}
                </span>
              </div>
            </div>
            <img src={playlist.img} alt="Photo" />
          </div>
          <div className="song-playlist-body">
            {/* <div className="song-playlist-heading"></div>
                <div className="song-playlist-behavior">
                    <i className="bi bi-pencil-fill"></i>
                </div> */}
            <div className="song-playlist-container">
              <table className="song-playlist-list">
                <tbody>
                  <tr>
                    <th colSpan="col">#</th>
                    <th colSpan="col">Image</th>
                    <th colSpan="col">Song</th>
                    <th colSpan="col">Name</th>
                    <th colSpan="col">Type</th>
                    <th colSpan="col">Plays</th>
                    <th colSpan="col">Likes</th>
                    <th colSpan="col">Updated at</th>
                    <th colSpan="col">Behavior</th>
                  </tr>
                  {playlist.songs.map((song, index) => (
                    <tr className="song-playlist-item" key={index}>
                      <td scope="row">{index + 1}</td>
                      <td>
                        <img
                          src={
                            song.img ||
                            require('../../images/song_img_default.png')
                          }
                          alt="avatar-song"
                        />
                      </td>
                      <td>{song.song}</td>
                      <td>{song.name}</td>
                      <td>{song.type.map((item) => ' ' + item).toString()}</td>
                      <td>{song.plays}</td>
                      <td>{song.likes}</td>
                      <td>{new Date(song.updatedAt).toLocaleDateString()}</td>
                      <td>
                        <i
                          className="bi bi-trash-fill"
                          onClick={() => handleRemoveSong(playlist, song)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div>...is loading</div>
      )}
    </div>
  )
}

export default SongPlaylist
