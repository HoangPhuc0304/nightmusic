import './App.scss'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import BookSinger from './pages/BookSinger/BookSinger'
import KindSong from './pages/KindSong/KindSong'
import { useSelector } from 'react-redux'
import Song from './pages/Song/Song'
import SelectTheme from './components/Theme/SelectTheme'
import Control from './components/Control/Control'
import VideoDetail from './pages/MusicVideo/VideoDetail'
import Book from './pages/Book/Book'
import Contact from './pages/Contact/Contact'
import PhotoBackground from './pages/PhotoBackground/PhotoBackground'
import Loading from './components/Loading/Loading'
import Initial from './pages/Initial/Initial'
import User from './pages/User/User'

function App() {
  const acceptAccess = useSelector((state) => state.user.acceptAccess)
  const isLoading = useSelector((state) => state.layout.isLoading)
  const songCurrent = useSelector((state) => state.song.songCurrent)
  const songCurrentPlaylist = useSelector(
    (state) => state.song.songCurrentPlaylist,
  )

  return (
    <div className="App">
      {/* basename='/nightmusic-client' */}
      <Router>
        <Header />
        {acceptAccess ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Navigate to="/" />} />
            <Route path="/sign-up" element={<Navigate to="/initial" />} />
            <Route path="/book" element={<Book />} />
            <Route path="/book/:id" element={<BookSinger />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photo-background" element={<PhotoBackground />} />
            <Route path="/search/:kind" element={<KindSong />} />
            <Route path="/search" element={<Song props="search" />} />
            <Route path="/chart" element={<Song props="chart" />} />
            <Route path="/mv" element={<Song props="mv" />} />
            <Route path="/mv/:id" element={<VideoDetail />} />
            <Route path="/follow" element={<Song props="follow" />} />
            <Route path="/initial" element={<Initial />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
        {acceptAccess && <SelectTheme />}
        {(songCurrent !== -1 || songCurrentPlaylist !== -1) && <Control />}
        {isLoading && <Loading />}
        <Footer />
      </Router>
    </div>
  )
}

export default App
