import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MAX_MOBILE } from '../../config/responsive'
import { changeTimeFromSecondToString } from '../../others/features'
import { requestEditLibrary } from '../../redux/apiCalls/apiLibrary'
import { requestUpdateSong } from '../../redux/apiCalls/apiSong'
import layoutSlice, {
  getRequestHideSetting,
} from '../../redux/slices/layoutSlice'
import songSlice, {
  getSongCurrentPlaylist,
  getInformationStopBroadcast,
  getStatusRandom,
} from '../../redux/slices/songSlice'
import SongSetting from '../SongSetting/SongSetting'
import './Control.scss'

function Control() {
  const libraryId = useSelector((state) => state.library.id)
  const listFavoriteSong = useSelector((state) => state.library.favoriteSong)
  const hideSongNav = useSelector((state) => state.layout.songNav)
  const songCurrent = useSelector(getSongCurrentPlaylist)
  const isStopBroadcast = useSelector(getInformationStopBroadcast)
  const requestRandom = useSelector(getStatusRandom)
  const receiveRequestFromSetting = useSelector(getRequestHideSetting)
  const [zoomOut, setZoomOut] = useState(true)
  const [breakpoint, setBreakpoint] = useState(window.innerWidth)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuting, setIsMuting] = useState(false)
  const [hidingControl, setHidingControl] = useState(false)
  const [isRandom, setIsRandom] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [alarm, setAlarm] = useState(0)
  const [isSelect, setIsSelect] = useState(false)
  const isTheFistTime = useRef(true)
  const setTime = useRef(0)
  const volumeInitial = useRef(0.6)
  const photoSinger = useRef()
  const heartIcon = useRef()
  const playIcon = useRef()
  const randomIcon = useRef()
  const repeatIcon = useRef()
  const songTrack = useRef()
  const volumeRange = useRef()
  const timeCurrent = useRef()
  const clockAlarm = useRef()
  const audio = useRef()
  const acceptCountPlay = useRef(false)
  const currentSong = useRef(songCurrent)
  const dispatch = useDispatch()

  const handleClickHeart = (song) => {
    heartIcon.current.classList.toggle('active')
    const status = heartIcon.current.getAttribute('class').includes('active')
    requestEditLibrary(dispatch, libraryId, song, 'like-song')
    requestUpdateSong(song, { action: 'like', status: status })
  }
  const handleClickSelect = () => {
    setIsSelect((preSelect) => !preSelect)
  }

  const handleHidingControl = (logic) => {
    setHidingControl(logic)
  }
  const handlePlaySong = async () => {
    if (isPlaying) {
      const res = await audio.current.pause()
    } else {
      const res = await audio.current.play()
    }
  }
  const handleNextSong = () => {
    dispatch(songSlice.actions.changeCurrentSong(1))
    if (isStopBroadcast) {
      dispatch(songSlice.actions.finishSong(false))
    }
  }
  const handlePreSong = () => {
    dispatch(songSlice.actions.changeCurrentSong(-1))
    if (isStopBroadcast) {
      dispatch(songSlice.actions.finishSong(false))
    }
  }
  const handleRandom = () => {
    if (isRandom) {
      randomIcon.current.classList.remove('active')
      dispatch(songSlice.actions.randomSong(false))
    } else {
      randomIcon.current.classList.add('active')
      dispatch(songSlice.actions.randomSong(true))
    }
    setIsRandom(!isRandom)
  }
  const handleRepeat = () => {
    repeatIcon.current.classList.toggle('active')
    setIsRepeat(!isRepeat)
  }
  const handleOpenTimer = () => {
    clockAlarm.current.classList.toggle('active')
  }
  const handleTimer = (select) => {
    clearTimeout(setTime.current)
    if (select === alarm) {
      setAlarm(0)
    } else {
      setAlarm(select)
      setTime.current = setTimeout(() => {
        setAlarm(0)
        audio.current.pause()
      }, select * 60 * 1000)
    }
  }
  const handleMuting = () => {
    if (isMuting) {
      volumeRange.current.style.width = `${volumeInitial.current * 100}%`
      audio.current.volume = volumeInitial.current
    } else {
      volumeRange.current.style.width = '0'
      audio.current.volume = 0
    }
    setIsMuting(!isMuting)
  }
  const handleSongTrack = (e) => {
    const rect = e.target.getBoundingClientRect()
    const positionClick = e.clientX - rect.left
    const progressPercent = (positionClick / rect.width) * 100
    songTrack.current.style.width = `${progressPercent}%`
    audio.current.currentTime =
      (positionClick / rect.width) * audio.current.duration
  }
  const handleVolumeRange = (e) => {
    const rect = e.target.getBoundingClientRect()
    const positionClick = e.clientX - rect.left
    const volumePercent = (positionClick / rect.width) * 100
    volumeRange.current.style.width = `${volumePercent}%`
    audio.current.volume = positionClick / rect.width
    volumeInitial.current = audio.current.volume
    isMuting && setIsMuting(!isMuting)
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

  useEffect(() => {
    if (receiveRequestFromSetting == true) {
      setIsSelect(false)
      dispatch(layoutSlice.actions.requestHideSongSetting(false))
    }
  }, [receiveRequestFromSetting])
  useEffect(() => {
    if (!requestRandom && isRandom) {
      randomIcon.current.classList.remove('active')
      setIsRandom(false)
    }
  }, [requestRandom])

  useEffect(() => {
    audio.current.addEventListener('play', () => {
      photoSinger.current.classList.add('rotating')
      setIsPlaying(true)
    })
    audio.current.addEventListener('pause', () => {
      photoSinger.current.classList.remove('rotating')
      setIsPlaying(false)
    })
    audio.current.addEventListener('ended', async () => {
      if (repeatIcon.current.getAttribute('class').includes('active')) {
        dispatch(songSlice.actions.changeCurrentSong(0))
        const res = await audio.current.play()
      } else {
        dispatch(songSlice.actions.finishSong(true))
        handleNextSong()
      }
    })
    audio.current.addEventListener('timeupdate', () => {
      if (audio.current.duration) {
        if (
          audio.current.currentTime > 30 &&
          acceptCountPlay.current === false
        ) {
          requestUpdateSong(currentSong.current, {
            action: 'play',
            status: true,
          })
          acceptCountPlay.current = true
        }
        const timeFormat = changeTimeFromSecondToString(
          audio.current.currentTime,
        )
        const progressPercent = Math.floor(
          (audio.current.currentTime / audio.current.duration) * 100,
        )
        timeCurrent.current.textContent = timeFormat
        songTrack.current.style.width = `${progressPercent}%`
      }
    })

    return () => {
      audio.current.removeEventListener('play', () => {
        photoSinger.current.classList.add('rotating')
        setIsPlaying(true)
      })
      audio.current.removeEventListener('pause', () => {
        photoSinger.current.classList.remove('rotating')
        setIsPlaying(false)
      })
      audio.current.removeEventListener('ended', async () => {
        if (repeatIcon.current.getAttribute('class').includes('active')) {
          dispatch(songSlice.actions.changeCurrentSong(0))
          const res = await audio.current.play()
        } else {
          dispatch(songSlice.actions.finishSong(true))
          handleNextSong()
        }
      })
      audio.current.removeEventListener('timeupdate', () => {
        if (audio.current.duration) {
          if (
            audio.current.currentTime > 30 &&
            acceptCountPlay.current === false
          ) {
            requestUpdateSong(currentSong.current, {
              action: 'play',
              status: true,
            })
            acceptCountPlay.current = true
          }
          const timeFormat = changeTimeFromSecondToString(
            audio.current.currentTime,
          )
          const progressPercent = Math.floor(
            (audio.current.currentTime / audio.current.duration) * 100,
          )
          timeCurrent.current.textContent = timeFormat
          songTrack.current.style.width = `${progressPercent}%`
        }
      })
    }
  }, [])
  useEffect(() => {
    if (isTheFistTime.current) {
      audio.current.volume = volumeInitial.current
      isTheFistTime.current = false
    }

    if (isStopBroadcast) {
      audio.current.pause()
    } else {
      audio.current.play()
    }

    currentSong.current = songCurrent
    acceptCountPlay.current = false
  }, [songCurrent])

  return (
    <>
      {breakpoint < MAX_MOBILE && zoomOut ? (
        <>
          <div
            className="control-mini"
            onClick={() => {
              setZoomOut(false)
            }}
            style={hideSongNav ? { bottom: '0' } : { bottom: '64px' }}
          >
            <div className="control-mini-wrapper">
              <div className="control-mini-head">
                <img
                  src={songCurrent.avatar}
                  alt={songCurrent.song}
                  ref={photoSinger}
                />
                <div className="control-mini-frame">
                  <div className="control-mini-decoration">
                    <h3>{songCurrent.song}</h3>
                    <span>
                      {songCurrent.name.map((item, index) => {
                        if (index === songCurrent.name.length - 1) {
                          return item
                        }
                        return item + ', '
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="control-mini-body">
                <div className="control-mini-top">
                  <i
                    className={`bi bi-heart-fill control-mini-heart ${
                      listFavoriteSong.find(
                        (songId) => songId === songCurrent._id,
                      )
                        ? 'active'
                        : ''
                    }`}
                    ref={heartIcon}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleClickHeart(songCurrent)
                    }}
                  ></i>
                  <i
                    className={`control-mini-play ${
                      isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePlaySong()
                    }}
                    ref={playIcon}
                  ></i>
                  <i
                    className="bi bi-skip-end-fill control-mini-next"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNextSong()
                    }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="control-mini-upon">
              <span
                className="control-start"
                ref={timeCurrent}
                style={{ display: 'none' }}
              >
                00:00
              </span>
              <div className="control-mini-upon-wrap">
                <div className="progress-track">
                  <div className="progress-track-update" ref={songTrack}></div>
                </div>
              </div>
            </div>
            {/* <audio id="audio" src={songCurrent.audio} ref={audio}></audio> */}
          </div>
        </>
      ) : (
        <>
          {breakpoint < MAX_MOBILE && !zoomOut ? (
            <>
              <div
                className={`control-mini-icon ${
                  !hidingControl ? 'disable' : ''
                }`}
                onClick={() => handleHidingControl(false)}
              >
                <i className="bi bi-chevron-up"></i>
              </div>
              <div
                className={`control ${hidingControl ? 'disable' : ''}`}
                style={{ background: `var(--music-color)` }}
              >
                <div className="control-wrapper">
                  <div className="control-head">
                    <img
                      src={songCurrent.avatar}
                      alt={songCurrent.song}
                      ref={photoSinger}
                    />
                    <div className="control-frame">
                      <div className="control-decoration">
                        <h3>{songCurrent.song}</h3>
                        <span>
                          {songCurrent.name.map((item, index) => {
                            if (index === songCurrent.name.length - 1) {
                              return item
                            }
                            return item + ', '
                          })}
                        </span>
                      </div>
                      <div className="control-handle">
                        <i
                          className={`bi bi-heart-fill ${
                            listFavoriteSong.find(
                              (songId) => songId === songCurrent._id,
                            )
                              ? 'active'
                              : ''
                          }`}
                          ref={heartIcon}
                          onClick={() => handleClickHeart(songCurrent)}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="control-body">
                    <div className="control-top">
                      <i
                        className="bi bi-shuffle control-random"
                        onClick={handleRandom}
                        ref={randomIcon}
                      ></i>
                      <i
                        className="bi bi-skip-start-fill control-pre"
                        onClick={handlePreSong}
                      ></i>
                      <i
                        className={`control-play ${
                          isPlaying ? 'bi bi-pause-circle' : 'bi bi-play-circle'
                        }`}
                        onClick={handlePlaySong}
                        ref={playIcon}
                      ></i>
                      <i
                        className="bi bi-skip-end-fill control-next"
                        onClick={handleNextSong}
                      ></i>
                      <i
                        className="bi bi-arrow-repeat control-repeat"
                        onClick={handleRepeat}
                        ref={repeatIcon}
                      ></i>
                    </div>
                    <div className="control-bottom">
                      <span className="control-start" ref={timeCurrent}>
                        00:00
                      </span>
                      <input
                        id="control-progress"
                        className="control-progress"
                        type="range"
                        value="0"
                        step="1"
                        min="0"
                        max="100"
                        onClick={handleSongTrack}
                        onChange={() => {}}
                      />
                      <div className="progress-track">
                        <div
                          className="progress-track-update"
                          ref={songTrack}
                        ></div>
                      </div>
                      <span className="control-end">
                        {changeTimeFromSecondToString(songCurrent.length)}
                      </span>
                    </div>
                  </div>
                  <div className="control-tail">
                    <i
                      className="bi bi-alarm control-clock"
                      onClick={handleOpenTimer}
                    >
                      <div className="control-timer" ref={clockAlarm}>
                        <ul className="control-timer-list">
                          <li
                            className={`control-timer-item ${
                              alarm === 15 ? 'active' : ''
                            }`}
                            onClick={() => handleTimer(15)}
                          >
                            15 minutes
                          </li>
                          <li
                            className={`control-timer-item ${
                              alarm === 30 ? 'active' : ''
                            }`}
                            onClick={() => handleTimer(30)}
                          >
                            30 minutes
                          </li>
                          <li
                            className={`control-timer-item ${
                              alarm === 60 ? 'active' : ''
                            }`}
                            onClick={() => handleTimer(60)}
                          >
                            1 hour
                          </li>
                          <li className={`control-timer-item`}>Custom</li>
                        </ul>
                      </div>
                    </i>
                    <i
                      className={`control-volume ${
                        isMuting ? 'bi bi-volume-mute' : 'bi bi-volume-up'
                      }`}
                      onClick={handleMuting}
                    ></i>
                    <input
                      id="control-range"
                      className="control-range"
                      type="range"
                      value=""
                      step="1"
                      min="0"
                      max="100"
                      onClick={handleVolumeRange}
                      onChange={() => {}}
                    />
                    <div className="volume-track">
                      <div
                        className="volume-track-update"
                        ref={volumeRange}
                        style={{
                          width: `${
                            isMuting ? 0 : volumeInitial.current * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <i className="bi bi-arrows-fullscreen control-open"></i>
                  </div>
                  <div
                    className="control-close"
                    onClick={() => setZoomOut(true)}
                  >
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <span
                    className="bi bi-three-dots-vertical control-select"
                    onClick={handleClickSelect}
                  >
                    {isSelect && (
                      <SongSetting
                        songSelect={songCurrent}
                        isAtControl={true}
                        isAtMobile={true}
                      />
                    )}
                  </span>
                </div>
                {/* <audio id="audio" src={songCurrent.audio} ref={audio}></audio> */}
              </div>
            </>
          ) : (
            <>
              <div
                className={`control-mini-icon ${
                  !hidingControl ? 'disable' : ''
                }`}
                onClick={() => handleHidingControl(false)}
              >
                <i className="bi bi-chevron-up"></i>
              </div>
              <div
                className={`control ${hidingControl ? 'disable' : ''}`}
                style={{ background: `var(--music-color)` }}
              >
                <div className="control-wrapper">
                  <div className="control-head">
                    <img
                      src={songCurrent.avatar}
                      alt={songCurrent.song}
                      ref={photoSinger}
                    />
                    <div className="control-frame">
                      <div className="control-decoration">
                        <h3>{songCurrent.song}</h3>
                        <span>
                          {songCurrent.name.map((item, index) => {
                            if (index === songCurrent.name.length - 1) {
                              return item
                            }
                            return item + ', '
                          })}
                        </span>
                      </div>
                      <div className="control-handle">
                        <i
                          className={`bi bi-heart-fill ${
                            listFavoriteSong.find(
                              (songId) => songId === songCurrent._id,
                            )
                              ? 'active'
                              : ''
                          }`}
                          ref={heartIcon}
                          onClick={() => handleClickHeart(songCurrent)}
                        ></i>
                        <span
                          className="bi bi-three-dots"
                          onClick={handleClickSelect}
                        >
                          {isSelect && (
                            <SongSetting
                              songSelect={songCurrent}
                              isAtControl={true}
                            />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="control-body">
                    <div className="control-top">
                      <i
                        className="bi bi-shuffle control-random"
                        onClick={handleRandom}
                        ref={randomIcon}
                      ></i>
                      <i
                        className="bi bi-skip-start-fill control-pre"
                        onClick={handlePreSong}
                      ></i>
                      <i
                        className={`control-play ${
                          isPlaying ? 'bi bi-pause-circle' : 'bi bi-play-circle'
                        }`}
                        onClick={handlePlaySong}
                        ref={playIcon}
                      ></i>
                      <i
                        className="bi bi-skip-end-fill control-next"
                        onClick={handleNextSong}
                      ></i>
                      <i
                        className="bi bi-arrow-repeat control-repeat"
                        onClick={handleRepeat}
                        ref={repeatIcon}
                      ></i>
                    </div>
                    <div className="control-bottom">
                      <span className="control-start" ref={timeCurrent}>
                        00:00
                      </span>
                      <input
                        id="control-progress"
                        className="control-progress"
                        type="range"
                        value="0"
                        step="1"
                        min="0"
                        max="100"
                        onClick={handleSongTrack}
                        onChange={() => {}}
                      />
                      <div className="progress-track">
                        <div
                          className="progress-track-update"
                          ref={songTrack}
                        ></div>
                      </div>
                      <span className="control-end">
                        {changeTimeFromSecondToString(songCurrent.length)}
                      </span>
                    </div>
                  </div>
                  <div className="control-tail">
                    <i
                      className="bi bi-alarm control-clock"
                      onClick={handleOpenTimer}
                    >
                      <div className="control-timer" ref={clockAlarm}>
                        <ul className="control-timer-list">
                          <li
                            className={`control-timer-item ${
                              alarm === 15 ? 'active' : ''
                            }`}
                            onClick={() => handleTimer(15)}
                          >
                            15 minutes
                          </li>
                          <li
                            className={`control-timer-item ${
                              alarm === 30 ? 'active' : ''
                            }`}
                            onClick={() => handleTimer(30)}
                          >
                            30 minutes
                          </li>
                          <li
                            className={`control-timer-item ${
                              alarm === 60 ? 'active' : ''
                            }`}
                            onClick={() => handleTimer(60)}
                          >
                            1 hour
                          </li>
                          <li className={`control-timer-item`}>Custom</li>
                        </ul>
                      </div>
                    </i>
                    <i
                      className={`control-volume ${
                        isMuting ? 'bi bi-volume-mute' : 'bi bi-volume-up'
                      }`}
                      onClick={handleMuting}
                    ></i>
                    <input
                      id="control-range"
                      className="control-range"
                      type="range"
                      value=""
                      step="1"
                      min="0"
                      max="100"
                      onClick={handleVolumeRange}
                      onChange={() => {}}
                    />
                    <div className="volume-track">
                      <div
                        className="volume-track-update"
                        ref={volumeRange}
                        style={{
                          width: `${
                            isMuting ? 0 : volumeInitial.current * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <i className="bi bi-arrows-fullscreen control-open"></i>
                  </div>
                  <div
                    className="control-close"
                    onClick={() => handleHidingControl(true)}
                  >
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
                {/* <audio id="audio" src={songCurrent.audio} ref={audio}></audio> */}
              </div>
            </>
          )}
        </>
      )}
      <audio id="audio" src={songCurrent.audio} ref={audio}></audio>
    </>
  )
}

export default Control
