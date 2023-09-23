import React from 'react'
import ShowAllCarousel from '../../components/CardCarousel/ShowAllCarousel'

const UserMusic = ({ musicList }) => {

    return (
        <div>
            <div className='flex-grow mt-4 '>
                <ShowAllCarousel musicList={musicList} />
            </div>
        </div>
    )
}

export default  UserMusic
