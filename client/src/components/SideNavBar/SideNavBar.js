import React from "react";
import { Link } from "react-router-dom";

import jwt_decode from "jwt-decode";

const SideNavBar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const decodedToken = jwt_decode(user.userToken);


    return (
        <div className="fixed flex flex-col w-48 h-screen px-6 py-4 text-blue-100 bg-gray-900">
            <div className="mb-10 text-3xl text-center">
                <h1 className="mt-4 text-blue-600 decoration-8">Coda</h1>
            </div>
            <nav>
                <ul>
                    <li className="mb-6">
                        <Link className="text-blue-200 hover:text-blue-100" to="/home">
                            Home
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link className="text-blue-200 hover:text-blue-100" to="/market">
                            Market
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link className="text-blue-200 hover:text-blue-100" to="/explore">
                            Explore
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link className="text-blue-200 hover:text-blue-100" to="/stats">
                            Stats
                        </Link>
                    </li>
                    {
                        user ? 
                            <li className="mb-6">
                                <Link className="text-blue-200 hover:text-blue-100" to="/artist-dashboard">
                                    Dashboard
                                </Link>
                            </li> 
                        : null
                    }
                </ul>
            </nav>
        </div>
    );
};

export default SideNavBar;

