import React from "react";
import ArtistCard from "../ArtistCard/ArtistCard";
import "./SideNavigationBar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoinVertical } from '@fortawesome/free-solid-svg-icons'



function SideNavigationBar(props) {
    const {
        icon1,
        spanText2,
        icon2,
        spanText3,
        icon3,
        spanText4,
        artistCardX1Props,
        artistCardX2Props,
        artistCardX3Props,
    } = props;

    return (
        <div className="side-navigation-bar-x">
            <h1 className="title valign-text-middle montserrat-bold-blue-25px">
                <span>
                    <span className="montserrat-bold-blue-25px">Coda</span>
                </span>
            </h1>
            <div className="home-link">
                {/* <FontAwesomeIcon icon={faCoinVertical} style={{color: "#ffffff",}} /> */}
                <div className="place poppins-normal-white-16px">
                    <span className="poppins-normal-white-16px">Home</span>
                </div>
            </div>
            <div className="explore-link">
                <img className="icon" src={icon2} alt="icon" />
                <div className="explore poppins-normal-white-16px">
                    <span className="poppins-normal-white-16px">Explore</span>
                </div>
            </div>
            <div className="market-link">
                <img className="icon" src={icon3} alt="icon" />
                <div className="market poppins-normal-white-16px">
                    <span className="poppins-normal-white-16px">Market</span>
                </div>
            </div>
            <div className="artist-circles poppins-semi-bold-white-20px">
                <span className="poppins-semi-bold-white-20px">Artist Circles</span>
            </div>
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
        </div>
    );
}

export default SideNavigationBar;
