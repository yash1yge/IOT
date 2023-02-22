import React, { useState } from 'react'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import SColumnChart from './ColumnChart';
import RadialBarChart from './RadialBarChart';
import RadialBarChart1 from './RadialBarChart1';

const SDashboard = () => {
    const [input, setInput] = useState(false);
    const [tab, setTab] = useState("day")
    return (
        <>
            <div className='mt-0'>
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-slate-700 line-clamp-1 dark:text-navy-50"> Attendance Dashboard</h3>
                    <div className="flex">
                        <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </button>
                        <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                    <div className="card group col-span-12 lg:col-span-7">
                        <div className="mt-3 flex items-center justify-between px-4 sm:px-5">
                            <div className="flex flex-1 items-center justify-between space-x-2 sm:flex-initial">
                                <h2 className="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100"> Server traffic </h2>
                                <div className="inline-flex focus-within:opacity-100 group-hover:opacity-100 sm:opacity-0">
                                    <Menu placement="bottom-end">
                                        <MenuHandler>
                                            <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                            </button>
                                        </MenuHandler>
                                        <MenuList className='min-w-[154px] px-0 py-1.5 dark:border-navy-500 dark:bg-navy-700'>
                                            <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Action</MenuItem>
                                            <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Another Action</MenuItem>
                                            <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Something Else</MenuItem>
                                            <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                            <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Separated Link</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                            </div>
                            <div className="hidden justify-between space-x-4 text-xs+ sm:flex">
                                <button className={`${tab === "day" && "text-primary dark:text-accent-light"} font-medium tracking-wide`} onClick={() => setTab("day")}> Last 7 days </button>
                                <button onClick={() => setTab("time")} className={`${tab === "time" && "text-primary dark:text-accent-light"} font-medium tracking-wide`}> All Time </button>
                            </div>
                        </div>
                        <div>
                            <SColumnChart />
                        </div>
                    </div>
                    <div className="order-first col-span-12 grid grid-cols-2 gap-4 sm:order-none sm:gap-5 lg:col-span-5 lg:gap-6">
                        <div className="card row-span-2 justify-between py-5 px-2 text-center">
                            <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100"> CPU Usage </p>
                            <div>
                                <RadialBarChart />
                            </div>
                            <p className="mt-4 text-xs+"> Daily usage is <span className="font-medium text-slate-700 dark:text-navy-100">Good</span>
                            </p>
                        </div>
                        <div className="card justify-center p-4">
                            <div className="flex items-center space-x-3">
                                <div className='radial1'>
                                    <RadialBarChart1 />
                                </div>
                                <div className="text-xs+ font-medium text-slate-700 dark:text-navy-100"> Storage Usage </div>
                            </div>
                        </div>
                        <div className="card justify-center p-4">
                            <div className="flex items-center space-x-3">
                                <div className='radial1'>
                                    <RadialBarChart1 />
                                </div>
                                <div className="text-xs+ font-medium text-slate-700 dark:text-navy-100"> Memory Usage </div>
                            </div>
                        </div>
                        <div className="card flex-row overflow-hidden">
                            <div className="h-full w-1 shrink-0 bg-primary dark:bg-accent"></div>
                            <div className="p-4 font-inter">
                                <div className="flex items-baseline space-x-2">
                                    <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100"> 4.54 </p>
                                    <p className="text-xs">/12 GB</p>
                                </div>
                                <p className="text-xs">Daily traffic</p>
                            </div>
                        </div>
                        <div className="card flex-row overflow-hidden">
                            <div className="h-full w-1 shrink-0 bg-info"></div>
                            <div className="p-4 font-inter">
                                <div className="flex items-baseline space-x-2">
                                    <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100"> 14.54 </p>
                                    <p className="text-xs">/12 GB</p>
                                </div>
                                <p className="text-xs">Hourly traffic</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 sm:mt-5 lg:mt-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"> Monitoring Workspaces </h2>
                        <div className="flex">
                            <div className="flex items-center">
                                {input &&
                                    <label className="block">
                                        <input className="form-input w-full bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200" placeholder="Search here..." type="text" />
                                    </label>}
                                <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" onClick={() => setInput(!input)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="inline-flex">
                                <Menu placement="bottom-end">
                                    <MenuHandler>
                                        <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                            </svg>
                                        </button>
                                    </MenuHandler>
                                    <MenuList className='min-w-[154px] px-0 py-1.5 dark:border-navy-500 dark:bg-navy-700'>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Action</MenuItem>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Another Action</MenuItem>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Something Else</MenuItem>
                                        <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Separated Link</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div >
                    <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 lg:gap-6">
                        <div className="card space-y-6 p-4 sm:px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold uppercase text-primary dark:text-accent-light"> Id: 5988745 </p>
                                </div>
                                <Menu placement="bottom-end">
                                    <MenuHandler>
                                        <button className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                            </svg>
                                        </button>
                                    </MenuHandler>
                                    <MenuList className='min-w-[154px] px-0 py-1.5 dark:border-navy-500 dark:bg-navy-700'>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Action</MenuItem>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Another Action</MenuItem>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Something Else</MenuItem>
                                        <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Separated Link</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div >
                            <div>
                                <p className="text-xs uppercase">Current Status</p>
                                <p className="text-base font-medium text-success">Up for 7 hours</p>
                            </div>
                            <div className="flex grow justify-between space-x-2">
                                <div>
                                    <p className="text-xs+ text-slate-400 dark:text-navy-300"> Total Uptime </p>
                                    <p className="text-lg font-semibold text-slate-700 dark:text-navy-100"> 96.4% </p>
                                </div>
                                <div>
                                    <p className="text-xs+ text-slate-400 dark:text-navy-300"> Response </p>
                                    <p className="text-lg font-semibold text-slate-700 dark:text-navy-100"> 3.4 s </p>
                                </div>
                                <div>
                                    <p className="text-xs+ text-slate-400 dark:text-navy-300"> Memory </p>
                                    <p className="text-lg font-semibold text-slate-700 dark:text-navy-100"> 14 GB </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <p className="text-xs uppercase text-slate-400 dark:text-navy-300"> Country </p>
                                    <p className="text-xs uppercase text-slate-400 dark:text-navy-300"> traffic </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <img className="h-6 w-6" src="../../assets/images/flags/usa-round.svg" alt="flag" />
                                        <p className="font-medium text-slate-700 dark:text-navy-100"> Unated States </p>
                                    </div>
                                    <div className="font-inter">
                                        <span className="text-right font-medium text-slate-700 dark:text-navy-100">4.5 GB</span>
                                        <span className="text-xs">/8 GB</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <img className="h-6 w-6" src="../../assets/images/flags/russia-round.svg" alt="flag" />
                                        <p className="font-medium text-slate-700 dark:text-navy-100"> Russia </p>
                                    </div>
                                    <div className="font-inter">
                                        <span className="text-right font-medium text-slate-700 dark:text-navy-100">6.22 GB</span>
                                        <span className="text-xs">/12 GB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap space-x-2">
                                <div className="badge bg-info/10 text-info dark:bg-info/15"> 195.161.66.25 </div>
                                <div className="badge bg-info/10 text-info dark:bg-info/15"> 215.122.127.155 </div>
                            </div>
                        </div >
                        <div className="card space-y-6 p-4 sm:px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold uppercase text-primary dark:text-accent-light"> Id: 6518869 </p>
                                </div>
                                <Menu placement="bottom-end">
                                    <MenuHandler>
                                        <button className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                            </svg>
                                        </button>
                                    </MenuHandler>
                                    <MenuList className='min-w-[154px] px-0 py-1.5 dark:border-navy-500 dark:bg-navy-700'>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Action</MenuItem>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Another Action</MenuItem>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Something Else</MenuItem>
                                        <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                        <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Separated Link</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div >
                            <div>
                                <p className="text-xs uppercase">Current Status</p>
                                <p className="text-base font-medium text-success">Up for 2 hours</p>
                            </div>
                            <div className="flex grow justify-between space-x-2">
                                <div>
                                    <p className="text-xs+ text-slate-400 dark:text-navy-300"> Total Uptime </p>
                                    <p className="text-lg font-semibold text-slate-700 dark:text-navy-100"> 98.2% </p>
                                </div>
                                <div>
                                    <p className="text-xs+ text-slate-400 dark:text-navy-300"> Response </p>
                                    <p className="text-lg font-semibold text-slate-700 dark:text-navy-100"> 4.3 s </p>
                                </div>
                                <div>
                                    <p className="text-xs+ text-slate-400 dark:text-navy-300"> Memory </p>
                                    <p className="text-lg font-semibold text-slate-700 dark:text-navy-100"> 22 GB </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <p className="text-xs uppercase text-slate-400 dark:text-navy-300"> Country </p>
                                    <p className="text-xs uppercase text-slate-400 dark:text-navy-300"> traffic </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <img className="h-6 w-6" src="../../assets/images/flags/australia-round.svg" alt="flag" />
                                        <p className="font-medium text-slate-700 dark:text-navy-100"> Australia </p>
                                    </div>
                                    <div className="font-inter">
                                        <span className="text-right font-medium text-slate-700 dark:text-navy-100">3.76 GB</span>
                                        <span className="text-xs">/5 GB</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <img className="h-6 w-6" src="../../assets/images/flags/united-kingdom-round.svg" alt="flag" />
                                        <p className="font-medium text-slate-700 dark:text-navy-100"> UK </p>
                                    </div>
                                    <div className="font-inter">
                                        <span className="text-right font-medium text-slate-700 dark:text-navy-100">6.65 GB</span>
                                        <span className="text-xs">/10 GB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap space-x-2">
                                <div className="badge bg-info/10 text-info dark:bg-info/15"> 195.161.66.25 </div>
                                <div className="badge bg-info/10 text-info dark:bg-info/15"> 215.122.127.155 </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}

export default SDashboard