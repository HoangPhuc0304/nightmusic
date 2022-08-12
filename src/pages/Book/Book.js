import React, { useEffect, useState } from 'react'
import imageBook from '../../resources/images/imageBook'
import BookList from '../../components/BookList/BookList'
import { useNavigate } from 'react-router-dom'

function Book() {
  const [imageHead, setImageHead] = useState(imageBook[0])
  const navigate = useNavigate()

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
      <div
        className="book-icon-return"
        onClick={() => {
          navigate(-1)
        }}
      >
        <i className="bi bi-arrow-left-circle-fill"></i>
      </div>
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
