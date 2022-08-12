import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import placeBook from '../../resources/images/placeBook'
import { requestGetAllSingers } from '../../redux/apiCalls/apiSinger'

function BookSinger() {
  const singers = useSelector((state) => state.singer.singers)
  const book = placeBook[Math.floor(Math.random() * placeBook.length)]
  const randomSinger = singers[0]
    ? singers[Math.floor(Math.random() * singers.length)]
    : null
  const dispatch = useDispatch()
  window.scrollTo(0, 0)

  const HandleClickChange = () => {
    SlideEvent(0)
      .then(function () {
        document
          .querySelector('.book-background-click')
          .classList.toggle('hiding')
        return SlideEvent(500)
      })
      .then(function () {
        document.querySelector('.book-background-click').style.display = 'none'
        return SlideEvent(500)
      })
      .then(function () {
        document.querySelector('.book-night-star').style.display = 'block'
        return SlideEvent(1000)
      })
      .then(function () {
        document.querySelector('.book-mountain').style.display = 'block'
        return SlideEvent(1000)
      })
      .then(function () {
        document.querySelector('.book-moon').style.display = 'block'
        return SlideEvent(1000)
      })
      .then(function () {
        document.querySelector('.book-valley').style.display = 'block'
        return SlideEvent(1000)
      })
      .then(function () {
        document.querySelector('.book-background-singer').style.display =
          'block'
        return SlideEvent(1000)
      })
      .then(function () {
        document.querySelector('.book-background-shadow').style.display =
          'block'
        return SlideEvent(500)
      })
  }
  function SlideEvent(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms)
    })
  }

  useEffect(() => {
    !singers[0] && requestGetAllSingers(dispatch)
  }, [])

  return (
    <div className="book-background">
      <div className={`book-background-box ${book.background}`}>
        <img src={book.star_img} alt="" class="book-night-star" />
        <img src={book.moon} alt="" class="book-moon" />
        <img src={book.mountain} alt="" class="book-mountain" />
        <img src={book.valley} alt="" class="book-valley" />
        <div className="book-background-singer">
          <img src={randomSinger && randomSinger.avatar} alt="" />
          <span className="book-background-shadow"></span>
        </div>
        <button
          className={`book-background-click ${book.color}`}
          onClick={HandleClickChange}
        >
          Play
        </button>
        <Link to="/book" className="book-background-exit">
          <i className="bi bi-box-arrow-right "></i>
        </Link>
      </div>
    </div>
  )
}

export default BookSinger
