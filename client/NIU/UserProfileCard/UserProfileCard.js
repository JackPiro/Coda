import React from "react";
import './UserProfileCard.css'


const UserProfileCard = () => {
    return (
        <div className="user-profile-card-x">
            <div className="frame-74">
                <img className="user-profile-picture" src="user-profile-picture-1.png" alt="User Profile Picture" />
                    <div className="frame-78">
                        <div className="frame-75">
                            <div className="unique-usernamepoppins-normal-cararra-16px">
                                <span className="poppins-normal-cararra-16px">@UniqueUsername</span>
                            </div>
                            <div className="artist-name">
                                <div className="titlevalign-text-middlepoppins-bold-white-22px">
                                    <span>
                                        <span className="poppins-bold-white-22px">Martin Garrix</span>
                                    </span>
                                </div>
                            </div>
                            <div className="joined-january-2022poppins-normal-cararra-14px">
                                <span className="poppins-normal-cararra-14px">Joined, January 2022</span>
                            </div>
                        </div>
                        <div className="wallet-adress">
                            <img className="vector" src="vector-5.png" alt="Vector" />
                            <div className="x0x89de69dfd6cfeedb533valign-text-middlepoppins-normal-white-13px">
                                <span>
                                    <span className="poppins-normal-white-13px">0x89de69dfd6cfeedb.....533</span>
                                </span>
                            </div>
                        </div>
                    </div>
                <div className="frame-76">
                    <div className="x2">
                        <img className="icon-share" src="vector-6.png" alt="icon-share" />
                    </div>
                    <div className="followpoppins-bold-white-14px">
                        <span className="poppins-bold-white-14px">Follow</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileCard;