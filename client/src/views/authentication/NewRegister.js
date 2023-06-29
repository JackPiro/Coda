import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/authService';
import '../../components/shared/button/button.css'
import RoleSelectionModal from '../../components/RoleSelectionModal/RoleSelectionModal';

const NewRegister = () => {
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [role, setRole] = useState('');

    const navigate = useNavigate();


    const handleJoinClick = () => {
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    const handleRoleSelected = (role) => {
        setRole(role);
        setModalIsOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
    
        try {
            await authService.register(firstName, lastName, email, username, password, role);
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An error occurred while registering. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-xs p-8 mt-20 bg-[#181C25] rounded shadow-lg">
            <h2 className="mb-4 text-3xl text-center font-semibold text-white">Welcome to <span className='text-[#336CFF]'>Coda</span></h2>
            <h3 className="mb-6 text-xl text-center text-white">Sign Up :)</h3>
            <Link className="block mb-5 text-center text-blue-500 hover:text-blue-800" to={'/login'}>or login</Link>
            {errorMessage && <div className="mb-4 text-center text-red-500">{errorMessage}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    className='w-full p-2 bg-[#181C25] text-gray-700 border rounded'
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input 
                    className='w-full p-2 bg-[#181C25] text-gray-700 border rounded'
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input 
                    className='w-full p-2 bg-[#181C25] text-gray-700 border rounded'
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    className='w-full p-2 bg-[#181C25] text-gray-700 border rounded'
                    placeholder="Create a username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input 
                    className='w-full p-2 bg-[#181C25] text-gray-700 border rounded'
                    placeholder="Create a Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="flex items-center justify-center mt-4">
                <button 
                    className="register-button"
                    type="submit"
                    onClick={handleJoinClick}
                >
                    Join!
                </button>
                <RoleSelectionModal 
                    isOpen={modalIsOpen} 
                    onClose={handleModalClose} 
                    onRoleSelected={handleRoleSelected}
                />
                </div>
            </form>
        </div>
    );
}

export default NewRegister;
