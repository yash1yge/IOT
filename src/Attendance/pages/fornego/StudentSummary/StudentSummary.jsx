import { Dialog, Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const StudentSummary = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="col-span-12 lg:col-span-12 mt-6">
                <div className="card">
                    <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                        <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> Students Summary</h1>
                        <div className="flex justify-center space-x-2">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <label className="block">
                                    <select className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900" fdprocessedid="7x2ka">
                                        <option>2020-2021</option>
                                    </select>
                                </label>
                                <label className="block">
                                    <select className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900" fdprocessedid="yv24td">
                                        <option>All Classes</option>
                                        <option>STD I</option>
                                        <option>STD II</option>
                                        <option>STD III</option>
                                    </select>
                                </label>
                                <label className="block">
                                    <select className="form-select mt-1.5 w-20 rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900" fdprocessedid="43ylbn">
                                        <option>All</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                    </select>
                                    <button style={{ padding: "0.7rem 1rem" }} className="ml-[5px] btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus" fdprocessedid="arygmo"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    <button style={{ padding: "0.7rem 1rem" }} className="ml-[5px] btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus" fdprocessedid="qytnmw"><i className="fa fa-refresh" aria-hidden="true"></i></button>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <Menu.Button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25" >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M3 5.109C3 4.496 3.47 4 4.05 4h16.79c.58 0 1.049.496 1.049 1.109 0 .612-.47 1.108-1.05 1.108H4.05C3.47 6.217 3 5.721 3 5.11zM5.798 12.5c0-.612.47-1.109 1.05-1.109H18.04c.58 0 1.05.497 1.05 1.109s-.47 1.109-1.05 1.109H6.848c-.58 0-1.05-.497-1.05-1.109zM9.646 18.783c-.58 0-1.05.496-1.05 1.108 0 .613.47 1.109 1.05 1.109h5.597c.58 0 1.05-.496 1.05-1.109 0-.612-.47-1.108-1.05-1.108H9.646z"></path>
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
                                            <Menu.Items className="fixed right-[80px] z-10 w-[125px] mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-navy-500">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        <Link to="/studentsummary" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>
                                                            Export PDF
                                                        </Link>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <Link to="/studentsummary" className='flex h-8 items-center px-3 pr-3 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>
                                                            Export Excel
                                                        </Link>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <Link to="/studentsummary" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>
                                                            Print File
                                                        </Link>
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </label>
                            </div>
                        </div>
                    </div>


                    <div className="p-1 sm:p-1">
                        <div className="is-scrollbar-hidden min-w-full overflow-x-auto overflow-visible" x-data="pages.tables.initExample1">
                            <table className="is-hoverable w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                                            <i className="fa fa-th" aria-hidden="true"></i>
                                        </th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Student&nbsp;Name </th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Admission&nbsp;No</th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Class</th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Batch</th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Roll</th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Classes</th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Present</th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Absent</th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Avg(%)</th>
                                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                                        <td className="whitespace-nowrap px-3 py-2 sm:px-3">
                                            <div className="avatar h-8 w-8">
                                                <img className="mask is-squircle text-center" src="../assets/images/avatar/avatar-16.jpg" alt="avatar" />
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">Neelam Shakya</td>
                                        <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
                                            <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">FA125445</div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">XII</td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">A</td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">55</td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                            <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">110</div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                            <div className="badge rounded-full bg-success text-white">90</div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                            <div className="badge rounded-full bg-error text-white">20</div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">80</td>
                                        <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
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
                                                    <Menu.Items className="fixed right-[110px] z-10 w-[189px] mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-navy-500">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                <Link to="/studentsummary" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100s'>
                                                                    Edit
                                                                </Link>
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Link to="/studentsummary" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                    DeActivate
                                                                </Link>
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Link to="/studentsummary" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                    Attendance Summary
                                                                </Link>
                                                            </Menu.Item>
                                                            <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                                            <Menu.Item>
                                                                <button onClick={() => setOpen(true)} className='w-full flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                    Student Profile
                                                                </button>
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </td>
                                    </tr>
                                    <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                                        <td className="whitespace-nowrap px-3 py-2 sm:px-3">
                                            <div className="avatar h-8 w-8">
                                                <img className="mask is-squircle text-center" src="../assets/images/avatar/avatar-16.jpg" alt="avatar" />
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">Rakesh Kumar</td>
                                        <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
                                            <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-success-light">FA125445</div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">XII</td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">A</td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">55</td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                            <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">110</div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                            <div className="badge rounded-full bg-success text-white">90</div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                            <div className="badge rounded-full bg-error text-white">20</div>
                                        </td>
                                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">80</td>
                                        <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
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
                                                                <Link to="/studentsummary" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100s'>
                                                                    Edit
                                                                </Link>
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Link to="/studentsummary" className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                    DeActivate
                                                                </Link>
                                                            </Menu.Item>
                                                            <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                                            <Menu.Item>
                                                                <button onClick={() => setOpen(true)} className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                                                    Student Profile
                                                                </button>
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
                                <div className="flex items-center space-x-2">
                                    <span>Show</span>
                                    <label className="block">
                                        <select className="form-select rounded-full border border-slate-300 bg-white px-2 py-1 pr-6 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent" fdprocessedid="4p6i4r">
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
                                        <Link to="/studentsummary" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/studentsummary" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">1</Link>
                                    </li>
                                    <li>
                                        <Link to="/studentsummary" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">2</Link>
                                    </li>
                                    <li>
                                        <Link to="/studentsummary" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">3</Link>
                                    </li>
                                    <li>
                                        <Link to="/studentsummary" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">4</Link>
                                    </li>
                                    <li>
                                        <Link to="/studentsummary" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">5</Link>
                                    </li>
                                    <li>
                                        <Link to="/studentsummary" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div>
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
                                        <h3 className="text-base font-medium text-slate-700 dark:text-navy-100"> Student Profile</h3>
                                        <button onClick={() => setOpen(false)} className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-4 py-4 sm:px-5">
                                        <div className="space-y-4">
                                            <div className="flex justify-between">
                                                <div className="avatar h-24 w-24">
                                                    <img className="mask is-squircle" src="../assets/images/avatar/avatar-5.jpg" alt="avatar" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium tracking-wide text-slate-700 dark:text-navy-100"> Attendance Overview </h3>
                                                    <div className="mt-4 flex h-1.5 space-x-1">
                                                        <div className="w-10/12 rounded-full bg-primary dark:bg-accent"> </div>
                                                        <div className="w-7/12 rounded-full bg-success"></div>
                                                        <div className="w-4/12 rounded-full bg-error"></div>
                                                        <div className="w-4/12 rounded-full bg-secondary"></div>
                                                    </div>
                                                    <div className="inline-space mt-3 flex flex-wrap">
                                                        <div className="badge space-x-2.5 p-0 text-primary dark:text-accent-light">
                                                            <div className="h-2 w-2 rounded-full bg-current">
                                                            </div>
                                                            <span>Total Class</span>
                                                        </div>
                                                        <div className="badge space-x-2.5 p-0 text-success">
                                                            <div className="h-2 w-2 rounded-full bg-current">
                                                            </div>
                                                            <span>Present</span>
                                                        </div>
                                                        <div className="badge space-x-2.5 p-0 text-error">
                                                            <div className="h-2 w-2 rounded-full bg-current">
                                                            </div>
                                                            <span>Absent</span>
                                                        </div>
                                                        <div className="badge space-x-2.5 p-0 text-secondary">
                                                            <div className="h-2 w-2 rounded-full bg-current">
                                                            </div>
                                                            <span>Holiday</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium space-x-1 text-slate-700 dark:text-navy-100">
                                                    Rakesh Kumar
                                                    <div className="badge rounded-full ml-1 bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">STD XII-B</div>
                                                    <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">15487875525</div>
                                                    <div style={{ float: "right", padding: "5px 11px 6px 10px" }} className="badge rounded-full bg-success text-white mt-2">Active</div>
                                                </h3>
                                            </div>
                                            <div className="space-y-3 text-xs+">
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Admission No</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">DPS255112</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Enrollment Date</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">10-10-2020</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Fathers Name</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Late Ramchandra Prasad</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Date Of Birth</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">25th Oct 1990</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Gender</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Male</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Roll Number</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">150 </p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Email Address</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Rkumarmspl@gmail.com</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Mobile Number</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">9031010725</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">WhatsApp Number</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">9031010725</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Country</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">India</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">State</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Karnataka</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">City</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Banglore</p>
                                                </div>
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

export default StudentSummary