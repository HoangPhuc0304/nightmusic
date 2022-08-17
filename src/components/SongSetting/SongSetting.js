import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'antd/dist/antd.css'
import { message, Modal, Radio, Space } from 'antd'
import styled from 'styled-components'
import {
  requestEditLibrary,
  requestGetLibrary,
} from '../../redux/apiCalls/apiLibrary'
import layoutSlice from '../../redux/slices/layoutSlice'
import songSlice from '../../redux/slices/songSlice'
import { MAX_MOBILE, MAX_TABLET } from '../../config/responsive'
import { getAllListInfo } from '../../redux/slices/librarySlice'

const AngleUpStyle = styled.a`
  width: 100%;
  height: 2rem;
  color: #000;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  float: left;
  font-weight: 500;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 3%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
const AngleUpStyleMobile = styled.a`
  width: 100%;
  height: 2rem;
  color: #000;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  float: left;
  font-weight: 500;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 3%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
const AngleDownStyle = styled.div`
  width: 100%;
  height: 2rem;
  color: #000;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  float: left;
  font-weight: 500;

  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 3%;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #fff;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
const AngleLeftStyle = styled.div`
  position: absolute;
  top: 0;
  right: calc(100% + 1rem);
  width: 300px;
  background-color: #2d323a;
  font-size: $font-text;
  cursor: default;
  z-index: 1;
  text-align: center;
  padding: 1rem;
  border-radius: 6px;
  display: none;

  @media only screen and (min-width: ${MAX_MOBILE +
    1}px) and (max-width: ${MAX_TABLET}px) {
    width: 250px;
  }

  &.active {
    display: block;
  }

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    right: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid #2d323a;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -16px;
    width: 1rem;
    height: 6rem;
    background-color: transparent;
  }
`

const AngleLeftStyleMobile = styled.div`
  position: absolute;
  top: 0;
  right: calc(100% + 1rem);
  width: auto;
  background-color: #2d323a;
  font-size: $font-text;
  cursor: default;
  z-index: 1;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: none;

  @media only screen and (min-width: ${MAX_MOBILE +
    1}px) and (max-width: ${MAX_TABLET}px) {
    width: 250px;
  }

  &.active {
    display: block;
  }

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    right: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid #2d323a;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -16px;
    width: 1rem;
    height: 6rem;
    background-color: transparent;
  }
