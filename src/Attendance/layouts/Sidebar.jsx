import React, { useState, Fragment } from 'react'
import { Transition } from '@headlessui/react';
import { Tooltip } from '@material-tailwind/react'
import { Link, useLocation } from 'react-router-dom'
import { ApplicationIcon, ComponentIcon, ElementIcon, FormIcon, HomeIcon, PageIcon, SettingIcon, ActivityIcon, LogoutOutineIcon, MessagesIcon, SettingOutlineIcon, TeamIcon, UserOutlineIcon } from '../../Resources/AllSvg'

const Sidebar = ({ header }) => {
    const [profile, setProfile] = useState(false)
    const handleClose = () => {
        setProfile(false)
    }

    const location = useLocation()
    const loc = location.pathname.includes('fornego');

    return (
        <>
            <div className={`fixed h-screen top-0 transition-all ${header ? "left-[-80px] md:left-0" : "left-0 md:left-[0]"} w-[80px] z-[9]`}>
                <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
                    <div className="flex pt-4">
                        <Link to="/dashboard" >
                            <img className="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" src='/assets/images/app-logo.svg' alt="logo" />
                        </Link>
                    </div>
                    <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
                        {loc !== false ?
                            <Tooltip content="Dashboard" placement="right" className='ml-[5px] bg-[#e9eef5] text-[#334155] text-[14px] hello'>
                                <Link to="/fornego/dashboard" className="flex h-11 w-11 items-center justify-center rounded-lg text-[#4f46e5] bg-[#edecfc] transition-all hover:transition-all dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450">
                                    <HomeIcon />
                                </Link>
                            </Tooltip> :
                            <Tooltip content="Dashboard" placement="right" className='ml-[5px] bg-[#e9eef5] text-[#334155] text-[14px] hello'>
                                <Link to="/dashboard" className="flex h-11 w-11 items-center justify-center rounded-lg text-[#4f46e5] bg-[#edecfc] transition-all hover:transition-all dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450">
                                    <HomeIcon />
                                </Link>
                            </Tooltip>
                        }
                        {loc !== false ?
                            <>
                                <Tooltip content="Instutions" placement="right" className='ml-[5px] bg-[#e9eef5] text-[#334155] text-[14px] hello'>
                                    <Link to="/fornego/instution" className="transition-all hover:transition-all flex h-11 w-11 items-center justify-center rounded-lg hover:bg-[#dcdafa] text-[#64748b] dark:hover:bg-navy-300/20">
                                        <PageIcon />
                                    </Link>
                                </Tooltip>
                                <Tooltip content="Applications" placement="right" className='ml-[5px] bg-[#e9eef5] text-[#334155] text-[14px] hello'>
                                    <Link to="/dashboard" className="transition-all hover:transition-all flex h-11 w-11 items-center justify-center rounded-lg hover:bg-[#dcdafa] text-[#64748b] dark:hover:bg-navy-300/20">
                                        <ApplicationIcon />
                                    </Link>
                                </Tooltip>
                            </> :
                            <>
                                <Tooltip content="Applications" placement="right" className='ml-[5px] bg-[#e9eef5] text-[#334155] text-[14px] hello'>
                                    <Link to="/dashboard" className="transition-all hover:transition-all flex h-11 w-11 items-center justify-center rounded-lg hover:bg-[#dcdafa] text-[#64748b] dark:hover:bg-navy-300/20">
                                        <ApplicationIcon />
                                    </Link>
                                </Tooltip>
                                <Tooltip content="Pages & Layout" placement="right" className='ml-[5px] bg-[#e9eef5] text-[#334155] text-[14px] hello'>
                                    <Link to="/dashboard" className="transition-all hover:transition-all flex h-11 w-11 items-center justify-center rounded-lg hover:bg-[#dcdafa] text-[#64748b] dark:hover:bg-navy-300/20">
                                        <PageIcon />
                                    </Link>
                                </Tooltip>
                            </>
                        }
                        <Tooltip content="Forms" placement="right" className='ml-[5px] bg-[#e9eef5] text-[#334155] text-[14px] hello'>
                            <Link to="/dashboard" className="transition-all hover:transition-all flex h-11 w-11 items-center justify-center rounded-lg hover:bg-[#dcdafa] text-[#64748b] dark:hover:bg-navy-300/20">
                                <FormIcon />
                            </Link>
                        </Tooltip>
                        <Tooltip content="Elements" placement="right" className='ml-[5px] bg-[#e9eef5] text-[#334155] text-[14px] hello'>
                            <Link to="/dashboard" className="transition-all hover:transition-all flex h-11 w-11 items-center justify-center rounded-lg hover:bg-[#dcdafa] text-[#64748b] dark:hover:bg-navy-300/20">
                                <ComponentIcon />
                            </Link>
                        </Tooltip>
                        <Tooltip content="Dashboard" placement="right" className='ml-[5px] bg-[#e9eef5] text-[#334155] text-[14px] hello'>
                            <Link to="/dashboard" className="transition-all hover:transition-all flex h-11 w-11 items-center justify-center rounded-lg hover:bg-[#dcdafa] text-[#64748b] dark:hover:bg-navy-300/20">
                                <ElementIcon />
                            </Link>
                        </Tooltip>
                    </div>
                    <div className="flex flex-col items-center space-y-3 py-3">
                        <Link to="/dashboard" className="transition-all hover:transition-all flex h-11 w-11 items-center justify-center rounded-lg hover:bg-[#dcdafa] text-[#64748b] dark:hover:bg-navy-300/20">
                            <SettingIcon />
                        </Link>
                        <div className="flex relative z-[15]">
                            <button className="avatar h-12 w-12 relative" onClick={() => setProfile(!profile)}>
                                <img className="rounded-full" src='/assets/images/avatar/avatar-12.jpg' alt="avatar" />
                                <span className="absolute top-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#10b981] dark:border-navy-700">
                                </span>
                            </button>
                            {/* ProfileModal */}
                            <div
                                aria-live="assertive"
                                className="pointer-events-none absolute inset-0 z-[15] flex items-end sm:items-start bottom-[0] sm:bottom-[0px] left-[60px] top-[initial] w-[256px]"
                            >
                                <div className="flex flex-col items-center space-y-4 z-[15] relative sm:items-end w-[256px]" >
                                    <Transition
                                        show={profile}
                                        onClose={handleClose}
                                        as={Fragment}
                                        enter="transform ease-out duration-300 transition"
                                        enterFrom="translate-x-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                                        enterTo="translate-x-0 opacity-100 sm:translate-x-0"
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white dark:border-navy-600 dark:bg-navy-700 shadow-lg ring-1 ring-black ring-opacity-5">
                                            <div className="px-4 py-5 bg-[#f1f5f9] relative z-[25] dark:bg-navy-800">
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                    </div>
                                                    <div className='flex items-center space-x-4'>
                                                        {/* <img className="rounded-full w-14 h-14" src={avatar1} alt="avatar" /> */}
                                                        <div>
                                                            <Link to="/" className='text-base font-medium text-[#334155] hover:text-[#4f46e5] focus:text-[#4f46e5] capitalize dark:text-navy-100'>Travis Fuller</Link>
                                                            <p className='text-xs text-slate-400 dark:text-navy-300'>Product Designer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pt-2 pb-5'>
                                                <div className='py-2 px-4 group hover:bg-[#f1f5f9] cursor-pointer dark:hover:bg-navy-600'>
                                                    <div className='flex items-center space-x-3'>
                                                        <div className='bg-[#ff9800] text-white flex h-8 w-8 shrink-0 items-center justify-center rounded-lg'>
                                                            <UserOutlineIcon className='w-[18px]' />
                                                        </div>
                                                        <div>
                                                            <h2 className='text-[#334155] text-sm font-medium group-hover:text-[#4f46e5] focus:text-[#4f46e5]   dark:text-navy-100'>Profile</h2>
                                                            <p className='text-[#94a3b8] text-xs line_clamp'>Your profile setting</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='py-2 px-4 group hover:bg-[#f1f5f9] cursor-pointer dark:hover:bg-navy-600'>
                                                    <div className='flex items-center space-x-3'>
                                                        <div className='bg-[#0ea5e9] text-white flex h-8 w-8 shrink-0 items-center justify-center rounded-lg'>
                                                            <MessagesIcon className='w-[18px]' />
                                                        </div>
                                                        <div>
                                                            <h2 className='text-[#334155] text-sm font-medium group-hover:text-[#4f46e5] focus:text-[#4f46e5] dark:text-navy-100'>Messages</h2>
                                                            <p className='text-[#94a3b8] text-xs line_clamp'>Your messages and tasks</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='py-2 px-4 group hover:bg-[#f1f5f9] cursor-pointer dark:hover:bg-navy-600'>
                                                    <div className='flex items-center space-x-3'>
                                                        <div className='bg-[#f000b9] text-white flex h-8 w-8 shrink-0 items-center justify-center rounded-lg'>
                                                            <TeamIcon className='w-[18px]' />
                                                        </div>
                                                        <div>
                                                            <h2 className='text-[#334155] text-sm font-medium group-hover:text-[#4f46e5] focus:text-[#4f46e5] dark:text-navy-100'>Team</h2>
                                                            <p className='text-[#94a3b8] text-xs line_clamp'>Your team activity</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='py-2 px-4 group hover:bg-[#f1f5f9] cursor-pointer dark:hover:bg-navy-600'>
                                                    <div className='flex items-center space-x-3'>
                                                        <div className='bg-[#ff5724] text-white flex h-8 w-8 shrink-0 items-center justify-center rounded-lg'>
                                                            <ActivityIcon className='w-[18px]' />
                                                        </div>
                                                        <div>
                                                            <h2 className='text-[#334155] text-sm font-medium group-hover:text-[#4f46e5] focus:text-[#4f46e5] dark:text-navy-100'>Activity</h2>
                                                            <p className='text-[#94a3b8] text-xs line_clamp'>Your activity and events</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='py-2 px-4 group hover:bg-[#f1f5f9] cursor-pointer dark:hover:bg-navy-600'>
                                                    <div className='flex items-center space-x-3'>
                                                        <div className='bg-[#10b981] text-white flex h-8 w-8 shrink-0 items-center justify-center rounded-lg'>
                                                            <SettingOutlineIcon className='w-[18px]' />
                                                        </div>
                                                        <div>
                                                            <h2 className='text-[#334155] text-sm font-medium group-hover:text-[#4f46e5] focus:text-[#4f46e5] dark:text-navy-100'>Settings</h2>
                                                            <p className='text-[#94a3b8] text-xs line_clamp'>Webapp settings</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3 px-4'>
                                                    <Link onClick={() => { window.location.href = "/signin" }} to="/signin" className='bg-[#4f46e5] h-9 w-full rounded-[.5rem] text-white flex justify-center items-center'><LogoutOutineIcon className='w-5 h-5' /> <span className='text-sm ml-2'>Logout</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                        {profile ? <div className='fixed top-0 left-0 h-full w-[100vw] z-[10]' onClick={() => setProfile(false)}></div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
