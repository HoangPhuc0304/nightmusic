import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from '../../components/Slider/Slider'
import Song from '../Song/Song'

function Content() {
  const dispatch = useDispatch()
  const acceptAccess = useSelector((state) => state.user.acceptAccess)
  // setTimeout(() => {
  //   handleAcceptAccess
  // },100)
  return (
    <div id="content">
      {acceptAccess ? (
        <>
          <Song />
        </>
      ) : (
        <>
          <Slider />
        </>
      )}
    </div>
  )
}

export default Content
