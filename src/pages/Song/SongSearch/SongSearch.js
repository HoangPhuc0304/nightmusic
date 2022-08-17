import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Spin } from 'antd'
import { requestGetAllInfoPlaylists } from '../../../redux/apiCalls/apiPlaylist'
import './SongSearch.scss'

function SongSearch() {
  const allPlaylists = useSelector((state) => state.playlist.playlistInfo)
  const photoTop = useRef([])
  const photoTheme = useRef([])
  const [songSearchTop, setSongSearchTop] = useState([])
  const [songSearchList, setSongSearchList] = useState([])
  const dispatch = useDispatch()

  const handleHoverItem = (index) => {
    photoTop.current[index].classList.add('disable')
    photoTheme.current[index].classList.add('active')
  }
  const handleLeaveItem = (index) => {
    photoTop.current[index].classList.remove('disable')
    photoTheme.current[index].classList.remove('active')
  }

  //CALL API
  useEffect(() => {
    if (!allPlaylists[0]) {
      requestGetAllInfoPlaylists(dispatch)
    }
  }, [])

  useEffect(() => {
    setSongSearchTop(allPlaylists.slice(0, 2))
    setSongSearchList(allPlaylists.slice(2))
  }, [allPlaylists])

  return (
    <div className="song-search">
      <div className="song-search-body">
        <div className="song-kind-top">
          <h3 className="song-kind-heading">Top genres</h3>
          <div className="song-kind-top-list">
            {songSearchTop.map((item, index) => (
              <Link
                to={`/search/${item.type}`}
                style={{ textDecoration: 'none' }}
                key={index}
              >
                <div
                  className="song-kind-top-item"
                  style={{
                    backgroundColor: item.color,
                  }}
                  onMouseOver={() => handleHoverItem(index)}
                  onMouseOut={() => handleLeaveItem(index)}
                >
                  <h4>{item.type.toUpperCase()}</h4>
                  <img
                    src={item.img}
                    alt={item.img}
                    className="song-kind-photo-top"
                    ref={(element) => {
                      photoTop.current[index] = element
                    }}
                  />
                  <img
                    src={item.img}
                    alt={item.img}
                    className="song-kind-photo-theme"
                    ref={(element) => {
                      photoTheme.current[index] = element
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="song-kind-body">
          <h3 className="song-kind-heading">Browse all</h3>
          <div className="song-kind-body-list">
            {songSearchList.map((item, index) => (
              <Link
                to={`/search/${item.type}`}
                style={{ textDecoration: 'none' }}
                key={index}
              >
                <div
                  className="song-kind-body-item"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  <h4>{item.type.toUpperCase()}</h4>
                  <img
                    src={item.img}
                    alt={item.img}
                    className="song-kind-photo-body"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {!songSearchList[0] && (
        <div className="loadingEffect">
          <Spin size="large" tip="Loading..."></Spin>
        </div>
      )}
    </div>
  )
}

export default SongSearch
