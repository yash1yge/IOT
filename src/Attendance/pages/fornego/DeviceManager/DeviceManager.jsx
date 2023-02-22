import { Dialog, Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { FilePond } from 'react-filepond'
import { Link } from 'react-router-dom'
import "filepond/dist/filepond.min.css";

const DeviceManager = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [files, setFiles] = useState([]);

    return (
        <>
            <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-6">
                <div className="col-span-12 lg:col-span-12">
                    <div className="card">
                        <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                            <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> Device Manager </h1>
                            <div className="flex justify-center space-x-2">
                                <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"> Cancel </button>
                                <button onClick={() => setOpen(true)} className="btn min-w-[7rem] rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus"> Add New Device</button>
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
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> NIC </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Device Name </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Serial No </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Direction </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Device Mode </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Device IP </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Device Status </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Signal </th>
                                            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <img style={{ width: "35px", textAlign: "center" }} src="../assets/images/icons/dotgreen.gif" alt="avatar" />
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="avatar flex h-10 w-10">
                                                    <img className="mask is-squircle" src="../assets/images/icons/wifi-signal.png" alt="avatar" />
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Fornego HF Reader</td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">FN763545356</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="badge rounded-full bg-info/10 text-info dark:bg-info/15">IN</div>
                                                <div className="badge rounded-full bg-info/10 text-info dark:bg-info/15">OUT</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Attendance</td>
                                            <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">198.168.2.100</td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="badge rounded-full bg-success text-white">Active</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
                                                    <div className="w-full rounded-full bg-success"></div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <Menu as="div" className="relative inline-block text-left">
                                                    <Menu.Button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                        </svg>
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="fixed right-[110px] z-10 w-[145px] mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-navy-500">
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100s'>
                                                                        Edit
                                                                    </Link>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                        Delete
                                                                    </Link>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <button onClick={() => setOpen2(true)} className='w-full flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                        Reboot
                                                                    </button>
                                                                </Menu.Item>
                                                                <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                                                <Menu.Item>
                                                                    <button onClick={() => setOpen3(true)} to="/devicemanager" className='w-full flex h-8 items-center px-3 pr-3 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                        Change Setting
                                                                    </button>
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </td>
                                        </tr>
                                        <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <img style={{ width: "35px", textAlign: "center" }} src="../assets/images/icons/dotred.gif" alt="avatar" />
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="avatar flex h-10 w-10">
                                                    <img className="mask is-squircle" src="../assets/images/icons/4g.png" alt="avatar" />
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Fornego HF Reader</td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">FN763545357</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="badge rounded-full bg-info/10 text-info dark:bg-info/15">OUT</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Enrollment</td>
                                            <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">198.168.2.101</td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="badge rounded-full bg-error text-white">DeActive</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
                                                    <div className="w-1/12 rounded-full bg-secondary"></div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <Menu as="div" className="relative inline-block text-left">
                                                    <Menu.Button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                        </svg>
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="fixed right-[110px] z-10 w-[145px] mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-navy-500">
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100s'>
                                                                        Action
                                                                    </Link>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                        Another Action
                                                                    </Link>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                        Something Else
                                                                    </Link>
                                                                </Menu.Item>
                                                                <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                        Separated Link
                                                                    </Link>
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </td>
                                        </tr>
                                        <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <img style={{ width: "35px", textAlign: "center" }} src="../assets/images/icons/dotgreen.gif" alt="avatar" />
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="avatar flex h-10 w-10">
                                                    <img className="mask is-squircle" src="../assets/images/icons/ethernet.png" alt="avatar" />
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Fornego HF Reader</td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">FN763545357</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="badge rounded-full bg-info/10 text-info dark:bg-info/15">OUT</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Attendance</td>
                                            <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">198.168.2.101</td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="badge rounded-full bg-success text-white">Active</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
                                                    <div className="w-full rounded-full bg-success"></div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                                                <Menu as="div" className="relative inline-block text-left">
                                                    <Menu.Button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                        </svg>
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="fixed right-[110px] z-10 w-[145px] mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-navy-500">
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>
                                                                        Action
                                                                    </Link>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 '>
                                                                        Another Action
                                                                    </Link>
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>
                                                                        Something Else
                                                                    </Link>
                                                                </Menu.Item>
                                                                <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                                                <Menu.Item>
                                                                    <Link to="/devicemanager" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 '>
                                                                        Separated Link
                                                                    </Link>
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="h-12 w-12">
                                        <img src="../assets/images/logos/google.svg" alt="logo" />
                                    </div>
                                    <p className="font-medium line-clamp-1"> Sign In with Google </p>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-2xl dark:bg-navy-700">
                                    <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
                                        <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">Add or Manage New Device</h3>
                                        <button onClick={() => setOpen(false)} className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="space-y-4 mb-4 p-4 sm:p-5">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <label className="block">
                                                <span>Device Name</span>
                                                <input className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" value="Fornego HF Reader" placeholder="Device Name" type="text" />
                                            </label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <label className="block">
                                                    <span>Serial No</span>
                                                    <input style={{ backgroundColor: "khaki" }} className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" value="FN763545356" placeholder="Device Serial No" type="text" />
                                                </label>
                                                <label className="block">
                                                    <span className="relative flex">Device Direction</span>
                                                    <select className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900">
                                                        <option>IN OUT</option>
                                                        <option>IN</option>
                                                        <option>OUT</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <label className="block">
                                                <span>Device Location</span>
                                                <input className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" value="Campus Gate No 5" placeholder="Device Name" type="text" />
                                            </label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <label className="block">
                                                    <span className="relative flex">Device Mode</span>
                                                    <select className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900">
                                                        <option>Enrollment</option>
                                                        <option>Attendance</option>
                                                    </select>
                                                </label>
                                                <label className="block">
                                                    <span className="relative flex">Device Status</span>
                                                    <select className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900">
                                                        <option>Active</option>
                                                        <option>DeActive</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <span>Images</span>
                                            <div className="mt-1.5">
                                                <FilePond
                                                    files={files}
                                                    allowReorder={true}
                                                    allowMultiple={true}
                                                    onupdatefiles={setFiles}
                                                    labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 space-y-4">
                                            <div className="space-x-2 text-right">
                                                <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"> Cancel </button>
                                                <button className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"> Save Device </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Transition>
            </Dialog>
            <Dialog as="div" className="relative z-10" onClose={() => setOpen2(false)} open>
                <Transition appear={true} show={open2}>
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
                                <Dialog.Panel className="relative text-center pt-10 pb-4 dark:bg-navy-700 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 w-full max-w-md">
                                    <div className="w-full px-4">
                                        <div style={{ width: "100%" }} className="progress h-5 bg-slate-150 dark:bg-navy-500">
                                            <div className="is-active relative w-9/12 overflow-hidden rounded-full bg-dark"></div>
                                        </div>
                                        <div className="mt-4 px-4 sm:px-12">
                                            <h3 className="text-lg text-slate-800 dark:text-navy-50">
                                                <i className="fa warning text-warning fa-warning" aria-hidden="true"></i>&nbsp;Reboot Warning
                                            </h3>
                                            <p className="mt-2 mb-2 text-slate-500 dark:text-navy-200 ">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                                                sunt vel vero.
                                            </p>
                                            <div className='space-x-1'>
                                                <button className="btn mt-4 rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"> Reboot now </button>
                                                <button className="btn mt-4 rounded-full bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"> Cancel Reboot </button>
                                            </div>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Transition>
            </Dialog>
            <Dialog as="div" className="relative z-10" onClose={() => setOpen3(false)} open>
                <Transition appear={true} show={open3}>
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
                                <Dialog.Panel className="relative text-left dark:bg-navy-700 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 w-full max-w-lg">
                                    <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
                                        <h3 className="text-base font-medium text-slate-700 dark:text-navy-100"> Update Device Frameware</h3>
                                        <button onClick={() => setOpen3(false)} className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-4 py-4 sm:px-5">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                            <h3 className="text-lg text-slate-800 dark:text-navy-50">
                                                <i className="fa warning text-warning fa-warning" aria-hidden="true"></i>&nbsp;Strict Warning
                                            </h3>
                                            <p>This Changes may Shutdown your Device and Related Application Function.</p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <label className="block">
                                                    <span>WiFi SSID</span>
                                                    <input className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" value="IOT" type="text" />
                                                </label>
                                                <label className="block">
                                                    <span>Password</span>
                                                    <input className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" value="Anushhka@123" type="password" />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 pt-4 gap-4 sm:grid-cols-1">
                                            <div className="grid grid-cols-2 gap-4">
                                                <label className="block">
                                                    <span>API Token</span>
                                                    <input className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" value="d25cr685222z298h" type="text" />
                                                </label>
                                                <label className="block">
                                                    <span>Communication</span>
                                                    <select className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900" fdprocessedid="zynyzq">
                                                        <option>https</option>
                                                        <option>http</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mt-4 space-y-4">
                                            <div className="space-x-3 text-right">
                                                <button onClick={() => setOpen3(false)} className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"> Cancel </button>
                                                <button onClick={() => setOpen3(false)} className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"> Apply </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Transition >
            </Dialog >
        </>
    )
}

export default DeviceManager