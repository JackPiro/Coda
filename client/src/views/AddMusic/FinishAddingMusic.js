import React, { useState, useEffect } from "react";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import NoSearchNav from "../../components/TopNavBar/NoSearchNav";
import '../../components/shared/button/newButton.css'

const FinishAddingMusic= ({fileList, setFileList}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [releaseType, setReleaseType] = useState("track");
    const [duration, setDuration] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState([]);
    const [trackISRC, setTrackISRC] = useState('');

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to Array
        setFileList(prevFiles => [...prevFiles, ...files]); // Append new files to existing list
    };
    

    
    const handleReleaseTypeChange = (type) => {
        setReleaseType(type);
    };

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

    return (
        <div className="bg-gradient-to-r from-[#0E121A] to-indigo-700 relative">
            <SideNavBar />
            <div className="ml-48"><NoSearchNav /></div>
            <div className="flex w-full min-w-screen min-h-screen bg-gradient-to-r from-[#0E121A] to-indigo-700">
                <div className="bg-[#181C25] mt-6 mr-6 mb-6 text-white rounded-3xl shadow-xl w-full overflow-hidden ml-56 justify-center p-10 space-x-6">
                    <div className="flex flex-row space-x-6">
                        <div className="flex flex-col items-center justify-center bg-[#202530] rounded-lg shadow-2xl w-1/4 h-full p-5 border">
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
                        </div>

                        <div className="bg-[#202530] rounded-lg flex flex-col items-center space-y-4 w-3/4 h-76 p-5">
                            <input type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-full h-1/4 pl-2" placeholder="Album Name*"/>
                            <div className="flex space-x-2 w-full h-1/4">
                                <input type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-1/2 pl-2" placeholder="Genre*"/>
                                <input type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-1/2 pl-2" placeholder="Mood*"/>
                            </div>
                            <input type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-full h-1/4 pl-2" placeholder="Tags*"/>
                            <input type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-full h-2/4 pl-2" placeholder="Story/Context*"/>
                        </div>
                    </div>


                    {fileList.length > 0 && fileList.map((file, index) => (
                        <div key={index} className="relative bg-[#202530] my-3  shadow-2xl rounded-lg flex flex-col justify-between items-start p-4">
                            <div className="w-full flex justify-between">
                                <div>
                                    <label className="font-bold">Song Name:</label>
                                    <input className="bg-[#181C25] ml-2 p-2 rounded-lg text-slate-400" value={file.name} />
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
