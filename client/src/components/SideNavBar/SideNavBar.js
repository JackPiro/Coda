import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

const SideNavBar = () => {
    const [selected, setSelected] = useState('');

    const user = JSON.parse(localStorage.getItem('user'));
    const decodedToken = jwt_decode(user.userToken);

    const navigate = useNavigate('')

    return (
        <div className="fixed flex flex-col w-48 h-screen px-6 py-4 text-blue-100 bg-[#181C25]">
            <div className="mb-10 text-3xl text-center">
                <h1 className="mt-4 text-[#336CFF] text-3xl font-bold decoration-8">Coda</h1>
            </div>

            <Link to={'/home'} onClick={() => {setSelected('home')}} className="hover:bg-gray-500 -mx-6 flex">
                <div className=" flex text-left items-center space-x-4 pl-12 my-2">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.5816 0 0 3.5816 0 8C0 12.4184 3.5816 16 8 16C12.4184 16 16 12.4184 16 8C16 3.5816 12.4184 0 8 0ZM12.1528 4.8592C12.1998 4.71824 12.2066 4.56698 12.1725 4.42236C12.1384 4.27775 12.0646 4.14549 11.9596 4.04043C11.8545 3.93536 11.7223 3.86163 11.5776 3.8275C11.433 3.79337 11.2818 3.80019 11.1408 3.8472L6.0496 5.544C5.93188 5.58329 5.82492 5.64942 5.73717 5.73717C5.64942 5.82492 5.58329 5.93188 5.544 6.0496L3.8472 11.1408C3.80019 11.2818 3.79337 11.433 3.8275 11.5776C3.86163 11.7223 3.93536 11.8545 4.04043 11.9596C4.14549 12.0646 4.27775 12.1384 4.42236 12.1725C4.56698 12.2066 4.71824 12.1998 4.8592 12.1528L9.9504 10.456C10.0682 10.4166 10.1752 10.3504 10.263 10.2625C10.3507 10.1746 10.4168 10.0675 10.456 9.9496L12.1528 4.8592ZM8 8.8C8.21217 8.8 8.41566 8.71571 8.56569 8.56569C8.71571 8.41566 8.8 8.21217 8.8 8C8.8 7.78783 8.71571 7.58434 8.56569 7.43431C8.41566 7.28429 8.21217 7.2 8 7.2C7.78783 7.2 7.58434 7.28429 7.43431 7.43431C7.28429 7.58434 7.2 7.78783 7.2 8C7.2 8.21217 7.28429 8.41566 7.43431 8.56569C7.58434 8.71571 7.78783 8.8 8 8.8Z" fill="white"/>
                        </svg>
                    </div>
                    <p>Home</p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                    { selected === 'home'? <div className="bg-[#336CFF] w-1 items-center"></div> : null }
                </div>
            </Link>

            <Link to={'/market'} onClick={() => {setSelected('market')}} className="hover:bg-gray-500 -mx-6 flex">
                <div className=" flex text-left items-center space-x-4 pl-12 my-2">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99935 14.6666C10.65 14.6666 13.3327 13.7506 13.3327 11.9999V3.99992C13.3327 2.24925 10.65 1.33325 7.99935 1.33325C5.34868 1.33325 2.66602 2.24925 2.66602 3.99992V11.9999C2.66602 13.7506 5.34868 14.6666 7.99935 14.6666ZM7.99935 13.3333C5.51802 13.3333 3.99935 12.4699 3.99935 11.9999V11.1546C5.02668 11.7133 6.51735 11.9999 7.99935 11.9999C9.48135 11.9999 10.972 11.7133 11.9993 11.1546V11.9999C11.9993 12.4699 10.4807 13.3333 7.99935 13.3333ZM7.99935 2.66659C10.4807 2.66659 11.9993 3.52992 11.9993 3.99992C11.9993 4.46992 10.4807 5.33325 7.99935 5.33325C5.51802 5.33325 3.99935 4.46992 3.99935 3.99992C3.99935 3.52992 5.51802 2.66659 7.99935 2.66659ZM3.99935 5.82125C5.02668 6.37992 6.51735 6.66659 7.99935 6.66659C9.48135 6.66659 10.972 6.37992 11.9993 5.82125V6.66659C11.9993 7.13659 10.4807 7.99992 7.99935 7.99992C5.51802 7.99992 3.99935 7.13659 3.99935 6.66659V5.82125ZM3.99935 8.48792C5.02668 9.04659 6.51735 9.33325 7.99935 9.33325C9.48135 9.33325 10.972 9.04659 11.9993 8.48792V9.33325C11.9993 9.80325 10.4807 10.6666 7.99935 10.6666C5.51802 10.6666 3.99935 9.80325 3.99935 9.33325V8.48792Z" fill="white"/>
                        </svg>
                    </div>
                    <p>Market</p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                    { selected === 'market'? <div className="bg-[#336CFF] w-1 items-center"></div> : null }
                </div>
            </Link>

            <Link to={'/library'} onClick={() => {setSelected('library')}} className="hover:bg-gray-500 -mx-6 flex">
                <div className=" flex text-left items-center space-x-4 pl-12 my-2">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.66732 10.9954C8.66732 12.2847 9.71598 13.3334 11.0053 13.3334C12.2947 13.3334 13.3433 12.2847 13.3433 10.9954C13.3433 10.8774 13.3253 10.7641 13.308 10.6507H13.334V4.00008H14.6673V2.66675H12.6673C12.4905 2.66675 12.3209 2.73699 12.1959 2.86201C12.0709 2.98703 12.0007 3.1566 12.0007 3.33341V8.88875C11.6902 8.73853 11.3502 8.65971 11.0053 8.65808C10.3855 8.65861 9.79125 8.90501 9.35292 9.34321C8.9146 9.78142 8.66802 10.3756 8.66732 10.9954ZM1.33398 3.33341H10.6673V4.66675H1.33398V3.33341Z" fill="white"/>
                            <path d="M1.33398 6H10.6673V7.33333H1.33398V6ZM1.33398 8.66667H7.33398V10H1.33398V8.66667ZM1.33398 11.3333H7.33398V12.6667H1.33398V11.3333Z" fill="white"/>
                        </svg>
                    </div>
                    <p>Library</p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                    { selected === 'library'? <div className="bg-[#336CFF] w-1 items-center"></div> : null }
                </div>
            </Link>

            <Link to={'/portfolio'} onClick={() => {setSelected('portfolio')}} className="hover:bg-gray-500 -mx-6 flex">
                <div className=" flex text-left items-center space-x-4 pl-12 my-2">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                            <path d="M16 0V12.8001H0.255868C0.00146543 12.8001 -0.0769352 12.6329 0.0830661 12.4281L3.6583 7.82967C3.69414 7.78161 3.73983 7.74177 3.79232 7.7128C3.84481 7.68384 3.90289 7.66643 3.96265 7.66173C4.02242 7.65703 4.0825 7.66516 4.13887 7.68557C4.19524 7.70598 4.24659 7.7382 4.2895 7.78007L5.42471 8.84727C5.46564 8.88884 5.51563 8.92038 5.57077 8.93942C5.62591 8.95847 5.6847 8.96451 5.74256 8.95708C5.80042 8.94964 5.85578 8.92893 5.90431 8.89656C5.95284 8.86419 5.99322 8.82104 6.02232 8.77047L8.45994 4.97844C8.4888 4.92816 8.52899 4.88531 8.57731 4.85329C8.62563 4.82126 8.68076 4.80095 8.73831 4.79396C8.79585 4.78697 8.85424 4.7935 8.90882 4.81302C8.96341 4.83255 9.01268 4.86454 9.05274 4.90644L10.7896 6.58326C10.9752 6.76326 11.2368 6.72726 11.3688 6.50325L15.4752 0.275202C15.608 0.0496005 15.8 0 16 0Z" fill="white"/>
                        </svg>
                    </div>
                    <p>Portfolio</p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                    { selected === 'portfolio'? <div className="bg-[#336CFF] w-1 items-center"></div> : null }
                </div>
            </Link>

            <Link to={'/dashboard'} onClick={() => {setSelected('dashboard')}} className="hover:bg-gray-500 -mx-6 flex">
                <div className=" flex text-left items-center space-x-4 pl-12 my-2">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z" fill="white"/>
                        </svg>
                    </div>
                    <p>Dashboard</p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                    { selected === 'dashboard'? <div className="bg-[#336CFF] w-1 items-center"></div> : null }
                </div>
            </Link>
        </div>

    );
};

export default SideNavBar;

