import React from "react";
import "./ArtistCard.css";

function ArtistCard() {
    return (
        <div className="artist-card-x">
            <img
                className="artist-card-thumbnail"
                src="https://anima-uploads.s3.amazonaws.com/projects/64518030e49be4ae99a7980b/releases/645185998e05e34f7f2ab035/img/artist-card-thumbnail-10@2x.png"
                alt="Artist Card Thumbnail"
            />
            <div className="artist-name">
                <div className="title valign-text-middle poppins-semi-bold-alto-18px">
                    <span>
                        <span className="poppins-semi-bold-alto-18px">Martin Garrix fea..</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ArtistCard;
