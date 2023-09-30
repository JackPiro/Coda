import React from 'react';

const ArtistCard = ({ artistName, artistImage }) => {
    return (
        <div className='bg-[#181C25] hover:bg-[#202530] transition-colors relative rounded-lg flex flex-col w-44 p-3 py-4 space-y-6'>
            <div className="rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1543794327-59a91fb815d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
            </div>
            <p className=' text-neutral-200 hover:underline hover:text-white truncate'>Username</p>
        </div>
    );
}

export default ArtistCard;
