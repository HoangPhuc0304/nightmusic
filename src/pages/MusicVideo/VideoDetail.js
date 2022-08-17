import React, { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import ThumbnailVideo from '../../components/ThumbnailVideo/ThumbnailVideo'
import videoSlice from '../../redux/slices/videoSlice'
import { calculateScore, changeScoreToRating } from '../../others/features'
import SongNav from '../../components/SongNav/SongNav'
import {
  requestGetAllVideos,
  requestGetAPIYoutube,
} from '../../redux/apiCalls/apiVideo'
import {
  requestEditLibrary,
  requestGetLibrary,
} from '../../redux/apiCalls/apiLibrary'

function VideoDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const mvList = useSelector((state) => state.video.mv)
  const statistic = useSelector((state) => state.video.statistic)
  const snippet = useSelector((state) => state.video.snippet)
  const libraryId = useSelector((state) => state.library.id)
  const listLike = useSelector((state) => state.library.favoriteVideo)
  const listDislike = useSelector((state) => state.library.dislikedVideo)

  const likeRef = useRef()
  const dislikeRef = useRef()
  let starRating

  const handleLikeClick = (item) => {
    likeRef.current.classList.toggle('active')
    const statusLike = likeRef.current.getAttribute('class').includes('active')
    const statusDislike = dislikeRef.current
      .getAttribute('class')
      .includes('active')
    if (statusLike) {
      statusDislike && dislikeRef.current.classList.remove('active')
    }
    requestEditLibrary(dispatch, libraryId, item, 'like-video')
  }
  const handleDislikeClick = (item) => {
    dislikeRef.current.classList.toggle('active')
    const statusLike = likeRef.current.getAttribute('class').includes('active')
    const statusDislike = dislikeRef.current
      .getAttribute('class')
      .includes('active')
    if (statusDislike) {
      statusLike && likeRef.current.classList.remove('active')
    }
    requestEditLibrary(dispatch, libraryId, item, 'dislike-video')
  }
  const handleClick = (item) => {
    const videoId = item.link.replace('https://www.youtube.com/watch?v=', '')
    requestGetAPIYoutube(dispatch, videoId)
  }

  useEffect(() => {
    dispatch(videoSlice.actions.requestVideoDisplay(id))
  }, [id])

  useEffect(() => {
    !mvList[0] && requestGetAllVideos(dispatch)
    !libraryId && requestGetLibrary(dispatch)
  }, [])

  return (
    <>
      <SongNav />
      <div className="video-page">
        {mvList.length > 0 ? (
          <div className="video-page-background">
            <div className="video-page-watch">
              <div className="video-page-main">
                <ReactPlayer
                  className="video-display"
                  url={mvList[0].link}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="video-information">
                <div className="video-information-header">
                  <div className="video-information-decoration">
                    {snippet.title}
                  </div>
                  <div className="video-information-behavior">
                    <span className="video-behavior-like">
                      <i
                        className={
                          listLike.find((item) => item === mvList[0]._id)
                            ? 'bi bi-hand-thumbs-up-fill active'
                            : 'bi bi-hand-thumbs-up-fill'
                        }
                        onClick={() => handleLikeClick(mvList[0])}
                        ref={likeRef}
                      ></i>
                      Like
                    </span>
                    <span className="video-behavior-dislike">
                      <i
                        className={
                          listDislike.find((item) => item === mvList[0]._id)
                            ? 'bi bi-hand-thumbs-down-fill active'
                            : 'bi bi-hand-thumbs-down-fill'
                        }
                        onClick={() => handleDislikeClick(mvList[0])}
                        ref={dislikeRef}
                      ></i>
                      Dislike
                    </span>
                  </div>
                </div>
                <div className="video-information-channel">
                  <div className="video-information-review">
                    <img
                      src={mvList[0].avatar}
                      alt={mvList[0].name.map((item, index) => {
                        if (index === mvList[0].name.length - 1) {
                          return item
                        }
                        return item + ', '
                      })}
                    />
                    <ul className="video-information-list">
                      <li className="video-information-item">
                        <h3>Rating:</h3>
                        <span>
                          {calculateScore(
                            statistic.viewCount,
                            statistic.likeCount,
                            statistic.commentCount,
                            snippet.publishedAt,
                          ) || 'No data'}
                        </span>
                        {Array(5)
                          .fill('')
                          .map((item, index) => {
                            if (starRating >= 1) {
                              starRating--
                              return (
                                <i
                                  className="bi bi-star-fill fill"
                                  key={index}
                                ></i>
                              )
                            } else if (starRating > 0 && starRating < 1) {
                              starRating = 0
                              return (
                                <i
                                  className="bi bi-star-half half"
                                  key={index}
                                ></i>
                              )
                            }
                            return (
                              <i className="bi bi-star-fill" key={index}></i>
                            )
                          }, (starRating = changeScoreToRating(calculateScore(statistic.viewCount, statistic.likeCount, statistic.commentCount, snippet.publishedAt))))}
                      </li>
                      <li className="video-information-item">
                        <h3>Name:</h3>
                        <span>
                          {mvList[0].name.map((item, index) => {
                            if (index === mvList[0].name.length - 1) {
                              return item
                            }
                            return item + ', '
                          })}
                        </span>
                      </li>
                      <li className="video-information-item">
                        <h3>Type:</h3>
                        <span>
                          {mvList[0].type.map((item, index) => {
                            if (index === mvList[0].type.length - 1) {
                              return item
                            }
                            return item + ', '
                          })}
                        </span>
                      </li>
                      <li className="video-information-item">
                        <h3>Time</h3>
                        <span>
                          {new Date(snippet.publishedAt).getFullYear()}
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* <button className="video-information-subscribe">Subscribe</button> */}
                </div>
              </div>
            </div>
            <div className="video-page-list">
              {mvList.map((item, index) => (
                <Link
                  to={`/mv/${item._id}`}
                  style={{ textDecoration: 'none' }}
                  key={item._id}
                  onClick={() => handleClick(item)}
                >
                  <ThumbnailVideo
                    content={item}
                    isBroadcast={index === 0 ? true : false}
                  />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <p
            style={{
              width: '100%',
              marginTop: '2rem',
              textAlign: 'center',
              color: 'var(--text-color)',
            }}
          >
            No data
          </p>
        )}
      </div>
    </>
  )
}

export default VideoDetail
