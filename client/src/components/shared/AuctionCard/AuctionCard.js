import React from "react";
import "./AuctionCard.css";

function AuctionCard(props) {
    const { spanText2 } = props;

    return (
        <div className="auction-card">
            <img
                className="auction-card-thumbnail"
                src="https://anima-uploads.s3.amazonaws.com/projects/64518030e49be4ae99a7980b/releases/645185998e05e34f7f2ab035/img/auction-card-thumbnail-2@2x.png"
                alt="Auction Card Thumbnail"
            />
            <div className="flex-row">
                <div className="flex-col">
                    <div className="song-album-title valign-text-middle poppins-semi-bold-white-14px">
                        <span>
                            <span className="poppins-semi-bold-white-14px">High on Life</span>
                        </span>
                    </div>
                    <div className="artist-name">
                        <div className="title valign-text-middle poppins-medium-alto-14px">
                            <span>
                                <span className="poppins-medium-alto-14px">{spanText2}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex-col-1">
                    <div className="current-bid valign-text-middle poppins-normal-white-12px">
                        <span>
                            <span className="poppins-normal-white-12px">Current Bid</span>
                        </span>
                    </div>
                    <div className="offer-price valign-text-middle poppins-semi-bold-blue-14px">
                        <span>
                            <span className="poppins-semi-bold-blue-14px">99 ETH</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuctionCard;
