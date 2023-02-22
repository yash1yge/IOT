import { BellIcon, FileIcon, ProfileIcon, SearchIcon } from '@/Assets/AllSvg'
import Image from 'next/image'
import React from 'react'
import logo from "../../Assets/Images/logo.svg"

const Header = () => {
    return (
        <>
            <div className="p-[24px] flex items-center justify-between bg-white">
                <div className='flex gap-[32px] items-center'>
                    <Image src={logo} height="100%" width="100%" />
                    <div className="menu flex gap-[32px]">
                        <h2 className='font-bold text-[16px] cursor-pointer'>Dashboard <span className='block mx-auto mt-[6px] h-[5px] w-[5px] bg-[#FF4800] rounded-full'></span> </h2>
                        <h2 className='font-regular text-[16px] text-[#00000099] cursor-pointer'>Create</h2>
                        <h2 className='font-regular text-[16px] text-[#00000099] cursor-pointer'>MarketPlace <span className='block text-[#FF4800] text-[12px] font-[500]'>Coming soon</span> </h2>
                        <h2 className='font-regular text-[16px] text-[#00000099] cursor-pointer'>Learn</h2>
                    </div>
                </div>
                <div className='flex gap-[34px] items-center'>
                    <div className='w-[650px] relative'>
                        <div className='absolute top-[50%] left-[18px] translate-y-[-50%]'>
                            <SearchIcon />
                        </div>
                        <input type="text" placeholder='Find Holders' className='outline-none text-[16px] indent-[46px] rounded-[8px] w-full placeholder:text-[#00000099] p-[6px] border-[1px] border-[#3CAA2A33]' />
                        <div className='absolute top-[50%] right-[18px] translate-y-[-50%] bg-[#00000033] w-[24px] h-[24px] flex items-center justify-center rounded-[3px] text-[12px]'>/</div>
                    </div>
                    <div>
                        <BellIcon />
                    </div>
                    <div>
                        <FileIcon />
                    </div>
                    <div>
                        <ProfileIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header