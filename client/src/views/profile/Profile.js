import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authService from '../../services/authService'
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import NoSearchNav from '../../components/TopNavBar/NoSearchNav';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import BarPlay from '../../components/BarPlay/BarPlay';
import SmallMusicCard from '../../components/LineSongDisplay/SmallMusicCard';
import SongCardTwo from '../../components/SongCard/SongCardTwo';

import jwt_decode from "jwt-decode";

const Profile = () => {
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    

    // const user = JSON.parse(localStorage.getItem('user'));
    // const decodedToken = jwt_decode(user.userToken);

    let decodedToken = null;

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.userToken) {
        try {
            decodedToken = jwt_decode(user.userToken);
        } catch (error) {
            console.error("Error decoding the token:", error);
        }
    } else {
        console.warn("No user or user token found in local storage.");
    }



    const navigate = useNavigate();


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

    const handleLogout = () => {
        authService.logout();
        navigate('/login');
    }

    // const song = () => {
    //     musicList.slice(currentIndex).map((song) => (
    //         <SongCard key={song._id} song={song} />
    //     ))
    // }
    




    
    return (
        <div className='flex bg-gradient-to-t from-[#0E121A] from-80% to-[#336dff3b]'>
            <div className='fixed w-48 h-screen'>
                <SideNavBar />
            </div>
            <div className='flex-grow ml-48 overflow-x-hidden'>
                <NoSearchNav />
                {
                    isLoading === true ? <h2>Loading rn...</h2> : null
                }
                <div>
                    <h1 className='block m-5 ml-8 text-2xl text-left'>Welcome {user && decodedToken.firstName ? decodedToken.firstName.toUpperCase() : 'some user'}</h1>
                    <div className='p-6'>
                        <div className='flex'>
                            <SmallMusicCard musicList={musicList} />
                            <SmallMusicCard musicList={musicList} />
                            <SmallMusicCard musicList={musicList} />
                        </div>
                        <div className='flex'>
                            <SmallMusicCard musicList={musicList} />
                            <SmallMusicCard musicList={musicList} />
                            <SmallMusicCard musicList={musicList} />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center m-3">
                        <CardCarousel musicList={musicList} />
                        <CardCarousel musicList={musicList} />
                        <CardCarousel musicList={musicList} />
                    </div>
                </div>
            </div>
            <BarPlay />
        </div>
    );
};

export default Profile;

