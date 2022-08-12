import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import placeBook from '../../resources/images/placeBook'

function BookList() {
  const bookStars = (number) => {
    let starList = []
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        starList.push(<i key={i} className="ti-star gold-star"></i>)
      } else {
        starList.push(<i key={i} className="ti-star no-star"></i>)
      }
    }
    return starList
  }
  return (
    <div className="book-list">
      {placeBook.map((book) => (
        <div key={book.id} className="book-item">
          <div className="book-item-photo">
            <img src={book.image} alt="Place" />
          </div>
          <div className="book-text">
            <h3 className="book-place">{book.place}</h3>
            <div className="book-description">{book.description}</div>
            <p className="book-date">{new Date().toDateString()}</p>
            <div className="book-select">
              <Link to="/book/id">
                <div className="book-btn">Discover</div>
              </Link>
              <div className="book-star">{bookStars(book.star)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(BookList)
