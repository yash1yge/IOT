import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { BelIcon, LeftArrowIcon, MoonIcon, SearchIcon, SunIcon, WidgetIcon, CalenderIcon, SettingOutlineIcon, Analytics, BankingIcon, ChatIcon, CryptoIcn, FilesIcon2, KanbanIcon, OrderIcon, TodoIcon } from '../../../Resources/AllSvg';
import { Link, useLocation } from 'react-router-dom'
import BitcoinChart from './BitcoinChart';
import SqlChart from './SqlChart';

export const Header = ({ Fragment, header, setHeader, setMono, mono, darkMode, setDarkMode }) => {

    const [notification, setNotification] = useState(false)
    const [show, setShow] = useState(false)
    const [option, setOption] = useState('all')
    const [option2, setOption2] = useState('all')
    const [open, setOpen] = useState(false)
    const [tab, setTab] = useState("home")

    const handleOption = (renderOption) => {
        setOption(renderOption)
    }

    const handleOption2 = (renderOption) => {
        setOption2(renderOption)
    }

    const handleTab = (page) => {
        setTab(page)
    }

    const location = useLocation()
    const loc = location.pathname.includes('fornego');


    return (
        <>
            <div className={`${header ? "px-[16px] md:px-[24px] xl:px-[64px]" : "px-[24px]"} flex items-center bg-[#ffffffcc] justify-between h-[60px] border-b-[1px] border-[#e9eef5] dark:border-navy-700 dark:bg-navy-750 header-container sticky top-0 z-[9]`}>
                {loc === false ?
                    <div className='cursor-pointer' onClick={() => setHeader(!header)}>
                        {header ?
                            <button className="menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-[#4f46e5] outline-none focus:outline-none dark:text-accent-light/80">
                                <span className='h-[2px] w-[20px] bg-[#4f46e5]'></span>
                                <span className='h-[2px] w-[10px] bg-[#4f46e5]'></span>
                                <span className='h-[2px] w-[20px] bg-[#4f46e5]'></span>
                            </button> : <LeftArrowIcon />
                        }
                    </div> : <div></div>}
                <div className='flex items-center'>
                    <div className='relative mr-4 flex h-8'>
                        {loc === false &&
                            <>
                                <input placeholder='Search here...' className={`translate-y-[1px] input-set-font peer dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900 sm:block hidden relative z-[12] form-input rounded-full bg-[#e9eef5] px-4 pl-9 text-slate-800 outline-none h-8 place_data ${show ? "w-80 transition-all ring ring-[#4f46e580]" : "w-60 transition-all"}`} onClick={() => { setShow(true); setNotification(false) }} />
                                {show ? <div className='fixed top-0 left-0 h-screen w-full z-[10]' onClick={() => setShow(false)}></div> : null}
                                <div onClick={() => setShow(true)}>
                                    <SearchIcon className={`h-[18.5px] w-[18.5px] ${show ? "text-primary" : "text-[#94a3b8]"}  relative sm:absolute left-[11px] top-[7px] z-[12]`} />
                                </div>
                                {/* SearchBox */}
                                <div
                                    aria-live="assertive"
                                    className="pointer-events-none fixed sm:absolute flex items-end sm:px-4 sm:py-6 w-full sm:w-[356px] sm:items-start sm:p-6 top-0 sm:top-[20px] sm:left-[-17px] left-0 z-[13] h-screen sm:h-fit"
                                >
                                    <div className="flex w-full flex-col items-center space-y-4 sm:items-end z-[12] h-full sm:h-fit">
                                        <Transition
                                            show={show}
                                            as={Fragment}
                                            enter="transform ease-out duration-300 transition"
                                            enterFrom="w-full translate-y-2 opacity-0 sm:translate-y-0 sm:translate-y-2"
                                            enterTo="w-full translate-y-0 opacity-100 sm:translate-x-0"
                                            leave="transition w-full ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="pointer-events-auto w-full h-full sm:h-fit overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-navy-700 dark:text-navy-200">
                                                <div className="w-full sm:hidden flex items-center space-x-2 bg-slate-100 px-3 pt-2 dark:bg-navy-800 dark:text-navy-200">
                                                    <button className="mobile-searchbar-hide btn -ml-1.5 h-7 w-7 shrink-0 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25" onClick={() => setShow(false)}>
                                                        <LeftArrowIcon />
                                                    </button>
                                                    <input className="mobile-searchbar-input form-input h-8 w-full bg-transparent placeholder-slate-400 dark:placeholder-navy-300" type="text" placeholder="Search here..." />
                                                </div>
                                                <div className="is-scrollbar-hidden flex shrink-0 overflow-x-auto rounded-t-lg bg-slate-100 px-2 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
                                                    <button className={`${option2 === "all" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption2("all")}>
                                                        <span>All</span>
                                                    </button>
                                                    <button className={`${option2 === "Files" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption2("Files")}>
                                                        <span>Files</span>
                                                    </button>
                                                    <button className={`${option2 === "Charts" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption2("Charts")}>
                                                        <span>Charts</span>
                                                    </button>
                                                    <button className={`${option2 === "Emails" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption2("Emails")}>
                                                        <span>Emails</span>
                                                    </button>
                                                    <button className={`${option2 === "Projects" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption2("Projects")}>
                                                        <span>Projects</span>
                                                    </button>
                                                    <button className={`${option2 === "Tasks" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption2("Tasks")}>
                                                        <span>Tasks</span>
                                                    </button>
                                                </div>
                                                <div className="is-scrollbar-hidden overflow-y-auto overscroll-contain pb-2">
                                                    <div className="is-scrollbar-hidden mt-3 flex space-x-4 overflow-x-auto px-3">
                                                        <Link to="/dashboard" className='w-14 text-center'>
                                                            <div className="avatar h-12 w-12">
                                                                <div className="is-initial rounded-full bg-success text-white">
                                                                    <KanbanIcon />
                                                                </div>
                                                            </div>
                                                            <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"> Kanban </p>
                                                        </Link>
                                                        <Link to="/dashboard" className='w-14 text-center'>
                                                            <div className="avatar h-12 w-12">
                                                                <div className="is-initial rounded-full bg-secondary text-white">
                                                                    <Analytics />
                                                                </div>
                                                            </div>
                                                            <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"> Analytics </p>
                                                        </Link>
                                                        <Link to="/dashboard" className='w-14 text-center'>
                                                            <div className="avatar h-12 w-12">
                                                                <div className="is-initial rounded-full bg-info text-white">
                                                                    <ChatIcon className="h-5 w-5" />
                                                                </div>
                                                            </div>
                                                            <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"> Chat </p>
                                                        </Link>
                                                        <Link to="/dashboard" className='w-14 text-center'>
                                                            <div className="avatar h-12 w-12">
                                                                <div className="is-initial rounded-full bg-error text-white">
                                                                    <FilesIcon2 className="h-5 w-5" />
                                                                </div>
                                                            </div>
                                                            <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"> Files </p>
                                                        </Link>
                                                        <Link to="/dashboard" className='w-14 text-center'>
                                                            <div className="avatar h-12 w-12">
                                                                <div className="is-initial rounded-full bg-secondary text-white">
                                                                    <CryptoIcn />
                                                                </div>
                                                            </div>
                                                            <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"> Crypto </p>
                                                        </Link>
                                                        <Link to="/dashboard" className='w-14 text-center'>
                                                            <div className="avatar h-12 w-12">
                                                                <div className="is-initial rounded-full bg-primary text-white">
                                                                    <BankingIcon />
                                                                </div>
                                                            </div>
                                                            <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"> Banking </p>
                                                        </Link>
                                                        <Link to="/dashboard" className='w-14 text-center'>
                                                            <div className="avatar h-12 w-12">
                                                                <div className="is-initial rounded-full bg-info text-white">
                                                                    <TodoIcon />
                                                                </div>
                                                            </div>
                                                            <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"> Todo </p>
                                                        </Link>
                                                        <Link to="/dashboard" className='w-14 text-center'>
                                                            <div className="avatar h-12 w-12">
                                                                <div className="is-initial rounded-full bg-secondary text-white">
                                                                    <Analytics />
                                                                </div>
                                                            </div>
                                                            <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"> Analytics </p>
                                                        </Link>
                                                        <Link to="/dashboard" className='w-14 text-center'>
                                                            <div className="avatar h-12 w-12">
                                                                <div className="is-initial rounded-full bg-warning text-white">
                                                                    <OrderIcon />
                                                                </div>
                                                            </div>
                                                            <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"> Orders </p>
                                                        </Link>
                                                    </div>
                                                    <div className="mt-3 flex items-center justify-between bg-slate-100 py-1.5 px-3 dark:bg-navy-800">
                                                        <p className="text-xs uppercase">Recent</p>
                                                        <Link to="/dashboard" className="text-tiny+ font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"> View All </Link>
                                                    </div>
                                                    <div className="mt-1 font-inter font-medium">
                                                        <Link to="/dashboard" className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">
                                                            <ChatIcon className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200" />
                                                            <span>Chat App</span>
                                                        </Link>
                                                        <Link to="/dashboard" className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">
                                                            <FilesIcon2 className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200" />
                                                            <span>Desktop App View</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>
                                </div>
                            </>}
                    </div>
                    <button className='btn h-8 w-8 ml-2 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center'>
                        {darkMode ?
                            <div onClick={() => setDarkMode(false)}><MoonIcon /></div>
                            :
                            <div onClick={() => setDarkMode(true)}><SunIcon /></div>}
                    </button>
                    <button className='btn h-8 w-8 ml-2 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center' onClick={() => setMono(!mono)}>
                        <i className="fa-solid fa-palette bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-lg font-semibold text-transparent"></i>
                    </button>
                    <div className='relative'>
                        <button className='btn h-8 w-8 ml-2 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center relative' onClick={() => { setNotification(!notification); setShow(false) }}>
                            <BelIcon />
                            <span className='absolute -top-px -right-px flex h-3 w-3 items-center justify-center'>
                                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f000b9] opacity-80'></span>
                                <span className='inline-flex h-2 w-2 rounded-full bg-[#f000b9]'></span>
                            </span>
                        </button>
                        {/* NotificationPanel */}
                        <div className={notification ? 'apply-font block top-[60px] sm:top-[45px] fixed sm:absolute right-[50%] translate-x-[50%] sm:translate-x-0 sm:right-0 shadow-md popper-box mx-auto mt-1 w-[93%] flex-col rounded-lg border border-slate-150 bg-white dark:bg-navy-700 dark:text-navy-200 shadow-soft sm:m-0 sm:w-80 z-[12] dark:border-navy-800' : 'hidden'}>
                            <div className='bg-[#f1f5f9] dark:bg-navy-800 dark:text-navy-200 px-4 pt-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <p className='font-medium text-slate-700 text-sm dark:text-navy-100'>Notifications</p>
                                        <div className='badge h-5 w-7 flex justify-center items-center rounded-full bg-[#4f46e51a] px-1.5 text-[#4f46e5] text-xs dark:bg-accent-light/15 dark:text-accent-light ml-2'>26</div>
                                    </div>
                                    <SettingOutlineIcon className="cursor-pointer h-4.5 w-4.5" />
                                </div>
                                <div className="tabs is-scrollbar-hidden flex shrink-0 overflow-x-auto">
                                    <button className={`${option === "all" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption("all")}>
                                        <span>All</span>
                                    </button>
                                    <button className={`${option === "alerts" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption("alerts")}>
                                        <span>Alerts</span>
                                    </button>
                                    <button className={`${option === "events" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption("events")}>
                                        <span>Events</span>
                                    </button>
                                    <button className={`${option === "logs" ? "border-b-2 border-primary text-primary" : "border-[transparent] border-b-2"} tab btn shrink-0 rounded-none px-3.5 py-2.5`} onClick={() => handleOption("logs")}>
                                        <span>Logs</span>
                                    </button>
                                </div>
                            </div>
                            <div className='add_scroll p-4 space-y-4 overflow-y-auto max-h-[279px]' style={{ height: "100%" }}>
                                {option === "all" || option === "alerts" ?
                                    <div className='flex items-center space-x-3'>
                                        <div className='bg-[#f000b91a] flex h-10 w-10 shrink-0 items-center justify-center rounded-lg'>
                                            <i className="fa-solid fa-user-pen text-[#f000b9] text-[14px]"></i>
                                        </div>
                                        <div>
                                            <h2 className='text-[#475569] text-sm font-medium dark:text-navy-100'>User Photo Changed</h2>
                                            <p className='text-[#94a3b8] text-xs line_clamp'>John Doe changed his avatar photo</p>
                                        </div>
                                    </div> : null
                                }
                                {option === "events" &&
                                    <div className='flex items-center space-x-3'>
                                        <div className='bg-[#0ea5e91a] flex h-10 w-10 shrink-0 items-center justify-center rounded-lg'>
                                            <CalenderIcon className="text-[#0ea5e9] w-[20px] h-[20px]" />
                                        </div>
                                        <div>
                                            <h2 className='text-[#475569] text-sm font-medium'>Mon, June 14, 2021</h2>
                                            <p className='text-[#94a3b8] text-xs line_clamp'>08:00 - 09:00 Frontend Conf</p>
                                        </div>
                                    </div>
                                }
                                {option === "logs" &&
                                    <div className='flex items-center justify-center flex-col py-6'>
                                        <img src='/assets/images/illustrations/empty-girl-box.png' alt="" className='w-36' />
                                        <div className="mt-5 text-center">
                                            <p className="text-base font-semibold text-slate-700 dark:text-navy-100"> No any logs </p>
                                            <p className="text-slate-400 dark:text-navy-300"> There are no unread logs yet </p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        {notification ? <div className='fixed top-0 left-0 h-screen w-full z-[10]' onClick={() => setNotification(false)}></div> : null}
                    </div>
                    <button onClick={() => setOpen(true)} className='btn h-[22px] w-[22px] ml-3 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center relative'>
                        <WidgetIcon />
                    </button>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment} open>
                <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                    <Transition>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 z-[150] bg-slate-900/60 transition-opacity duration-200"></div>
                        </Transition.Child>

                        <div className="fixed z-[151] inset-0 overflow-hidden">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                                    <Dialog.Panel className="pointer-events-auto relative w-full sm:w-80">
                                        <div className="flex h-screen flex-col bg-white dark:bg-navy-750 shadow-xl">
                                            <div className="flex items-center justify-between py-2 px-4">
                                                {tab === "home" &&
                                                    <p className="flex shrink-0 items-center space-x-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                        </svg>
                                                        <span className="text-xs">25 May, 2022</span>
                                                    </p>}
                                                {tab === "projects" &&
                                                    <p className="flex shrink-0 items-center space-x-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                                        </svg>
                                                        <span className="text-xs">Projects</span>
                                                    </p>}
                                                {tab === "time" &&
                                                    <p className="flex shrink-0 items-center space-x-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                        <span className="text-xs">Activity</span>
                                                    </p>}

                                                <button onClick={() => setOpen(false)} className="btn -mr-1 h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 dark:hover:bg-navy-300/20">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="pt-1 scrollbar-hidden overflow-y-auto">
                                                {tab === "home" &&
                                                    <>
                                                        <label className="relative flex px-3">
                                                            <input className="form-input peer h-8 w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 text-xs+ ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900" placeholder="Search here..." type="text" />
                                                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"></path>
                                                                </svg>
                                                            </span>
                                                        </label>
                                                        <div className="mt-3">
                                                            <h2 className="px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                                                                Banking cards
                                                            </h2>
                                                            <div className="swiper mt-3 px-3 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" x-init="$nextTick(()=>new Swiper($el,{  slidesPerView: 'auto', spaceBetween: 16}))">
                                                                <div className="swiper-wrapper" style={{ transitionDuration: "0ms", transform: "translate3d(0px, 0px, 0px)" }} id="swiper-wrapper-53e45a810949f99a3" aria-live="polite">
                                                                    <div className="swiper-slide relative flex h-28 w-48 flex-col overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-3 swiper-slide-active" role="group" aria-label="1 / 3" style={{ marginRight: "16px" }}>
                                                                        <div className="grow">
                                                                            <img className="h-3" src="../assets/images/payments/cc-visa-white.svg" alt="avatar" />
                                                                        </div>
                                                                        <div className="text-white">
                                                                            <p className="text-lg font-semibold tracking-wide">
                                                                                $2,139.22
                                                                            </p>
                                                                            <p className="mt-1 text-xs font-medium">
                                                                                **** **** **** 8945
                                                                            </p>
                                                                        </div>
                                                                        <div className="mask is-reuleaux-triangle absolute top-0 right-0 -m-3 h-16 w-16 bg-white/20"></div>
                                                                    </div>
                                                                    <div className="swiper-slide relative flex h-28 w-48 flex-col overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-3 swiper-slide-next" role="group" aria-label="2 / 3" style={{ marginRight: "16px" }}>
                                                                        <div className="grow">
                                                                            <img className="h-3" src="../assets/images/payments/cc-visa-white.svg" alt="avatar" />
                                                                        </div>
                                                                        <div className="text-white">
                                                                            <p className="text-lg font-semibold tracking-wide">
                                                                                $2,139.22
                                                                            </p>
                                                                            <p className="mt-1 text-xs font-medium">
                                                                                **** **** **** 8945
                                                                            </p>
                                                                        </div>
                                                                        <div className="mask is-diamond absolute bottom-0 right-0 -m-3 h-16 w-16 bg-white/20"></div>
                                                                    </div>
                                                                    <div className="swiper-slide relative flex h-28 w-48 flex-col overflow-hidden rounded-xl bg-gradient-to-br from-info to-info-focus p-3" role="group" aria-label="3 / 3" style={{ marginRight: "16px" }}>
                                                                        <div className="grow">
                                                                            <img className="h-3" src="../assets/images/payments/cc-visa-white.svg" alt="avatar" />
                                                                        </div>
                                                                        <div className="text-white">
                                                                            <p className="text-lg font-semibold tracking-wide">
                                                                                $2,139.22
                                                                            </p>
                                                                            <p className="mt-1 text-xs font-medium">
                                                                                **** **** **** 8945
                                                                            </p>
                                                                        </div>
                                                                        <div className="mask is-hexagon-2 absolute top-0 right-0 -m-3 h-16 w-16 bg-white/20"></div>
                                                                    </div>
                                                                </div>
                                                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                                        </div>
                                                        <div className="mt-4 px-3">
                                                            <h2 className="text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                                                                Pinned Apps
                                                            </h2>
                                                            <div className="mt-3 flex space-x-3">
                                                                <Link to="/dashboard" className="w-12 text-center">
                                                                    <div className="avatar h-10 w-10">
                                                                        <div className="is-initial mask is-squircle bg-success text-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                                                                        Kanban
                                                                    </p>
                                                                </Link>
                                                                <Link to="/dashboard" className="w-12 text-center">
                                                                    <div className="avatar h-10 w-10">
                                                                        <div className="is-initial mask is-squircle bg-warning text-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                                                                        Analytics
                                                                    </p>
                                                                </Link>
                                                                <Link to="/dashboard" className="w-12 text-center">
                                                                    <div className="avatar h-10 w-10">
                                                                        <div className="is-initial mask is-squircle bg-info text-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                                                                        Chat
                                                                    </p>
                                                                </Link>
                                                                <Link to="/dashboard" className="w-12 text-center">
                                                                    <div className="avatar h-10 w-10">
                                                                        <div className="is-initial mask is-squircle bg-error text-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                                                                        Files
                                                                    </p>
                                                                </Link>
                                                                <Link to="/dashboard" className="w-12 text-center">
                                                                    <div className="avatar h-10 w-10">
                                                                        <div className="is-initial mask is-squircle bg-secondary text-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
                                                                        Banking
                                                                    </p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <div className="grid grid-cols-2 gap-3 px-3">
                                                                <div className="rounded-lg bg-slate-150 px-2.5 py-2 dark:bg-navy-600">
                                                                    <div className="flex items-center justify-between space-x-1">
                                                                        <p>
                                                                            <span className="text-lg font-medium text-slate-700 dark:text-navy-100">11.3</span>
                                                                            <span className="text-xs">hr</span>
                                                                        </p>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-secondary dark:text-secondary-light" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                                                        </svg>
                                                                    </div>

                                                                    <p className="mt-0.5 text-tiny+ uppercase">Working Hours</p>

                                                                    <div className="progress mt-3 h-1.5 bg-secondary/15 dark:bg-secondary-light/25">
                                                                        <div className="is-active relative w-8/12 overflow-hidden rounded-full bg-secondary dark:bg-secondary-light"></div>
                                                                    </div>

                                                                    <div className="mt-1.5 flex items-center justify-between text-xs text-slate-400 dark:text-navy-300">
                                                                        <button className="btn -ml-1 h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                                            </svg>
                                                                        </button>
                                                                        <span> 71%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rounded-lg bg-slate-150 px-2.5 py-2 dark:bg-navy-600">
                                                                    <div className="flex items-center justify-between space-x-1">
                                                                        <p>
                                                                            <span className="text-lg font-medium text-slate-700 dark:text-navy-100">13</span>
                                                                            <span className="text-xs">/22</span>
                                                                        </p>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-success" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                                        </svg>
                                                                    </div>

                                                                    <p className="mt-0.5 text-tiny+ uppercase">Completed tasks</p>

                                                                    <div className="progress mt-3 h-1.5 bg-success/15 dark:bg-success/25">
                                                                        <div className="relative w-6/12 overflow-hidden rounded-full bg-success"></div>
                                                                    </div>

                                                                    <div className="mt-1.5 flex items-center justify-between text-xs text-slate-400 dark:text-navy-300">
                                                                        <button className="btn -ml-1 h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                                            </svg>
                                                                        </button>
                                                                        <span> 49%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <h2 className="px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                                                                Stock Market
                                                            </h2>
                                                            <div className="mt-3 grid grid-cols-2 gap-3 px-3">
                                                                <div className="rounded-lg bg-slate-100 p-2.5 dark:bg-navy-600">
                                                                    <div className="flex items-center space-x-2">
                                                                        <img className="h-10 w-10" src="../assets/images/logos/bitcoin.svg" alt="avatar" />
                                                                        <div>
                                                                            <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                                                                BTC
                                                                            </h2>
                                                                            <p className="text-xs">Bitcoin</p>
                                                                        </div>
                                                                    </div>
                                                                    <BitcoinChart />
                                                                    <div className="mt-2 flex items-center justify-between">
                                                                        <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                                                            60.33$
                                                                        </p>
                                                                        <p className="text-xs font-medium tracking-wide text-success">
                                                                            +3.3%
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="rounded-lg bg-slate-100 p-2.5 dark:bg-navy-600">
                                                                    <div className="flex items-center space-x-2">
                                                                        <img className="h-10 w-10" src="../assets/images/logos/solana.svg" alt="avatar" />
                                                                        <div>
                                                                            <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                                                                SOL
                                                                            </h2>
                                                                            <p className="text-xs">Solana</p>
                                                                        </div>
                                                                    </div>
                                                                    <SqlChart />
                                                                    <div className="mt-2 flex items-center justify-between">
                                                                        <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                                                            20.56$
                                                                        </p>
                                                                        <p className="text-xs font-medium tracking-wide text-success">
                                                                            +4.11%
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <h2 className="px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                                                                Latest News
                                                            </h2>
                                                            <div className="mt-3 space-y-3 px-2">
                                                                <div className="flex justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700">
                                                                    <div className="flex flex-1 flex-col justify-between">
                                                                        <div className="line-clamp-2">
                                                                            <Link to="/dashboard" className="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">What is Tailwind CSS?</Link>
                                                                        </div>
                                                                        <div className="flex items-center justify-between">
                                                                            <div className="flex items-center space-x-2">
                                                                                <div className="avatar h-7 w-7">
                                                                                    <img className="rounded-full" src="../assets/images/avatar/avatar-20.jpg" alt="avatar" />
                                                                                </div>
                                                                                <div>
                                                                                    <p className="text-xs font-medium line-clamp-1">
                                                                                        John D.
                                                                                    </p>
                                                                                    <p className="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300">
                                                                                        2 min read
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex">
                                                                                <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                                                                                    </svg>
                                                                                </button>
                                                                                <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                                                                    </svg>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <img src="../assets/images/object/object-18.jpg" className="h-20 w-20 rounded-lg object-cover object-center" alt="avatar" />
                                                                </div>

                                                                <div className="flex justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700">
                                                                    <div className="flex flex-1 flex-col justify-between">
                                                                        <div className="line-clamp-2">
                                                                            <Link to="/dashboard" className="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">Tailwind CSS Card Example</Link>
                                                                        </div>
                                                                        <div className="flex items-center justify-between">
                                                                            <div className="flex items-center space-x-2">
                                                                                <div className="avatar h-7 w-7">
                                                                                    <img className="rounded-full" src="../assets/images/avatar/avatar-19.jpg" alt="avatar" />
                                                                                </div>
                                                                                <div>
                                                                                    <p className="text-xs font-medium line-clamp-1">
                                                                                        Travis F.
                                                                                    </p>
                                                                                    <p className="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300">
                                                                                        5 min read
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex">
                                                                                <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                                                                                    </svg>
                                                                                </button>
                                                                                <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                                                                    </svg>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <img src="../assets/images/object/object-2.jpg" className="h-20 w-20 rounded-lg object-cover object-center" alt="avatar" />
                                                                </div>

                                                                <div className="flex justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700">
                                                                    <div className="flex flex-1 flex-col justify-between">
                                                                        <div className="line-clamp-2">
                                                                            <Link to="/dashboard" className="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">
                                                                                10 Tips for Making a Good Camera Even Better
                                                                            </Link>
                                                                        </div>
                                                                        <div className="flex items-center justify-between">
                                                                            <div className="flex items-center space-x-2">
                                                                                <div className="avatar h-7 w-7">
                                                                                    <img className="rounded-full" src="../assets/images/avatar/avatar-18.jpg" alt="avatar" />
                                                                                </div>
                                                                                <div>
                                                                                    <p className="text-xs font-medium line-clamp-1">
                                                                                        Alfredo E .
                                                                                    </p>
                                                                                    <p className="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300">
                                                                                        4 min read
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex">
                                                                                <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                                                                                    </svg>
                                                                                </button>
                                                                                <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                                                                    </svg>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <img src="../assets/images/object/object-1.jpg" className="h-20 w-20 rounded-lg object-cover object-center" alt="avatar" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3 px-3">
                                                            <h2 className="text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                                                                Settings
                                                            </h2>
                                                            <div className="mt-2 flex flex-col space-y-2">
                                                                <label className="inline-flex items-center space-x-2">
                                                                    <input onClick={() => setDarkMode(!darkMode)} className="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white" defaultChecked={darkMode && "defaultChecked"} type="checkbox" />
                                                                    <span>Dark Mode</span>
                                                                </label>
                                                                <label className="inline-flex items-center space-x-2">
                                                                    <input onClick={() => setMono(!mono)} className="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white" defaultChecked={mono && "defaultChecked"} type="checkbox" />
                                                                    <span>Monochrome Mode</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3 px-3">
                                                            <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                                                                <div className="flex items-center justify-between">
                                                                    <p>
                                                                        <span className="font-medium text-slate-600 dark:text-navy-100">35GB</span>
                                                                        of 1TB
                                                                    </p>
                                                                    <Link to="/dashboard" className="text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">
                                                                        Upgrade
                                                                    </Link>
                                                                </div>

                                                                <div className="progress mt-2 h-2 bg-slate-150 dark:bg-navy-500">
                                                                    <div className="w-7/12 rounded-full bg-info"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>}
                                                {tab === "projects" &&
                                                    <div className="pt-1 px-2">
                                                        <div className="grid grid-cols-2 gap-3">
                                                            <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                                                                <div className="flex justify-between space-x-1">
                                                                    <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                                                                        14
                                                                    </p>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="h-5 w-5 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-xs+">Pending</p>
                                                            </div>
                                                            <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                                                                <div className="flex justify-between">
                                                                    <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                                                                        36
                                                                    </p>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-xs+">Completed</p>
                                                            </div>
                                                            <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                                                                <div className="flex justify-between">
                                                                    <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                                                                        143
                                                                    </p>

                                                                    <i className="fa fa-spinner text-base text-warning" aria-hidden="true"></i>
                                                                </div>
                                                                <p className="mt-1 text-xs+">In Progress</p>
                                                            </div>
                                                            <div className="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
                                                                <div className="flex justify-between">
                                                                    <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                                                                        279
                                                                    </p>

                                                                    <i className="fa-solid fa-list-check text-base text-info"></i>
                                                                </div>
                                                                <p className="mt-1 text-xs+">Total</p>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4 rounded-lg border border-slate-150 p-3 dark:border-navy-600">
                                                            <div className="flex items-center space-x-3">
                                                                <img className="h-10 w-10 rounded-lg object-cover object-center" src="../assets/images/illustrations/lms-ui.svg" alt="avatar" />
                                                                <div>
                                                                    <p className="font-medium leading-snug text-slate-700 dark:text-navy-100">
                                                                        LMS App Design
                                                                    </p>
                                                                    <p className="text-xs text-slate-400 dark:text-navy-300">
                                                                        Updated at 7 Sep
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="mt-4">
                                                                <div className="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                                                                    <div className="w-4/12 rounded-full bg-primary dark:bg-accent"></div>
                                                                </div>
                                                                <p className="mt-2 text-right text-xs+ font-medium text-primary dark:text-accent-light">
                                                                    25%
                                                                </p>
                                                            </div>

                                                            <div className="mt-3 flex items-center justify-between space-x-2">
                                                                <div className="flex -space-x-3">
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-16.jpg" alt="avatar" />
                                                                    </div>
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                                                                            jd
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-20.jpg" alt="avatar" />
                                                                    </div>
                                                                </div>
                                                                <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4 rounded-lg border border-slate-150 p-3 dark:border-navy-600">
                                                            <div className="flex items-center space-x-3">
                                                                <img className="h-10 w-10 rounded-lg object-cover object-center" src="../assets/images/illustrations/store-ui.svg" alt="avatar" />
                                                                <div>
                                                                    <p className="font-medium leading-snug text-slate-700 dark:text-navy-100">
                                                                        Store Dashboard
                                                                    </p>
                                                                    <p className="text-xs text-slate-400 dark:text-navy-300">
                                                                        Updated at 11 Sep
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="mt-4">
                                                                <div className="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                                                                    <div className="w-6/12 rounded-full bg-primary dark:bg-accent"></div>
                                                                </div>
                                                                <p className="mt-2 text-right text-xs+ font-medium text-primary dark:text-accent-light">
                                                                    49%
                                                                </p>
                                                            </div>

                                                            <div className="mt-3 flex items-center justify-between space-x-2">
                                                                <div className="flex -space-x-3">
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-17.jpg" alt="avatar" />
                                                                    </div>
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <div className="is-initial rounded-full bg-warning text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                                                                            dv
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-19.jpg" alt="avatar" />
                                                                    </div>
                                                                </div>
                                                                <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4 rounded-lg border border-slate-150 p-3 dark:border-navy-600">
                                                            <div className="flex items-center space-x-3">
                                                                <img className="h-10 w-10 rounded-lg object-cover object-center" src="../assets/images/illustrations/chat-ui.svg" alt="avatar" />
                                                                <div>
                                                                    <p className="font-medium leading-snug text-slate-700 dark:text-navy-100">
                                                                        Chat Mobile App
                                                                    </p>
                                                                    <p className="text-xs text-slate-400 dark:text-navy-300">
                                                                        Updated at 19 Sep
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="mt-4">
                                                                <div className="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                                                                    <div className="w-2/12 rounded-full bg-primary dark:bg-accent"></div>
                                                                </div>
                                                                <p className="mt-2 text-right text-xs+ font-medium text-primary dark:text-accent-light">
                                                                    13%
                                                                </p>
                                                            </div>

                                                            <div className="mt-3 flex items-center justify-between space-x-2">
                                                                <div className="flex -space-x-3">
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-5.jpg" alt="avatar" />
                                                                    </div>
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <div className="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                                                                            gt
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-11.jpg" alt="avatar" />
                                                                    </div>
                                                                </div>
                                                                <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4 rounded-lg border border-slate-150 p-3 dark:border-navy-600">
                                                            <div className="flex items-center space-x-3">
                                                                <img className="h-10 w-10 rounded-lg object-cover object-center" src="../assets/images/illustrations/nft.svg" alt="avatar" />
                                                                <div>
                                                                    <p className="font-medium leading-snug text-slate-700 dark:text-navy-100">
                                                                        NFT Marketplace App
                                                                    </p>
                                                                    <p className="text-xs text-slate-400 dark:text-navy-300">
                                                                        Updated at 5 Sep
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="mt-4">
                                                                <div className="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                                                                    <div className="w-9/12 rounded-full bg-primary dark:bg-accent"></div>
                                                                </div>
                                                                <p className="mt-2 text-right text-xs+ font-medium text-primary dark:text-accent-light">
                                                                    78%
                                                                </p>
                                                            </div>

                                                            <div className="mt-3 flex items-center justify-between space-x-2">
                                                                <div className="flex -space-x-3">
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-8.jpg" alt="avatar" />
                                                                    </div>
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <div className="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                                                                            jd
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar h-7 w-7 hover:z-10">
                                                                        <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-12.jpg" alt="avatar" />
                                                                    </div>
                                                                </div>
                                                                <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                {tab === "time" &&
                                                    <div className="pt-1 px-2">
                                                        <div className="mx-3 flex flex-col items-center rounded-lg bg-slate-100 py-3 px-8 dark:bg-navy-600">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary dark:text-secondary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                            </svg>

                                                            <p className="mt-2 text-xs">Today</p>

                                                            <p className="text-lg font-medium text-slate-700 dark:text-navy-100">
                                                                6hr 22m
                                                            </p>

                                                            <div className="progress mt-3 h-2 bg-secondary/15 dark:bg-secondary-light/25">
                                                                <div className="is-active relative w-8/12 overflow-hidden rounded-full bg-secondary dark:bg-secondary-light"></div>
                                                            </div>

                                                            <button className="btn mt-5 space-x-2 rounded-full border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 dark:text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                                                                </svg>
                                                                <span> Download Report</span>
                                                            </button>
                                                        </div>

                                                        <ol className="timeline line-space mt-5 px-4 [--size:1.5rem]">
                                                            <li className="timeline-item">
                                                                <div className="timeline-item-point rounded-full border border-current bg-white text-secondary dark:bg-navy-700 dark:text-secondary-light">
                                                                    <i className="fa fa-user-edit text-tiny" aria-hidden="true"></i>
                                                                </div>
                                                                <div className="timeline-item-content flex-1 pl-4">
                                                                    <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                                                                        <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                                                                            User Photo Changed
                                                                        </p>
                                                                        <span className="text-xs text-slate-400 dark:text-navy-300">12 minute ago</span>
                                                                    </div>
                                                                    <p className="py-1">John Doe changed his avatar photo</p>
                                                                    <div className="avatar mt-2 h-20 w-20">
                                                                        <img className="mask is-squircle" src="../assets/images/avatar/avatar-19.jpg" alt="avatar" />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="timeline-item">
                                                                <div className="timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700 dark:text-accent">
                                                                    <i className="fa-solid fa-image text-tiny"></i>
                                                                </div>
                                                                <div className="timeline-item-content flex-1 pl-4">
                                                                    <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                                                                        <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                                                                            Images Added
                                                                        </p>
                                                                        <span className="text-xs text-slate-400 dark:text-navy-300">1 hour ago</span>
                                                                    </div>
                                                                    <p className="py-1">Mores Clarke added new image gallery</p>
                                                                    <div className="mt-4 grid grid-cols-3 gap-3">
                                                                        <img className="rounded-lg" src="../assets/images/object/object-1.jpg" alt="avatar" />
                                                                        <img className="rounded-lg" src="../assets/images/object/object-2.jpg" alt="avatar" />
                                                                        <img className="rounded-lg" src="../assets/images/object/object-3.jpg" alt="avatar" />
                                                                        <img className="rounded-lg" src="../assets/images/object/object-4.jpg" alt="avatar" />
                                                                        <img className="rounded-lg" src="../assets/images/object/object-5.jpg" alt="avatar" />
                                                                        <img className="rounded-lg" src="../assets/images/object/object-6.jpg" alt="avatar" />
                                                                    </div>
                                                                    <div className="mt-4">
                                                                        <span className="font-medium text-slate-600 dark:text-navy-100">
                                                                            Category:
                                                                        </span>

                                                                        <Link to="/dashboard" className="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent">
                                                                            #Tag
                                                                        </Link>

                                                                        <Link to="/dashboard" className="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent">
                                                                            #Category
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="timeline-item">
                                                                <div className="timeline-item-point rounded-full border border-current bg-white text-success dark:bg-navy-700">
                                                                    <i className="fa fa-leaf text-tiny" aria-hidden="true"></i>
                                                                </div>
                                                                <div className="timeline-item-content flex-1 pl-4">
                                                                    <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                                                                        <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                                                                            Design Completed
                                                                        </p>
                                                                        <span className="text-xs text-slate-400 dark:text-navy-300">3 hours ago</span>
                                                                    </div>
                                                                    <p className="py-1">
                                                                        Robert Nolan completed the design of the CRM application
                                                                    </p>
                                                                    <Link to="/dashboard" className="inline-flex items-center space-x-1 pt-2 text-slate-600 transition-colors hover:text-primary dark:text-navy-100 dark:hover:text-accent">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                                        </svg>
                                                                        <span>File_final.fig</span>
                                                                    </Link>
                                                                    <div className="pt-2">
                                                                        <Link to="/dashboard" className="tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25">
                                                                            UI/UX
                                                                        </Link>

                                                                        <Link to="/dashboard" className="tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
                                                                            CRM
                                                                        </Link>

                                                                        <Link to="/dashboard" className="tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25">
                                                                            Dashboard
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="timeline-item">
                                                                <div className="timeline-item-point rounded-full border border-current bg-white text-warning dark:bg-navy-700">
                                                                    <i className="fa fa-project-diagram text-tiny" aria-hidden="true"></i>
                                                                </div>
                                                                <div className="timeline-item-content flex-1 pl-4">
                                                                    <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                                                                        <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                                                                            ER Diagram
                                                                        </p>
                                                                        <span className="text-xs text-slate-400 dark:text-navy-300">a day ago</span>
                                                                    </div>
                                                                    <p className="py-1">Team completed the ER diagram app</p>
                                                                    <div>
                                                                        <p className="text-xs text-slate-400 dark:text-navy-300">
                                                                            Members:
                                                                        </p>
                                                                        <div className="mt-2 flex justify-between">
                                                                            <div className="flex flex-wrap -space-x-2">
                                                                                <div className="avatar h-7 w-7 hover:z-10">
                                                                                    <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-16.jpg" alt="avatar" />
                                                                                </div>

                                                                                <div className="avatar h-7 w-7 hover:z-10">
                                                                                    <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                                                                                        jd
                                                                                    </div>
                                                                                </div>

                                                                                <div className="avatar h-7 w-7 hover:z-10">
                                                                                    <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-20.jpg" alt="avatar" />
                                                                                </div>

                                                                                <div className="avatar h-7 w-7 hover:z-10">
                                                                                    <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-8.jpg" alt="avatar" />
                                                                                </div>

                                                                                <div className="avatar h-7 w-7 hover:z-10">
                                                                                    <img className="rounded-full ring ring-white dark:ring-navy-700" src="../assets/images/avatar/avatar-5.jpg" alt="avatar" />
                                                                                </div>
                                                                            </div>
                                                                            <button className="btn h-7 w-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="timeline-item">
                                                                <div className="timeline-item-point rounded-full border border-current bg-white text-error dark:bg-navy-700">
                                                                    <i className="fa fa-history text-tiny" aria-hidden="true"></i>
                                                                </div>
                                                                <div className="timeline-item-content flex-1 pl-4">
                                                                    <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                                                                        <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                                                                            Weekly Report
                                                                        </p>
                                                                        <span className="text-xs text-slate-400 dark:text-navy-300">a day ago</span>
                                                                    </div>
                                                                    <p className="py-1">The weekly report was uploaded</p>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                }
                                                <div className="h-18"></div>
                                            </div>
                                            <div className="pointer-events-none absolute bottom-4 flex w-full justify-center">
                                                <div className="pointer-events-auto mx-auto flex space-x-1 rounded-full border border-slate-150 bg-white px-4 py-0.5 shadow-lg dark:border-navy-700 dark:bg-navy-900">
                                                    <button className="btn h-9 rounded-full py-0 px-4 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25 text-primary dark:text-accent" onClick={() => handleTab("home")}>
                                                        {tab === "home" ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                                            </svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                                            </svg>}
                                                    </button>
                                                    <button className="btn h-9 rounded-full py-0 px-4 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25" onClick={() => handleTab("projects")}>
                                                        {tab === "projects" ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                            </svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                                            </svg>}
                                                    </button>
                                                    <button className="btn h-9 rounded-full py-0 px-4 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25" onClick={() => handleTab("time")}>
                                                        {tab === "time" ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                                            </svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                            </svg>}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </div>
                            </div>
                        </div>
                    </Transition>

                </Dialog>
            </Transition.Root>
        </>
    )
}
