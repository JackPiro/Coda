import React from 'react'
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LineSongDisplay from '../../components/LineSongDisplay/LineSongDisplay';


const ArtistDiscography = ({ artistId }) => {
    const [albumList, setAlbumList] = useState([]);
    const [EPList, setEPList] = useState([]);
    const [singlesList, setSinglesList] = useState([]);
    const [topTenList, setTopTenList] = useState([]);
    const [allMusicList, setAllMusicList] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        axios.get("http://localhost:5001/api/music/get-music-by-artist/" + artistId)
            .then((res) => {
                setAllMusicList(res.data);
                setLoading(false);
                console.log('Artist Music:', res.data);
                console.log(artistId);
            })
            .catch(err => console.log(err, 'sincerely - get music by artist'));
    }, [])

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
                <p className='block ml-10 mt-6 text-left text-lg font-bold'>Albums</p>
                <CardCarousel musicList={albumList}/>
            </div>
            <div>
                <p className='block ml-10 mt-6 text-left text-lg font-bold'>EP's</p>
                <CardCarousel musicList={EPList}/>
            </div>
            <div>
                <p className='block ml-10 mt-6 text-left text-lg font-bold'>Singles</p>
                <CardCarousel musicList={singlesList}/>
            </div>
            <div>
                <p className='block ml-10 mt-6 text-left text-lg font-bold'>Seen on</p>
                <CardCarousel musicList={topTenList}/>
            </div>
        </div>
    )
}

export default ArtistDiscography
