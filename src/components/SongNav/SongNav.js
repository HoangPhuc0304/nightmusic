import React, { useEffect, useRef, useState } from 'react'
import './SongNav.scss'
import {
  songNavHeaderAPI,
  songNavBodyAPI,
} from '../../resources/images/SongNavAPI'
import { Link, useLocation } from 'react-router-dom'
import 'antd/dist/antd.css';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import OfficialLogo from '../OfficialLogo/OfficialLogo'
import { MAX_MOBILE } from '../../config/responsive'
import { useDispatch } from 'react-redux'
import { hideSongNav } from '../../redux/slices/layoutSlice'
function SongNav() {
  const [breakpoint, setBreakpoint] = useState(window.innerWidth)
  const [indexRename, setIndexRename] = useState(-1)
  const [library, setLibrary] = useState([])
  const dispatch = useDispatch()
  const params = useLocation()
  const selectRef = useRef([])

  const handleClickSelect = (index) => {
    selectRef.current[index].classList.toggle('active')
  }
  const handleAddLibrary = () => {
    setLibrary(preLibrary => [
      ...preLibrary,
      {
        name: `#${preLibrary.length + 1}`
      }
    ])
  }
  const handleRename = (e, index) => {

    setLibrary(preLibrary => {
      const changedLibrary = [...preLibrary]
      changedLibrary[index].name = e.target.value
      return changedLibrary
    })
    // console.log(changedLibrary)
  }
  const handleRemoveLibrary = (index) => {
    console.log(index)
    setLibrary(preLibrary => {
      const changedLibrary = [...preLibrary]
      changedLibrary.splice(index, 1)
      return changedLibrary
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
  console.log(library)
  return (
    <div className="song-nav">
      {breakpoint > MAX_MOBILE && <OfficialLogo />}
      <div className="song-nav-header">
        {songNavHeaderAPI.map((item) => (
          <Link to={item.link} key={item.id} style={{ textDecoration: 'none' }}>
            <div
              className={`song-nav-item ${item.link === params.pathname ? 'active' : ''
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
        <div className='song-nav-library'>
          <Form>
            <Form.List
              name="names"
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      key={field.key}
                      className="library-item"
                    >
                      <Form.Item
                        className='library-name'
                      >
                        <i className="bi bi-music-note-beamed"></i>
                        <Input
                          value={library[index].name}
                          style={{
                            width: '100%',
                            border: 'none',
                          }}
                          readOnly={index === indexRename ? false : 'readonly'}
                          onBlur={(e) => {
                            e.stopPropagation()
                            setIndexRename(-1)
                          }}
                          onChange={(e) => handleRename(e, index)}
                        />
                      </Form.Item>
                      {fields.length > 0 ? (
                        <>
                          <MinusCircleOutlined
                            className="library-remove"
                            onClick={() => {
                              remove(field.name)
                              handleRemoveLibrary(index)
                            }}
                          />
                          <i
                            className="bi bi-gear library-setting"
                            onClick={() => handleClickSelect(index)}
                          >
                            <div
                              className='library-select'
                              ref={(element) => {
                                selectRef.current[index] = element
                              }}
                            >
                              <ul>
                                <li onClick={(e) => {
                                  e.stopPropagation()
                                  setIndexRename(index)
                                }}>Rename</li>
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
                        add()
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
