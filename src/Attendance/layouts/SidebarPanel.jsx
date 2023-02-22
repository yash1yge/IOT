import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import { Link, useLocation } from 'react-router-dom'
import { LeftArrowIcon } from '../../Resources/AllSvg'
// Liveattendance, Communication, Devidemanager, Layer , Manageuser, Setting, Studentattendance, Summury, User


function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

const SidebarPanel = ({ header, setHeader }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const location = useLocation()
    const loc = location.pathname.includes('fornego');
    return (
        <>
            {loc === false &&
                <div className={`sidebar-panel p-[3px] shadow-[0_0_#0000,0_0_#000,0_0_#0000,0_3px_10px_0_rgba(48,46,56,6%)] fixed top-0 ${header ? "left-[-160px] transition-all" : "left-[320px]"} transition-all w-[240px] h-[100%] z-[8] bg-white dark:bg-navy-750`}>
                    <div className='flex h-10 w-full items-center justify-between pl-[13px] pr-1'>
                        <p className="text-base tracking-wider text-slate-800 dark:text-navy-100">
                            Attendance Dashboard
                        </p>
                        <button onClick={() => setHeader(true)} className="cursor-pointer relative z-[13] xl:hidden block">
                            <LeftArrowIcon />
                        </button>
                    </div>
                    <div className="my-3 mx-[13px] mt-4 h-px bg-slate-200 dark:bg-navy-500"></div>
                    <div className="add_scroll px-[13px]">
                        <div className=''>
                            <ul className='flex flex-1 flex-col font-inter'>
                                <li>
                                    <Link to="/profile" onClick={() => setHeader(!header)} className="flex items-center gap-1 py-2 text-[14px] outline-none transition-colors duration-300 ease-in-out dark:text-accent-ligh font-regular">
                                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                                        Manage Student
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/studentattendance" onClick={() => setHeader(!header)} className="flex items-center py-2 gap-1 text-[14px] outline-none transition-colors duration-300 ease-in-out font-regular dark:text-accent-light">
                                        <i className="fa fa-fingerprint " aria-hidden="true"></i>
                                        Student Attendance Report
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/liveattendence" onClick={() => setHeader(!header)} className="flex items-center py-2 gap-1 text-[14px] outline-none transition-colors duration-300 ease-in-out font-regular dark:text-accent-light">
                                        <i className="fa fa-tv" aria-hidden="true"></i>
                                        Live Attendance
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/studentsummary" onClick={() => setHeader(!header)} className="flex items-center py-2 gap-1 text-[14px] outline-none transition-colors duration-300 ease-in-out font-regular dark:text-accent-light">
                                        <i className="fa fa-id-card" aria-hidden="true"></i>
                                        Student Summary
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/communication" onClick={() => setHeader(!header)} className="flex items-center py-2 gap-1 text-[14px] outline-none transition-colors duration-300 ease-in-out font-regular dark:text-accent-light">
                                        <i className="fa fa-commenting text-[#64748b]" aria-hidden="true"></i>
                                        Communication Manager
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/manageuser" onClick={() => setHeader(!header)} className="flex items-center py-2 gap-1 text-[14px] outline-none transition-colors duration-300 ease-in-out font-regular dark:text-accent-light">
                                        <i className="fa fa-address-book" aria-hidden="true"></i>
                                        Manage User
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/log-reports" onClick={() => setHeader(!header)} className="flex items-center py-2 gap-1 text-[14px] outline-none transition-colors duration-300 ease-in-out font-regular dark:text-accent-light">
                                        <i className="fa fa-layer-group" aria-hidden="true"></i>
                                        User Log Report
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/devicemanager" onClick={() => setHeader(!header)} className="flex items-center py-2 gap-1 text-[14px] outline-none transition-colors duration-300 ease-in-out font-regular dark:text-accent-light">
                                        <i className="fa fa-microchip" aria-hidden="true"></i>
                                        Device Manager
                                    </Link>
                                </li>
                                <li className='accordion-sidebar'>
                                    <div className={open && "open"}>
                                        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                                            <AccordionHeader onClick={() => handleOpen(1)} className="font-regular py-1 border-b-0">
                                                <p className='flex items-center gap-1 text-[14px] outline-none transition-colors duration-300 ease-in-out font-normal dark:text-accent-light'>
                                                    <i className="fa fa-gear" aria-hidden="true"></i>Configuration Setting
                                                </p>
                                            </AccordionHeader>
                                            <AccordionBody>
                                                <ul className='px-2'>
                                                    <li className='cursor-pointer hover:ml-2 transition-all'>
                                                        <div className='flex items-center space-x-2'>
                                                            <div className="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                                                            <Link to="/schoolsetting" onClick={() => setHeader(!header)} className='text-[#475569] text-[13px] font-normal'>School Setings</Link>
                                                        </div>
                                                    </li>
                                                    <li className='cursor-pointer hover:ml-2 transition-all mt-3'>
                                                        <div className='flex items-center space-x-2'>
                                                            <div className="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                                                            <Link to="/classbatch" onClick={() => setHeader(!header)} className='text-[#475569] text-[13px] font-normal'>Class & Batch</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </AccordionBody>
                                        </Accordion>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SidebarPanel