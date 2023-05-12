import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import authService from '../../services/authService'



const Profile = (props) => {
    const [songName, setSongName] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [audioFile, setAudioFile] = useState();
    const [coverArt, setCoverArt] = useState();

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.role === 'Artist') {

                let formData = new FormData()
                formData.append('audioFile', audioFile);
                formData.append('description', description);
                formData.append('genre', genre);
                formData.append('coverArt', coverArt);
                formData.append('songName', songName);


                axios.post("http://localhost:5001/api/music/create", formData)
                    .then((res) => {
                        console.log(res.data)
                        navigate('/profile')
                    })
                    .catch((err) => {
                        console.log(err, 'ERR sincerely, -Profile.js')
                    })
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
        <div>
            <button className='mr-4' onClick={handleLogout}>Logout</button>
            <Link to={'/profile'}>Back</Link>
            <form className='' onSubmit={submitHandler}>
                <div className='mt-5 mb-5'>
                    <label>Upload Cover</label>
                    <input type='file' onChange={(e) => setCoverArt(e.target.files[0])}/>
                </div>
                <div className='mt-5 mb-5'>
                    <label>Upload Audio File</label>
                    <input type='file' onChange={(e) => setAudioFile(e.target.files[0])}/>
                </div>
                <div className='mt-5 mb-5'>
                    <label>Song Name</label>
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
            </form>
        </div>
    )
}

export default Profile;
