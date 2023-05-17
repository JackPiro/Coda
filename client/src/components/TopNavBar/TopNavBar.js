import React from "react";
import { Link, useNavigate} from "react-router-dom";


const TopNavBar = () => {

    const navigate = useNavigate();
    
    return (
    <nav className="flex items-center justify-between px-6 py-4 text-white">
        <div className="flex space-x-4">
            <button onClick={() => navigate(-1)} className="p-2 rounded opacity-80 hover:bg-blue-700 hover:opacity-100">←</button>
            <button onClick={() => navigate(1)} className="p-2 rounded opacity-80 hover:bg-blue-700 hover:opacity-100">→</button>
        </div>

        <div className="flex-grow mx-10">
            <input className="w-full px-4 py-2 text-white bg-transparent border-2 border-white rounded-full opacity-60 hover:opacity-80" type="search" placeholder="Search..." />
        </div>

        <Link to={'/Profile'} className="p-2 border-2 border-white rounded-full opacity-60 hover:opacity-80">
            Profile
        </Link>
    </nav>
    )
};

export default TopNavBar;