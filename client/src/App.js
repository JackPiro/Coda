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
import AlbumDetailTwo from './views/AlbumDetail/albumDetailTwo';
import ArtistProfile from './views/ArtistProfile/ArtistProfile';
import NewRegister from './views/authentication/NewRegister';
import FancyRegister from './views/authentication/FancyRegister';
import CompleteProfile from './views/authentication/CompleteProfile';
import LoadingPage from './views/authentication/LoadingPage';
import AddMusic from './views/AddMusic/AddMusic';
import FinishAddingMusic from './views/AddMusic/FinishAddingMusic';
import UserSettings from './views/UserSettings/UserSettings';
import PaymentGateway from './views/authentication/PaymentGateway';
import CheckoutForm from './views/authentication/CheckoutForm';
import Market from './views/market/Market';
import AlbumDetailInvest from './views/AlbumDetail/AlbumDetailInvest';
import AlbumDetailThree from './views/AlbumDetail/AlbumDetailThree';
import SubscribeView from './views/authentication/SubscribeView';
import ArtistDashboard from './views/ArtistDashboard/ArtistDashboard';
import ArtistCircle from './views/ArtistProfile/ArtistCircle';
import UnfinishedSongDetail from './views/SongDetail/UnfinishedSongDetail';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [releaseType, setReleaseType] = useState('track')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              <Route element={<NewRegister />} path="/register" />
              <Route element={<UserSettings />} path="/settings" />

              <Route element={<AddMusic 
              fileList={fileList} 
              setFileList={setFileList} 
              releaseType={releaseType} 
              setReleaseType={setReleaseType} 
              />} path="/add-music" />

              <Route element={<FinishAddingMusic 
              fileList={fileList} 
              setFileList={setFileList} 
              releaseType={releaseType}
              />} path="/finish-adding-music" />

              <Route element={<LoadingPage />} path="/Loading" />
              <Route element={<Market />} path="/market" />
              <Route element={<CompleteProfile />} path="/complete-profile" />
              <Route element={<FancyRegister />} path="/fancy-register" />
              <Route element={<Login />} path="/login" />
              <Route element={<Profile />} path="/Home" />
              <Route element={<RealProfile />} path="/Profile" />
              <Route  element={<Explore searchResults={searchResults} setSearchResults={setSearchResults} />} path="/explore" />
              <Route element={<UploadMusic />} path="/UploadMusic" />
              <Route element={<EditSong />} path="/edit-music/:id" />
              <Route element={<AlbumDetailInvest />} path="/album-detail-invest" />
              <Route element={<AlbumDetailThree />} path="/album-detail" />
              <Route element={<ArtistProfile />} path="/artist-profile/:id" />
              <Route element={<SubscribeView />} path="/subscribe-view" />
              <Route element={<ArtistDashboard />} path="/dashboard" />
              <Route element={<ArtistCircle />} path="/artist-circle/:id" />
              <Route element={<UnfinishedSongDetail />} path="/suggestion" />


          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
