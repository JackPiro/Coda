import React from 'react';
import NoSearchNav from '../../components/TopNavBar/NoSearchNav';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import Playbar from '../../components/Playbar/Playbar';
import LineSongDisplay from '../../components/LineSongDisplay/LineSongDisplay';
import CreditsCard from '../../components/ArtistCards/CreditsCard';
import { useState } from 'react';

const UnfinishedSongDetail = () => {

    // Sample comments
    const allComments = [
        { username: "John", text: "Great song!" },
        { username: "Alice", text: "I think the vocals could be improved." },
        { username: "Alice", text: "I think the vocals could be improved." },
        { username: "Alice", text: "I think the vocals could be improved." },
    ];

    const [commentsToShow, setCommentsToShow] = useState(3);
    const [comments, setComments] = useState(allComments.slice(0, commentsToShow));

    const handleShowMore = () => {
        setCommentsToShow(allComments.length);
        setComments(allComments);
    };

    const handleShowLess = () => {
        setCommentsToShow(3);
        setComments(allComments.slice(0, 3));
    };


    return (
        <div>
            <div className='flex bg-gradient-to-t from-[#0E121A] from-80% to-[#336dff3b]'>
                <div className='fixed w-48 h-screen'>
                    <SideNavBar />
                </div>
                <div className='flex-grow ml-48 overflow-x-hidden'>
                    <NoSearchNav />
                    <div>
                        <div class="min-h-screen p-5 flex space-x-5  justify-center ">
                            <div className='  min-h-screen flex flex-col space-y-3'>
                                <h1 className='font-bold text-3xl text-left'>Artist Name</h1>
                                <p className='text-left text-slate-700 text-xs'>Credited</p>
                                <div className='flex space-x-3 overflow-x-scroll overflow-y-hidden scrollable-x pb-3'>
                                    <CreditsCard />
                                    <CreditsCard />
                                    <CreditsCard />
                                    <CreditsCard />
                                    
                                </div>
                                <div className=''>
                                    <p className='text-left'>
                                        "Till It Hurts" is a song by Dutch electronic trio Yellow Claw, featuring vocals performed by Dutch singer Ayden (stage name of Sanne Veerbeek). It was released digitally as a single in November 2014 through Spinnin' Records
                                    </p>
                                    <p className='text-left mt-2'>
                                        what direction should this song go ill take inspo from the top voted finished version and credit you
                                    </p>
                                </div>
                                <div className='flex justify-start items-center pt-4 space-x-8'>
                                    <button className="hover:scale-110 text-white transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                        </svg>
                                    </button>
                                    <button className="hover:scale-110 text-white transform ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                    </button>
                                    <button className="hover:scale-110 text-white transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </button>
                                    {/*remix button only if artists turn it on*/}
                                    <button className="hover:scale-110 text-white transform ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M18.71 14.2899C18.5217 14.1016 18.2663 13.9958 18 13.9958C17.7337 13.9958 17.4783 14.1016 17.29 14.2899C17.1017 14.4782 16.9959 14.7336 16.9959 14.9999C16.9959 15.2662 17.1017 15.5216 17.29 15.7099L17.58 15.9999H16C14.9391 15.9999 13.9217 15.5785 13.1716 14.8284C12.4214 14.0782 12 13.0608 12 11.9999C12 10.9391 12.4214 9.92166 13.1716 9.17151C13.9217 8.42137 14.9391 7.99994 16 7.99994H17.59L17.29 8.28994C17.1963 8.3829 17.1219 8.49351 17.0711 8.61536C17.0203 8.73722 16.9942 8.86793 16.9942 8.99994C16.9942 9.13195 17.0203 9.26266 17.0711 9.38452C17.1219 9.50638 17.1963 9.61698 17.29 9.70994C17.3834 9.80262 17.4943 9.87595 17.6161 9.92571C17.7379 9.97548 17.8684 10.0007 18 9.99994C18.1316 10.0007 18.2621 9.97548 18.3839 9.92571C18.5057 9.87595 18.6166 9.80262 18.71 9.70994L20.71 7.70994C20.8027 7.6165 20.876 7.50569 20.9258 7.38385C20.9755 7.26201 21.0008 7.13155 21 6.99994C21.0008 6.86833 20.9755 6.73787 20.9258 6.61603C20.876 6.4942 20.8027 6.38338 20.71 6.28994L18.71 4.28994C18.6168 4.1967 18.5061 4.12274 18.3842 4.07228C18.2624 4.02182 18.1319 3.99585 18 3.99585C17.7337 3.99585 17.4783 4.10164 17.29 4.28994C17.1017 4.47825 16.9959 4.73364 16.9959 4.99994C16.9959 5.26624 17.1017 5.52164 17.29 5.70994L17.58 5.99994H16C15.0093 6.00067 14.0342 6.24671 13.1617 6.7161C12.2892 7.18548 11.5465 7.86361 11 8.68994C10.4535 7.86361 9.71079 7.18548 8.83832 6.7161C7.96585 6.24671 6.99072 6.00067 6 5.99994H4C3.73478 5.99994 3.48043 6.1053 3.29289 6.29283C3.10536 6.48037 3 6.73472 3 6.99994C3 7.26516 3.10536 7.51951 3.29289 7.70705C3.48043 7.89458 3.73478 7.99994 4 7.99994H6C7.06087 7.99994 8.07828 8.42137 8.82843 9.17151C9.57857 9.92166 10 10.9391 10 11.9999C10 13.0608 9.57857 14.0782 8.82843 14.8284C8.07828 15.5785 7.06087 15.9999 6 15.9999H4C3.73478 15.9999 3.48043 16.1053 3.29289 16.2928C3.10536 16.4804 3 16.7347 3 16.9999C3 17.2652 3.10536 17.5195 3.29289 17.707C3.48043 17.8946 3.73478 17.9999 4 17.9999H6C6.99072 17.9992 7.96585 17.7532 8.83832 17.2838C9.71079 16.8144 10.4535 16.1363 11 15.3099C11.5465 16.1363 12.2892 16.8144 13.1617 17.2838C14.0342 17.7532 15.0093 17.9992 16 17.9999H17.59L17.29 18.2899C17.1963 18.3829 17.1219 18.4935 17.0711 18.6154C17.0203 18.7372 16.9942 18.8679 16.9942 18.9999C16.9942 19.132 17.0203 19.2627 17.0711 19.3845C17.1219 19.5064 17.1963 19.617 17.29 19.7099C17.3834 19.8026 17.4943 19.8759 17.6161 19.9257C17.7379 19.9755 17.8684 20.0007 18 19.9999C18.1316 20.0007 18.2621 19.9755 18.3839 19.9257C18.5057 19.8759 18.6166 19.8026 18.71 19.7099L20.71 17.7099C20.8027 17.6165 20.876 17.5057 20.9258 17.3838C20.9755 17.262 21.0008 17.1315 21 16.9999C21.0008 16.8683 20.9755 16.7379 20.9258 16.616C20.876 16.4942 20.8027 16.3834 20.71 16.2899L18.71 14.2899Z" fill="white" />
                                        </svg>
                                    </button>
                                    <p>
                                        This artist has Remixs Turned on Help them finish the song
                                    </p>
                                </div>
                                <div className="scrollable-section max-h-72 overflow-y-scroll pr-6 ">
                                    {/* Comment input section */}
                                    <div className="flex space-x-3 mb-4 bg-[#0E121A]">
                                        <input 
                                            type="text" 
                                            placeholder="Add a suggestion... Or Post Your Remix!" 
                                            className="flex-grow p-2 rounded-md border border-gray-300 bg-[#0E121A]"
                                        />
                                        <button className="bg-[#336CFF] text-white rounded-md p-2">
                                            Post
                                        </button>
                                    </div>
                                    {/* List of comments */}
                                    <div>
                                        {comments.map((comment, index) => (
                                            <div key={index} className="flex items-center space-x-3 mb-2 p-2 hover:bg-[#202530] hover:rounded-md border-b border-[#202530]">
                                                <div className="flex-grow">
                                                    <strong>{comment.username}</strong>: {comment.text}
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button className="text-green-500">👍</button>
                                                    <button className="text-red-500">👎</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Show More or Show Less button */}
                                    {commentsToShow < allComments.length ? (
                                        <button 
                                            onClick={handleShowMore} 
                                            className="text-[#336CFF] underline mt-2"
                                        >
                                            Show More
                                        </button>
                                    ) : (
                                        <button 
                                            onClick={handleShowLess} 
                                            className="text-[#336CFF] underline mt-2"
                                        >
                                            Show Less
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Playbar />
            </div>
        </div>
    )
}

export default UnfinishedSongDetail;


