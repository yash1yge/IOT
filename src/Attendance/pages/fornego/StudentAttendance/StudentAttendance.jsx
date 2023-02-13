import React, { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import Flatpickr from "react-flatpickr";

const StudentAttendance = () => {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState("")
    const [date2, setDate2] = useState("")

    return (
        <>
            <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-6">
                <div className="col-span-12 lg:col-span-12">
                    <div className="card">
                        <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                            <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> Student Attendance Report</h1>
                            <div className="flex justify-center space-x-2">
                                <label className="relative flex">
                                    <Flatpickr
                                        value={date}
                                        placeholder="Choose datetime..."
                                        onChange={([date]) => setDate(date)}
                                        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent flatpickr-input"
                                    />
                                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                    </span>
                                </label>
                                <label className="relative flex">
                                    <Flatpickr
                                        value={date2}
                                        placeholder="Choose datetime..."
                                        onChange={([date2]) => setDate2(date2)}
                                        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent flatpickr-input"
                                    />
                                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                    </span>
                                </label>
                                <div>
                                    <button style={{ padding: "0.5rem 1rem" }} className="h-full btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                                <div>
                                    <button style={{ padding: "0.5rem 1rem" }} className="h-full btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus"><i className="fa fa-refresh" aria-hidden="true"></i></button>
                                </div>
                                <div>
                                    <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-9 sm:w-9" fdprocessedid="4mkqevj">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M3 5.109C3 4.496 3.47 4 4.05 4h16.79c.58 0 1.049.496 1.049 1.109 0 .612-.47 1.108-1.05 1.108H4.05C3.47 6.217 3 5.721 3 5.11zM5.798 12.5c0-.612.47-1.109 1.05-1.109H18.04c.58 0 1.05.497 1.05 1.109s-.47 1.109-1.05 1.109H6.848c-.58 0-1.05-.497-1.05-1.109zM9.646 18.783c-.58 0-1.05.496-1.05 1.108 0 .613.47 1.109 1.05 1.109h5.597c.58 0 1.05-.496 1.05-1.109 0-.612-.47-1.108-1.05-1.108H9.646z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 sm:p-1">
                            <div className="is-scrollbar-hidden min-w-full overflow-x-auto" x-data="pages.tables.initExample1">
                                <table className="is-hoverable w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                                                <i className="fa fa-th" aria-hidden="true"></i>
                                            </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Student Name </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Admission No </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> RFID Card No </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Class </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Batch </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Roll No </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> In Time </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Out Time </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Spent Time </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-y border-b-slate-200 dark:border-b-navy-500">
                                            <td className="whitespace-nowrap px-3 py-2 sm:px-3">
                                                <div className="avatar h-8 w-8">
                                                    <img className="mask is-squircle text-center" src="../assets/images/avatar/avatar-16.jpg" alt="avatar" />
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">Neelam Shakya</td>
                                            <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
                                                <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">FA125445</div>
                                            </td>
                                            <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">15875214</td>
                                            <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">XII</td>
                                            <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">A</td>
                                            <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">55</td>
                                            <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">09:30</td>
                                            <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">03:30</td>
                                            <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">06:00</td>
                                            <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
                                                <div className="inline-flex">
                                                    <Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <Menu.Button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                                </svg>
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 z-10 w-[188px] mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div className="py-1">
                                                                    <Menu.Item>
                                                                        <button onClick={() => setOpen(true)}
                                                                            className='text-gray-700 block px-4 py-2 text-sm'
                                                                        >
                                                                            Attendance Overview
                                                                        </button>
                                                                    </Menu.Item>
                                                                </div>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
                                    <div className="flex items-center space-x-2">
                                        <span>Show</span>
                                        <label className="block">
                                            <select className="form-select rounded-full border border-slate-300 bg-white px-2 py-1 pr-6 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                                                <option>50</option>
                                                <option>100</option>
                                                <option>200</option>
                                            </select>
                                        </label>
                                        <span>entries</span>
                                    </div>
                                    <div>1 - 10 of 10 entries</div>
                                    <ol className="pagination space-x-1.5">
                                        <li>
                                            <Link to="/studentattendance" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/studentattendance" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">1</Link>
                                        </li>
                                        <li>
                                            <Link to="/studentattendance" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">2</Link>
                                        </li>
                                        <li>
                                            <Link to="/studentattendance" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">3</Link>
                                        </li>
                                        <li>
                                            <Link to="/studentattendance" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">4</Link>
                                        </li>
                                        <li>
                                            <Link to="/studentattendance" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">5</Link>
                                        </li>
                                        <li>
                                            <Link to="/studentattendance" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="h-12 w-12">
                                        <img src="../assets/images/logos/google.svg" alt="logo" />
                                    </div>
                                    <p className="font-medium line-clamp-1">Fornego Innovations Lab </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)} open>
                <Transition appear={true} show={open}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-900/60 transition-opacity duration-300" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
                                        <h3 className="text-base font-medium text-slate-700 dark:text-navy-100"> Student Attendance Overview</h3>
                                        <button onClick={() => setOpen(false)} className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-4 py-4 sm:px-5">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                            <div className="is-scrollbar-hidden min-w-full overflow-x-auto rounded-lg border border-slate-200 dark:border-navy-500">
                                                <table className="w-full text-left">
                                                    <thead>
                                                        <tr>
                                                            <th className="whitespace-nowrap border border-t-0 border-l-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5"> Date</th>
                                                            <th className="whitespace-nowrap border border-t-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5"> In Time </th>
                                                            <th className="whitespace-nowrap border border-t-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5"> Out Time </th>
                                                            <th className="whitespace-nowrap border border-t-0 border-r-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5">Spent (Hrs)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"> 10-10-2022 </td>
                                                            <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"> 10:15 </td>
                                                            <td className="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"> 02:15</td>
                                                            <td className="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5">04:00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Transition>
            </Dialog>
        </>
    )
}

export default StudentAttendance