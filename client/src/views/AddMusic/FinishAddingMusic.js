import React, { useState, useEffect } from "react";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import NoSearchNav from "../../components/TopNavBar/NoSearchNav";
import '../../components/shared/button/newButton.css'

const FinishAddingMusic= () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [releaseType, setReleaseType] = useState("track");
    const [duration, setDuration] = useState(null);
    const [fileList, setFileList] = useState([]);

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
        <div className="flex w-full min-w-screen min-h-screen bg-gradient-to-r from-[#0E121A] to-indigo-700">
            <SideNavBar />
            <div className="bg-[#181C25] mt-6 mr-6 mb-6 text-white rounded-3xl shadow-xl w-full overflow-hidden ml-56 justify-center p-10 space-x-6">
                <div className="flex flex-row space-x-6"> {/* Flex container added here */}
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
                        <input type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-full" placeholder="Album Name*"/>
                        <div className="flex space-x-2 w-full">
                            <input type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-1/2" placeholder="Album Name*"/>
                            <input type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-1/2" placeholder="Album Name*"/>
                        </div>
                        <input type="text" className="bg-[#181C25] rounded-lg px-2 py-3 w-full" placeholder="Album Name*"/>
                    </div>
                </div> {/* Close Flex container here */}

                {fileList.length > 0 && fileList.map((file, index) => (
                    <div key={index} className="relative bg-[#181C25] my-3 shadow-2xl rounded-lg flex justify-between items-center p-4">
                        <div>
                            <p className="text-xs"><strong>File Name: </strong>{file.name}</p>
                            <p className="text-xs"><strong>File Size: </strong>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            {/* Handle duration display for multiple files */}
                        </div>
                        <audio controls src={URL.createObjectURL(file)} />
                        <button
                            onClick={() => handleRemoveUpload(index)}
                            className="absolute rounded-full top-0 right-0 p-1 bg-red-500 text-white"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
            <button className="block p-2 mt-4 register-button">Continue</button>
        </div>
    );
};

export default FinishAddingMusic;
