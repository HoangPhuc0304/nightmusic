import './App.scss'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Payment from './pages/Payment/Payment'
import Playlist from './pages/Playlist/Playlist'
import SignIn from './pages/SignIn/SignIn'
import Singer from './pages/Singer/Singer'
import Song from './pages/Song/Song'
import User from './pages/User/User'
import { IS_ADMIN } from './config/requestMethod'
import { useSelector } from 'react-redux'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import SongPlaylist from './pages/SongPlaylist/SongPlaylist'
import UserBin from './pages/UserBin/UserBin'
import SongCreate from './pages/SongCreate/SongCreate'
import SongEdit from './pages/SongEdit/SongEdit'
import PlayListCreate from './pages/PlayListCreate/PlayListCreate'

function App() {
  const confirmed = useSelector((state) => state.author.currentUser)
  return (
    <div className="App">
      <Router>
        {IS_ADMIN || confirmed ? (
          <>
            <Header />
            <NavBar />
            <Routes>
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/playlist/create" element={<PlayListCreate />} />
              <Route path="/playlist/:type" element={<SongPlaylist />} />
              <Route path="/singer" element={<Singer />} />
              <Route path="/song" element={<Song />} />
              <Route path="/song/create" element={<SongCreate />} />
              <Route path="/song/edit/:id" element={<SongEdit />} />
              <Route path="/user" element={<User />} />
              <Route path="/user/bin" element={<UserBin />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
