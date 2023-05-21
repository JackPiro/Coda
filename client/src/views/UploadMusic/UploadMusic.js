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
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));
    const decodedToken = jwt_decode(user.userToken);

    const submitHandler = (e) => {
        setIsLoading(true)
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
                        setIsLoading(false)
                    })
                    .catch((err) => {
                        console.log(err, 'ERR sincerely, -UploadMusic.js')
                    })
            }
            else {
                console.log('you arent registered as an artist')
                setIsLoading(false)
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
            <div className='fixed w-48 h-screen bg-transparent'>
                <SideNavBar />
            </div>
            <div className='flex-grow p-5 mt-4 ml-56 bg-transparent'>
                <TopNavBar />
                <form className='px-8 pt-6 pb-8 mb-4 bg-transparent rounded shadow-md' onSubmit={submitHandler} encType="multipart/form-data">
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-bold text-white opacity-80'>Cover Art</label>
                        <input className='w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none opacity-80 focus:outline-none focus:shadow-outline' type='file' name="coverArt" onChange={(e) => setCoverArt(e.target.files[0])}/>
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-bold text-white opacity-80'>Audio File</label>
                        <input className='w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none opacity-80 focus:outline-none focus:shadow-outline' type='file' name="audioFile" onChange={(e) => setAudioFile(e.target.files[0])}/>
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-bold text-white opacity-80'>Title</label>
                        <input className='w-full px-3 py-2 leading-tight text-white bg-transparent border rounded shadow appearance-none opacity-80 focus:outline-none focus:shadow-outline' type='text' onChange={(e) => setSongName(e.target.value)}/>
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-bold text-white opacity-80'>Description</label>
                        <input className='w-full px-3 py-2 leading-tight text-white bg-transparent border rounded shadow appearance-none opacity-80 focus:outline-none focus:shadow-outline' type='text-area' onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-bold text-white opacity-80'>Genre</label>
                        <input className='w-full px-3 py-2 leading-tight text-white bg-transparent border rounded shadow appearance-none opacity-80 focus:outline-none focus:shadow-outline' type='text' onChange={(e) => setGenre(e.target.value)}/>
                    </div>
                    <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700' type='submit'>Upload Music</button>
                </form>
                {
                    isLoading === true ? 
                    <div className="flex justify-center">
                        <span className="circle animate-loader"></span>
                        <span className="circle animate-loader animation-delay-200"></span>
                        <span className="circle animate-loader animation-delay-400"></span>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}    
    // return (
    //     <div className='flex flex-row'>
    //         <div className='fixed w-48 h-screen'>
    //             <SideNavBar />
    //         </div>
    //         <div className='flex-grow mt-4 ml-56'>
    //             <TopNavBar />
    //             <button className='mr-4' onClick={handleLogout}>Logout</button>
    //             <Link to={'/profile'}>Back</Link>
    //             <form className='' onSubmit={submitHandler} encType="multipart/form-data">
    //                 <div className='mt-5 mb-5'>
    //                     <label>coverArt</label>
    //                     <input type='file' name="coverArt" onChange={(e) => setCoverArt(e.target.files[0])}/>
    //                 </div>
    //                 <div className='mt-5 mb-5'>
    //                     <label>audioFile</label>
    //                     <input type='file' name="audioFile" onChange={(e) => setAudioFile(e.target.files[0])}/>
    //                 </div>
    //                 <div className='mt-5 mb-5'>
    //                     <label>title</label>
    //                     <input type='text' onChange={(e) => setSongName(e.target.value)}/>
    //                 </div>
    //                 <div className='mt-5 mb-5'>
    //                     <label>Description</label>
    //                     <input type='text-area' onChange={(e) => setDescription(e.target.value)}/>
    //                 </div>
    //                 <div className='mt-5 mb-5'>
    //                     <label>Genre</label>
    //                     <input type='text' onChange={(e) => setGenre(e.target.value)}/>
    //                 </div>
    //                 <button type='submit'>Upload Music</button>
    //             </form>
    //             {
    //                 isLoading === true ? 
    //                 <div className="flex justify-center">
    //                     <span className="circle animate-loader"></span>
    //                     <span className="circle animate-loader animation-delay-200"></span>
    //                     <span className="circle animate-loader animation-delay-400"></span>
    //                 </div>
    //                 : null
    //             }
    //         </div>
    //     </div>
    // )

export default UploadMusic;
