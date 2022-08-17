import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Spin } from 'antd'
import ThumbnailVideo from '../../../components/ThumbnailVideo/ThumbnailVideo'
import {
  requestGetAllVideos,
  requestGetAPIYoutube,
} from '../../../redux/apiCalls/apiVideo'

function SongMV() {
  const listMV = useSelector((state) => state.video.mv)
  const dispatch = useDispatch()

  const handleClick = (item) => {
    const videoId = item.link.replace('https://www.youtube.com/watch?v=', '')
    requestGetAPIYoutube(dispatch, videoId)
  }

  useEffect(() => {
    !listMV[0] && requestGetAllVideos(dispatch)
  }, [])

  return (
    <div className="song-mv">
      <div className="song-mv-box">
        <div className="song-mv-heading">Popular Music Videos in Vietnam</div>
        <div className="song-mv-container">
          <div className="song-mv-list">
            {listMV.map((item) => (
              <Link
                to={`/mv/${item._id}`}
                style={{ textDecoration: 'none' }}
                key={item._id}
                onClick={() => handleClick(item)}
              >
                <ThumbnailVideo content={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {!listMV[0] && (
        <div className="loadingEffect">
          <Spin size="large" tip="Loading..."></Spin>
        </div>
      )}
    </div>
  )
}

export default SongMV
