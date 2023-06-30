import React, { useState } from 'react';
import axios from 'axios';
import PersonIcon from '../../assets/Icons/PersonIcon';

const CompleteProfile = () => {
    const [showError, setShowError] = useState(false);
    const [bio, setBio] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [socialLinks, setSocialLinks] = useState('');
    const [photoName, setPhotoName] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);

    const onPhotoChange = e => {
        setPhotoName(e.target.files[0].name);
        const reader = new FileReader();
        reader.onload = (e) => {
            setPhotoPreview(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const fileInput = React.createRef();

    const handleFileInputClick = () => {
        fileInput.current.click();
    }

    const submitHandler = () => {
        axios.put("")
    }

    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#0E121A] ">
            <div className="p-8 bg-[#181C25] rounded-lg shadow-xl">
                {showError && (
                <div className="fixed top-0 w-full p-4  text-white bg-red-500 transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in-out">
                    Please complete the form.
                </div>
                )}

                <form className="space-y-5">
                    {/* if user is artist show choose artist name if not show display name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Display Name</label>
                        <input onChange={e => setDisplayName(e.target.value)} type="text" class="w-full bg-[#181C25] text-sm pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Go Crazy" />
                    </div>
                    <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
                        <input type="file" className="hidden" ref={fileInput} onChange={onPhotoChange} />
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-center" for="photo">
                            Profile Photo <span className="text-red-600"> </span>
                        </label>
                        
                        <div className="text-center">
                            <div className="mt-2" style={!photoPreview ? {} : {display: 'none'}}>
                                <img src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" className="w-40 h-40 m-auto rounded-full shadow" />
                            </div>
                            {photoPreview && (
                                <div className="mt-2">
                                    <span className="block w-40 h-40 rounded-full m-auto shadow" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url(${photoPreview})`}}></span>
                                </div>
                            )}
                            <button type="button" className="inline-flex items-center px-4 py-2 b border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3" onClick={handleFileInputClick}>
                                Select New Photo
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Bio</label>
                        <input onChange={e => setBio(e.target.value)} type="text" class="w-full bg-[#181C25] text-sm pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="your story" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Add Your Social Links</label>
                        <input type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" onChange={e => setSocialLinks(e.target.value)} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CompleteProfile;
