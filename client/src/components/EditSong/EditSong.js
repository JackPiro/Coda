import React, { useEffect, useState } from 'react';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

import authService from '../../services/authService'

import jwt_decode from "jwt-decode";

const EditSong = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    //returnedSong === null ? '' : returnedSong.title
    //value={returnedSong && returnedSong.title && title === null ? returnedSong.title : title}

    const [returnedSong, setReturnedSong] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    
    useEffect(() => {
        axios.get("http://localhost:5001/api/music/" + id)
            .then((res) => {
                console.log(res.data);
                setReturnedSong(res.data);
                if (title === '') {
                    setTitle(res.data.title);
                }

                if (description === '') {
                    setDescription(res.data.description);
                }

                if (genre === '') {
                    setGenre(res.data.genre);
                }
            })
            .catch((err) => {
                console.log('something went wrong. sincerely, -EditSong.js get', err);
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch("http://localhost:5001/api/music/update/" + id, { title, description, genre})
            .then((res) => {
                console.log('song updated successfully', res.data)
                navigate('/Home')
                return res.data
            })
            .catch((err) => {
                console.log('something went wrong updating. sincerely, -EditSong.js post', err)
            })
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:5001/api/music/delete/${id}`)
            .then((res) => {
                navigate('/Home')
                return res.data
            })
            .catch((err) => {
                console.log('something went wrong. sincerely, -EditSong.js delete', err)
            })
    }

    return (
        <div className='flex flex-row'>
            <SideNavBar />
            <div className="p-6 rounded-md w-screen">
                <TopNavBar />
                <form onSubmit={handleSubmit} className="space-y-5 w-90 bg-gray-800 p-10 rounded-lg">
                    <div>
                        {/*the way we are populating the fields is by checking if there is a value for returned song yet and our state has to be undefined */}
                        <label htmlFor="title" className="block text-sm font-medium text-white">Title</label>
                        <input value={returnedSong && returnedSong.title && title === null ? returnedSong.title : title} onChange={(e) => {setTitle(e.target.value)}} id="title" name="title" type="text" className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-900 focus:ring-0 text-white" />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-white">Description</label>
                        <textarea value={returnedSong && returnedSong.description && description === null ? returnedSong.description : description} onChange={(e) => {setDescription(e.target.value)}} id="description" name="description" rows="3" className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-900 focus:ring-0 text-white" />
                    </div>
                    <div>
                        <label htmlFor="genre" className="block text-sm font-medium text-white">Genre</label>
                        <input value={returnedSong && returnedSong.genre && genre === null ? returnedSong.genre : genre} onChange={(e) => {setGenre(e.target.value)}} id="genre" name="genre" type="text" className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-900 focus:ring-0 text-white" />
                    </div>
                    <div className='space-x-3'>
                        <button type="submit" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Save Changes
                        </button>
                        <button onClick={handleDelete} type="button" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            Delete Music
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditSong;
