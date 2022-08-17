import React, { useEffect, useRef, useState } from 'react'
import './SongNav.scss'
import {
  songNavHeaderAPI,
  songNavBodyAPI,
} from '../../resources/images/SongNavAPI'
import { Link, useLocation } from 'react-router-dom'
import 'antd/dist/antd.css'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Popconfirm } from 'antd'
import OfficialLogo from '../OfficialLogo/OfficialLogo'
import { MAX_MOBILE } from '../../config/responsive'
import { useDispatch, useSelector } from 'react-redux'
import { hideSongNav } from '../../redux/slices/layoutSlice'
import { requestEditLibrary } from '../../redux/apiCalls/apiLibrary'
import {
  changeCurrentSongList,
  getAllListInfo,
} from '../../redux/slices/librarySlice'
function SongNav() {
  const libraryId = useSelector((state) => state.library.id)
  const currentListId = useSelector(
    (state) => state.library.currentList.songListId,
  )
  const songListInfo = useSelector(getAllListInfo)
  const songListInfoAnother = useSelector(getAllListInfo)
  const [breakpoint, setBreakpoint] = useState(window.innerWidth)
  const [indexRename, setIndexRename] = useState(-1)
  const [library, setLibrary] = useState([])
  const dispatch = useDispatch()
  const params = useLocation()
  const inputRef = useRef([])
  const selectRef = useRef([])

  const handleClickSelect = (index) => {
    selectRef.current[index].classList.toggle('active')
  }
  const handleAddLibrary = () => {
    requestEditLibrary(dispatch, libraryId, '', 'add-list')
  }
  const handleRename = (e, songListId) => {
    setLibrary((preLibrary) => {
      const changedLibrary = [...preLibrary]
      const indexList = changedLibrary.findIndex(
        (item) => item.songListId === songListId,
      )
      changedLibrary[indexList].name = e.target.value
      return changedLibrary
    })
  }
  const handleBlur = (e, songListId) => {
    const beforeName = songListInfoAnother.find(
      (item) => item.songListId === songListId,
    ).name
    e.target.value != beforeName &&
      requestEditLibrary(
        dispatch,
        libraryId,
        { name: e.target.value },
        'rename',
        songListId,
      )
  }
  const handleRemoveLibrary = (songListId) => {
    requestEditLibrary(dispatch, libraryId, '', 'remove-list', songListId)
    message.success({
      content: 'Remove a list successfully',
      style: {
        marginTop: '48px',
      },
      duration: 4,
    })
    // setLibrary(preLibrary => {
    //   const changedLibrary = [...preLibrary]
    //   const indexList = changedLibrary.findIndex(item => item.songListId === songListId)
    //   changedLibrary.splice(indexList, 1)
    //   return changedLibrary
    // })
  }
  const handleClickCurrentLibrary = (currLibraryId) => {
    dispatch(changeCurrentSongList(currLibraryId))
  }
  const handleCleanSongList = (songListId) => {
    requestEditLibrary(dispatch, libraryId, '', 'remove-all-song', songListId)
    message.success({
      content: 'Clean a list successfully',
      style: {
        marginTop: '48px',
      },
      duration: 4,
    })
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
    dispatch(hideSongNav(false))
    return () => {
      breakpoint < MAX_MOBILE && dispatch(hideSongNav(true))
    }
  }, [])
  useEffect(() => {
    setLibrary(songListInfo)
  }, [songListInfo])
  // console.log(currentListId)
  return (
    <div className="song-nav">
      {breakpoint > MAX_MOBILE && <OfficialLogo />}
      <div className="song-nav-header">
        {songNavHeaderAPI.map((item) => (
          <Link to={item.link} key={item.id} style={{ textDecoration: 'none' }}>
            <div
              className={`song-nav-item ${
                item.link === params.pathname ? 'active' : ''
              }`}
            >
              <i className={item.icon}></i>
              <span className="song-nav-name">{item.name}</span>
              {item.description && (
                <span className="song-nav-description">{item.description}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="song-nav-body">
        <div className="song-nav-line"></div>
        {songNavBodyAPI.map((item) => (
          <Link to={item.link} key={item.id} style={{ textDecoration: 'none' }}>
            <div className="song-nav-item">
              <i className={item.icon}></i>
              <span className="song-nav-name">{item.name}</span>
              {item.description && (
                <span className="song-nav-description">{item.description}</span>
              )}
            </div>
          </Link>
        ))}
        <div className="song-nav-line"></div>
        <div className="song-nav-library">
          <Form>
            <Form.List name="names">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {library.map((item, index) => (
                    <Form.Item
                      key={item.songListId}
                      className="library-item"
                      style={
                        currentListId === item.songListId
                          ? {
                              backgroundColor: '#ffffff1a',
                            }
                          : {
                              backgroundColor: 'transparent',
                            }
                      }
                    >
                      <Form.Item
                        className="library-name"
                        onClick={() =>
                          handleClickCurrentLibrary(item.songListId)
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <i className="bi bi-music-note-beamed"></i>
                        <Input
                          value={item.name}
                          ref={(element) => {
                            inputRef.current[index] = element
                          }}
                          style={
                            item.songListId === indexRename
                              ? {
                                  width: '100%',
                                  border: 'none',
                                  cursor: 'text',
                                }
                              : {
                                  width: '100%',
                                  border: 'none',
                                  cursor: 'inherit',
                                }
                          }
                          readOnly={
                            item.songListId === indexRename ? false : 'readonly'
                          }
                          onBlur={(e) => {
                            e.stopPropagation()
                            setIndexRename(-1)
                            handleBlur(e, item.songListId)
                          }}
                          onChange={(e) => handleRename(e, item.songListId)}
                        />
                      </Form.Item>
                      {library.length > 0 ? (
                        <>
                          <Popconfirm
                            placement="bottomLeft"
                            title="Are you sure to remove this list?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => {
                              handleRemoveLibrary(item.songListId)
                            }}
                          >
                            <MinusCircleOutlined className="library-remove" />
                          </Popconfirm>

                          <i
                            className="bi bi-gear library-setting"
                            onClick={() => handleClickSelect(index)}
                          >
                            <div
                              className="library-select"
                              ref={(element) => {
                                selectRef.current[index] = element
                              }}
                            >
                              <ul>
                                <li
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setIndexRename(item.songListId)
                                    inputRef.current[index].select()
                                  }}
                                >
                                  Rename
                                </li>
                                <li
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleCleanSongList(item.songListId)
                                  }}
                                >
                                  Clean
                                </li>
                              </ul>
                            </div>
                          </i>
                        </>
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        // add()
                        handleAddLibrary()
                      }}
                      style={{
                        width: '100%',
                      }}
                      icon={<PlusOutlined />}
                    >
                      Create new playlist
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </div>
      </div>
      {/* <Link to="/initial" style={{ textDecoration: 'none' }}>
        <div className="song-nav-create">
          <i className="bi bi-plus-lg"></i>
          <span>Create new playlist</span>
        </div>
      </Link> */}
    </div>
  )
}

export default SongNav
