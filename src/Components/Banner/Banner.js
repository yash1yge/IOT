import React from 'react'
import Image from 'next/image'
import banner1 from "../../Assets/Images/banner1.png"
import banner2 from "../../Assets/Images/banner2.png"
import banner3 from "../../Assets/Images/banner3.png"
import banner4 from "../../Assets/Images/banner4.png"
import banner5 from "../../Assets/Images/banner5.png"

const Banner = () => {
    return (
        <>
            <div className='flex gap-[15px] p-[24px] bg-[white]'>
                <div className='w-[20%]'>
                    <div className='w-[100%] bg-[#c0eec0] flex items-center justify-center h-[180px] rounded-[8px]'>
                        <Image src={banner1} height="100%" width="100%" />
                    </div>
                    <div><p className='text-[16px] pt-[8px] text-center text-[#000000] font-[700]'>NFT Management</p></div>
                </div>
                <div className='w-[20%]'>
                    <div className='w-[100%] bg-[#fdf7d5] flex items-center justify-center h-[180px] rounded-[8px]'>
                        <Image src={banner2} height="100%" width="100%" />
                    </div>
                    <div><p className='text-[16px] pt-[8px] text-center text-[#000000] font-[700]'>Find Holders</p></div>
                </div>
                <div className='w-[20%]'>
                    <div className='w-[100%] bg-[#d5f3f8] flex items-center justify-center h-[180px] rounded-[8px]'>
                        <Image src={banner3} height="100%" width="100%" />
                    </div>
                    <div><p className='text-[16px] pt-[8px] text-center text-[#000000] font-[700]'>Airdrop</p></div>
                </div>
                <div className='w-[20%]'>
                    <div className='w-[100%] bg-[#eddbf4] flex items-center justify-center h-[180px] rounded-[8px]'>
                        <Image src={banner4} height="100%" width="100%" />
                    </div>
                    <div><p className='text-[16px] pt-[8px] text-center text-[#000000] font-[700]'>Trade-in</p></div>
                </div>
                <div className='w-[20%]'>
                    <div className='w-[100%] bg-[#fcdcef] flex items-center justify-center h-[180px] rounded-[8px]'>
                        <Image src={banner5} height="100%" width="100%" />
                    </div>
                    <div><p className='text-[16px] pt-[8px] text-center text-[#000000] font-[700]'>Sales</p></div>
                </div>
            </div>
        </>
    )
}

export default Banner