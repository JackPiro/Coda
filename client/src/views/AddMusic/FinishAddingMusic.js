import React, { useState, useEffect } from "react";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import NoSearchNav from "../../components/TopNavBar/NoSearchNav";
import '../../components/shared/button/newButton.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";


const FinishAddingMusic= ({fileList, setFileList, releaseType}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [duration, setDuration] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState([]);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [photoName, setPhotoName] = useState(null);

    const [trackISRC, setTrackISRC] = useState('');
    const [songName, setSongName] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [audioFile, setAudioFile] = useState();
    const [coverArt, setCoverArt] = useState();
    const [isLoading, setIsLoading] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'));
    const decodedToken = jwt_decode(user.userToken);
    const navigate = useNavigate();

    // Handle photo preview

    const onPhotoChange = e => {
        setPhotoName(e.target.files[0].name);
        const reader = new FileReader();
        reader.onload = (e) => {
            setPhotoPreview(e.target.result);
            setCoverArt(e.target.result)
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const fileInput = React.createRef();

    const handleFileInputClick = () => {
        fileInput.current.click();
    }




    const handleRemoveUpload = (index) => {
        setFileList(prevFiles => prevFiles.filter((file, i) => i !== index));
        // Handle duration removing
    };
    



    useEffect(() => {
        if(fileList.length) {
            fileList.forEach(file => {
                const audio = new Audio(URL.createObjectURL(file));
                audio.onloadedmetadata = function() {
                    // Update duration handling to account for multiple files
                }
            });
        }
    }, [fileList]);



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

    return (
        <div className="bg-gradient-to-r from-[#0E121A] to-indigo-700 relative">
            <SideNavBar />
            <div className="ml-48"><NoSearchNav /></div>
            <div className="flex w-full min-w-screen min-h-screen bg-gradient-to-r from-[#0E121A] to-indigo-700">
                <div className="bg-[#181C25] mt-6 mr-6 mb-6 text-white rounded-3xl shadow-xl w-full overflow-hidden ml-56 justify-center p-10 space-x-6">
                    <div className="flex flex-row space-x-6">
                        {/* <div className="flex flex-col items-center justify-center bg-[#202530] rounded-lg shadow-2xl w-1/4 h-full p-5 border">
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                multiple
                            />
                            <div className="w-full h-72 p-5 border-2 border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center">
                                <p>Add CoverArt</p>
                                <label htmlFor="fileInput" className="block cursor-pointer text-blue-500 underline">browse files</label>
                            </div>
                            <div className="text-center">
                                    <div className="mt-2" style={!photoPreview ? {} : {display: 'none'}}>
                                        <img src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWgelFhx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" className="mb-3 w-40 h-40 m-auto rounded-full shadow-lg shadow-black border-4 border-[#202530]" />
                                    </div>
                                    {photoPreview && (
                                        <div className="mt-2">
                                            <span className="block w-40 h-40 rounded-sm mb-3 m-auto shadow-lg shadow-black border-4 border-[#202530]" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url(${photoPreview})`}}></span>
                                        </div>
                                    )}
                                    <button type="button" className="inline-flex items-center px-4 py-2 b border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3" onClick={handleFileInputClick}>
                                        Select New Photo
                                    </button>
                                </div>
                        </div> */}

                        <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
                            <input type="file" className="hidden" ref={fileInput} onChange={onPhotoChange} />
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="photo">
                                Cover Art <span className="text-red-600"> </span>
                            </label>
                            
                            <div className="text-center">
                                <div className="mt-2" style={!photoPreview ? {} : {display: 'none'}}>
                                    <img src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWgelFhx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" className="mb-3 w-40 h-40 m-auto rounded-md shadow-lg shadow-black border-4 border-[#202530] object-cover" />
                                </div>
                                {photoPreview && (
                                    <div className="mt-2">
                                        <img src={photoPreview} className="mb-3 w-40 h-40 m-auto rounded-md shadow-lg shadow-black border-4 border-[#202530] object-cover" />
                                    </div>
                                )}
                                <button type="button" className="inline-flex items-center px-4 py-2 b border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3" onClick={handleFileInputClick}>
                                    Select New Photo
                                </button>
                            </div>
                        </div>


                        <div className="bg-[#202530] rounded-lg flex flex-col items-center space-y-4 w-3/4 h-76 p-5">
                            <input onChange={(e) => setGenre(e.target.value)} type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-full h-1/4 pl-2" placeholder={ releaseType === 'album' ? "Album Name*" : "Track Name*" }/>
                            <div className="flex space-x-2 w-full h-1/4">
                                <input onChange={(e) => setGenre(e.target.value)} type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-1/2 pl-2" placeholder="Genre*"/>
                                <input onChange={(e) => setGenre(e.target.value)} type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-1/2 pl-2" placeholder="Tags*"/>
                            </div>
                            <input onChange={(e) => setGenre(e.target.value)} type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-full h-2/4 pl-2" placeholder="Story/Context*"/>
                        </div>
                    </div>


                    {fileList.length > 0 && fileList.map((file, index) => (
                        <div key={index} className="relative bg-[#202530] my-3  shadow-2xl rounded-lg flex flex-col justify-between items-start p-4">
                            <div className="w-full flex justify-between">
                                <div>
                                    <label className="font-bold">Song Name:</label>
                                    <input className="bg-[#181C25] ml-2 p-2 rounded-lg text-slate-400" populate={file.name} />
                                </div>
                                <button
                                    onClick={() => handleRemoveUpload(index)}
                                    className="absolute rounded-full top-2 right-2 p-1 py-0 text-white"
                                >
                                    X
                                </button>
                            </div>
                            <button 
                                onClick={() => setDropdownOpen(prev => ({...prev, [index]: !prev[index]}))}
                                className="self-end mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                            >
                                {dropdownOpen[index] ? 'Hide Advanced Options' : 'Show Advanced Options'}
                            </button>
                            {dropdownOpen[index] && 
                            <div className="flex justify-center w-full mt-4 space-x-10">
                                <div>
                                    <label className="font-bold">Track ISRC:</label>
                                    <input className="bg-[#181C25] ml-2 p-2 rounded-lg text-slate-400" placeholder="Enter Track ISRC"/>
                                </div>
                                <div>
                                    <label className="font-bold mt-2">Track ISWC:</label>
                                    <input className="bg-[#181C25] ml-2 p-2 rounded-lg text-slate-400" placeholder="Enter Track ISWC"/>
                                </div>
                            </div>
                            }
                        </div>
                    ))}

                </div>
            </div>
            <button className="absolute bottom-0 right-0 block p-2 mt-4 register-button">Continue</button>
        </div>
    );
};

export default FinishAddingMusic;
