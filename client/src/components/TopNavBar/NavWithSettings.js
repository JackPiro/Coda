import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function NavWithSettings({ user }) {
    const navigate = useNavigate();


    return (
        <div>
            <div className=' -ml-4 -mt-4 px-4'>
                    <nav className="flex items-center justify-between px-6 py-4 text-white ">
                        <div className="flex space-x-4">
                            <button onClick={() => navigate(-1)} className="p-2 rounded opacity-80 hover:bg-blue-700 hover:opacity-100">←</button>
                            <button onClick={() => navigate(1)} className="p-2 rounded opacity-80 hover:bg-blue-700 hover:opacity-100">→</button>
                        </div>
                        <Link to={'/settings'} className="p-2 border-2 border-white rounded-full opacity-60 hover:opacity-80">
                            Settings
                        </Link>
                    </nav>
                </div>
        </div>
    )
}
