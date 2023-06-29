import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";


let currentAudio = null; // Added a global reference to the current audio

const SongCard = ({ song }) => {
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
            const audioFileName = song.audioFile.split('/').pop();
            axios.get("http://localhost:5001/api/music/stream/" + audioFileName, {responseType: 'blob'})
                .then((res) => {
                    const url = window.URL.createObjectURL(new Blob([res.data]));
                    const newAudio = new Audio(url);
                    newAudio.play();
                    setAudio(newAudio);
                    currentAudio = newAudio; // When a new audio is created, set it as the current audio
                    setPaused(false);
                })
                .catch((err) => {
                    console.log('cant play rn...', err);
                });
        }
    };


    return (
        <div className="bg-gray-900 shadow-lg rounded-lg p-3 w-52 hover:bg-gray-800 transition ">
            <div className="group relative">
                <img className="w-full md:w-72 block rounded-lg shadow-xl object-cover h-44" src={song.coverArt} alt='sorry this cant be displayed' />
                <div className="absolute p-2 bg-black rounded bg-opacity-0 group-hover:bg-opacity-20 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </button>
                    <button onClick={ handleMusicStream } className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                    </button>
                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="p-2 pb-3 text-left">
                <h3 className="text-neutral-300 text-lg truncate">
                    <Link to={'/song-detail/' + song._id} className="hover:underline hover:text-white">{song.title}</Link>
                </h3>
                <p className="text-gray-400 text-base truncate">
                    <Link to={'/artist-profile/' + song.artistID} className="hover:underline hover:text-white">{song.artistID}</Link>
                </p>
            </div>
        </div>
    )
};

export default SongCard;
