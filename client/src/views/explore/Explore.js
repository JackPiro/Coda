import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authService from '../../services/authService'
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import CardCarousel from '../../components/CardCarousel/CardCarousel';

import jwt_decode from "jwt-decode";

const Explore = ({ searchResults, setSearchResults }) => {
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem('user'));
    const decodedToken = jwt_decode(user.userToken);
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
    
    /* <button onClick={handleLogout} className='absolute p-2 m-3 bg-blue-600 rounded-lg top-18 right-3' >Logout</button> */
    
    return (
        <div className='flex'>
            <div className='fixed w-48 h-screen'>
                <SideNavBar />
            </div>
            <div className='flex-grow mt-4 ml-48 overflow-x-hidden'>
                <TopNavBar setSearchResults={setSearchResults} />
                {
                    isLoading === true ? <h2>Loading rn...</h2> : null
                }
                <div>
                    <h1 className='block m-5 ml-8 text-2xl text-left'>Welcome {user && decodedToken.firstName ? decodedToken.firstName : 'some user'}</h1>
                    <div className="flex flex-row flex-wrap justify-center m-3">
                        <CardCarousel musicList={!searchResults ? musicList : searchResults} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;

