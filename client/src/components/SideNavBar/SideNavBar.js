import React from "react";
import { Link } from "react-router-dom";

const SideNavBar = () => {
    return (
        <div className="flex flex-col bg-gray-800 text-blue-100 w-48 px-6 h-screen py-4">
            <div className="text-3xl mb-10 text-center">
                <h1 className="text-blue-600 decoration-8">Coda</h1>
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
                </ul>
            </nav>
        </div>
    );
};

export default SideNavBar;

