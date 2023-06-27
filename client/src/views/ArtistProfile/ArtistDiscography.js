import React from 'react'
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import axios from 'axios';
import { useEffect, useState } from 'react';


const ArtistDiscography = ({ artistId }) => {
    const [musicList, setMusicList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get("http://localhost:5001/api/music/get-music-by-artist/" + artistId)
            .then((res) => {
                setMusicList(res.data);
                setLoading(false);
                console.log('Artist Music:', res.data);
                console.log(artistId);
            })
            .catch(err => console.log(err, 'sincerely - get music by artist'));
    }, [])

    if (loading) return <div>Loading...</div>

    return (
        <div className=''>
            
            <div>
                <p className='block ml-10 mt-6 text-left text-lg font-bold'>Albums</p>
                <CardCarousel musicList={musicList}/>
            </div>
            <div>
                <p className='block ml-10 mt-6 text-left text-lg font-bold'>EP's</p>
                <CardCarousel musicList={musicList}/>
            </div>
            <div>
                <p className='block ml-10 mt-6 text-left text-lg font-bold'>Singles</p>
                <CardCarousel musicList={musicList}/>
            </div>
            <div>
                <p className='block ml-10 mt-6 text-left text-lg font-bold'>Seen on</p>
                <CardCarousel musicList={musicList}/>
            </div>
        </div>
    )
}

export default ArtistDiscography
