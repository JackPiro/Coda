import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './views/authentication/Register';
import Login from './views/authentication/Login'
import Profile from './views/profile/Profile';
import UploadMusic from './views/UploadMusic/UploadMusic';
import RealProfile from './views/RealProfile/RealProfile';
import EditSong from './components/EditSong/EditSong';
import AlbumDetail from './views/AlbumDetail/AlbumDetail';
import Explore from './views/explore/Explore';


function App() {
  const [searchResults, setSearchResults] = useState([]);


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/Home" />
            <Route element={<RealProfile />} path="/Profile" />
            <Route  element={<Explore searchResults={searchResults} setSearchResults={setSearchResults} />} path="/explore" />
            <Route element={<UploadMusic />} path="/UploadMusic" />
            <Route element={<EditSong />} path="/edit-music/:id" />
            <Route element={<AlbumDetail />} path="/album-detail" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
