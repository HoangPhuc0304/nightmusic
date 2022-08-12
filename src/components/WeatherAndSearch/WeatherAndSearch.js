import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDataSearch } from '../../others/features'
import { requestGetUserWeather } from '../../redux/apiCalls/apiLayout'
import { requestGetLibrary } from '../../redux/apiCalls/apiLibrary'
import { requestGetAllSong } from '../../redux/apiCalls/apiSong'
import { addTempSongIntoLibrary } from '../../redux/slices/librarySlice'
import songSlice from '../../redux/slices/songSlice'
import './WeatherAndSearch.scss'

function WeatherAndSearch() {
  const weather = useSelector((state) => state.layout.weather)
  const allSong = useSelector((state) => state.song.allSong)
  const libraryId = useSelector((state) => state.library.libraryId)
  const songCurrentPlaylist = useSelector(
    (state) => state.song.songCurrentPlaylist,
  )

  const [textSearch, setTextSearch] = useState('')
  const [checkBlur, setCheckBlur] = useState(false)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const dispatch = useDispatch()

  const handleSearch = (e) => {
    setTextSearch(e.target.value)
  }
  const handleSearchBlur = (e) => {
    setTimeout(() => {
      setCheckBlur(true)
    }, 200)
  }
  const handleSearchClick = () => {
    setCheckBlur(false)
  }
  const handleClickSong = (item) => {
    dispatch(addTempSongIntoLibrary(item))
    dispatch(songSlice.actions.playSongFromSearch(item))
    songCurrentPlaylist !== -1 &&
      dispatch(songSlice.actions.preventSongPlaylist(-1))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      () => {
        setLatitude(10.8167)
        setLongitude(106.6333)
      },
    )
  }, [])

  useEffect(() => {
    latitude &&
      longitude &&
      requestGetUserWeather(dispatch, latitude, longitude)
  }, [latitude, longitude])

  useEffect(() => {
    !allSong[0] && requestGetAllSong(dispatch)
    !libraryId && requestGetLibrary(dispatch)
  }, [])

  return (
    <div className="header-virtual">
      {weather.city_name && (
        <div className="song-header-nav">
          <div className="song-header-weather">
            <h3 className="header-weather-temperature">
              {Math.floor(weather.temp)}
              <span>°C</span>
            </h3>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}
              alt={weather.weather.description}
            />
          </div>
          <div className="header-weather-desc">
            <p>
              <i className="bi bi-geo-alt-fill"></i>
              {`${weather.city_name} (${weather.country_code})`}
            </p>
            <p>
              <i className="bi bi-geo-fill"></i>
              {weather.weather.description}
            </p>
            <p>
              <i className="bi bi-sun-fill"></i>
              {weather.uv} (uv)
            </p>
            <p>
              <i className="bi bi-droplet-fill"></i>
              {weather.rh}%
            </p>
            <span>
              <i className="bi bi-info-circle"></i>
              Enable location permission to get your site's weather
            </span>
          </div>
        </div>
      )}

      <div className="song-header-search">
        <i className="bi bi-search song-search-icon"></i>
        <input
          value={textSearch}
          type="text"
          placeholder="Artist, songs, or playlists"
          onChange={handleSearch}
          onBlur={handleSearchBlur}
          onClick={handleSearchClick}
        />
        <i
          className="bi bi-x-circle-fill song-delete-icon"
          onClick={() => {
            setTextSearch('')
          }}
        ></i>
      </div>
      {allSong[0] && textSearch && !checkBlur && (
        <div className="search-song-box">
          {Array.from(getDataSearch(allSong, textSearch))[0] ? (
            Array.from(getDataSearch(allSong, textSearch)).map((song) => (
              <div
                key={song._id}
                className="search-song-item"
                onClick={() => handleClickSong(song)}
              >
                <div className="search-song-info">
                  <img
                    src={song.img}
                    alt={song.song}
                    className="search-song-photo"
                  />
                  <div className="search-song-decoration">
                    <h3>{song.song}</h3>
                    <p>
                      {song.name.map((item, index) => {
                        if (index === song.name.length - 1) {
                          return item
                        }
                        return item + ', '
                      })}
                    </p>
                  </div>
                </div>
                <div className="search-song-type">
                  {song.type.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="search-song-no-result">
              <i className="bi bi-search"></i>
              No results for "{textSearch}"
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default WeatherAndSearch
