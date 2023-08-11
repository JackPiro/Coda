import React from 'react'
import ShowAllCarousel from '../../components/CardCarousel/ShowAllCarousel';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LineSongDisplay from '../../components/LineSongDisplay/LineSongDisplay';


const ArtistDiscography = ({ artistId }) => {
    const [albumList, setAlbumList] = useState([]);
    const [singlesList, setSinglesList] = useState([]);
    const [topTenList, setTopTenList] = useState([]);
    const [allMusicList, setAllMusicList] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        setLoading(true);
        // Fetch albums by artist
        axios.get(`http://localhost:5001/api/music/get-albums-by-artist/${artistId}`)
            .then((res) => {
                setAlbumList(res.data);
            })
            .catch(err => console.log(err));
            // Fetch singles by artist
            axios.get(`http://localhost:5001/api/music/get-singles-by-artist/${artistId}`)
            .then((res) => {
                setSinglesList(res.data);
                setLoading(false)
            })
            .catch(err => console.log(err));
        }, [artistId]);

    if (loading) return <div>Loading...</div>

    return (
        <div className=''>
            <h2 className='text-left m-2'>Top Songs</h2>
            <div className='flex flex-grow justify-center w-full space-x-5 m-3'>
                <div className='flex flex-col w-full space-y-3'>
                    <LineSongDisplay />
                    <LineSongDisplay />
                    <LineSongDisplay />
                    <LineSongDisplay />
                    <LineSongDisplay />
                </div>
            </div>
            <div>
                {
                    albumList.length !== 0 ? 
                        <div>
                            <p className='block ml-10 mt-6 text-left text-lg font-bold'>Albums</p>
                            <ShowAllCarousel musicList={albumList}/>
                        </div>
                    : null
                }
            </div>
            <div>
                {
                        singlesList.length !== 0 ? 
                            <div>
                                <p className='block ml-10 mt-6 text-left text-lg font-bold'>Singles</p>
                                <ShowAllCarousel musicList={singlesList}/>
                            </div>
                        : null
                    }
            </div>
            <div>
                {
                        topTenList.length !== 0 ? 
                            <div>
                                <p className='block ml-10 mt-6 text-left text-lg font-bold'>Seen on</p>
                                <ShowAllCarousel musicList={topTenList}/>
                            </div>
                        : null
                    }
            </div>


            //make this for seen on list add a reference to artist credits on the details page
            <div>
                {
                        topTenList.length !== 0 ? 
                            <div>
                                <p className='block ml-10 mt-6 text-left text-lg font-bold'>Seen on</p>
                                <ShowAllCarousel musicList={topTenList}/>
                            </div>
                        : null
                    }
            </div>
        </div>
    )
}

export default ArtistDiscography
