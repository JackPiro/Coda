import React from 'react'

export default function MarketCard() {
    return (
        <div>
            <div class="h-[469px] w-full max-w-[330px] lg:max-w-[330px] false">
                <div class="rounded-t-[20px]">
                    <img src="/assets/crypto/nft2.png" alt="img" class="w-full" />
                </div>
                <div class="h-[173px] rounded-b-[20px] bg-[#3B3B3B] py-5">
                    <div class="flex flex-col items-center justify-center gap-[25px]">
                        <div class="flex w-full max-w-[270px] flex-col gap-2.5 text-start">
                            <div class="flex text-[22px] font-semibold leading-[30px]">Life On Edena</div>
                            <div class="flex items-center gap-3">
                                <img src="/assets/crypto/NftAvatar2.png" alt="img1" />
                                <div class="!font-spacemono text-base font-normal leading-[22px]">NebulaKid</div>
                            </div>
                        </div>
                        <div class="!font-spacemono flex w-full max-w-[270px] justify-between">
                            <div class="flex flex-col gap-2">
                                <div class="text-start text-xs font-normal leading-[13px] text-[#858584]">Price</div>
                                <div class="text-base font-normal leading-[21px] text-white">1.63 ETH</div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="text-xs font-normal leading-[13px] text-[#858584]">Highest Bid</div>
                                <div class="text-base font-normal leading-[21px] text-white">0.33 wETH</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