`

const AngleRightStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(100% + 1rem);
  width: 300px;
  background-color: #2d323a;
  font-size: $font-text;
  cursor: default;
  z-index: 1;
  text-align: center;
  padding: 1rem;
  border-radius: 6px;
  display: none;

  @media only screen and (min-width: ${MAX_MOBILE +
    1}px) and (max-width: ${MAX_TABLET}px) {
    width: 250px;
  }

  &.active {
    display: block;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 10px;
    left: -10px;
    width: 0;
    height: 0;
    border-right: 10px solid #2d323a;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -16px;
    width: 1rem;
    height: 6rem;
    background-color: transparent;
  }
`
function SongSetting(props) {
  const libraryId = useSelector((state) => state.library.id)
  const currentListId = useSelector(
    (state) => state.library.currentList.songListId,
  )
  const songListInfo = useSelector(getAllListInfo)
  const [notice, setNotice] = useState('')
  const [icon, setIcon] = useState('bi bi-files')
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [selectedList, setSelectedList] = useState(songListInfo[0].songListId)

  const dispatch = useDispatch()

  const changeCopyIcon = (e) => {
    const textCopy = document.querySelector('#linkVideo')
    textCopy.select()
    textCopy.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(textCopy.value)
    setIcon('bi bi-check-lg active')
  }
  const handleHoverShare = () => {
    document.querySelector('.song-clipboard').classList.add('active')
  }
  const handleFinishShare = () => {
    document.querySelector('.song-clipboard').classList.remove('active')
  }
  const handleNextBroadcast = (item) => {
    dispatch(songSlice.actions.addNextBroadcast(item))
  }
  const handleRemoveSongFromLibrary = (item, currentListId) => {
    message.success({
      content: 'Remove a song successfully',
      style: {
        marginTop: '48px',
      },
      duration: 4,
    })
    requestEditLibrary(dispatch, libraryId, item, 'delete', currentListId)
  }
  const handleAddSongToLibrary = (item, selectedList) => {
    message.success({
      content: 'Add a song to library successfully',
      style: {
        marginTop: '48px',
      },
      duration: 4,
    })
    requestEditLibrary(dispatch, libraryId, item, 'add', selectedList)
  }
  const handleSetting = (isAtControl, isAtMobile) => {
    if (isAtControl) {
      if (isAtMobile) {
        return {
          top: '100%',
          right: '1rem',
        }
      } else {
        return {
          bottom: '100%',
          right: '0',
        }
      }
    } else {
      return {
        top: '100%',
        right: '0',
      }
    }
  }

  useEffect(() => {
    const event = setTimeout(() => {
      setIcon('bi bi-files')
    }, 5000)

    return () => {
      clearTimeout(event)
    }
  }, [icon])

  useEffect(() => {
    const HideSetting = () => {
      dispatch(layoutSlice.actions.requestHideSongSetting(true))
    }
    window.addEventListener('click', HideSetting)
    return () => {
      window.removeEventListener('click', HideSetting)
    }
  }, [])
  useEffect(() => {
    !libraryId && requestGetLibrary(dispatch)
  }, [])

  return (
    <div
      className="song-setting"
      style={handleSetting(props.isAtControl, props.isAtMobile)}
    >
      {props.isAtControl ? (
        <>
          {props.isAtMobile ? (
            <AngleUpStyleMobile
              className="song-broadcast"
              onClick={() => handleNextBroadcast(props.songSelect)}
            >
              <i className="bi bi-broadcast-pin"></i>
              Next broadcast
            </AngleUpStyleMobile>
          ) : (
            <div
              className="song-broadcast"
              onClick={() => handleNextBroadcast(props.songSelect)}
            >
              <i className="bi bi-broadcast-pin"></i>
              Next broadcast
            </div>
          )}
        </>
      ) : (
        <AngleUpStyle
          className="song-broadcast"
          onClick={() => handleNextBroadcast(props.songSelect)}
        >
          <i className="bi bi-broadcast-pin"></i>
          Next broadcast
        </AngleUpStyle>
      )}
      {props.isStayLibrary ? (
        <div
          className="song-remove"
          onClick={() =>
            handleRemoveSongFromLibrary(props.songSelect, currentListId)
          }
        >
          <i className="bi bi-trash-fill"></i>
          Remove from your library
        </div>
      ) : (
        <div
          className="song-add"
          onClick={(e) => {
            e.stopPropagation()
            setIsAddModalVisible(true)
          }}
        >
          <i className="bi bi-plus-circle-fill"></i>
          Add from your library
          <Modal
            title="Basic Modal"
            centered
            visible={isAddModalVisible}
            onOk={(e) => {
              e.stopPropagation()
              handleAddSongToLibrary(props.songSelect, selectedList)
              setIsAddModalVisible(false)
            }}
            onCancel={(e) => {
              e.stopPropagation()
              setIsAddModalVisible(false)
            }}
          >
            <Radio.Group
              onChange={(e) => {
                e.stopPropagation()
                setSelectedList(e.target.value)
              }}
              value={selectedList}
            >
              <Space direction="vertical">
                {songListInfo.map((list) => (
                  <Radio key={list.songListId} value={list.songListId}>
                    {list.name}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </Modal>
        </div>
      )}
      <div
        className="song-share"
        onMouseOver={handleHoverShare}
        onMouseOut={handleFinishShare}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <i className="bi bi-share-fill"></i>
        Share
        {props.isAtControl ? (
          <>
            {props.isAtMobile ? (
              <AngleLeftStyleMobile className="song-clipboard">
                <div className="song-clipboard-body">
                  <input
                    type="text"
                    value={props.songSelect.link}
                    id="linkVideo"
                    style={{ display: 'none' }}
                    onChange={(e) => setNotice(e.target.value)}
                  />
                  <button
                    className={icon}
                    onClick={changeCopyIcon}
                    style={{ margin: '0 auto' }}
                  ></button>
                </div>
                <div className="song-clipboard-tail">
                  <a
                    href="https://www.facebook.com/"
                    className="social-size social-fb social-background"
                    target="_blank"
                  ></a>
                  <a
                    href="https://www.google.com/"
                    className="social-size social-google social-background"
                    target="_blank"
                  ></a>
                  <a
                    href="https://www.apple.com/"
                    className="social-size social-apple social-background"
                    target="_blank"
                  ></a>
                </div>
              </AngleLeftStyleMobile>
            ) : (
              <AngleRightStyle className="song-clipboard">
                <div className="song-clipboard-header">
                  <i className="bi bi-send-fill song-clipboard-icon"></i>
                  <span>Share to your platforms</span>
                </div>
                <div className="song-clipboard-body">
                  <input
                    type="text"
                    value={props.songSelect.link}
                    id="linkVideo"
                    onChange={(e) => setNotice(e.target.value)}
                  />
                  <button className={icon} onClick={changeCopyIcon}></button>
                </div>
                <div className="song-clipboard-tail">
                  <a
                    href="https://www.facebook.com/"
                    className="social-size social-fb social-background"
                    target="_blank"
                  ></a>
                  <a
                    href="https://www.google.com/"
                    className="social-size social-google social-background"
                    target="_blank"
                  ></a>
                  <a
                    href="https://www.apple.com/"
                    className="social-size social-apple social-background"
                    target="_blank"
                  ></a>
                </div>
              </AngleRightStyle>
            )}
          </>
        ) : (
          <AngleLeftStyle className="song-clipboard">
            <div className="song-clipboard-header">
              <i className="bi bi-send-fill song-clipboard-icon"></i>
              <span>Share to your platforms</span>
            </div>
            <div className="song-clipboard-body">
              <input
                type="text"
                value={props.songSelect.link}
                id="linkVideo"
                onChange={(e) => setNotice(e.target.value)}
              />
              <button className={icon} onClick={changeCopyIcon}></button>
            </div>
            <div className="song-clipboard-tail">
              <a
                href="https://www.facebook.com/"
                className="social-size social-fb social-background"
                target="_blank"
              ></a>
              <a
                href="https://www.google.com/"
                className="social-size social-google social-background"
                target="_blank"
              ></a>
              <a
                href="https://www.apple.com/"
                className="social-size social-apple social-background"
                target="_blank"
              ></a>
            </div>
          </AngleLeftStyle>
        )}
      </div>
      {props.isAtControl ? (
        <>
          {props.isAtMobile ? (
            <a
              href={props.songSelect.audio}
              download
              className="song-download"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <i className="bi bi-download"></i>
              Download
            </a>
          ) : (
            <AngleDownStyle
              href={props.songSelect.audio}
              download
              className="song-download"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <i className="bi bi-download"></i>
              Download
            </AngleDownStyle>
          )}
        </>
      ) : (
        <a
          href={props.songSelect.audio}
          download
          className="song-download"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <i className="bi bi-download"></i>
          Download
        </a>
      )}
    </div>
  )
}

export default SongSetting
