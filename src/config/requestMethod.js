import axios from 'axios'
// const confirmedAdmin = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser)
const BASE_URL = 'https://nightmusic-api.onrender.com/'
const confirmedInfo =
  localStorage.getItem('persist:root') &&
  JSON.parse(JSON.parse(localStorage.getItem('persist:root')).author)
    .currentUser
const TOKEN = confirmedInfo && confirmedInfo.accessToken
const IS_ADMIN = confirmedInfo && confirmedInfo.isAdmin

const publicRequest = axios.create({
  baseURL: BASE_URL,
})

const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
})

export { BASE_URL, publicRequest, adminRequest, IS_ADMIN }
