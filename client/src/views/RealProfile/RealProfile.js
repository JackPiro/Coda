import { React, useEffect, useState } from 'react';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import { Link, useNavigate } from 'react-router-dom'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import axios from 'axios';
import NavWithSettings from '../../components/TopNavBar/NavWithSettings';
import YourProfileHeader from '../../components/ProfileHeader/YourProfileHeader';
import ShowAllCarousel from '../../components/CardCarousel/ShowAllCarousel';



import authService from '../../services/authService'

import jwt_decode from "jwt-decode";

const RealProfile = () => {
    const [musicList, setMusicList] = useState([]);
    const [active, setActive] = useState('portfolio')


    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:5001/api/music/get-all-music", {withCredentials: true})
            .then((res) => {
                setMusicList(res.data);
            })
            .catch((err) => {console.log(err)})
    }, []);

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
        <div className="flex flex-row overflow-x-hidden">
            <div className='fixed w-48 h-screen'>
                <SideNavBar />
            </div>
            <div className='flex-grow mt-4 ml-48 '>
                <YourProfileHeader user={user} active={active} setActive={setActive}/>
                <ShowAllCarousel musicList={musicList} />
                <ShowAllCarousel musicList={musicList} />
                <ShowAllCarousel musicList={musicList} />
                <ShowAllCarousel musicList={musicList} />
            </div>
        </div>
    );
};

export default RealProfile;

/* <div className="p-4 align-middle rounded shadow-md w-80 outline outline-white">
    <h1 className="mb-4 text-2xl text-center">Your Profile</h1>
    
    <form>
        <label className="block mb-2">Username</label>
        <input className="w-full px-3 py-2 mb-4 border rounded" type="text" placeholder="Username" />

        <label className="block mb-2">Email</label>
        <input className="w-full px-3 py-2 mb-4 border rounded" type="email" placeholder="Email Address" />

        <button className="w-full p-2 mb-4 text-white bg-blue-600 rounded">Update Profile</button>
    </form>
    <button onClick={handleLogout} className="w-full p-2 text-white bg-red-600 rounded">Logout</button>
</div> */