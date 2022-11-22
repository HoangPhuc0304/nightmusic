import axios from 'axios'

const BASE_URL = 'https://nightmusic-api.onrender.com/'
const confirmedInfo =
  localStorage.getItem('persist:root') &&
  JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
const TOKEN = confirmedInfo && confirmedInfo.accessToken
const USER_ID = confirmedInfo && confirmedInfo._id

console.log(confirmedInfo)

const publicRequest = axios.create({
  baseURL: BASE_URL,
})

const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
})

export { BASE_URL, publicRequest, userRequest, USER_ID }
