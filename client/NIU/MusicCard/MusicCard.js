import React from "react";
import "./MusicCardX3.css";

function MusicCardX3() {
    return (
        <div className="music-card-x">
            <img
                className="mask-group"
                src="https://anima-uploads.s3.amazonaws.com/projects/64518030e49be4ae99a7980b/releases/645185998e05e34f7f2ab035/img/mask-group-64@2x.png"
                alt="Mask Group"
            />
            <div className="artist poppins-normal-alto-14px">
                <span className="poppins-normal-alto-14px">Avicii</span>
            </div>
        </div>
    );
}

export default MusicCardX3;
