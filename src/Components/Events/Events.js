import { LeftArrowIcon } from '@/Assets/AllSvg'
import Image from 'next/image'
import React from 'react'
import halfImg1 from "../../Assets/Images/halfImg1.png"
import airdrop_img from '../../Assets/Images/Loader.png'
import calender_img from '../../Assets/Images/calander.png'
import watch_image from '../../Assets/Images/watch.png'
import Manure_image from '../../Assets/Images/Manure.png'
import halfImg2 from '../../Assets/Images/hafeimg2.png'
import whater_image from '../../Assets/Images/Water.png'
import true_img from '../../Assets/Images/true.png'


const Events = () => {
    return (
        <>
            <div className="p-[24px] flex gap-[24px]">
                <div className='w-[70%]'>
                    <h2 className='text-[24px] text-[#00000080] mb-[8px]'>Events</h2>
                    <div className="relative bg-[#FFFFFFCC]  border-[1px] border-[#0000000F] rounded-[8px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.06)]">
                        <div className='absolute flex justify-center blur-[24px] h-full w-full top-[50%] left-[50%] translate-x-[-50%] opacity-[.2] translate-y-[-50%]'>
                            <Image src={halfImg1} height={900} width={900} alt="image" />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='h-auto py-[24px]'>
                                <div className='flex items-enter gap-[8px]'>
                                    <div>
                                        <button className="bg-[#3CAA2A] h-[27px] rounded-r-[8px] items-center gap-[6px] pl-[23px] pr-[8px] flex text-[12px] font-[700] text-white w-max p-[5px]"> <Image src={airdrop_img} />ARIDROP</button>
                                    </div>
                                    <div>
                                        <button className="bg-[#0000001A] px-[8px] w-[90px] h-[27px] items-center gap-[6px] justify-center rounded-[8px] flex text-[12px] font-[700] text-black w-max p-[5px]"> <Image src={calender_img} />Harvest</button>
                                    </div>
                                    <div className='flex gap-[9px] items-center'>
                                        <Image src={watch_image} />
                                        <p className='text-[#000000B2] text-[14px] font-[700]'>Started</p>
                                        <span className='text-[#000000B2] text-[14px] font-[400]'>2022-09-13 08:57:15</span>
                                    </div>
                                </div>
                                <div className='pt-[12px] pl-[24px] pb-[24px]'>
                                    <div>
                                        <p className='m-0 text-[#000000] text-[16px] font-[400]'>🍎🍌🍍The Fruit Salad Game🍆🥦🥕</p>
                                    </div>
                                    <div className='flex items-baseline gap-[10px] mt-[4px]'>
                                        <h2 className='m-0 text-[30px] text-[#000000] font-[700]'>Manure</h2>
                                        <p className='m-0 text-[#000000] text-[14px] font-[400]'>x 100</p>
                                    </div>
                                    <div className='flex pt-[12px]'>
                                        <h6 className='text-[#000000] text-[14] font-[400]'>Wallet Transactions :</h6>
                                        <ul className='flex'>
                                            <li className='px-[16px] text-[14px] text-[#000000] font-[700]'>44 <span className='text-[14px] text-[#000000] font-[400]'>Success</span></li>
                                            <li className='px-[16px] text-[14px] text-[#000000] font-[700]'>44 <span className='text-[14px] text-[#000000] font-[400]'>Processing</span></li>
                                            <li className='px-[16px] text-[14px] text-[#000000] font-[700]'>44 <span className='text-[14px] text-[#000000] font-[400]'>Failed</span></li>
                                        </ul>
                                    </div>
                                    <div className='pt-[12px]'>
                                        <div class="w-[650px] bg-gray-200  rounded-full h-[16px] dark:bg-gray-700">
                                            <div class="bg-blue-600 h-[16px] gradiant rounded-full w-[45%]"></div>
                                        </div>
                                    </div>
                                    <div className='mt-[16px] flex gap-[10px]'>
                                        <button className='w-[126px] h-[40px] rounded-[8px] bg-black text-white text-[16px] font-[700]'>More Details</button>
                                        <button className='px-[16px] py-[8px] h-[40px] rounded-[8px] border border-[#000] text-black text-[14px] font-[400]'>More Details</button>
                                        <div className='flex gap-[11px] items-center'>
                                            <input type="Checkbox" />
                                            <p>Receive report on email</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image src={Manure_image} />
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-[#FFFFFFCC] mt-[24px] border-[1px] border-[#0000000F] rounded-[8px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.06)]">
                        <div className='absolute flex justify-center blur-[24px] h-full w-full top-[50%] left-[50%] translate-x-[-50%] opacity-[.2] translate-y-[-50%]'>
                            <Image src={halfImg2} height={900} width={900} alt="image" />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='h-auto py-[24px]'>
                                <div className='flex items-enter gap-[8px]'>
                                    <div>
                                        <button className="bg-[#28458F] h-[27px]  rounded-r-[8px] items-center gap-[6px] pl-[23px] pr-[8px] flex text-[12px] font-[700] text-white w-max p-[5px]"> <Image src={true_img} />ARIDROP</button>
                                    </div>
                                    <div>
                                        <button className="bg-[#0000001A] w-[90px] h-[27px] items-center gap-[6px] justify-center rounded-[8px] flex text-[12px] font-[700] text-black w-max px-[8px] p-[5px]"> <Image src={calender_img} />It’s Raining</button>
                                    </div>
                                    <div className='flex gap-[9px] items-center'>
                                        <Image src={watch_image} />
                                        <p className='text-[#000000B2] text-[14px] font-[700]'>Started</p>
                                        <span className='text-[#000000B2] text-[14px] font-[400]'>2022-09-13 08:57:15</span>
                                    </div>
                                </div>
                                <div className='pt-[12px] pl-[24px] pb-[24px]'>
                                    <div>
                                        <p className='m-0 text-[#000000] text-[16px] font-[400]'>🍎🍌🍍The Fruit Salad Game🍆🥦🥕</p>
                                    </div>
                                    <div className='flex items-baseline gap-[10px] mt-[4px]'>
                                        <h2 className='m-0 text-[30px] text-[#000000] font-[700]'>Manure</h2>
                                        <p className='m-0 text-[#000000] text-[14px] font-[400]'>x 100</p>
                                    </div>
                                    <div className='flex pt-[12px]'>
                                        <h6 className='text-[#000000] text-[14] font-[400]'>Wallet Transactions :</h6>
                                        <ul className='flex'>
                                            <li className='px-[16px] text-[14px] text-[#000000] font-[700]'>100 <span className='text-[14px] text-[#000000] font-[400]'>Success</span></li>
                                            <li className='px-[16px] text-[14px] text-[#000000] font-[700]'>0 <span className='text-[14px] text-[#000000] font-[400]'>Processing</span></li>
                                            <li className='px-[16px] text-[14px] text-[#000000] font-[700]'>0 <span className='text-[14px] text-[#000000] font-[400]'>Failed</span></li>
                                        </ul>
                                    </div>
                                    <div className='pt-[12px]'>
                                        <div class="w-[650px] bg-gray-200  rounded-full h-[16px] dark:bg-gray-700">
                                            <div class=" w-[650px] bg-blue-600 h-[16px] gradiant rounded-full w-[100%]"></div>
                                        </div>
                                    </div>
                                    <div className='mt-[16px] flex gap-[10px]'>
                                        <button className='w-[126px] h-[40px] rounded-[8px] bg-black text-white text-[16px] font-[700]'>More Details</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image src={whater_image} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <h2 className='text-[24px] text-[#00000080] mb-[8px]'>Overview</h2>
                    <div className='px-[24px] py-[12px] bg-[white] flex items-center justify-between mb-[24px] rounded-[8px]'>
                        <h5 className='text-[16px] font-normal text-[#00000099]'>Wallet balance</h5>
                        <div className='flex items-center gap-[20px]'>
                            <span>0.489 ETH</span>
                            <LeftArrowIcon />
                        </div>
                    </div>
                    <div className=' bg-[white] rounded-[8px] mb-[24px]'>
                        <h4 className='text-[20px] font-medium px-[24px] py-[12px]'>NFTs</h4>
                        <div className='flex items-center justify-between px-[24px] py-[12px] cursor-pointer'>
                            <h5 className='text-[16px] font-normal text-[#00000099]'>NFT items</h5>
                            <div className='flex items-center gap-[20px]'>
                                <span>187</span>
                                <LeftArrowIcon />
                            </div>
                        </div>
                        <div className='flex items-center justify-between px-[24px] py-[12px] cursor-pointer'>
                            <h5 className='text-[16px] font-normal text-[#00000099]'>Collections</h5>
                            <div className='flex items-center gap-[20px]'>
                                <span>5</span>
                                <LeftArrowIcon />
                            </div>
                        </div>
                        <div className='flex items-center justify-between px-[24px] py-[12px] cursor-pointer'>
                            <h5 className='text-[16px] font-normal text-[#00000099]'>Minted</h5>
                            <div className='flex items-center gap-[20px]'>
                                <span>39</span>
                                <LeftArrowIcon />
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[white] rounded-[8px] mb-[24px]'>
                        <h4 className='text-[20px] font-medium px-[24px] py-[12px]'>Saved Searches</h4>
                        <div className='flex items-center justify-between px-[24px] py-[12px] cursor-pointer'>
                            <h5 className='text-[16px] font-normal text-[#00000099]'>Green apple</h5>
                            <div className='flex items-center gap-[20px]'>
                                <span></span>
                                <LeftArrowIcon />
                            </div>
                        </div>
                        <div className='flex items-center justify-between px-[24px] py-[12px] cursor-pointer'>
                            <h5 className='text-[16px] font-normal text-[#00000099]'>Christmas tree</h5>
                            <div className='flex items-center gap-[20px]'>
                                <span></span>
                                <LeftArrowIcon />
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[white] rounded-[8px] mb-[24px]'>
                        <h4 className='text-[20px] font-medium px-[24px] py-[12px]'>Recent Activity</h4>
                        <div className='flex items-center justify-between px-[24px] py-[12px] cursor-pointer'>
                            <h5 className='text-[16px] font-normal text-[#00000099]'>Settings {">"} Account</h5>
                            <div className='flex items-center gap-[20px]'>
                                <span></span>
                                <LeftArrowIcon />
                            </div>
                        </div>
                        <div className='flex items-center justify-between px-[24px] py-[12px] cursor-pointer'>
                            <h5 className='text-[16px] font-normal text-[#00000099]'>Sales reports</h5>
                            <div className='flex items-center gap-[20px]'>
                                <span></span>
                                <LeftArrowIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events