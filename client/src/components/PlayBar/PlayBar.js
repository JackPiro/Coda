import React, { useState, useEffect } from 'react';
import "./PlayBar.css";




const Playbar = () => {
    const [volume, setVolume] = useState(0);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    
    // useEffect(() => {
    //     const audio = document.getElementById('audioId'); // Replace 'audioId' with the actual id of your audio element
        
    //     // Listen for the audio to be loaded
    //     audio.onloadedmetadata = function() {
    //         setDuration(audio.duration);
    //     };
        
    //     // Update the current time as the audio plays
    //     audio.ontimeupdate = function() {
    //         setTime(audio.currentTime);
    //     };
    // }, []);

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? "0" + sec : sec}`;
    }









    return (
        <div className="fixed h-16 bottom-0 bg-[#202530] w-full flex items-center justify-between p-4">
            <div className="flex items-center ml-6">
                <img src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWgelFhx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="cover art" className="w-10 h-10 rounded-md mr-2"/>
                <div>
                    <span className="text-white block">Song Name</span>
                    <span className="text-gray-400">Artist Name</span>
                </div>
            </div>
            <div className="flex items-center space-x-8">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17.9099 4.99994H5.90994L7.20994 3.70994C7.39824 3.52164 7.50403 3.26624 7.50403 2.99994C7.50403 2.73364 7.39824 2.47824 7.20994 2.28994C7.02164 2.10164 6.76624 1.99585 6.49994 1.99585C6.23364 1.99585 5.97824 2.10164 5.78994 2.28994L2.78994 5.28994C2.69621 5.3829 2.62182 5.49351 2.57105 5.61536C2.52028 5.73722 2.49414 5.86793 2.49414 5.99994C2.49414 6.13195 2.52028 6.26266 2.57105 6.38452C2.62182 6.50638 2.69621 6.61698 2.78994 6.70994L5.78994 9.70994C5.8829 9.80367 5.9935 9.87806 6.11536 9.92883C6.23722 9.9796 6.36793 10.0057 6.49994 10.0057C6.63195 10.0057 6.76266 9.9796 6.88452 9.92883C7.00637 9.87806 7.11698 9.80367 7.20994 9.70994C7.30367 9.61698 7.37806 9.50638 7.42883 9.38452C7.4796 9.26266 7.50574 9.13195 7.50574 8.99994C7.50574 8.86793 7.4796 8.73722 7.42883 8.61536C7.37806 8.49351 7.30367 8.3829 7.20994 8.28994L5.90994 6.99994H17.9099C18.1148 6.99596 18.3185 7.03239 18.5093 7.10713C18.7 7.18187 18.8742 7.29347 19.0219 7.43556C19.1695 7.57764 19.2878 7.74742 19.3698 7.93519C19.4518 8.12297 19.496 8.32507 19.4999 8.52994V10.9999C19.4999 11.2652 19.6053 11.5195 19.7928 11.707C19.9804 11.8946 20.2347 11.9999 20.4999 11.9999C20.7652 11.9999 21.0195 11.8946 21.207 11.707C21.3946 11.5195 21.4999 11.2652 21.4999 10.9999V8.52994C21.496 8.06243 21.4 7.60027 21.2175 7.16985C21.035 6.73943 20.7694 6.34918 20.4361 6.02139C20.1027 5.6936 19.708 5.43468 19.2746 5.25942C18.8412 5.08415 18.3774 4.99599 17.9099 4.99994Z" fill="white"/>
                        <path d="M18.21 14.29C18.0217 14.1017 17.7663 13.9959 17.5 13.9959C17.2337 13.9959 16.9783 14.1017 16.79 14.29C16.6017 14.4783 16.4959 14.7337 16.4959 15C16.4959 15.2663 16.6017 15.5217 16.79 15.71L18.09 17H6.09C5.88513 17.004 5.68148 16.9676 5.49069 16.8928C5.29989 16.8181 5.1257 16.7065 4.97804 16.5644C4.83039 16.4223 4.71218 16.2525 4.63015 16.0647C4.54813 15.877 4.5039 15.6749 4.5 15.47V13C4.5 12.7348 4.39464 12.4804 4.20711 12.2929C4.01957 12.1054 3.76522 12 3.5 12C3.23478 12 2.98043 12.1054 2.79289 12.2929C2.60536 12.4804 2.5 12.7348 2.5 13V15.47C2.50392 15.9375 2.59989 16.3997 2.78244 16.8301C2.96498 17.2605 3.23051 17.6508 3.56388 17.9785C3.89724 18.3063 4.29191 18.5653 4.72534 18.7405C5.15878 18.9158 5.62249 19.004 6.09 19H18.09L16.79 20.29C16.6963 20.383 16.6219 20.4936 16.5711 20.6154C16.5203 20.7373 16.4942 20.868 16.4942 21C16.4942 21.132 16.5203 21.2627 16.5711 21.3846C16.6219 21.5064 16.6963 21.617 16.79 21.71C16.883 21.8037 16.9936 21.8781 17.1154 21.9289C17.2373 21.9797 17.368 22.0058 17.5 22.0058C17.632 22.0058 17.7627 21.9797 17.8846 21.9289C18.0064 21.8781 18.117 21.8037 18.21 21.71L21.21 18.71C21.3037 18.617 21.3781 18.5064 21.4289 18.3846C21.4797 18.2627 21.5058 18.132 21.5058 18C21.5058 17.868 21.4797 17.7373 21.4289 17.6154C21.3781 17.4936 21.3037 17.383 21.21 17.29L18.21 14.29Z" fill="white"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16.45 6.19995C16.0943 6.03191 15.6985 5.9672 15.3077 6.01316C14.917 6.05913 14.547 6.21394 14.24 6.45995L9.14 10.6699L9 10.8199V6.99995C9 6.73473 8.89464 6.48038 8.70711 6.29284C8.51957 6.1053 8.26522 5.99995 8 5.99995C7.73478 5.99995 7.48043 6.1053 7.29289 6.29284C7.10536 6.48038 7 6.73473 7 6.99995V16.9999C7 17.2652 7.10536 17.5195 7.29289 17.7071C7.48043 17.8946 7.73478 17.9999 8 17.9999C8.26522 17.9999 8.51957 17.8946 8.70711 17.7071C8.89464 17.5195 9 17.2652 9 16.9999V13.1799L9.14 13.3299L14.24 17.5399C14.6076 17.8381 15.0667 18.0005 15.54 17.9999C15.854 17.9981 16.1641 17.9299 16.45 17.7999C16.7592 17.6637 17.0226 17.4413 17.2088 17.1593C17.395 16.8774 17.4961 16.5478 17.5 16.2099V7.78995C17.4961 7.45209 17.395 7.12251 17.2088 6.84057C17.0226 6.55862 16.7592 6.33623 16.45 6.19995Z" fill="white"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="10" fill="#336CFF"/>
                        <path d="M13.6667 28C13.4899 28 13.3203 27.9298 13.1953 27.8047C13.0702 27.6797 13 27.5101 13 27.3333V12.6666C13 12.5507 13.0302 12.4369 13.0876 12.3362C13.1451 12.2356 13.2277 12.1517 13.3274 12.0928C13.4272 12.0338 13.5405 12.0019 13.6564 12.0001C13.7722 11.9983 13.8865 12.0267 13.988 12.0826L27.3214 19.4159C27.426 19.4735 27.5131 19.558 27.5738 19.6608C27.6345 19.7635 27.6666 19.8806 27.6666 19.9999C27.6666 20.1193 27.6345 20.2364 27.5738 20.3391C27.5131 20.4418 27.426 20.5264 27.3214 20.5839L13.988 27.9173C13.8896 27.9715 13.779 28 13.6667 28Z" fill="white"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.55 6.19995C7.90574 6.03191 8.30153 5.9672 8.69227 6.01316C9.083 6.05913 9.45297 6.21394 9.76 6.45995L14.86 10.6699L15 10.8199V6.99995C15 6.73473 15.1054 6.48038 15.2929 6.29284C15.4804 6.1053 15.7348 5.99995 16 5.99995C16.2652 5.99995 16.5196 6.1053 16.7071 6.29284C16.8946 6.48038 17 6.73473 17 6.99995V16.9999C17 17.2652 16.8946 17.5195 16.7071 17.7071C16.5196 17.8946 16.2652 17.9999 16 17.9999C15.7348 17.9999 15.4804 17.8946 15.2929 17.7071C15.1054 17.5195 15 17.2652 15 16.9999V13.1799L14.86 13.3299L9.76 17.5399C9.39238 17.8381 8.93331 18.0005 8.46 17.9999C8.14597 17.9981 7.83587 17.9299 7.55 17.7999C7.24083 17.6637 6.97741 17.4413 6.79122 17.1593C6.60503 16.8774 6.50393 16.5478 6.5 16.2099V7.78995C6.50393 7.45209 6.60503 7.12251 6.79122 6.84057C6.97741 6.55862 7.24083 6.33623 7.55 6.19995Z" fill="white"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18.71 14.2899C18.5217 14.1016 18.2663 13.9958 18 13.9958C17.7337 13.9958 17.4783 14.1016 17.29 14.2899C17.1017 14.4782 16.9959 14.7336 16.9959 14.9999C16.9959 15.2662 17.1017 15.5216 17.29 15.7099L17.58 15.9999H16C14.9391 15.9999 13.9217 15.5785 13.1716 14.8284C12.4214 14.0782 12 13.0608 12 11.9999C12 10.9391 12.4214 9.92166 13.1716 9.17151C13.9217 8.42137 14.9391 7.99994 16 7.99994H17.59L17.29 8.28994C17.1963 8.3829 17.1219 8.49351 17.0711 8.61536C17.0203 8.73722 16.9942 8.86793 16.9942 8.99994C16.9942 9.13195 17.0203 9.26266 17.0711 9.38452C17.1219 9.50638 17.1963 9.61698 17.29 9.70994C17.3834 9.80262 17.4943 9.87595 17.6161 9.92571C17.7379 9.97548 17.8684 10.0007 18 9.99994C18.1316 10.0007 18.2621 9.97548 18.3839 9.92571C18.5057 9.87595 18.6166 9.80262 18.71 9.70994L20.71 7.70994C20.8027 7.6165 20.876 7.50569 20.9258 7.38385C20.9755 7.26201 21.0008 7.13155 21 6.99994C21.0008 6.86833 20.9755 6.73787 20.9258 6.61603C20.876 6.4942 20.8027 6.38338 20.71 6.28994L18.71 4.28994C18.6168 4.1967 18.5061 4.12274 18.3842 4.07228C18.2624 4.02182 18.1319 3.99585 18 3.99585C17.7337 3.99585 17.4783 4.10164 17.29 4.28994C17.1017 4.47825 16.9959 4.73364 16.9959 4.99994C16.9959 5.26624 17.1017 5.52164 17.29 5.70994L17.58 5.99994H16C15.0093 6.00067 14.0342 6.24671 13.1617 6.7161C12.2892 7.18548 11.5465 7.86361 11 8.68994C10.4535 7.86361 9.71079 7.18548 8.83832 6.7161C7.96585 6.24671 6.99072 6.00067 6 5.99994H4C3.73478 5.99994 3.48043 6.1053 3.29289 6.29283C3.10536 6.48037 3 6.73472 3 6.99994C3 7.26516 3.10536 7.51951 3.29289 7.70705C3.48043 7.89458 3.73478 7.99994 4 7.99994H6C7.06087 7.99994 8.07828 8.42137 8.82843 9.17151C9.57857 9.92166 10 10.9391 10 11.9999C10 13.0608 9.57857 14.0782 8.82843 14.8284C8.07828 15.5785 7.06087 15.9999 6 15.9999H4C3.73478 15.9999 3.48043 16.1053 3.29289 16.2928C3.10536 16.4804 3 16.7347 3 16.9999C3 17.2652 3.10536 17.5195 3.29289 17.707C3.48043 17.8946 3.73478 17.9999 4 17.9999H6C6.99072 17.9992 7.96585 17.7532 8.83832 17.2838C9.71079 16.8144 10.4535 16.1363 11 15.3099C11.5465 16.1363 12.2892 16.8144 13.1617 17.2838C14.0342 17.7532 15.0093 17.9992 16 17.9999H17.59L17.29 18.2899C17.1963 18.3829 17.1219 18.4935 17.0711 18.6154C17.0203 18.7372 16.9942 18.8679 16.9942 18.9999C16.9942 19.132 17.0203 19.2627 17.0711 19.3845C17.1219 19.5064 17.1963 19.617 17.29 19.7099C17.3834 19.8026 17.4943 19.8759 17.6161 19.9257C17.7379 19.9755 17.8684 20.0007 18 19.9999C18.1316 20.0007 18.2621 19.9755 18.3839 19.9257C18.5057 19.8759 18.6166 19.8026 18.71 19.7099L20.71 17.7099C20.8027 17.6165 20.876 17.5057 20.9258 17.3838C20.9755 17.262 21.0008 17.1315 21 16.9999C21.0008 16.8683 20.9755 16.7379 20.9258 16.616C20.876 16.4942 20.8027 16.3834 20.71 16.2899L18.71 14.2899Z" fill="white" />
                    </svg>
                </button>
            </div>
            <div className='flex space-x-4'>
                <div className="flex items-center">
                    <span className="text-white">{formatTime(time)}</span>
                    <span className="text-white ml-2">/{formatTime(duration)}</span>
                </div>
                
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18.2795 8.37021C18.1124 8.16334 17.87 8.03132 17.6056 8.00319C17.3411 7.97506 17.0764 8.05312 16.8695 8.22021C16.6626 8.3873 16.5306 8.62972 16.5025 8.89414C16.4744 9.15857 16.5524 9.42334 16.7195 9.63021C17.2247 10.3171 17.4972 11.1475 17.4972 12.0002C17.4972 12.8529 17.2247 13.6833 16.7195 14.3702C16.6003 14.5172 16.5252 14.6949 16.503 14.8829C16.4808 15.0708 16.5124 15.2612 16.5941 15.4319C16.6757 15.6026 16.8042 15.7466 16.9645 15.8472C17.1247 15.9478 17.3103 16.0009 17.4995 16.0002C17.6489 16.0007 17.7965 15.9677 17.9315 15.9037C18.0665 15.8397 18.1854 15.7462 18.2795 15.6302C19.0727 14.5863 19.5022 13.3113 19.5022 12.0002C19.5022 10.6891 19.0727 9.41413 18.2795 8.37021Z" fill="white"/>
                        <path d="M19.6398 5.23003C19.5387 5.14598 19.422 5.08268 19.2964 5.04372C19.1708 5.00477 19.0388 4.99094 18.9079 5.00301C18.777 5.01508 18.6497 5.05282 18.5333 5.11408C18.417 5.17534 18.3139 5.25891 18.2298 5.36003C18.1458 5.46115 18.0825 5.57783 18.0435 5.70341C18.0046 5.829 17.9907 5.96102 18.0028 6.09195C18.0149 6.22288 18.0526 6.35015 18.1139 6.4665C18.1751 6.58284 18.2587 6.68598 18.3598 6.77003C19.1618 7.3899 19.8151 8.18124 20.2719 9.08614C20.7287 9.99104 20.9774 10.9866 20.9998 12C20.9774 13.0134 20.7287 14.009 20.2719 14.9139C19.8151 15.8188 19.1618 16.6102 18.3598 17.23C18.2585 17.314 18.1748 17.4171 18.1135 17.5334C18.0521 17.6498 18.0143 17.7771 18.0023 17.9081C17.9902 18.039 18.0041 18.1711 18.0431 18.2967C18.0822 18.4223 18.1456 18.539 18.2298 18.64C18.3238 18.7529 18.4416 18.8437 18.5747 18.9059C18.7077 18.9681 18.8529 19.0003 18.9998 19C19.2335 19.0005 19.4599 18.9191 19.6398 18.77C20.6702 17.9645 21.507 16.9381 22.0885 15.7665C22.6699 14.5949 22.9814 13.3079 22.9998 12C22.9814 10.6922 22.6699 9.40514 22.0885 8.23354C21.507 7.06194 20.6702 6.0356 19.6398 5.23003Z" fill="white"/>
                        <path d="M14.9995 3.12006C14.8475 3.03229 14.6751 2.98608 14.4995 2.98608C14.324 2.98608 14.1516 3.03229 13.9995 3.12006L7.51953 7.57006H2.51953C2.25431 7.57006 1.99996 7.67542 1.81242 7.86295C1.62489 8.05049 1.51953 8.30484 1.51953 8.57006V15.4301C1.51953 15.6953 1.62489 15.9496 1.81242 16.1372C1.99996 16.3247 2.25431 16.4301 2.51953 16.4301H7.51953L13.9295 20.8301C14.0994 20.94 14.2972 20.999 14.4995 21.0001C14.7647 21.0001 15.0191 20.8947 15.2066 20.7072C15.3942 20.5196 15.4995 20.2653 15.4995 20.0001V4.00006C15.502 3.82216 15.457 3.64682 15.3691 3.49213C15.2812 3.33744 15.1536 3.209 14.9995 3.12006ZM13.5295 18.1201L8.39953 14.6001C8.23117 14.4869 8.03238 14.4276 7.82953 14.4301H3.49953V9.57006H7.82953C8.03238 9.57252 8.23117 9.51323 8.39953 9.40006L13.4995 5.90006L13.5295 18.1201Z" fill="white"/>
                    </svg>
                    <div className='flex items-center w-20 mr-16'>

                    <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)} className="mx-2" />
                    </div>
                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <path d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z" fill="white"/>
                        <path d="M1 7C1.55228 7 2 6.55228 2 6C2 5.44772 1.55228 5 1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7Z" fill="white"/>
                        <path d="M1 12C1.55228 12 2 11.5523 2 11C2 10.4477 1.55228 10 1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12Z" fill="white"/>
                        <path d="M17.06 5H4.94C4.42085 5 4 5.42085 4 5.94V6.06C4 6.57915 4.42085 7 4.94 7H17.06C17.5791 7 18 6.57915 18 6.06V5.94C18 5.42085 17.5791 5 17.06 5Z" fill="white"/>
                        <path d="M17.06 10H4.94C4.42085 10 4 10.4209 4 10.94V11.06C4 11.5791 4.42085 12 4.94 12H17.06C17.5791 12 18 11.5791 18 11.06V10.94C18 10.4209 17.5791 10 17.06 10Z" fill="white"/>
                        <path d="M17.06 0H4.94C4.42085 0 4 0.420852 4 0.94V1.06C4 1.57915 4.42085 2 4.94 2H17.06C17.5791 2 18 1.57915 18 1.06V0.94C18 0.420852 17.5791 0 17.06 0Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Playbar;
