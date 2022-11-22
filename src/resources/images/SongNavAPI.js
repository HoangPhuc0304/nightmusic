const logo = 'https://nightmusic-api.onrender.com/layout/header_icon.png'
const songNavHeaderAPI = [
  {
    id: 1,
    name: 'Your library',
    icon: 'bi bi-music-player',
    link: '/',
    description: '',
  },
  {
    id: 2,
    name: 'Search',
    icon: 'bi bi-search',
    link: '/search',
    description: '',
  },
  {
    id: 3,
    name: 'Chart',
    icon: 'bi bi-music-note-list',
    link: '/chart',
    description: '',
  },
  {
    id: 4,
    name: 'MV',
    icon: 'bi bi-camera-video',
    link: '/mv',
    description: '',
  },
  {
    id: 5,
    name: 'Follow',
    icon: 'bi bi-file-earmark-slides',
    link: '/follow',
    description: 'LIVE',
  },
]

const songNavBodyAPI = [
  {
    id: 1,
    name: 'Contact',
    icon: 'bi bi-headset',
    link: '/contact',
    description: '',
  },
  {
    id: 2,
    name: 'Discovery',
    icon: 'bi bi-slack',
    link: '/book',
    description: '',
  },
  {
    id: 3,
    name: 'Top 100',
    icon: 'bi bi-star',
    link: '/',
    description: '',
  },
  {
    id: 4,
    name: 'Chart',
    icon: 'bi bi-graph-up-arrow',
    link: '/',
    description: '',
  },
]

export { songNavHeaderAPI, songNavBodyAPI, logo }
