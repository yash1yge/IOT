import React from 'react'
import { Link } from 'react-router-dom'

const ManageUser = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-6">
        <div className="col-span-12 lg:col-span-4">
          <div className="card p-4 sm:p-5">
            <div className="flex flex-col items-center space-y-3 text-center">
              <div className="h-40 w-40 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-0.5">
                <img className="h-full w-full rounded-full border-2 border-white object-cover object-center dark:border-navy-700" src="../assets/images/avatar/avatar-20.jpg" alt="Avatar" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
                  Rakesh Kumar
                </h2>
                <h3 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                  EMP1254
                  <span style={{ padding: "4px 11px 5px 10px" }} className="badge rounded-full bg-success text-white mt-2">Active</span>
                </h3>
              </div>
            </div>
            <ul className="mt-6 space-y-1.5 font-inter font-medium">
              <li>
                <Link to="/manageuser" className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Users Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/manageuser" className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>

                  <span>Change Profile Image</span>
                </Link>
              </li>
              <li>
                <Link to="/manageuser" className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span>Change Password</span>
                </Link>
              </li>
              <li>
                <Link to="/manageuser" className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                  <span>Log Summary</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="card">
            <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
              <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                Manage System Users
              </h1>
              <div className="flex justify-center space-x-2">
                <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                  Cancel
                </button>
                <button className="btn min-w-[7rem] rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus">
                  Save Users
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-1 tp-4 gap-4 sm:grid-cols-3">
                <label className="block">
                  <span>User ID</span>
                  <span className="relative mt-1.5 flex">
                    <input style={{ fontSize: "15px", fontWeight: "bold", backgroundColor: "khaki" }} className="form-input peer w-40  rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="EMP1254" placeholder="Enter RFID Card Number" type="text" />
                  </span>
                </label>
                <label className="block">
                  <span>Password</span>
                  <span className="relative mt-1.5 flex">
                    <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="SA2502521" placeholder="Enter Admission No" type="password" />
                  </span>
                </label>
                <label className="block">
                  <span>Joining Date</span>
                  <input x-init="$el._x_flatpickr = flatpickr($el)" className="relative mt-1.5 flex form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent flatpickr-input" placeholder="Choose date..." type="text" readOnly="readOnly" />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-5 lg:py-6">
                <label className="block">
                  <span>Full Name</span>
                  <span className="relative mt-1.5 flex">
                    <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="826039852" placeholder="Enter RFID Card Number" type="text" />
                  </span>
                </label>
                <label className="block">
                  <span>Date of Birth</span>
                  <input x-init="$el._x_flatpickr = flatpickr($el)" className="relative mt-1.5 flex form-input peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent flatpickr-input" placeholder="Choose date..." type="text" readOnly="readOnly" />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <label className="block">
                  <span>Fathers Name</span>
                  <span className="relative mt-1.5 flex">
                    <input className="form-input w-80 peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Enter Fathers Name" type="text" />
                  </span>
                </label>
                <label className="block">
                  <span>Gender</span>
                  <span className="relative mt-1.5 flex">
                    <label className="inline-flex items-center space-x-1 mt-4">
                      <input defaultChecked className="form-radio  is-outline h-5 w-5 rounded-md border-slate-400/70 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:before:bg-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200" name="outline_squircle" type="radio" /><p>Male</p>
                    </label>
                    <label className="inline-flex items-center space-x-1 ml-4 mt-4">
                      <input className="form-radio is-outline h-5 w-5 rounded-md border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent" name="outline_squircle" type="radio" /><p>Female</p>
                    </label>
                    <label className="inline-flex items-center space-x-1 ml-4 mt-4">
                      <input className="form-radio is-outline h-5 w-5 rounded-md border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent" name="outline_squircle" type="radio" /><p>Others</p>
                    </label>
                    <label className="inline-flex items-center space-x-2">
                    </label></span>
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-5 lg:py-6">
                <label className="block">
                  <span>Email Address</span>
                  <span className="relative mt-1.5 flex">
                    <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="Rkumarmspl@gmail.com" placeholder="Enter RFID Card Number" type="text" />
                  </span>
                </label>
                <label className="block">
                  <span>SMS Number</span>
                  <span className="relative mt-1.5 flex">
                    <input className="form-input peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="9031010725" placeholder="Enter Admission No" type="text" />
                  </span>
                </label>
                <label className="block">
                  <span>WhatsApp Number</span>
                  <span className="relative mt-1.5 flex">
                    <input className="form-input peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="7870253025" placeholder="Enter Admission No" type="text" />
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                <label className="block">
                  <span className="relative mt-1.5 flex">Country</span>
                  <select className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900">
                    <option>India</option>
                    <option>Russia</option>
                    <option>America</option>
                    <option>United Kindom</option>
                  </select>
                </label>
                <label className="block">
                  <span className="relative mt-1.5 flex">State</span>
                  <select className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900">
                    <option>Karnatka</option>
                    <option>Jharkhand</option>
                    <option>Bihar</option>
                    <option>Uttar Pradesh</option>
                  </select>
                </label>
                <label className="block">
                  <span className="relative mt-1.5 flex">City</span>
                  <select className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900">
                    <option>Banglore</option>
                    <option>Jamshedpur</option>
                    <option>Agra</option>
                    <option>Patna</option>
                  </select>
                </label>
                <label className="block">
                  <span className="relative mt-1.5 flex">Active Status</span>
                  <select className="form-select mt-1.5 w-20 rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900">
                    <option>Active</option>
                    <option>DeActive</option>
                  </select>
                </label>
                {/* <!-- <label className="block">
                  <span className="relative mt-1.5 flex">Pin Code</span>
                  <input className="form-input mt-1.5 w-20 peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" type="text">
                </label> --> */}
              </div>
              <div className="grid grid-cols-2 mt-4 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="relative mt-1.5 flex">Full Postal Address</span>
                  <label className="block">
                    <textarea rows="4" placeholder=" Enter Text" className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"></textarea>
                  </label>
                </label>
                <label className="block">
                  <span className="relative mt-1.5 flex">Special Instructions (Employee Note)</span>
                  <label className="block">
                    <textarea rows="4" placeholder=" Enter Text" className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"></textarea>
                  </label>
                </label>
              </div>
              <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
              <div>
                <p className="text-xs+ text-slate-400 dark:text-navy-300">
                  Powered By
                </p>
                <h3 className="text-base font-medium text-slate-600 dark:text-navy-100">
                  Fornego Innovations Lab
                </h3>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12">
                      <img src="../assets/images/logos/google.svg" alt="logo" />
                    </div>
                    <p className="font-medium line-clamp-1">
                      Sign In with Google
                    </p>
                  </div>
                  <button className="btn h-8 rounded-full border border-slate-200 px-3 text-xs+ font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageUser