import React from "react";
import { Link, useNavigate} from "react-router-dom";


const TopNavBar = () => {

    const navigate = useNavigate();
    
    return (
    <nav className="flex items-center justify-between px-6 py-4 text-white">
        <div className="flex space-x-4">
            <button onClick={() => navigate(-1)} className="p-2 rounded hover:bg-blue-700">←</button>
            <button onClick={() => navigate(1)} className="p-2 rounded hover:bg-blue-700">→</button>
        </div>

        <div className="flex-grow mx-10">
            <input className="bg-transparent w-full px-4 py-2 rounded-full text-white border border-white" type="search" placeholder="Search..." />
        </div>

        <Link to={'/Profile'} className="p-2 border-2 border-white rounded-full opacity-50 hover:opacity-100">
            {/* Put profile icon here */}
            Profile
        </Link>
    </nav>
    )
};

export default TopNavBar;