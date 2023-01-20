import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'
import { requestGetUser } from '../../redux/apiCalls/apiUser'
import Song from '../Song/Song'

function Content() {
  const acceptAccess = useSelector((state) => state.user.acceptAccess)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const userId = searchParams.get('userId')
    const token = searchParams.get('token')
    if (!acceptAccess && userId && token) {
      requestGetUser(dispatch, userId, token)
    }
  }, [])
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
