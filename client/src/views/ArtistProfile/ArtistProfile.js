import React from 'react';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';



const ArtistProfile = () => {


    return (
        <div className='flex'>
            <SideNavBar />
            <div className='flex-grow mt-4 ml-48 overflow-x-hidden'>
                <ProfileHeader />
            </div>
        </div>
    )
}

export default ArtistProfile;
