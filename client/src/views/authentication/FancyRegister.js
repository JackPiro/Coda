import { React, useState } from 'react';
import '../../components/shared/button/newButton.css'
import PersonIcon from '../../assets/Icons/PersonIcon';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import '../../assets/sampleStuff/studioScene.heic'


const FancyRegister = () => {
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [role, setRole] = useState('listener');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
    
        try {
            await authService.register(firstName, lastName, email, username, password, role);
            navigate('/complete-profile');
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
        <div>
            <div class="min-w-screen min-h-screen bg-[#0E121A] flex items-center justify-center px-5 py-5">
                <div class="bg-[#181C25] text-white rounded-3xl shadow-xl w-full overflow-hidden">
                    <div class="md:flex w-full">
                        <div class="hidden md:block w-1/2 bg-[#336CFF] py-10 px-10">
                            <PersonIcon />
                        </div>
                        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div class="text-center mb-10">
                                <h1 class="font-bold text-4xl text-white">Welcome to <span className='text-[#336CFF]'>Coda</span></h1>
                                <p>We're Glad You Made It  :)</p>
                                
                            </div>
                            <div>
                                <div class="flex -mx-3">
                                    <div class="w-1/2 px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">First name</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-white text-lg"></i></div>
                                            <input onChange={e => setFirstName(e.target.value)} type="text" class="w-full bg-[#181C25] -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="William" />
                                        </div>
                                    </div>
                                    <div class="w-1/2 px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">Last name</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input onChange={e => setLastName(e.target.value)} type="text" class="w-full -ml-10 pl-10 pr-3 bg-[#181C25] py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Defoe" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">Email</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input onChange={e => setEmail(e.target.value)} type="email" class="w-full -ml-10 pl-10 pr-3 py-2 bg-[#181C25] rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="williamdefoe@getf$*kinexcited.com" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-12">
                                        <label for="" class="text-xs font-semibold px-1">Create Password</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 bg-[#181C25] rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3 -mt-6">
                                    <div class="w-full px-3 mb-12">
                                        <label for="" class="text-xs font-semibold px-1">Create Unique Username</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input onChange={e => setUsername(e.target.value)} type="password" class="w-full -ml-10 pl-10 pr-3 py-2 bg-[#181C25] rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="MakeItGood" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className=" flex mb-10 space-x-8">
                                    <button
                                        onClick={() => setRole("listener")}
                                        className={`py-1 px-4 w-1/3 text-sm rounded-lg shadow-md text-white ${role === "listener" ? "bg-[#336CFF]" : "bg-[#202530]"}`}
                                    >
                                        Enroll as Listener
                                    </button>
                                    <div className='w-1/3'>or</div>
                                    <button
                                        onClick={() => setRole("artist")}
                                        className={`py-1 px-4 w-1/3 text-sm rounded-lg shadow-md text-white ${role === "artist" ? "bg-[#336CFF]" : "bg-[#202530]"}`}
                                    >
                                        Enroll as Artist
                                    </button>
                                </div>

                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <button type='submit' onClick={handleSubmit} class="block w-full px-2 py-2 max-w-xs mx-auto register-button text-white rounded-lg font-semibold text-sm">See You Inside</button>
                                    </div>
                                </div>
                            </div>
                            <Link className="block mt-5 text-center text-blue-500 hover:text-blue-800" to={'/login'}>or login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FancyRegister;
