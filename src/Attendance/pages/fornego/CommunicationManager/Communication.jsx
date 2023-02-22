import { Dialog, Transition } from '@headlessui/react';
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { Fragment, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Communication = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const modulesRef = {
        toolbar: [
            ["bold", "italic", "underline"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { header: "1" },
                {
                    'color': ['#F00', '#0F0', '#00F', '#000', '#FFF', 'color-picker']
                }
            ],
        ]
    };

    return (
        <>
            <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-6">
                <div className="col-span-12 lg:col-span-12">
                    <div className="card">
                        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-2">
                            <div className="col-span-12 lg:col-span-8">
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                                        <h1 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"> Notification Manager </h1>
                                        <div className="flex justify-center space-x-2">
                                            <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"> Cancel </button>
                                            <button className="btn min-w-[7rem] rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus"> Save Notification Setting </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                                        <div className="col-span-12 lg:col-span-12">
                                            <div className="p-4 sm:p-5">
                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 py-2 lg:py-2">
                                                    <label className="block">
                                                        <span>Select Installed Device</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <select className="form-select w-80 rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                                                                <option>Fornego Touch and Go FTGO</option>
                                                                <option>JH05AY-2365 FTGO</option>
                                                            </select>
                                                        </span>
                                                    </label>
                                                    <label className="block">

                                                    </label>
                                                    <label className="block">
                                                        <div className="mt-3">
                                                            <span> Device Location</span>
                                                            <div className="flex items-center space-x-1">
                                                                <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">University Main Gate</p>
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <label className="block">
                                                        <div className="mt-3">
                                                            <span>Device Status </span>
                                                            <div className="flex items-center space-x-1">
                                                                <p className="text-2xl text-success font-semibold text-slate-700 dark:text-navy-100">Active</p>
                                                            </div>
                                                        </div>
                                                    </label>

                                                </div>

                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-5 lg:py-6">
                                                    <label className="block">
                                                        <span>CheckIn Message</span>
                                                        <ReactQuill theme="snow" defaultValue={value} onChange={setValue} modules={modulesRef} placeholder="Enter Your CheckIn Message" />
                                                    </label>
                                                    <label className="block">
                                                        <span>CheckOut Message</span>
                                                        <ReactQuill theme="snow" defaultValue={value2} onChange={setValue2} modules={modulesRef} placeholder="Enter Your CheckIn Message" />
                                                    </label>
                                                </div>

                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 py-2 lg:py-2">
                                                    <label className="block">
                                                        <span>Notification Channels</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <label className="inline-flex items-center space-x-1 mt-4">
                                                                <input defaultChecked className="form-radio  is-outline h-5 w-5 rounded-md border-slate-400/70 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:before:bg-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200" name="outline_squircle" type="radio" /><p>SMS</p>
                                                            </label>
                                                            <label className="inline-flex items-center space-x-1 ml-4 mt-4">
                                                                <input className="form-radio is-outline h-5 w-5 rounded-md border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent" name="outline_squircle" type="radio" /><p>APP</p>
                                                            </label>
                                                            <label className="inline-flex items-center space-x-1 ml-4 mt-4">
                                                                <input className="form-radio is-outline h-5 w-5 rounded-md border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent" name="outline_squircle" type="radio" /><p>WhatsApp</p>
                                                            </label>
                                                            <label className="inline-flex items-center space-x-2">
                                                            </label></span>
                                                    </label>
                                                    <label className="block">
                                                        <span>Checkout active After (Min)</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <input className="form-input w-40 peer rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" defaultValue="30" type="text" />
                                                        </span>
                                                    </label>
                                                    <label className="block">
                                                        <span>Notification Status</span>
                                                        <span className="relative mt-1.5 flex">
                                                            <select className="form-select w-40 rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                                                                <option>Active</option>
                                                                <option>DeActive</option>
                                                            </select>
                                                        </span>
                                                    </label>
                                                </div>

                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 py-2 lg:py-3">
                                                    <div className="is-scrollbar-hidden min-w-full overflow-x-auto" x-data="pages.tables.initExample1">
                                                        <table className="is-hoverable w-full text-left">
                                                            <thead>
                                                                <tr>
                                                                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Device&nbsp;Name </th>
                                                                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Serial&nbsp;No</th>
                                                                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Location</th>
                                                                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Communication</th>
                                                                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Status</th>
                                                                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"> Action </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                                                                    <td className="whitespace-nowrap px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">Fornego FTGOX100</td>
                                                                    <td className="whitespace-nowrap px-3 py-2 sm:px-3">
                                                                        <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">FA125445</div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">University Campus Gate</td>
                                                                    <td className="whitespace-nowrap  px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                                                        <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">WhatsApp</div>
                                                                        <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">SMS</div>
                                                                        <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">App</div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap text-center px-2 py-2 font-medium text-slate-700 dark:text-navy-100 lg:px-3">
                                                                        <div className="badge rounded-full bg-error text-white">DeActive</div>
                                                                    </td>
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
                                                                                <MenuList className="min-w-[143px] py-1.5 px-0">
                                                                                    <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>Edit</MenuItem>
                                                                                    <MenuItem className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>Delete</MenuItem>
                                                                                    <MenuItem onClick={() => setOpen(true)} className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100'>Student Profile</MenuItem>
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
                                    </div >
                                </div >
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg">
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
                                            <div className="flex justify-between"> <div>
                                            </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-slate-700 dark:text-navy-100">
                                                    Fornego FTGOX100
                                                    <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">JH05AY2695 BUS</div>
                                                    <div className="badge rounded-full bg-success/10 text-secondary dark:bg-success-light/15 dark:text-secondary-light">15487875525</div>
                                                    <div style={{ float: "right", padding: "5px 11px 6px 10px" }} className="badge rounded-full bg-success text-white mt-2">Active</div>
                                                </h3>
                                            </div>
                                            <div className="space-y-3 text-xs+">
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Last Updated</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">10-10-2020</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Checkout active After (Min)</p>
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">30</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-medium text-slate-700 dark:text-navy-100">Notification Channels</p>
                                                    <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">WhatsApp</div>
                                                    <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">SMS</div>
                                                    <div className="badge rounded-full bg-success/10 text-success dark:bg-success-light/15 dark:text-info-light">App</div>
                                                </div>
                                                <div className="flex justify-between">
                                                </div>
                                            </div>
                                            <label className="block">
                                                <span className="relative mt-1.5 flex">CheckIn Messages</span>
                                                <label className="block">
                                                    <textarea rows="4" placeholder=" Enter Text" className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"></textarea>
                                                </label>
                                            </label>
                                            <label className="block">
                                                <span className="relative mt-1.5 flex">CheckOut Messages</span>
                                                <label className="block">
                                                    <textarea rows="4" placeholder=" Enter Text" className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"></textarea>
                                                </label>
                                            </label>
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

export default Communication