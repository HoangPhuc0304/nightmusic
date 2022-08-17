import React, { useEffect, useState } from 'react'
import imageBook from '../../resources/images/imageBook'
import BookList from '../../components/BookList/BookList'
import { Link } from 'react-router-dom'

function Book() {
  const [imageHead, setImageHead] = useState(imageBook[0])

  useEffect(() => {
    const effectAction = setTimeout(() => {
      if (imageHead.id >= imageBook.length) {
        setImageHead(imageBook[0])
      } else {
        setImageHead(imageBook[imageHead.id])
      }
    }, 10000)
    return () => {
      clearTimeout(effectAction)
    }
  }, [imageHead])
  return (
    <div id="book">
      <Link to="/">
        <div className="book-icon-return">
          <i className="bi bi-arrow-left-circle-fill"></i>
        </div>
      </Link>
      <div className="book-container">
        <h3 className="book-heading">Discover singers for events in Vietnam</h3>
        <div className="book-frame">
          <img src={imageHead.link} alt="Image Book" />
        </div>
        <BookList />
      </div>
    </div>
  )
}

export default Book
