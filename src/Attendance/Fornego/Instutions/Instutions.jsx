import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'

const Instutions = () => {
  const [input, setInput] = useState(false)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  return (
    <>
      <div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-slate-700 line-clamp-1 dark:text-navy-50">Instutions Managements</h2>
            <div className="flex">
              <div className="flex items-center">
                {input &&
                  <label className="block">
                    <input className="form-input w-full bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200" placeholder="Search here..." type="text" />
                  </label>}
                <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" onClick={() => setInput(!input)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="inline-flex">
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                      </svg>
                    </button>
                  </MenuHandler>
                  <MenuList className='min-w-[154px] px-0 py-1.5 dark:border-navy-500 dark:bg-navy-700'>
                    <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Action</MenuItem>
                    <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Another Action</MenuItem>
                    <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Something Else</MenuItem>
                    <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                    <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Separated Link</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-4 sm:gap-5 lg:gap-6">
          <div className="col-span-12 lg:col-span-12">
            <div className="card">
              <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> Institution Summary</h1>
                <div className="flex justify-center space-x-2">
                  <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"> Cancel </button>
                  <div>
                    <button className="btn min-w-[7rem] rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus" onClick={() => setOpen(true)}>Create New Instution</button>
                  </div>
                </div >
              </div >
              <div className="p-1 sm:p-1">
                <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
                  <table className="is-hoverable w-full text-left">
                    <thead>
                      <tr>
                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                          <i className="fa fa-th" aria-hidden="true"></i>
                        </th>
                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Institution Name</th>
                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Institution ID</th>
                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Location</th>
                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Webiste</th>
                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Email</th>
                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Phone</th>
                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Status</th>
                        <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                        <td className="whitespace-nowrap px-3 py-2 sm:px-3">
                          <div className="avatar h-8 w-8">
                            <img className="mask is-squircle text-center" src="../../assets/images/logos/schlogo.png" alt="avatar" />
                          </div>
                        </td>
                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">DAV Public School</td>
                        <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
                          <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">FA125445</div>
                        </td>
                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">Jamshedpur</td>
                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">www.davschool.com</td>
                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">info@davschool.com</td>
                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">9031010725</td>
                        <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                          <div className="badge rounded-full bg-warning text-white">Suspended</div>
                        </td>
                        <td className="whitespace-nowrap text-center px-3 py-2 sm:px-3">
                          <div className="inline-flex">
                            <Menu placement="bottom-end">
                              <MenuHandler>
                                <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                  </svg>
                                </button>
                              </MenuHandler>
                              <MenuList className='min-w-[154px] px-0 py-1.5 dark:border-navy-500 dark:bg-navy-700'>
                                <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>Edit</MenuItem>
                                <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                <MenuItem onClick={() => setOpen2(true)} className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 rounded-none dark:hover:bg-navy-600 dark:hover:text-navy-100'>School Profile</MenuItem>
                              </MenuList>
                            </Menu>
                          </div >
                        </td >
                      </tr >
                    </tbody >
                  </table >
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
                        <Link to="/" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">1</Link>
                      </li>
                      <li>
                        <Link to="/" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">2</Link>
                      </li>
                      <li>
                        <Link to="/" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">3</Link>
                      </li>
                      <li>
                        <Link to="/" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">4</Link>
                      </li>
                      <li>
                        <Link to="/" className="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">5</Link>
                      </li>
                      <li>
                        <Link to="/" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div >
                <div></div>
              </div >
            </div >
          </div >
        </div >
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

          <div className="fixed inset-0 z-10 overflow-y-auto px-4 py-6 sm:px-5">
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-2lg dark:bg-navy-700">
                  <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
                    <h3 className="text-base font-medium text-slate-700 dark:text-navy-100"> Student Profile</h3>
                    <button className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20" onClick={() => setOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-4 py-4 sm:px-5">
                    <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                      <div className="col-span-12 lg:col-span-12">
                        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-2">
                          <div className="col-span-12 lg:col-span-8">
                            <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                              <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> School Profile Settings </h1>
                              <div className="flex justify-center space-x-2">
                                <button className="btn min-w-[7rem] rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus"> Save Institution</button>
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
                                          <input className="form-input text-lg w-full mt-1 peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="DAV Public School" type="text" />
                                        </div>
                                      </div>
                                    </label>
                                    <label className="block">
                                      <div className="mt-2 pl-4">
                                        <span> School Code</span>
                                        <div className="flex mt-2 items-center space-x-1">
                                          <p className="text-2xl mt-2 font-semibold text-slate-700 dark:text-navy-100">FGO5654</p>
                                        </div>
                                      </div>
                                    </label>
                                  </div>
                                  <div className="grid grid-cols-4 mt-3 gap-4 sm:grid-cols-4 py-2 lg:py-2">
                                    <label className="block">
                                      <span>Country</span>
                                      <span className="relative mt-1.5 flex">
                                        <select className="form-select w-40 rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent" fdprocessedid="3h8rfn">
                                          <option>India</option>
                                          <option>SriLanka</option>
                                        </select>
                                      </span>
                                    </label>
                                    <label className="block">
                                      <span>State</span>
                                      <span className="relative mt-1.5 flex">
                                        <select className="form-select w-40 rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent" fdprocessedid="3h8rfn">
                                          <option>Jharkhand</option>
                                          <option>Karnatka</option>
                                        </select>
                                      </span>
                                    </label>
                                    <label className="block">
                                      <span>City</span>
                                      <span className="relative mt-1.5 flex">
                                        <select className="form-select w-40 rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent" fdprocessedid="3h8rfn">
                                          <option>Bangaluru</option>
                                          <option>Jamshedpur</option>
                                        </select>
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
                                      <span>Remarks and Instructions (Internal Purpose)</span>
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
                                      <img className="h-full w-full border-white object-cover object-center dark:border-navy-700" src="../../assets/images/logos/schlogo.png" alt="Avatar" />
                                    </div>
                                  </div>
                                  <ul className="mt-6 space-y-1.5 font-inter font-medium">
                                    <li>
                                      <Link to="/" className="group  flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                        </svg>
                                        <span>Change Profile Image</span>
                                      </Link>
                                    </li>
                                  </ul>
                                  <div className="grid grid-cols-2 mt-3 gap-4 sm:grid-cols-2 py-2 lg:py-2">
                                    <label className="block">
                                      <span>Default Login ID</span>
                                      <span className="relative mt-1.5 flex">
                                        <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="info@fornego.com" type="text" />
                                      </span>
                                    </label>
                                    <label className="block">
                                      <span>Default Password</span>
                                      <span className="relative mt-1.5 flex">
                                        <input className="form-input w-full peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="password" type="text" />
                                      </span>
                                    </label>
                                  </div>
                                  <div className="grid grid-cols-3 mt-3 gap-4 sm:grid-cols-3 py-2 lg:py-2">
                                    <label className="block">
                                      <span>Status</span>
                                      <span className="relative mt-1.5 flex">
                                        <select className="form-select w-40 rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                                          <option>Active</option>
                                          <option>DeActive</option>
                                          <option>Suspended</option>
                                        </select>
                                      </span>
                                    </label>
                                    <label className="block">
                                      <span>Students Limit</span>
                                      <span className="relative mt-1.5 flex">
                                        <input className="form-input w-20 peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="500" type="text" />
                                      </span>
                                    </label>
                                    <label className="block">
                                      <span>Users Limit</span>
                                      <span className="relative mt-1.5 flex">
                                        <input className="form-input w-20 peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="05" type="text" />
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

          <div className="fixed inset-0 z-10 overflow-y-auto px-4 py-6 sm:px-5">
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg dark:bg-navy-700">
                  <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
                    <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">Student Profile</h3>
                    <button className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20" onClick={() => setOpen2(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-4 py-4 sm:px-5">
                    <div className="space-y-4">
                      <div className="flex justify-between pb-4">
                        <div className="avatar h-24 w-24">
                          <img className="mask is-squircle" src="../../assets/images/logos/schlogo.png" alt="avatar" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-slate-700 dark:text-navy-100">
                            <div className='space-x-2 flex gap-[5px]'>
                              <span style={{ padding: "0px 8px 0px 10px" }} className="text-lg badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">FNGO1245</span>
                              DAV Public Schools
                            </div>
                          </h3>
                          <div>
                            <div className="flex grow justify-between space-x-2 mt-4 mb-4">
                              <div>
                                <p className="text-xs+ text-slate-400 dark:text-navy-300">Total Student</p>
                                <p className="text-lg font-semibold text-slate-700 dark:text-navy-100">2530</p>
                              </div>
                              <div>
                                <p className="text-xs+ text-slate-400 dark:text-navy-300">Total Users</p>
                                <p className="text-lg font-semibold text-slate-700 dark:text-navy-100">60</p>
                              </div>
                              <div>
                                <p className="badge rounded-full bg-success text-white ">Active</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 text-xs+">
                      <div className="flex justify-between">
                        <p className="font-medium text-slate-700 dark:text-navy-100">Website</p>
                        <p className="font-medium text-slate-700 dark:text-navy-100">www.myschool.com</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-slate-700 dark:text-navy-100">Email ID</p>
                        <p className="font-medium text-slate-700 dark:text-navy-100">info@myschool.com</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-slate-700 dark:text-navy-100">Mobile No</p>
                        <p className="font-medium text-slate-700 dark:text-navy-100">9031010725</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-slate-700 dark:text-navy-100">Country</p>
                        <p className="font-medium text-slate-700 dark:text-navy-100">India</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-slate-700 dark:text-navy-100">State</p>
                        <p className="font-medium text-slate-700 dark:text-navy-100">Jharkhand</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-slate-700 dark:text-navy-100">City</p>
                        <p className="font-medium text-slate-700 dark:text-navy-100">Jamshedpur </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-slate-700 dark:text-navy-100">Pin Code</p>
                        <p className="font-medium text-slate-700 dark:text-navy-100">831013</p>
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

export default Instutions