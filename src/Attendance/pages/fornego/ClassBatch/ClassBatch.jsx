import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import React from 'react'

const ClassBatch = () => {
    return (
        <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-6">
            <div className="col-span-12 lg:col-span-12">
                <div className="card">
                    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-2">
                        <div className="col-span-12 lg:col-span-8">
                            <div className="card">
                                <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                                    <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> Class &amp; Batch Settings </h1>
                                    <div className="flex justify-center space-x-2">
                                        <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90" fdprocessedid="2ll6sp"> Cancel </button>
                                        <button className="btn min-w-[7rem] rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus" fdprocessedid="ptnl6"> Save Setting </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                                    <div className="col-span-12 lg:col-span-7">
                                        <div className="p-4 sm:p-5">
                                            <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> Manage Class </h1>
                                            <div className="grid grid-cols-3 mt-3 gap-4 sm:grid-cols-3 py-2 lg:py-2">
                                                <label className="block">
                                                    <span>Enter Class Name</span>
                                                    <span className="relative mt-1.5 flex">
                                                        <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="STD I" type="text" fdprocessedid="fzivnk" />
                                                    </span>
                                                </label>
                                                <label className="block">
                                                    <span>Class Status</span>
                                                    <span className="relative mt-1.5 flex">
                                                        <select className="form-select w-40 rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent" fdprocessedid="3h8rfn">
                                                            <option>Active</option>
                                                            <option>DeActive</option>
                                                        </select>
                                                    </span>
                                                </label>
                                                <label className="block">
                                                    <span className="relative mt-1.5 flex">
                                                        <button className="btn min-w-[7rem] mt-5  bg-info font-medium text-white hover:bg-success-focus focus:bg-success-focus" fdprocessedid="ptnl6"> Save Class</button>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 py-2 lg:py-3">
                                                <div className="is-scrollbar-hidden min-w-full overflow-x-auto" x-data="pages.tables.initExample1">
                                                    <table className="is-hoverable w-full text-left">
                                                        <thead>
                                                            <tr>
                                                                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Class&nbsp;Name </th>
                                                                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Assign Batches</th>
                                                                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Status</th>
                                                                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Action </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                                                                <td className="whitespace-nowrap px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">STD I</td>
                                                                <td className="whitespace-nowrap space-x-1 px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                                                    <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">A</div>
                                                                    <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">B</div>
                                                                    <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">C</div>
                                                                </td>
                                                                <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                                                    <div className="badge rounded-full bg-success text-white">Active</div>
                                                                </td>
                                                                <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
                                                                    <Menu placement="bottom-end">
                                                                        <MenuHandler>
                                                                            <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25" >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </MenuHandler>
                                                                        <MenuList className="min-w-[80px] py-1.5 px-0">
                                                                            <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>Edit</MenuItem>
                                                                            <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>Delete</MenuItem>
                                                                        </MenuList>
                                                                    </Menu>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-5">
                                        <div className="p-4 sm:p-5">
                                            <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> Manage Batch</h1>
                                            <div className="grid grid-cols-3 mt-3 gap-4 sm:grid-cols-3 py-2 lg:py-2">
                                                <label className="block">
                                                    <span>Select Class</span>
                                                    <span className="relative mt-1.5 flex">
                                                        <select className="form-select w-40 rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent" fdprocessedid="3h8rfn">
                                                            <option>STD I</option>
                                                            <option>STD II</option>
                                                        </select>
                                                    </span>
                                                </label>
                                                <label className="block">
                                                    <span>Enter Batch Name</span>
                                                    <span className="relative mt-1.5 flex">
                                                        <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="A" type="text" />
                                                    </span>
                                                </label>
                                                <label className="block">
                                                    <span className="relative mt-1.5 flex">
                                                        <button className="btn min-w-[7rem] mt-5  bg-info font-medium text-white hover:bg-success-focus focus:bg-success-focus"> Save&nbsp;Batch</button>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 py-2 lg:py-3">
                                                <div className="is-scrollbar-hidden min-w-full overflow-x-auto" x-data="pages.tables.initExample1">
                                                    <table className="is-hoverable w-full text-left">
                                                        <thead>
                                                            <tr>
                                                                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Batch&nbsp;Name </th>
                                                                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Action </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                                                                <td className="whitespace-nowrap px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">A</td>
                                                                <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
                                                                    <Menu placement="bottom-end">
                                                                        <MenuHandler>
                                                                            <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25" >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </MenuHandler>
                                                                        <MenuList className="min-w-[80px] py-1.5 px-0">
                                                                            <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>Edit</MenuItem>
                                                                            <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>Delete</MenuItem>
                                                                        </MenuList>
                                                                    </Menu>
                                                                </td>
                                                            </tr>
                                                            <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                                                                <td className="whitespace-nowrap px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">B</td>
                                                                <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
                                                                    <div x-data="usePopper({placement:'bottom-end',offset:4})" className="inline-flex">
                                                                        <Menu placement="bottom-end">
                                                                            <MenuHandler>
                                                                                <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25" >
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                                                    </svg>
                                                                                </button>
                                                                            </MenuHandler>
                                                                            <MenuList className="min-w-[80px] py-1.5 px-0">
                                                                                <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>Edit</MenuItem>
                                                                                <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>Delete</MenuItem>
                                                                            </MenuList>
                                                                        </Menu>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassBatch