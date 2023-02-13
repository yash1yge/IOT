import React, { useState } from 'react'
import Flatpickr from "react-flatpickr";
import { Log, Notification, Password, ProfileIcon } from '../../../../Resources/AllSvg'
import { Link } from 'react-router-dom'


const Profile = () => {
    const [date, setDate] = useState("")
    const [date2, setDate2] = useState("")

    return (
        <>
            <div>
                <div className="flex items-center space-x-4 py-2 lg:py-3"></div>
                <div className='grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6'>
                    <div className="col-span-12 lg:col-span-4">
                        <div className='shadow-xl bg-white dark:bg-navy-700 p-4 sm:p-5 rounded-[.5rem]'>
                            <div className='flex flex-col items-center space-y-3 text-center'>
                                <div className='h-40 w-40 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-0.5'>
                                    <img src='/assets/images/avatar/avatar-20.jpg' alt="avatar" className='h-full w-full rounded-full border-2 border-white object-cover object-center dark:border-navy-700' />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-semibold text-slate-700 dark:text-navy-100'>Rakesh Kumar</h2>
                                    <h3 className='text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100'>826039852<span className="badge rounded-full bg-success text-white mt-2 pt-1 pr-[11px] pb-[5px] pl-[10px]">Active</span></h3>
                                </div>
                                <ul className='mt-6 space-y-1.5 font-inter font-medium w-full'>
                                    <li>
                                        <Link to="/profile" className='flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent'>
                                            <ProfileIcon />
                                            <span>Student Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/profile" className='group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                            <Notification />
                                            <span>Change Profile Image</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/profile" className='group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                            <Password />
                                            <span>Change Password</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/profile" className='group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'>
                                            <Log />
                                            <span>Log Summury</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-8'>
                        <div className='shadow-xl bg-white rounded-[.5rem] dark:bg-navy-700'>
                            <div className='flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5'>
                                <h1 className='text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100'>Manage Students</h1>
                                <div className='flex justify-center space-x-2'>
                                    <button className='btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90'>
                                        Cancel
                                    </button>
                                    <button className='btn min-w-[7rem] rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus'>
                                        Save Profile
                                    </button>
                                </div>
                            </div>
                            <div className='p-4 sm:p-5'>
                                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                                    <div className='block'>
                                        <span>
                                            RFID Card No
                                        </span>
                                        <div className='relative mt-1.5 flex'>
                                            <input type="text" style={{ fontSize: "15px", fontWeight: "bold", backgroundColor: "khaki" }} placeholder='Enter RFID Card Number' defaultValue="826039852" className='form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent text-[15px] font-bold' />
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <span>
                                            Admission Unique No
                                        </span>
                                        <div className='relative mt-1.5 flex'>
                                            <input type="text" placeholder='Enter Admission No' className='form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent' />
                                        </div>

                                    </div>
                                    <div className='block'>
                                        <span>Enrollment Date</span>
                                        <Flatpickr
                                            value={date}
                                            placeholder="Choose Date..."
                                            onChange={([date]) => setDate(date)}
                                            className='relative mt-1.5 flex form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent flatpickr-input'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 py-5 lg:py-6'>
                                    <div className='block'>
                                        <span>Full Name</span>
                                        <div className='relative mt-1.5 flex'>
                                            <input type="text" placeholder='Enter RFID Card Number' className='form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent text-[15px] font-bold' />
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <span>Enrollment Date</span>
                                        <Flatpickr
                                            value={date2}
                                            placeholder="Choose Date..."
                                            onChange={([date2]) => setDate2(date2)}
                                            className='relative mt-1.5 flex form-input peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent flatpickr-input'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                    <div className='block'>
                                        <span>Fathers Name</span>
                                        <div className='relative mt-1.5 flex'>
                                            <input type="text" placeholder='Enter Fathers Name' className='form-input w-80 peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent' />
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <span>Gender</span>
                                        <div className='relative mt-1.5 flex'>
                                            <label className='inline-flex items-center space-x-1 mt-4'>
                                                <input type="radio" defaultChecked name="outline_squircle" className='form-radio  is-outline h-5 w-5 rounded-md border-slate-400/70 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:before:bg-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200' />
                                                <p>Male</p>
                                            </label>
                                            <label className='inline-flex items-center space-x-1 ml-4 mt-4'>
                                                <input type="radio" name="outline_squircle" className='form-radio  is-outline h-5 w-5 rounded-md border-slate-400/70 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:before:bg-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200' />
                                                <p>Female</p>
                                            </label>
                                            <label className='inline-flex items-center space-x-1 ml-4 mt-4'>
                                                <input type="radio" name="outline_squircle" className='form-radio  is-outline h-5 w-5 rounded-md border-slate-400/70 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:before:bg-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200' />
                                                <p>Others</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mt-5 gap-4 sm:grid-cols-4'>
                                    <div className='block'>
                                        <span className='relative flex'>Class</span>
                                        <select className='form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900'>
                                            <option>STD I</option>
                                            <option>STD II</option>
                                            <option>STD II</option>
                                            <option>STD IV</option>
                                            <option>STD V</option>
                                        </select>
                                    </div>
                                    <div className='block'>
                                        <span className='relative flex'>Class</span>
                                        <select className='form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900'>
                                            <option>STD I</option>
                                            <option>STD II</option>
                                            <option>STD II</option>
                                        </select>
                                    </div>
                                    <div className='block'>
                                        <span className='relative flex'>Roll No</span>
                                        <input type="text" className='form-input w-20 peer mt-1.5 rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent' />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 py-5 lg:py-6'>
                                    <div className='bolck'>
                                        <span>Email Address</span>
                                        <div className='relative mt-1.5 flex'>
                                            <input type="text" placeholder='Enter RFID Card Number' defaultValue="Rkumarmspl@gmail.com" className='form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent' />
                                        </div>
                                    </div>
                                    <div className='bolck'>
                                        <span>SMS Number</span>
                                        <div className='relative mt-1.5 flex'>
                                            <input className='form-input peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
                                                type="text" defaultValue="9031010725" placeholder='Enter Admission No' />
                                        </div>
                                    </div>
                                    <div className='bolck'>
                                        <span>WhatsApp Number</span>
                                        <div className='relative mt-1.5 flex'>
                                            <input className='form-input peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
                                                type="text" defaultValue="9031010725" placeholder='Enter Admission No' />
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 gap-4 sm:grid-cols-4'>
                                    <div className='block'>
                                        <span className='relative mt-1.5 flex'>Country</span>
                                        <select className='form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900'>
                                            <option>India</option>
                                            <option>Russia</option>
                                            <option>America</option>
                                            <option>United Kindom</option>
                                        </select>
                                    </div>
                                    <div className='block'>
                                        <span className='relative mt-1.5 flex'>State</span>
                                        <select className='form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900'>
                                            <option>India</option>
                                            <option>Russia</option>
                                            <option>America</option>
                                            <option>United Kindom</option>
                                        </select>
                                    </div>
                                    <div className='block'>
                                        <span className='relative mt-1.5 flex'>City</span>
                                        <select className='form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900'>
                                            <option>Banglore</option>
                                            <option>Jamsedhpur</option>
                                            <option>Agra</option>
                                            <option>Patna</option>
                                        </select>
                                    </div>
                                    <div className='block'>
                                        <span className='relative mt-1.5 flex'>Active Status</span>
                                        <select className='form-select mt-1.5 w-20 rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900'>
                                            <option>Active</option>
                                            <option>Deactive</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='my-7 h-px bg-slate-200 dark:bg-navy-500'></div>
                                <div>
                                    <p className="text-xs+ text-slate-400 dark:text-navy-300">
                                        Powered By
                                    </p>
                                    <h3 className="text-base font-medium text-slate-600 dark:text-navy-100">
                                        Fornego Innovations Lab
                                    </h3>
                                    <div className='flex items-center justify-between pt-4'>
                                        <div className='flex items-center space-x-4'>
                                            <div className='h-12 w-12'>
                                                <img src="/assets/images/Logos/google.svg" alt="avatar" />
                                            </div>
                                            <p className='font-medium'>
                                                Sign In with Google
                                            </p>
                                        </div>
                                        <button className='btn h-8 rounded-full border border-slate-200 px-3 text-xs+ font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90'>Connect</button>
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

export default Profile