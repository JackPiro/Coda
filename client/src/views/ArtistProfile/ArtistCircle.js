import React from 'react';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import CircleProfileHeader from '../../components/ProfileHeader/CircleProfileHeader';
import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import UnfinishedSongs from './UnfinishedSongs';
import ExclusiveMarket from './ExclusiveMarket';

const ArtistCircle = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [active, setActive] = useState('Exclusive Market')

    return (
        <div className='flex'>
            <SideNavBar />
            <div className='flex-grow ml-48 overflow-x-hidden'>
                <CircleProfileHeader artistId={id} active={active} setActive={setActive} />
                {active === 'Exclusive Market' ? <ExclusiveMarket artistId={id} /> : <UnfinishedSongs artistId={id} />}
            </div>
        </div>
    )
}



export default ArtistCircle;
