import React from "react";
import "./CollectionCard.css";

function CollectionCard() {
    return (
        <div className="collection-card-x">
            <div className="overlap-group1">
            <img
                className="creator"
                src="https://anima-uploads.s3.amazonaws.com/projects/64518030e49be4ae99a7980b/releases/645185998e05e34f7f2ab035/img/creator-4@2x.png"
                alt="Creator"
            />
            <img
                className="owner"
                src="https://anima-uploads.s3.amazonaws.com/projects/64518030e49be4ae99a7980b/releases/645185998e05e34f7f2ab035/img/owner-1@2x.png"
                alt="Owner"
            />
            </div>
            <div className="flex-row">
                <div className="title valign-text-middle poppins-semi-bold-white-14px">
                    <span>
                        <span className="poppins-semi-bold-white-14px">The Night</span>
                    </span>
                </div>
                <div className="current-bid valign-text-middle poppins-normal-white-12px">
                    <span>
                        <span className="poppins-normal-white-12px">Best Offer</span>
                    </span>
                </div>
            </div>
            <div className="flex-row-1">
                <div className="artist valign-text-middle poppins-medium-alto-14px">
                    <span>
                        <span className="poppins-medium-alto-14px">Avicii</span>
                    </span>
                </div>
                <div className="price valign-text-middle poppins-semi-bold-blue-14px">
                    <span>
                        <span className="poppins-semi-bold-blue-14px">2.5 ETH</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CollectionCard;
