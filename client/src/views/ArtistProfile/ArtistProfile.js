import React from 'react';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import { useParams, } from "react-router-dom";
import { useState } from 'react';
import ArtistDiscography from './ArtistDiscography';
import ArtistPortfolio from './ArtistPortfolio';


const ArtistProfile = () => {
    const { id } = useParams();
    const [active, setActive] = useState('portfolio');

    return (
        <div className='flex'>
            <SideNavBar />
            <div className='flex-grow ml-48 overflow-x-hidden'>
                <ProfileHeader artistId={id} active={active} setActive={setActive} />
                {active === 'portfolio' ? <ArtistPortfolio artistId={id} /> : <ArtistDiscography artistId={id} />}
            </div>
        </div>
    )
}



export default ArtistProfile;
