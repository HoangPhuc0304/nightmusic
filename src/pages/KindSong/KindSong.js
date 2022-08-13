import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Empty, Spin } from 'antd'
import {
  changeTimeFromSecondToDuration,
  changeTimeFromSecondToString,
} from '../../others/features'
import songSlice, {
  getSongCurrentPlaylist,
  getInformationStopBroadcast,
  getListFavoriteSong,
} from '../../redux/slices/songSlice'
import layoutSlice, {
  getRequestHideSetting,
} from '../../redux/slices/layoutSlice'
import SongSetting from '../../components/SongSetting/SongSetting'
import SongNav from '../../components/SongNav/SongNav'
import { requestEditLibrary } from '../../redux/apiCalls/apiLibrary'
import { requestGetPlaylist } from '../../redux/apiCalls/apiPlaylist'
import { requestUpdateSong } from '../../redux/apiCalls/apiSong'
import { MAX_MOBILE } from '../../config/responsive'

function KindSong() {
  const { kind } = useParams()
  const currentSong = useSelector(getSongCurrentPlaylist)
  const isStopBroadcast = useSelector(getInformationStopBroadcast)
  const receiveRequestFromSetting = useSelector(getRequestHideSetting)
  const favoriteListSong = useSelector((state) => state.library.favoriteSong)
  const libraryId = useSelector((state) => state.library.id)
  const playlist = useSelector((state) => state.playlist.currentPlaylist)

  const heartIcons = useRef([])
  const selectIcons = useRef([])
  const songItem = useRef([])
  const songPageList = useRef()
  const isTheFirstTime = useRef(true)
  const [indexSelect, setIndexSelect] = useState(-1)
  const [breakpoint, setBreakpoint] = useState(window.innerWidth)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [songList, setSongList] = useState([])

  const handleClickHeart = (item, index) => {
    heartIcons.current[index].classList.toggle('active')
    const status = heartIcons.current[index]
      .getAttribute('class')
      .includes('active')
    requestEditLibrary(dispatch, libraryId, item, 'like-song')
    requestUpdateSong(item, { action: 'like', status: status })
  }
  const handleClickSelect = (index) => {
    selectIcons.current[index].classList.toggle('active')
    if (selectIcons.current[index].getAttribute('class').includes('active')) {
      setIndexSelect(index)
    } else {
      setIndexSelect(-1)
    }
  }
  const handleClickSong = (item) => {
    if (isTheFirstTime.current) {
      dispatch(songSlice.actions.getSongListFromPlaylist(playlist.songs))
      isTheFirstTime.current = false
    }
    if (isStopBroadcast) {
      dispatch(songSlice.actions.finishSong(false))
    }
    dispatch(songSlice.actions.requestSongPlaylist(item))
  }
  const handleSelectOrder = (e) => {
    switch (e.target.value) {
      case 'popular': {
        const songListOrder = [...playlist.songs].sort(
          (a, b) => b.plays - a.plays,
        )
        setSongList(songListOrder)
        !isTheFirstTime.current &&
          dispatch(songSlice.actions.getSongListFromPlaylist(songListOrder))
        break
      }
      case 'latest': {
        const songListOrder = [...playlist.songs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        )
        setSongList(songListOrder)
        !isTheFirstTime.current &&
          dispatch(songSlice.actions.getSongListFromPlaylist(songListOrder))
        break
      }
      case 'oldest': {
        const songListOrder = [...playlist.songs].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        )
        setSongList(songListOrder)
        !isTheFirstTime.current &&
          dispatch(songSlice.actions.getSongListFromPlaylist(songListOrder))
        break
      }
      case 'az':
        if (playlist.songs.length > 0) {
          const songListOrder = [...playlist.songs].sort((a, b) =>
            a.song.localeCompare(b.song),
          )
          setSongList(songListOrder)
          !isTheFirstTime.current &&
            dispatch(songSlice.actions.getSongListFromPlaylist(songListOrder))
        }
        break
      default:
        if (playlist.songs.length > 0) {
          const songListOrder = [...playlist.songs].sort((a, b) =>
            b.song.localeCompare(a.song),
          )
          setSongList(songListOrder)
          !isTheFirstTime.current &&
            dispatch(songSlice.actions.getSongListFromPlaylist(songListOrder))
        }
    }
  }

  useEffect(() => {
    scrollToActiveSong() || window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    if (receiveRequestFromSetting == true) {
      setIndexSelect(-1)
      dispatch(layoutSlice.actions.requestHideSongSetting(false))
    }
  }, [receiveRequestFromSetting])
  useEffect(() => {
    if (document.querySelector('.song-page-item.active')) {
      isTheFirstTime.current = false
    }
  }, [currentSong])
  useEffect(() => {
    requestGetPlaylist(dispatch, kind)
    if (!playlist[0]) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [])
  useEffect(() => {
    playlist.songs && setSongList(playlist.songs)
  }, [playlist])

  const scrollToActiveSong = () => {
    setTimeout(function () {
      const songPage = document.querySelector('.song-page-item.active')
      songPage &&
        songPage.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
    }, 300)
  }
  useEffect(() => {
    window.addEventListener('resize', () => {
      setBreakpoint(window.innerWidth)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setBreakpoint(window.innerWidth)
      })
    }
  }, [])

  return (
    <>
      <SongNav />
      <div className="song-page">
        {playlist.songs ? (
          <div className="song-page-box" ref={songPageList}>
            <div
              className="song-page-header"
              style={
                breakpoint >= MAX_MOBILE
                  ? { backgroundColor: `${playlist.color}` }
                  : {
                    background: `linear-gradient(${playlist.color},var(--dark-color))`,
                  }
              }
            >
              <div
                className="song-page-icon"
                onClick={() => {
                  navigate(-1)
                }}
              >
                <i className="bi bi-arrow-left-circle-fill"></i>
              </div>
              {breakpoint >= MAX_MOBILE ? (
                <>
                  <h3 className="song-header-title">
                    {playlist.type.toUpperCase()}
                  </h3>
                  <div className="song-page-info">
                    <span>
                      <i className="bi bi-play-circle-fill"></i>
                      {playlist.plays}
                    </span>
                    <span>
                      <i className="bi bi-suit-heart-fill"></i>
                      {playlist.likes}
                    </span>
                    <p>
                      <i className="bi bi-clock-fill"></i>
                      {`${new Date(playlist.updatedAt).toUTCString().split(' ')[2]
                        } ${new Date(playlist.updatedAt).toUTCString().split(' ')[3]
                        } · ${playlist.duration > 60
                          ? changeTimeFromSecondToDuration(playlist.duration)
                          : ''
                        }`}
                    </p>
                  </div>
                </>
              ) : (
                <div className="song-header-info-wrap">
                  <h3 className="song-header-title">
                    {playlist.type.toUpperCase()}
                  </h3>
                  <div className="song-page-info">
                    <span>
                      <i className="bi bi-play-circle-fill"></i>
                      {playlist.plays}
                    </span>
                    <span>
                      <i className="bi bi-suit-heart-fill"></i>
                      {playlist.likes}
                    </span>
                    <p>
                      <i className="bi bi-clock-fill"></i>
                      {`${new Date(playlist.updatedAt).toUTCString().split(' ')[2]
                        } ${new Date(playlist.updatedAt).toUTCString().split(' ')[3]
                        } · ${playlist.duration > 60
                          ? changeTimeFromSecondToDuration(playlist.duration)
                          : ''
                        }`}
                    </p>
                  </div>
                </div>
              )}
              <img
                src={isTheFirstTime.current ? playlist.img : currentSong.avatar}
                alt="Photo"
              />
            </div>
            <div className="song-page-body">
              <table className="song-page-list">
                <thead className="song-page-list-head">
                  <tr className="song-page-head">
                    {breakpoint >= MAX_MOBILE && (
                      <td className="song-page-head-number">#</td>
                    )}
                    <td className="song-page-head-title">Title</td>
                    <td className="song-page-head-time">Time</td>
                    <td className="song-page-head-setting">
                      <select
                        className="form-select form-select-sm song-page-head-select"
                        aria-label=".form-select-sm example"
                        onChange={handleSelectOrder}
                        style={
                          breakpoint < MAX_MOBILE ? { maxWidth: '70px' } : {}
                        }
                      >
                        <option value="popular">Popular</option>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                      </select>
                    </td>
                  </tr>
                </thead>
                {songList.length > 0 ? (
                  <tbody className="song-page-list-body">
                    {songList.map((item, index) => (
                      <tr
                        className={`song-page-item ${currentSong && currentSong._id === item._id
                          ? ' active'
                          : ''
                          }`}
                        key={index}
                        ref={songItem}
                        onClick={() => handleClickSong(item)}
                      >
                        {breakpoint >= MAX_MOBILE && (
                          <td className="song-item-number">
                            <h3>{index + 1}</h3>
                          </td>
                        )}
                        <td className="song-item-head">
                          <div className="song-item-head-img">
                            <img
                              src={item.img}
                              alt={item.song}
                              className="song-item-thumb"
                            />
                            {currentSong && item._id === currentSong._id && (
                              <img
                                src={require('../../common/icon-playing.gif')}
                                alt="wave"
                                className="song-item-wave"
                              ></img>
                            )}
                          </div>
                          <div className="song-item-decoration">
                            <h3>{item.song}</h3>
                            <p>
                              {item.name.map((name, index) => {
                                if (index === item.name.length - 1) {
                                  return name
                                }
                                return name + ', '
                              })}
                            </p>
                          </div>
                        </td>
                        <td className="song-item-time">
                          {changeTimeFromSecondToString(item.length)}
                        </td>
                        <td
                          className="song-item-tail"
                          onClick={(e) => {
                            e.stopPropagation()
                          }}
                        >
                          <i
                            className={`bi bi-heart-fill song-item-heart ${favoriteListSong.find(
                              (songId) => songId === item._id,
                            )
                              ? 'active'
                              : ''
                              }`}
                            ref={(element) => {
                              heartIcons.current[index] = element
                            }}
                            onClick={() => handleClickHeart(item, index)}
                          ></i>
                          <i
                            className="bi bi-three-dots song-item-select"
                            ref={(element) => {
                              selectIcons.current[index] = element
                            }}
                            onClick={() => handleClickSelect(index)}
                          >
                            {indexSelect === index && (
                              <SongSetting songSelect={item} />
                            )}
                          </i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td>
                        <Empty
                          image={Empty.PRESENTED_IMAGE_SIMPLE}
                          style={{
                            width: '100%',
                            marginTop: '2rem',
                            textAlign: 'center',
                            color: 'var(--text-color)',
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        ) : (
          <>
            {isLoading
              ? <div className='loadingEffect' style={{ color: 'var(--text-color)' }}>
                <Spin size="large" tip="Loading..."></Spin>
              </div>
              : <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                style={{
                  width: '100%',
                  marginTop: '2rem',
                  textAlign: 'center',
                  color: 'var(--text-color)',
                }}
              />
            }
          </>
        )}
      </div>
    </>
  )
}

export default KindSong
