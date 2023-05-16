import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './views/authentication/Register';
import Login from './views/authentication/Login'
import Profile from './views/profile/Profile';
import UploadMusic from './views/UploadMusic/UploadMusic';
import RealProfile from './views/RealProfile/RealProfile';
import EditSong from './components/EditSong/EditSong';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/Home" />
            <Route element={<RealProfile />} path="/Profile" />
            <Route element={<UploadMusic />} path="/UploadMusic" />
            <Route element={<EditSong />} path="/edit-music/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
