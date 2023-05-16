import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import authService from '../../services/authService'
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';

import jwt_decode from "jwt-decode";




const UploadMusic = () => {
    const [songName, setSongName] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [audioFile, setAudioFile] = useState();
    const [coverArt, setCoverArt] = useState();

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));
    const decodedToken = jwt_decode(user.userToken);

    const submitHandler = (e) => {
        console.log('submitHandler is running')
        console.log('role:', user.role, 'userID:', decodedToken.id)
        e.preventDefault();
            if (user && user.role === 'artist') {

                let formData = new FormData()
                formData.append('audioFile', audioFile);
                formData.append('coverArt', coverArt);
                formData.append('description', description);
                formData.append('genre', genre);
                formData.append('title', songName);

                axios.post("http://localhost:5001/api/music/create", formData, { withCredentials: true })
                    .then((res) => {
                        console.log(res.data)
                        navigate('/Home')
                    })
                    .catch((err) => {
                        console.log(err, 'ERR sincerely, -UploadMusic.js')
                    })
            }
            else {
                console.log('you arent registered as an artist')
            }
    }

    const handleLogout = () => {
        console.log('test')
        try {
            authService.logout();
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-row'>
            <SideNavBar />
            <div className='w-screen'>
                <TopNavBar />
                 {/* <p>Welcome {user.name}</p> */}
                <button className='mr-4' onClick={handleLogout}>Logout</button>
                <Link to={'/profile'}>Back</Link>
                <form className='' onSubmit={submitHandler} encType="multipart/form-data">
                    <div className='mt-5 mb-5'>
                        <label>coverArt</label>
                        <input type='file' name="coverArt" onChange={(e) => setCoverArt(e.target.files[0])}/>
                    </div>
                    <div className='mt-5 mb-5'>
                        <label>audioFile</label>
                        <input type='file' name="audioFile" onChange={(e) => setAudioFile(e.target.files[0])}/>
                    </div>
                    <div className='mt-5 mb-5'>
                        <label>title</label>
                        <input type='text' onChange={(e) => setSongName(e.target.value)}/>
                    </div>
                    <div className='mt-5 mb-5'>
                        <label>Description</label>
                        <input type='text-area' onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className='mt-5 mb-5'>
                        <label>Genre</label>
                        <input type='text' onChange={(e) => setGenre(e.target.value)}/>
                    </div>
                    <button type='submit'>Upload Music</button>
                </form>
            </div>
        </div>
    )
}

export default UploadMusic;
