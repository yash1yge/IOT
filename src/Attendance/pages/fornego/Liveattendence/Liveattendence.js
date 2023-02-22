import React from 'react'
import { Link } from 'react-router-dom'

const Liveattendence = ({ mono, setMono, darkMode, setDarkMode, header, setHeader }) => {
    return (
        <>
            <div className="flex items-center space-x-4 py-2 lg:py-3"></div>
            <div className='grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-center'>
                <div className='col-span-12 lg:col-span-6'>
                    <div className='card p-4 xl:p-5'>
                        <div className='flex flex-col items-center space-y-3 text-center'>
                            <div className='h-80 w-80  p-0.5'>
                                <img src="/assets/images/avatar/avatar-8.jpg" className='h-full w-full mask is-squircle border-2 border-white object-cover object-center' alt="avatar" />
                            </div>
                            <div>
                                <h1 className='text-4xl font-semibold text-slate-700 dark:text-navy-100'> Neelam Shakya </h1>
                            </div>
                        </div>
                        <ul className='mt-6 space-y-1.5 font-inter font-medium'>
                            <li>
                                <button className='flex items-center gap-4 w-full space-x-5 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent'>
                                    <div className='badge space-x-2 rounded-full bg-error text-white'>
                                        <span className='badge rounded-full bg-success text-white'>class</span>
                                        <span className='font-semibold object-center text-[16px] pr-[10px]'>STD VII - A</span>
                                    </div>
                                    <div className='badge space-x-2 rounded-full bg-error text-white float-right'>
                                        <span className='badge rounded-full bg-success text-white text-[12px]'>Card ID</span>
                                        <span className='font-semibold object-center text-[16px] pr-[10px]'>154488885555</span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-12 pt-75 lg:col-span-3'>
                    <div className='card p-4 xl:p-5'>
                        <div className='flex flex-col items-center space-y-3 text-center'>
                            <div className='h-40 w-40 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-0.5'>
                                <img src="/assets/images/avatar/avatar-5.jpg" className='h-full w-full rounded-full border-2 border-white object-cover object-center dark:border-navy-700' alt="avatar" />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold text-slate-700 dark:text-navy-100'> Rakesh Kumar </h3>
                            </div>
                        </div>
                        <div className='mt-6 space-y-1.5 font-inter font-medium'>
                            <div>
                                <button className='flex w-full items-center space-x-4 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent'>
                                    <div className='badge rounded-full bg-success text-white text-[12px]'> STD VIII - A</div>
                                    <div className="badge rounded-full bg-success text-white text-[12px]"> 125468554544</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 pt-75 lg:col-span-3'>
                    <div className='card p-4 xl:p-5'>
                        <div className='flex flex-col items-center space-y-3 text-center'>
                            <div className='h-40 w-40 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-0.5'>
                                <img src="/assets/images/avatar/avatar-10.jpg" className='h-full w-full rounded-full border-2 border-white object-cover object-center dark:border-navy-700' alt="avatar" />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold text-slate-700 dark:text-navy-100'> Baban Kumar </h3>
                            </div>
                        </div>
                        <div className='mt-6 space-y-1.5 font-inter font-medium'>
                            <div>
                                <Link to="/liveattendence" className='flex items-center space-x-4 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent'>
                                    <div className='badge rounded-full bg-success text-white'> STD VIII - A</div>
                                    <div className="badge rounded-full bg-success text-white"> 125468554544</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Liveattendence