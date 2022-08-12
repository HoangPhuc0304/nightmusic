import { userRequest } from '../../config/requestMethod'
import { getAllSingers } from '../slices/singerSlice'

//[GET]
const requestGetAllSingers = async (dispatch) => {
  try {
    const res = await userRequest.get('/api/singers?stat=true')
    res.data && dispatch(getAllSingers(res.data))
  } catch (err) {
    console.log(err)
  }
}

export { requestGetAllSingers }
