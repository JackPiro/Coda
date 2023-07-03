import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authService from '../../services/authService'
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import NoSearchNav from '../../components/TopNavBar/NoSearchNav';
import CardCarousel from '../../components/CardCarousel/CardCarousel';

import jwt_decode from "jwt-decode";

const Profile = () => {
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
        <div className='flex bg-gradient-to-t from-[#0E121A] from-80% to-[#336dff3b]'>
            <div className='fixed w-48 h-screen'>
                <SideNavBar />
            </div>
            <div className='flex-grow mt-4 ml-48 overflow-x-hidden'>
                <NoSearchNav />
                {
                    isLoading === true ? <h2>Loading rn...</h2> : null
                }
                <div>
                    <h1 className='block m-5 ml-8 text-2xl text-left'>Welcome {user && decodedToken.firstName ? decodedToken.firstName : 'some user'}</h1>
                    <div className="flex flex-row flex-wrap justify-center m-3">
                        <CardCarousel musicList={musicList} />
                        <CardCarousel musicList={musicList} />
                        <CardCarousel musicList={musicList} />
                    </div>
                </div>
            </div>
        </div>
        // <div className='flex flex-row '>
        //     <SideNavBar />
        //     <div className='w-48 h-screen m-5'></div>
        //     <div className='flex-grow '>
        //         <TopNavBar />
        //         {
        //             isLoading === true ? <h2>Loading rn...</h2> : null
        //         }
        //         <div>
        //             <h1 className='block m-8 text-2xl text-left'>Welcome {user && decodedToken.firstName ? decodedToken.firstName : 'some user'}</h1>
        //             <div className="flex flex-row flex-wrap justify-center m-3">
        //                 {/* use () unless you are returning a value jsx */}
        //                 <CardCarousel musicList={musicList} />
        //                 <CardCarousel musicList={musicList} />
        //                 <CardCarousel musicList={musicList} />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Profile;
/* {musicList.map((music) => (
    <div key={music._id} className='p-3 m-3 rounded-md bg-slate-800 '>
        <h3>{music.title}</h3>
            <div>
                <img src={music.coverArt} alt='sorry this cant be displayed' className='object-cover rounded-md w-36 h-36'/>
            </div>
            {
                decodedToken.id === music.artistID ? <Link to={'/edit-music/' + music._id} className='p-1 m-2 bg-blue-600 rounded-full'>edit</Link> : null
            }
        <button className='p-1 m-2 bg-blue-600 rounded-full' onClick={handleMusicStream(music._id)}>Play</button>
    </div>
))} */
