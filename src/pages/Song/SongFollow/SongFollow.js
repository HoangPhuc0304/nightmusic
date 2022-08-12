import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'antd/dist/antd.css'
import { Empty } from 'antd'
import { requestGetAllSingers } from '../../../redux/apiCalls/apiSinger'

function SongFollow() {
  const singerList = useSelector((state) => state.singer.singers)
  const dispatch = useDispatch()

  useEffect(() => {
    !singerList[0] && requestGetAllSingers(dispatch)
  }, [])

  return (
    <div className="singer">
      <div className="singer-body">
        <h3 className="singer-heading">Vietnam's top singers in 2022</h3>
        {singerList[0] ? (
          <div className="singer-container">
            <ul className="singer-list">
              {singerList.map((info) => (
                <li className="singer-item" key={info._id}>
                  <img src={info.avatar} alt="" className="singer-photo" />
                  <div className="singer-info">
                    <h3 className="singer-name">{info.name}</h3>
                    <ul className="singer-decoration">
                      <li>
                        <i className="bi bi-play-circle-fill"></i>
                        <span>{info.plays}</span>
                      </li>
                      <li>
                        <i className="bi bi-suit-heart-fill"></i>
                        <span>{info.likes}</span>
                      </li>
                      <li>
                        <i className="bi bi-music-note-list"></i>
                        <span>{info.songs.length}</span>
                      </li>
                    </ul>
                    <div className="singer-social">
                      <a
                        href=""
                        className="singer-fb bi bi-facebook"
                        target="_blank"
                      ></a>
                      <a
                        href=""
                        className="singer-youtube bi bi-youtube"
                        target="_blank"
                      ></a>
                      <a
                        href=""
                        className="singer-instagram bi bi-instagram"
                        target="_blank"
                      ></a>
                      <a
                        href=""
                        className="singer-spotify bi bi-spotify"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{
              width: '100%',
              marginTop: '2rem',
              textAlign: 'center',
              color: 'var(--text-color)',
            }}
          />
        )}
      </div>
    </div>
  )
}

export default SongFollow
