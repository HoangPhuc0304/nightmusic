import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import songSlice, {
  getCurrentSong,
  getInformationStopBroadcast,
} from '../../../redux/slices/songSlice'
import 'antd/dist/antd.css'
import { Empty, Spin } from 'antd'
import { changeTimeFromSecondToString } from '../../../others/features'
import SongSetting from '../../../components/SongSetting/SongSetting'
import layoutSlice, {
  getRequestHideSetting,
} from '../../../redux/slices/layoutSlice'
import {
  requestEditLibrary,
  requestGetLibrary,
} from '../../../redux/apiCalls/apiLibrary'
import { requestUpdateSong } from '../../../redux/apiCalls/apiSong'
import { Link } from 'react-router-dom'
import {
  changeCurrentSongList,
  getAllListInfo,
} from '../../../redux/slices/librarySlice'

function SongLibrary() {
  const libraryId = useSelector((state) => state.library.id)
  const songLibrary = useSelector((state) => state.library.currentList)
  const songListInfo = useSelector(getAllListInfo)
  const listFavoriteSong = useSelector((state) => state.library.favoriteSong)
  const songListIdBroadcast = useSelector((state) => state.song.songListId)
  const isEmptyBroadcast = useSelector((state) => state.song.isEmpty)

  const currentSong = useSelector(getCurrentSong)
  const receiveRequestFromSetting = useSelector(getRequestHideSetting)
  const isStopBroadcast = useSelector(getInformationStopBroadcast)
  const songCurrentPlaylist = useSelector(
    (state) => state.song.songCurrentPlaylist,
  )

  const [indexSelect, setIndexSelect] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  const songList = useRef()
  const songItem = useRef([])
  const heartIcons = useRef([])
  const selectIcons = useRef([])
  const dispatch = useDispatch()

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

  const handleClickSong = (item, index) => {
    if (isEmptyBroadcast || songListIdBroadcast != songLibrary.songListId) {
      dispatch(
        songSlice.actions.getBroadcast(
          songLibrary.songs
            ? {
                songListId: songLibrary.songListId,
                songBroadcast: songLibrary.songs,
              }
            : {
                songListId: null,
                songBroadcast: [],
              },
        ),
      )
      isEmptyBroadcast && dispatch(songSlice.actions.changeStatusEmpty(false))
    }
    dispatch(songSlice.actions.requestSongBroadcast(item))
    songCurrentPlaylist !== -1 &&
      dispatch(songSlice.actions.preventSongPlaylist(-1))
    if (isStopBroadcast) {
      dispatch(songSlice.actions.finishSong(false))
    }
  }
  const scrollToActiveSong = () => {
    setTimeout(() => {
      songList.current.querySelector('.song-library-item.active') &&
        songList.current.scrollTo(
          0,
          songList.current.querySelector('.song-library-item.active')
            .offsetTop -
            songList.current.offsetHeight / 2,
        )
    }, 500)
  }
  const handleSelectLibrary = (e) => {
    dispatch(changeCurrentSongList(e.target.value))
  }

  useEffect(() => {
    if (receiveRequestFromSetting === true) {
      setIndexSelect(-1)
      dispatch(layoutSlice.actions.requestHideSongSetting(false))
    }
  }, [receiveRequestFromSetting])

  useEffect(() => {
    !songLibrary.songs[0] && requestGetLibrary(dispatch)
    setIsLoading(true)
    const timeOut = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    scrollToActiveSong()

    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  return (
    <div className="song-library">
      <div className="song-library-head">
        <div className="song-library-frame">
          <div className="song-library-photo">
            <img
              src={
                currentSong
                  ? currentSong.avatar
                  : require('../../../common/header_icon.png')
              }
              alt={currentSong ? currentSong.song : 'Night Music'}
            />
            <h3>Your Library</h3>
          </div>
        </div>
      </div>
      <div className="song-library-body">
        <div className="song-library-list" ref={songList}>
          {songLibrary.songs[0] ? (
            songLibrary.songs.map((item, index) => (
              <div
                className={`song-library-item ${
                  currentSong && item._id === currentSong._id ? 'active' : ''
                }`}
                key={index}
                ref={(element) => {
                  songItem.current[index] = element
                }}
                onClick={() => handleClickSong(item, index)}
              >
                <div className="song-item-head">
                  <div className="song-item-head-img">
                    <img
                      src={item.img}
                      alt={item.song}
                      className="song-item-thumb"
                    />
                    {currentSong && item._id === currentSong._id && (
                      <img
                        src={require('../../../common/icon-playing.gif')}
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
                </div>
                <div className="song-item-time">
                  {changeTimeFromSecondToString(item.length)}
                </div>
                <div
                  className="song-item-tail"
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  <i
                    className={`bi bi-heart-fill song-item-heart ${
                      listFavoriteSong.find((songId) => songId === item._id)
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
                      <SongSetting songSelect={item} isStayLibrary={true} />
                    )}
                  </i>
                </div>
              </div>
            ))
          ) : (
            <>
              {isLoading ? (
                <div className="loadingEffect">
                  <Spin size="large" tip="Loading..."></Spin>
                </div>
              ) : (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  style={{
                    width: '100%',
                    margin: 'auto',
                    textAlign: 'center',
                    padding: '40% 0',
                    color: 'var(--text-color)',
                  }}
                >
                  {songLibrary.songListId && (
                    <Link
                      to="/initial"
                      style={{
                        textDecoration: 'none',
                        color: 'var(--text-color)',
                      }}
                    >
                      <i
                        className="bi bi-plus-circle-fill"
                        style={{
                          fontSize: '48px',
                          cursor: 'pointer',
                        }}
                      ></i>
                    </Link>
                  )}
                </Empty>
              )}
            </>
          )}
        </div>
      </div>
      <div className="library-frame-select">
        <select
          className="form-select form-select-sm library-select"
          aria-label=".form-select-sm example"
          onChange={handleSelectLibrary}
        >
          {songListInfo.map((item) => (
            <option value={item.songListId}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SongLibrary
