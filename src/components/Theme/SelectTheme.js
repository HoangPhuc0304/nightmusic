import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestGetAllThemes } from '../../redux/apiCalls/apiLayout'
import 'antd/dist/antd.css'
import { Empty } from 'antd'
import { requestEditLibrary } from '../../redux/apiCalls/apiLibrary'

function SelectTheme() {
  const themeColor = useSelector((state) => state.layout.colorThemes)
  const themeIdol = useSelector((state) => state.layout.idolThemes)
  const libraryId = useSelector((state) => state.library.id)
  const themeUser = useSelector((state) => state.library.theme)

  const [active, setActive] = useState(null)
  const [pageTheme, setPageTheme] = useState('color')
  const dispatch = useDispatch()

  const handleChangeActive = (item) => {
    document
      .querySelector(':root')
      .style.setProperty('--primary-color', item.mainColor)
    document
      .querySelector(':root')
      .style.setProperty('--dark-color', item.darkColor)
    document
      .querySelector(':root')
      .style.setProperty('--music-color', item.styleColor)
    document
      .querySelector(':root')
      .style.setProperty('--text-color', item.textColor)
    document
      .querySelector(':root')
      .style.setProperty('--text-change', item.textChangeColor)
    document
      .querySelector(':root')
      .style.setProperty(
        '--theme-background',
        item.image
          ? `linear-gradient( rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('${item.image}')`
          : item.styleColor,
      )
    setActive((preId) => {
      preId !== item._id && setActive(item._id)
    })
    requestEditLibrary(dispatch, libraryId, item, 'change-theme')
  }
  const handleChangePage = (page, previousPage) => {
    if (page != previousPage) {
      if (page === 'color') {
        setPageTheme('idol')
      } else {
        setPageTheme('color')
      }
    }
  }
  const hideModal = () => {
    document.querySelector('.theme-modal').classList.remove('active')
  }
  useEffect(() => {
    return () => {
      document
        .querySelector(':root')
        .style.setProperty('--primary-color', '#3d054e')
      document
        .querySelector(':root')
        .style.setProperty('--dark-color', '#290335')
      document
        .querySelector(':root')
        .style.setProperty(
          '--music-color',
          'linear-gradient(117deg,#31033e,#470e88 102%)',
        )
      document.querySelector(':root').style.setProperty('--text-color', '#fff')
      document.querySelector(':root').style.setProperty('--text-change', '#000')
    }
  }, [])
  useEffect(() => {
    themeUser && themeUser._id !== active && handleChangeActive(themeUser)
  }, [themeUser])

  useEffect(() => {
    !themeColor[0] && !themeIdol[0] && requestGetAllThemes(dispatch)
  }, [])

  return (
    <div className="theme-modal" onClick={hideModal}>
      <div
        className="theme-box"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="theme-header">
          <div className="theme-heading">Theme</div>
          <div className="theme-close" onClick={hideModal}>
            <i className="ti-close"></i>
          </div>
        </div>
        <div className="theme-body">
          <div className="theme-button-wrap">
            <button
              className={pageTheme === 'color' ? 'active' : ''}
              onClick={() => handleChangePage(pageTheme, 'color')}
            >
              Color
            </button>
            <button
              className={pageTheme === 'idol' ? 'active' : ''}
              onClick={() => handleChangePage(pageTheme, 'idol')}
            >
              Idol
            </button>
          </div>
          <div className="theme-list-wrap">
            <div className="theme-list">
              {pageTheme === 'color' ? (
                <>
                  {themeColor[0] ? (
                    themeColor.map((item) => (
                      <div className="theme-item" key={item._id}>
                        <div
                          className="theme-item-box"
                          style={{
                            background: `linear-gradient( 45deg, ${item.mainColor}, ${item.mainColor} 49%, white 49%, white 51%, ${item.darkColor} 51% )`,
                            border: `2px solid ${
                              item._id === active ? 'green' : '#fff'
                            }`,
                          }}
                          onClick={() => handleChangeActive(item)}
                        >
                          {item._id === active && (
                            <i className="bi bi-check-circle"></i>
                          )}
                        </div>
                      </div>
                    ))
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
                </>
              ) : (
                <>
                  {themeIdol[0] ? (
                    themeIdol.map((item) => (
                      <div className="theme-item" key={item._id}>
                        <div
                          className="theme-item-box"
                          style={{
                            background: `url('${item.image}') center`,
                            border: `2px solid ${
                              item._id === active ? 'green' : '#fff'
                            }`,
                            backgroundSize: 'cover',
                          }}
                          onClick={() => handleChangeActive(item)}
                        >
                          {item._id === active && (
                            <i className="bi bi-check-circle"></i>
                          )}
                        </div>
                      </div>
                    ))
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectTheme
