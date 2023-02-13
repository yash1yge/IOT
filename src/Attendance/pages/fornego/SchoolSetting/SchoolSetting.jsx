import React from 'react'
import { Link } from 'react-router-dom'

const SchoolSetting = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-[24px]">
                <div className="col-span-12 lg:col-span-12">
                    <div className="card">
                        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-2">
                            <div className="col-span-12 lg:col-span-8">
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                                        <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> School Profile Settings </h1>
                                        <div className="flex justify-center space-x-2">
                                            <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90" fdprocessedid="2ll6sp"> Cancel </button>
                                            <button className="btn min-w-[7rem] rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus" fdprocessedid="ptnl6"> Update School Profile </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                                        <div className="col-span-12 lg:col-span-8">
                                            <div className="p-4 sm:p-5">
                                                <div className="grid grid-cols-2  gap-4 sm:grid-cols-2 py-2 lg:py-2">
                                                    <label className="block">
                                                        <div className="mt-3">
                                                            <span> School Name</span>
                                                            <div className="flex items-center space-x-1">
                                                                <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">DAV Public School</p>
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <label className="block">
                                                        <div className="mt-3">
                                                            <span> School Code</span>
                                                            <div className="flex items-center space-x-1">
                                                                <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">FGO5654</p>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="grid grid-cols-4 mt-3 gap-4 sm:grid-cols-4 py-2 lg:py-2">
                                                    <label className="block">
                                                        <span>Country</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="India" type="text" />
                                                        </span>
                                                    </label>
                                                    <label className="block">
                                                        <span>State</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="Karnatka" type="text" />
                                                        </span>
                                                    </label>
                                                    <label className="block">
                                                        <span>City</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="Bangluru" type="text" />
                                                        </span>
                                                    </label>
                                                    <label className="block">
                                                        <span>Pin Code</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <input className="form-input w-20 peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="831201" type="text" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="grid grid-cols-2 mt-3 gap-4 sm:grid-cols-2 py-2 lg:py-2">
                                                    <label className="block">
                                                        <span>School Address</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <textarea rows="4" placeholder=" Enter Text" className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"></textarea>
                                                        </span>
                                                    </label>
                                                    <label className="block">
                                                        <span>School Address</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <textarea rows="4" placeholder=" Enter Text" className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"></textarea>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="grid grid-cols-3 mt-3 gap-4 sm:grid-cols-3 py-2 lg:py-2">
                                                    <label className="block">
                                                        <span>Website</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="www.fornego.com" type="text" />
                                                        </span>
                                                    </label>
                                                    <label className="block">
                                                        <span>Email</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="info@fornego.com" type="text" />
                                                        </span>
                                                    </label>
                                                    <label className="block">
                                                        <span>Phone No</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="9031010725" type="text" />
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-4">
                                            <div className="p-4 sm:p-5">
                                                <div className="flex flex-col items-center space-y-3 text-center">
                                                    <div className="h-40 w-40 rounded-full from-sky-400 to-blue-600">
                                                        <img className="h-full w-full border-white object-cover object-center dark:border-navy-700" src="/assets/images/logos/schlogo.png" alt="school logo" />
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-1.5 font-inter font-medium">
                                                    <li>
                                                        <Link to="/schoolsetting" className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                                            </svg>

                                                            <span>Change Profile Image</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/schoolsetting" className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                                            </svg>
                                                            <span>Change Password</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/schoolsetting" className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                                            </svg>
                                                            <span>Log Summary</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SchoolSetting