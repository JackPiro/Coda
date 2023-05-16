import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import authService from '../../services/authService'
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';

import jwt_decode from "jwt-decode";

const Profile = () => {
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem('user'));
    const decodedToken = jwt_decode(user.userToken);
    const navigate = useNavigate();

    const displayAvailableMusic = (musicList) => {
        const music = musicList.map()
    }

    const handleLogout = () => {
        authService.logout();
        navigate('/login');
    }

    const handleMusicStream = (id) => {
        //blob is the form used for non js formatted data like audio data we can send that as an option to the axios
        axios.get("http://localhost:5001/api/music/stream/" + id, {responseType: 'blob'})
            .then((response) => {
                //
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const audio = new Audio(url);
                audio.play();
            })
            .catch((err) => {
                console.log('cant play rn...', err)
            })
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get("http://localhost:5001/api/music/get-all-music", {withCredentials: true})
            .then((res) => {
                console.log('userID:',decodedToken.id);
                setMusicList(res.data);
                setIsLoading(false)
            })
            .catch((err) => {console.log(err)})
            setIsLoading(false)
    }, []);

    return (
        <div className='flex flex-row'>
            <SideNavBar />
            <div className='w-screen'>
                <TopNavBar />
                <button onClick={handleLogout} className='rounded-lg bg-blue-600 absolute top-18 right-3 p-2 m-3' >Logout</button>
                {
                    isLoading === true ? <h2>Loading rn...</h2> : null
                }
                <h1 className='m-12 absolute top-18 left-40'>Welcome {user.firstName}</h1>
                <div className="flex flex-row flex-wrap justify-center m-3">
                    {/* use () unless you are returning a value jsx */}
                    {musicList.map((music) => (
                        <div key={music._id} className='bg-slate-800 m-3 p-3 rounded-md '>
                            <h3>{music.title}</h3>
                                <div>
                                    <img src={music.coverArt} alt='sorry this cant be displayed' className='w-36 h-36 rounded-md object-cover'/>
                                </div>
                                {
                                    decodedToken.id === music.artistID ? <Link to={'/edit-music/' + music._id} className='rounded-full bg-blue-600 p-1 m-2'>edit</Link> : null
                                }
                            <button className='rounded-full bg-blue-600 p-1 m-2' onClick={handleMusicStream(music._id)}>Play</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;