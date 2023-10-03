import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

let currentAudio = null; // Added a global reference to the current audio

export default function SmallMusicCard({ musicList }) {

    const [audio, setAudio] = useState(null);
    const [paused, setPaused] = useState(true);

    const handleMusicStream = () => {
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause(); // If there's a current audio and it's not the same as this one, pause it
        }
        
        if (audio) {
            if (paused) {
                audio.play();
                setPaused(false);
            } else {
                audio.pause();
                setPaused(true);
            }

            
        } else {
            // const audioFileName = song.audioFile.split('/').pop();
            // axios.get("http://localhost:5001/api/music/stream/" + audioFileName, {responseType: 'blob'})
            //     .then((res) => {
            //         const url = window.URL.createObjectURL(new Blob([res.data]));
            //         const newAudio = new Audio(url);
            //         newAudio.play();
            //         setAudio(newAudio);
            //         currentAudio = newAudio; // When a new audio is created, set it as the current audio
            //         setPaused(false);
            //     })
            //     .catch((err) => {
            //         console.log('cant play rn...', err);
            //     });
        }
    };

    return (
        <div className="w-80 h-20 hover:bg-white hover:bg-opacity-10 transition-colors p-4 flex items-center space-x-4 rounded-lg shadow-2xl cursor-pointer">
            <div className="w-16 h-16">
                <img src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWgelFhx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" className="object-cover w-full h-full rounded" />
            </div>
            <div className="text-white">
                <h3 className="text-neutral-300 text-lg truncate">
                    <Link to={'/song-detail/' + "song._id"} className="hover:underline hover:text-white">{"songtitle"}</Link>
                </h3>
                <p className="text-gray-400 text-base truncate">
                    <Link to={'/artist-profile/' + "song.artistID"} className="hover:underline hover:text-white">{"song.artistID"}</Link>
                </p>
            </div>
        </div>
    )
}
