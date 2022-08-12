import { userRequest } from '../../config/requestMethod'
import { getThemes, getWeather } from '../slices/layoutSlice'

//[POST]
const requestGetUserWeather = async (dispatch, latitude, longitude) => {
  try {
    const res = await userRequest.post(
      `/api/weather/create?lat=${latitude}&lon=${longitude}`,
    )
    res.data && dispatch(getWeather(res.data.data[0]))
  } catch (err) {
    console.log(err)
  }
}

//[GET]
const requestGetAllThemes = async (dispatch) => {
  const res = await userRequest.get('/api/theme/')
  res.data && dispatch(getThemes(res.data))
}

export { requestGetUserWeather, requestGetAllThemes }
