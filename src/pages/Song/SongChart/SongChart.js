import React, { useEffect, useState } from 'react'
import imageChart, { imageCloud } from '../../../resources/images/imageChart'
import 'antd/dist/antd.css'
import { Empty, Spin } from 'antd'
import { Space, Table, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { requestGetSongChart } from '../../../redux/apiCalls/apiSong'
import { MAX_MOBILE, MAX_TABLET } from '../../../config/responsive'

function SongChart() {
  const songList = useSelector((state) => state.playlist.songChart)
  const chartTime = useSelector((state) => state.playlist.chartTime)
  const [breakpoint, setBreakpoint] = useState(window.innerWidth)
  // const [photoTheme, setPhotoTheme] = useState(imageChart[0])
  const dispatch = useDispatch()

  // const handleChangeTheme = (photo) => {
  //   setPhotoTheme(photo)
  // }
  // const PlusChart = (number) => {
  //   const indexCurrent = photoTheme.id + number
  //   if (indexCurrent > imageChart.length) {
  //     setPhotoTheme(imageChart[0])
  //   } else if (indexCurrent < 1) {
  //     setPhotoTheme(imageChart[imageChart.length - 1])
  //   } else {
  //     setPhotoTheme(imageChart[indexCurrent - 1])
  //   }
  // }

  useEffect(() => {
    !songList[0] && requestGetSongChart(dispatch)
  }, [])
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

  let chartList = []
  if (breakpoint > MAX_TABLET) {
    chartList = [
      {
        title: '#',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: ({ img, song, name }) => (
          <div className="song-chart-title">
            <img src={img} alt={song} />
            <div className="song-chart-decoration">
              <h3>{song}</h3>
              <p>
                {name.map((item, index) => {
                  return index === name.length - 1 ? item : item + ', '
                })}
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Types',
        dataIndex: 'types',
        key: 'types',
        render: (types) => (
          <span>
            {types.map((item, index) => {
              return index === types.length - 1 ? item : item + ', '
            })}
          </span>
        ),
      },
      {
        title: 'Plays',
        dataIndex: 'plays',
        key: 'plays',
      },
      {
        title: 'Likes',
        dataIndex: 'likes',
        key: 'likes',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          if (typeof status === 'number') {
            if (status > 0) {
              return (
                <span>
                  <i
                    className="bi bi-arrow-up"
                    style={{ color: '#1db954' }}
                  ></i>
                  {status}
                </span>
              )
            } else if (status === 0) {
              return (
                <span>
                  <i className="bi bi-dash-lg" style={{ color: '#8289a1' }}></i>
                </span>
              )
            } else {
              return (
                <span>
                  <i
                    className="bi bi-arrow-down"
                    style={{ color: '#cd1a2b' }}
                  ></i>
                  {status}
                </span>
              )
            }
          } else {
            return <span style={{ color: '#1a48c4' }}>new</span>
          }
        },
      },
    ]
  } else if (breakpoint < MAX_MOBILE) {
    chartList = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: ({ img, song, name }) => (
          <div className="song-chart-title">
            <img src={img} alt={song} />
            <div className="song-chart-decoration">
              <h3>{song}</h3>
              <p>
                {name.map((item, index) => {
                  return index === name.length - 1 ? item : item + ', '
                })}
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Plays',
        dataIndex: 'plays',
        key: 'plays',
        render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          if (typeof status === 'number') {
            if (status > 0) {
              return (
                <span style={{ textAlign: 'center' }}>
                  <i
                    className="bi bi-arrow-up"
                    style={{ color: '#1db954' }}
                  ></i>
                  {status}
                </span>
              )
            } else if (status === 0) {
              return (
                <span style={{ textAlign: 'center' }}>
                  <i className="bi bi-dash-lg" style={{ color: '#8289a1' }}></i>
                </span>
              )
            } else {
              return (
                <span style={{ textAlign: 'center' }}>
                  <i
                    className="bi bi-arrow-down"
                    style={{ color: '#cd1a2b' }}
                  ></i>
                  {status}
                </span>
              )
            }
          } else {
            return (
              <span style={{ color: '#1a48c4', textAlign: 'center' }}>new</span>
            )
          }
        },
      },
    ]
  } else {
    chartList = [
      {
        title: '#',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: ({ img, song, name }) => (
          <div className="song-chart-title">
            <img src={img} alt={song} />
            <div className="song-chart-decoration">
              <h3>{song}</h3>
              <p>
                {name.map((item, index) => {
                  return index === name.length - 1 ? item : item + ', '
                })}
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Plays',
        dataIndex: 'plays',
        key: 'plays',
      },
      {
        title: 'Likes',
        dataIndex: 'likes',
        key: 'likes',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          if (typeof status === 'number') {
            if (status > 0) {
              return (
                <span>
                  <i
                    className="bi bi-arrow-up"
                    style={{ color: '#1db954' }}
                  ></i>
                  {status}
                </span>
              )
            } else if (status === 0) {
              return (
                <span>
                  <i className="bi bi-dash-lg" style={{ color: '#8289a1' }}></i>
                </span>
              )
            } else {
              return (
                <span>
                  <i
                    className="bi bi-arrow-down"
                    style={{ color: '#cd1a2b' }}
                  ></i>
                  {status}
                </span>
              )
            }
          } else {
            return <span style={{ color: '#1a48c4' }}>new</span>
          }
        },
      },
    ]
  }

  return (
    <div
      className="chart"
      style={{
        background: `linear-gradient(var(--primary-color),rgb(62, 126, 223)`,
      }}
    >
      <div className="chart-body">
        <h3 className="chart-heading">Daily Top Songs Vietnam</h3>
        {chartTime[0] && (
          <p className="chart-date">
            {new Date(chartTime[0]).toDateString()} -{' '}
            {new Date(chartTime[1]).toDateString()}
          </p>
        )}
        <div className="chart-container">
          {songList[0] && (
            <Table
              columns={chartList}
              dataSource={songList.map((song, index) => ({
                key: index,
                number: index + 1,
                title: {
                  img: song.img,
                  song: song.song,
                  name: song.name,
                },
                types: song.type,
                plays: song.plays,
                likes: song.likes,
                status: song.status,
              }))}
            />
          )}

          {/* <div className="chart-background">
            <div className="chart-background-top">
              <img src={photoTheme.link} alt="" className="chart-background-photo" />
              <p className="chart-background-page">{`${photoTheme.id} / ${imageChart.length}`}</p>
              <i className="ti-angle-left chart-background-left" onClick={() => PlusChart(-1)}></i>
              <i className="ti-angle-right chart-background-right" onClick={() => PlusChart(1)}></i>
            </div>
            <div className="chart-background-bottom">
              {imageChart.map((photo) => (
                <div
                  key={photo.id}
                  className="chart-background-box"
                  onClick={() => handleChangeTheme(photo)}
                >
                  <img src={photo.link} alt="" />
                </div>
              ))}
            </div>
          </div> */}
          {/* <div className="chart-song">
            <div className="chart-title">
              <h3 className="chart-title-heading">Top 10 Songs</h3>
              <h3 className="chart-title-time">{date}</h3>
            </div>
            <div className="chart-list">
              {listChart.map((item, index) => (
                <div className="chart-item" key={index}>
                  <span
                    className={index == 0 ? 'chart-number green' : (
                      index == 1 ? 'chart-number blue' : (
                        index == 2 ? 'chart-number red' : 'chart-number'
                      )
                    )}
                  >{`#${index + 1}`}</span>
                  <a href={item.link} className="chart-btn" target="_blank">
                    <img src={item.img} alt="Singer Photo" />
                    <div className="chart-decoration">
                      <h3>{item.song}</h3>
                      <p>{item.name}</p>
                    </div>
                  </a>
                  <span
                    className={`chart-status ${item.status}`}
                  ></span>
                </div>
              ))}
            </div>
            <div className="chart-footer">
              <a href="" className="chart-more" target="_blank">See all
                <i className='ti-angle-right'></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
      {!songList[0] && <div className='loadingEffect'>
        <Spin size="large" tip="Loading..."></Spin>
      </div>}
      <div className="chart-clouds">
        {imageCloud.map((image) => (
          <img
            key={image.id}
            src={image.link}
            alt=""
            className="chart-cloud-item"
          />
        ))}
      </div>
    </div>
  )
}

export default SongChart
