import React, { useState, useEffect } from 'react';
import loader from '../../assets/sampleStuff/fourthLoader.gif';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
    const [showText, setShowText] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const textTimeout = setTimeout(() => {
            setShowText(true);
        }, 3000);

        const redirectTimeout = setTimeout(() => {
            navigate("/home");
        }, 5000);

        return () => {
            clearTimeout(textTimeout);
            clearTimeout(redirectTimeout);
        }
    }, [navigate]);

    return (
        <div className="min-w-screen min-h-screen bg-gradient-to-r from-[#0E121A] to-indigo-700 flex items-center justify-center p-10">
            <div className="bg-[#131212] text-white rounded-3xl shadow-xl w-full h-full overflow-hidden flex items-center justify-center p-10 flex-col space-y-4">
                {showText ? <h1 className="font-bold text-4xl text-white">Welcome to <span className='text-[#336CFF]'>Coda</span></h1> : <h1 className="font-bold text-4xl text-white">Activating your Account, one sec</h1>}
                <div className='w-80 h-80 flex items-center justify-center'>
                    <img src={loader} alt="Loading..." className='object-cover w-full h-full'/>
                </div>
                <p>Get excited...</p>
            </div>
        </div>
    )
}






export default LoadingPage;
