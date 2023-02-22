import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BoxIcon, ChartIcon, MenuIcon, SettingOutlineIcon, CheckIcon, DollarIcon, DownloadIcon, RefreshIcon, TimeIcon, TruckIcon, UserIcon } from '../../../../Resources/AllSvg'
import { Menu, MenuHandler, MenuList, Tooltip } from '@material-tailwind/react'
import ReportChart from './ReportChart'
import ColumnChart from './ColumnChart'

export const Dashboard = ({ header }) => {
  const [time, setTime] = useState('month')

  const handleSetTime = (renderPage) => {
    setTime(renderPage)
  }
  return (
    <>
      <div className="pb-8">
        <div className={`${header ? "px-[16px] md:px-[24px] xl:px-[64px]" : "px-[24px]"} py-[24px]`}>
          <div className='w-full'>
            <div className='grid grid-cols-12 gap-4 transition-all duration-[.25s] sm:gap-5 lg:gap-6'>
              <div className="col-span-12 lg:col-span-8">
                <div className="flex items-center justify-between space-x-2">
                  <h1 className="text-2xl font-semibold text-slate-700 dark:text-navy-100" x-tooltip="Award Level 3">
                    Attendance Overview
                  </h1>
                  <div id="sales-tab" className="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
                    <div className="tabs-list flex p-1">
                      <button onClick={() => handleSetTime("month")} className={`tab btn shrink-0 px-3 py-1 text-xs+ font-medium ${time === "month" && "bg-white shadow dark:bg-navy-500 dark:text-navy-100"}`}> Last month </button>
                      <button className={`tab btn shrink-0 px-3 py-1 text-xs+ ${time === "year" && "bg-white shadow dark:bg-navy-500 dark:text-navy-100"} font-medium hover:text-slate-800`} onClick={() => handleSetTime("year")}> Last year </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-5">
                  <div className="mt-4 flex shrink-0 flex-col items-center sm:items-start">
                    <ChartIcon />
                    <div className="mt-4">
                      <div className="flex items-center space-x-1">
                        <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100"> $6,556.55 </p>
                        <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 ">
                          <RefreshIcon />
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 dark:text-navy-300 mb-[-15px]"> this month </p>
                    </div>
                    <div className='flex ites-center'>
                      <ReportChart />
                      <div className="flex items-center ml-[10px] space-x-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                        </svg>
                        <p className="text-sm+ text-slate-800 dark:text-navy-100"> 3.2% </p>
                      </div>
                    </div>
                    <button className="btn space-x-2 dark:text-navy-100 dark:border-navy-450 rounded-full border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150">
                      <DownloadIcon />
                      <span> Download Report</span>
                    </button>
                  </div>
                  <div className="ax-transparent-gridline grid w-full grid-cols-1">
                    <ColumnChart />
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-2">
                  <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
                    <div className="flex justify-between space-x-1">
                      <p className="text-xl font-semibold text-slate-700 dark:text-navy-100"> $67.6k </p>
                      <DollarIcon />
                    </div>
                    <p className="mt-1 text-xs+">Income</p>
                  </div>
                  <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
                    <div className="flex justify-between space-x-1">
                      <p className="text-xl font-semibold text-slate-700 dark:text-navy-100"> 12.6K </p>
                      <CheckIcon />
                    </div>
                    <p className="mt-1 text-xs+">Completed</p>
                  </div>
                  <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
                    <div className="flex justify-between space-x-1">
                      <p className="text-xl font-semibold text-slate-700 dark:text-navy-100"> 143 </p>
                      <TimeIcon />
                    </div>
                    <p className="mt-1 text-xs+">Pending</p>
                  </div>
                  <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
                    <div className="flex justify-between space-x-1">
                      <p className="text-xl font-semibold text-slate-700 dark:text-navy-100"> 651 </p>
                      <TruckIcon />
                    </div>
                    <p className="mt-1 text-xs+">Dispatch</p>
                  </div>
                  <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
                    <div className="flex justify-between space-x-1">
                      <p className="text-xl font-semibold text-slate-700 dark:text-navy-100"> 46k </p>
                      <BoxIcon />
                    </div>
                    <p className="mt-1 text-xs+">Products</p>
                  </div>
                  <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
                    <div className="flex justify-between space-x-1">
                      <p className="text-xl font-semibold text-slate-700 dark:text-navy-100"> 8.8k </p>
                      <UserIcon />
                    </div>
                    <p className="mt-1 text-xs+">Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='mt-7'>
              <div className='grid grid-cols-12 gap-4 transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6'>
                <div className='shadow-md bg-white rounded-[.5rem] dark:bg-navy-700 col-span-12 lg:col-span-8'>
                  <div className=' py-3 px-4 flex justify-between items-center rounded-[.5rem]'>
                    <p className='font-medium text-[#334155] text-[14px] tracking-[.025em] dark:text-navy-100'>Projects Status</p>
                    <Menu className="mr-[7px]  dark:bg-navy-700">
                      <MenuHandler>
                        <button className='h-8 w-8 rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center'>
                          <MenuIcon className='text-[#64748b] w-5' />
                        </button>
                      </MenuHandler>
                      <MenuList className='py-2 min-w-[150px] dark:bg-navy-700'>
                        <Link to="/dashboard" className="flex h-8 items-center font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">Action</Link>
                        <Link to="/dashboard" className="flex h-8 items-center font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">Another Action</Link>
                        <Link to="/dashboard" className="flex h-8 items-center font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">Something Else</Link>
                        <div className="h-px bg-slate-150 dark:bg-navy-500"></div>
                        <Link to="/dashboard" className="flex h-8 items-center font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">Separate Link</Link>
                      </MenuList>
                    </Menu>
                  </div>
                  <div className='pb-8 flex sm:flex-row flex-col gap-y-4'>
                    <div className='px-4 border-[4px] border-l-[#0ea5e9] border-transparent border-r-0 w-full'>
                      <div>
                        <h1 className='text-base font-medium text-[#475569] dark:text-navy-100'>Web Design</h1>
                        <p className='text-[#94a3b8] text-xs font-medium'>Design Learn Management System</p>
                        <button className='bg-[#0ea5e91a] text-[#0ea5e9] text-[.75rem] p-[.375rem_.5rem] rounded-[.25rem] font-medium mt-2'>UI/UX Design</button>
                      </div>
                      <div className='mt-8'>
                        <h1 className='text-2xl text-[#475569] font-medium dark:text-navy-100'>%55.<span className='text-xs'>23</span></h1>
                        <p className='mt-1 text-xs text-[#64748b] dark:text-navy-100'>June 08, 2021</p>
                      </div>
                      <div>
                        <div className='flex justify-between items-center mt-8'>
                          <div className="flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-8 w-8 rounded-full ring ring-white hover:z-10 cursor-pointer dark:ring-navy-700" src='/assets/images/avatar/avatar-16.jpg' alt="Avtar13" />
                            <div className="h-8 w-8 rounded-full ring ring-white hover:z-10 bg-[#0ea5e9] text-white font-medium text-[13px] flex justify-center items-center cursor-pointer dark:ring-navy-700">JD</div>
                            <img className="inline-block h-8 w-8 rounded-full ring ring-white hover:z-10 cursor-pointer dark:ring-navy-700" src='/assets/images/avatar/avatar-16.jpg' alt="Avtar6" />
                          </div>
                          <button className='h-8 w-8 rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center'>
                            <SettingOutlineIcon className='w-5 h-5 text-[#64748b]' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='px-4 border-[4px] border-l-[#f000b9] border-transparent border-r-0 w-full'>
                      <div>
                        <h1 className='text-base font-medium text-[#475569] dark:text-navy-100'>Mobile App</h1>
                        <p className='text-[#94a3b8] text-xs font-medium'>Ecommerce Application</p>
                        <button className='bg-[#f000b91a] text-[#f000b9] text-[.75rem] p-[.375rem_.5rem] rounded-[.25rem] font-medium mt-2'>Ecommerce</button>
                      </div>
                      <div className='mt-8'>
                        <h1 className='text-2xl text-[#475569] font-medium dark:text-navy-100'>%14.<span className='text-xs'>84</span></h1>
                        <p className='mt-1 text-xs text-[#64748b] dark:text-navy-100'>May 01, 2021</p>
                      </div>
                      <div>
                        <div className='flex justify-between items-center mt-8'>
                          <div className="flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-8 w-8 rounded-full ring ring-white hover:z-10 cursor-pointer dark:ring-navy-700" src='/assets/images/avatar/avatar-16.jpg' alt="Avtar13" />
                            <div className="h-8 w-8 rounded-full ring ring-white hover:z-10 bg-[#10b981] text-white font-medium text-[13px] flex justify-center items-center cursor-pointer dark:ring-navy-700">UH</div>
                            <img className="inline-block h-8 w-8 rounded-full ring ring-white hover:z-10 cursor-pointer dark:ring-navy-700" src='/assets/images/avatar/avatar-16.jpg' alt="Avtar6" />
                          </div>
                          <button className='h-8 w-8 rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center'>
                            <SettingOutlineIcon className='w-5 h-5 text-[#64748b]' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='px-4 border-[4px] border-l-[#ff9800] border-transparent border-r-0 w-full'>
                      <div>
                        <h1 className='text-base font-medium text-[#475569] dark:text-navy-100'>Design System</h1>
                        <p className='text-[#94a3b8] text-xs font-medium'>Create LMS design system on figma</p>
                        <div className='flex'>
                          <button className='bg-[#ff98001a] text-[#ff9800] text-[.75rem] p-[.375rem_.5rem] rounded-[.25rem] font-medium mt-2'>LMS</button>
                          <button className='bg-[#ff98001a] ml-[6px] text-[#ff9800] text-[.75rem] p-[.375rem_.5rem] rounded-[.25rem] font-medium mt-2'>Figma</button>
                        </div>
                      </div>
                      <div className='mt-8'>
                        <h1 className='text-2xl text-[#475569] dark:text-navy-100 font-medium'>%87.<span className='text-xs'>40</span></h1>
                        <p className='mt-1 text-xs text-[#64748b] dark:text-navy-100'>September 16, 2021</p>
                      </div>
                      <div>
                        <div className='flex justify-between items-center mt-8'>
                          <div className="flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-8 w-8 rounded-full ring ring-white hover:z-10 cursor-pointer dark:ring-navy-700" src='/assets/images/avatar/avatar-16.jpg' alt="Avtar13" />
                            <div className="h-8 w-8 rounded-full ring ring-white hover:z-10 bg-[#ff5724] text-white font-medium text-[13px] flex justify-center items-center cursor-pointer dark:ring-navy-700">PM</div>
                            <img className="inline-block h-8 w-8 rounded-full ring ring-white hover:z-10 cursor-pointer dark:ring-navy-700" src='/assets/images/avatar/avatar-16.jpg' alt="Avtar6" />
                          </div>
                          <button className='h-8 w-8 rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center'>
                            <SettingOutlineIcon className='w-5 h-5 text-[#64748b]' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-12 lg:col-span-4'>
                  <div className='flex justify-between w-full items-center rounded-[.5rem]'>
                    <p className='font-medium text-[#334155] text-[14px] tracking-[.025em] dark:text-navy-100'>Customer Satisfaction</p>
                    <Menu className=" mr-[7px]">
                      <MenuHandler>
                        <button className='h-8 w-8 rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 flex justify-center items-center'>
                          <MenuIcon className='text-[#64748b] w-5' />
                        </button>
                      </MenuHandler>
                      <MenuList className='py-2 min-w-[150px]'>
                        <Link to="/dashboard" className="flex h-8 items-center font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">Action</Link>
                        <Link to="/dashboard" className="flex h-8 items-center font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">Another Action</Link>
                        <Link to="/dashboard" className="flex h-8 items-center font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">Something Else</Link>
                        <div className="h-px bg-slate-150 dark:bg-navy-500"></div>
                        <Link to="/dashboard" className="flex h-8 items-center font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100">Separate Link</Link>
                      </MenuList>
                    </Menu>
                  </div>
                  <div className='mt-3'>
                    <h1 className='text-3xl text-[#334155] dark:text-navy-100'>9.7<span className='text-xs text-[#10b981]'>+2.1%</span></h1>
                    <p className='text-[.8125rem] text-[#64748b] dark:text-navy-100'>Performance score</p>
                  </div>
                  <div className='mt-4 flex h-2 space-x-1'>
                    <Tooltip content="Excellent" placement="top" className='mb-[5px] bg-[#e9eef5] rounded-[5px] text-[#334155] text-[14px] hello'>
                      <div className='w-5/12 rounded-full bg-[#4f46e5]' tooltip="Excellent" />
                    </Tooltip>
                    <Tooltip content="Very Good" placement="top" className='mb-[5px] bg-[#e9eef5] rounded-[5px] text-[#334155] text-[14px] hello'>
                      <div className='w-2/12 rounded-full bg-[#10b981]' tooltip="Very Good" />
                    </Tooltip>
                    <Tooltip content="Good" placement="top" className='mb-[5px] bg-[#e9eef5] rounded-[5px] text-[#334155] text-[14px] hello'>
                      <div className='w-2/12 rounded-full bg-[#0ea5e9]' tooltip="Good" />
                    </Tooltip>
                    <Tooltip content="Poor" placement="top" className='mb-[5px] bg-[#e9eef5] rounded-[5px] text-[#334155] text-[14px] hello'>
                      <div className='w-2/12 rounded-full bg-[#ff9800]' tooltip="Poor" />
                    </Tooltip>
                    <Tooltip content="Very Poor" placement="top" className='mb-[5px] bg-[#e9eef5] rounded-[5px] text-[#334155] text-[14px] hello'>
                      <div className='w-1/12 rounded-full bg-[#ff5724]' tooltip="Very Poor" />
                    </Tooltip>
                  </div>
                  <table className='w-full mt-4'>
                    <tbody>
                      <tr>
                        <td className='flex items-center py-2'>
                          <div className='h-3.5 w-3.5 rounded-full border-2 border-[#4f46e5] mr-2' />
                          <p className='text-sm text-[#334155] font-medium dark:text-navy-100'>Exellent</p>
                        </td>
                        <td className='text-[#334155] py-2 text-end text-sm font-medium dark:text-navy-100'>1 029</td>
                        <td className=' py-2 text-end text-sm'>42%</td>
                      </tr>
                      <tr>
                        <td className='flex items-center py-2'>
                          <div className='h-3.5 w-3.5 rounded-full border-2 border-[#10b981] mr-2' />
                          <p className='text-sm text-[#334155] font-medium dark:text-navy-100'>Very Good</p>
                        </td>
                        <td className='text-[#334155] py-2 text-end text-sm font-medium dark:text-navy-100'>426</td>
                        <td className=' py-2 text-end text-sm'>18%</td>
                      </tr>
                      <tr>
                        <td className='flex items-center py-2'>
                          <div className='h-3.5 w-3.5 rounded-full border-2 border-[#0ea5e9] mr-2' />
                          <p className='text-sm text-[#334155] font-medium dark:text-navy-100'>Good</p>
                        </td>
                        <td className='text-[#334155] py-2 text-end text-sm font-medium dark:text-navy-100'>326</td>
                        <td className=' py-2 text-end text-sm'>14%</td>
                      </tr>
                      <tr>
                        <td className='flex items-center py-2'>
                          <div className='h-3.5 w-3.5 rounded-full border-2 border-[#ff9800] mr-2' />
                          <p className='text-sm text-[#334155] font-medium dark:text-navy-100'>Poor</p>
                        </td>
                        <td className='text-[#334155] py-2 text-end text-sm font-medium dark:text-navy-100'>395</td>
                        <td className=' py-2 text-end text-sm'>17%</td>
                      </tr>
                      <tr>
                        <td className='flex items-center py-2'>
                          <div className='h-3.5 w-3.5 rounded-full border-2 border-[#ff5724] mr-2' />
                          <p className='text-sm text-[#334155] font-medium dark:text-navy-100'>Very Poor</p>
                        </td>
                        <td className='text-[#334155] py-2 text-end text-sm font-medium dark:text-navy-100'>129</td>
                        <td className=' py-2 text-end text-sm'>9%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 bg-slate-150 py-5 dark:bg-navy-800 sm:gap-5 lg:gap-6">
          <div className={`col-span-12 flex flex-col transition-all duration-[.25s] lg:col-span-3 lg:pr-0 ${header ? "xl:px-[64px] px-[24px]" : "px-[24px] xl:px-[24px]"}`}>
            <h2 className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-xl">
              Top Sellers
            </h2>

            <p className="mt-3 grow">
              The top sellers is calculated based on the sales of a product and undergoes hourly updations.
            </p>

            <div className="mt-4">
              <p>Sales Growth</p>
              <div className="mt-1.5 flex items-center space-x-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-success/15 text-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                  </svg>
                </div>
                <p className="text-base font-medium text-slate-700 dark:text-navy-100">
                  $2,225.22
                </p>
              </div>
            </div>
          </div>
          <div className="is-scrollbar-hidden col-span-12 flex space-x-4 overflow-x-auto px-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-9 lg:pl-0">
            <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <img className="mask is-squircle" src="../assets/images/avatar/avatar-5.jpg" alt="avatar" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                      Travis Fuller
                    </p>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Employee
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </button>
                    <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                      2
                    </div>
                  </div>
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                    <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                      4
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between space-x-2">
                <div>
                  <p className="text-xs+">Sells</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    2 348
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Target</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    3 000
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Clients</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    78
                  </p>
                </div>
              </div>
              <div className="grow">
                <div className="flex w-full space-x-1">
                  <div x-tooltip="'Phone Calls'" className="h-2 w-4/12 rounded-full bg-primary dark:bg-accent"></div>
                  <div x-tooltip="'Chats Messages'" className="h-2 w-3/12 rounded-full bg-success"></div>
                  <div x-tooltip="'Emails'" className="h-2 w-5/12 rounded-full bg-info"></div>
                </div>
                <div className="mt-2 flex flex-wrap">
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
                    <div className="flex space-x-1 text-xs leading-6">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                      <span>33%</span>
                    </div>
                  </div>
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                      <span>17%</span>
                    </div>
                  </div>
                  <div className="mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-info"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <img x-tooltip="'Award Level 1'" className="h-6 w-6" src="../assets/images/awards/award-19.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 2'" className="h-6 w-6" src="../assets/images/awards/award-2.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 3'" className="h-6 w-6" src="../assets/images/awards/award-5.svg" alt="avatar" />
                </div>
                <button className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <img className="mask is-squircle" src="../assets/images/avatar/avatar-18.jpg" alt="avatar" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                      Konnor Guzman
                    </p>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Employee
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                    <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between space-x-2">
                <div>
                  <p className="text-xs+">Sells</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    1 451
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Target</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    2 000
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Clients</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    54
                  </p>
                </div>
              </div>
              <div className="grow">
                <div className="flex w-full space-x-1">
                  <div x-tooltip="'Phone Calls'" className="h-2 w-3/12 rounded-full bg-primary dark:bg-accent"></div>
                  <div x-tooltip="'Chats Messages'" className="h-2 w-7/12 rounded-full bg-success"></div>
                  <div x-tooltip="'Emails'" className="h-2 w-2/12 rounded-full bg-info"></div>
                </div>
                <div className="mt-2 flex flex-wrap">
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
                    <div className="flex space-x-1 text-xs leading-6">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                      <span>24%</span>
                    </div>
                  </div>
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                      <span>56%</span>
                    </div>
                  </div>
                  <div className="mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-info"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <img x-tooltip="'Award Level 1'" className="h-6 w-6" src="../assets/images/awards/award-1.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 2'" className="h-6 w-6" src="../assets/images/awards/award-6.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 3'" className="h-6 w-6" src="../assets/images/awards/award-9.svg" alt="avatar" />
                </div>
                <button className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <img className="mask is-squircle" src="../assets/images/avatar/avatar-6.jpg" alt="avatar" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                      Alfredo Elliott
                    </p>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Contractors
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </button>
                    <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                      4
                    </div>
                  </div>
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between space-x-2">
                <div>
                  <p className="text-xs+">Sells</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    423
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Target</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    500
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Clients</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    16
                  </p>
                </div>
              </div>
              <div className="grow">
                <div className="flex w-full space-x-1">
                  <div x-tooltip="'Phone Calls'" className="h-2 w-8/12 rounded-full bg-primary dark:bg-accent"></div>
                  <div x-tooltip="'Chats Messages'" className="h-2 w-2/12 rounded-full bg-success"></div>
                  <div x-tooltip="'Emails'" className="h-2 w-2/12 rounded-full bg-info"></div>
                </div>
                <div className="mt-2 flex flex-wrap">
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
                    <div className="flex space-x-1 text-xs leading-6">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                      <span>60%</span>
                    </div>
                  </div>
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                      <span>23%</span>
                    </div>
                  </div>
                  <div className="mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-info"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                      <span>17%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <img x-tooltip="'Award Level 2'" className="h-6 w-6" src="../assets/images/awards/award-14.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 3'" className="h-6 w-6" src="../assets/images/awards/award-13.svg" alt="avatar" />
                </div>
                <button className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <img className="mask is-squircle" src="../assets/images/avatar/avatar-11.jpg" alt="avatar" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                      Samantha Shelton
                    </p>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Contractors
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </button>
                    <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                      2
                    </div>
                  </div>
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between space-x-2">
                <div>
                  <p className="text-xs+">Sells</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    579
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Target</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    800
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Clients</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    24
                  </p>
                </div>
              </div>
              <div className="grow">
                <div className="flex w-full space-x-1">
                  <div x-tooltip="'Phone Calls'" className="h-2 w-4/12 rounded-full bg-primary dark:bg-accent"></div>
                  <div x-tooltip="'Chats Messages'" className="h-2 w-4/12 rounded-full bg-success"></div>
                  <div x-tooltip="'Emails'" className="h-2 w-4/12 rounded-full bg-info"></div>
                </div>
                <div className="mt-2 flex flex-wrap">
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
                    <div className="flex space-x-1 text-xs leading-6">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                      <span>30%</span>
                    </div>
                  </div>
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                      <span>36%</span>
                    </div>
                  </div>
                  <div className="mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-info"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                      <span>34%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <img x-tooltip="'Award Level 2'" className="h-6 w-6" src="../assets/images/awards/award-15.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 3'" className="h-6 w-6" src="../assets/images/awards/award-13.svg" alt="avatar" />
                </div>
                <button className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <img className="mask is-squircle" src="../assets/images/avatar/avatar-19.jpg" alt="avatar" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                      Derrick Simmons
                    </p>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Employee
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between space-x-2">
                <div>
                  <p className="text-xs+">Sells</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    6 541
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Target</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    8 000
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Clients</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    145
                  </p>
                </div>
              </div>
              <div className="grow">
                <div className="flex w-full space-x-1">
                  <div x-tooltip="'Phone Calls'" className="h-2 w-6/12 rounded-full bg-primary dark:bg-accent"></div>
                  <div x-tooltip="'Chats Messages'" className="h-2 w-4/12 rounded-full bg-success"></div>
                  <div x-tooltip="'Emails'" className="h-2 w-2/12 rounded-full bg-info"></div>
                </div>
                <div className="mt-2 flex flex-wrap">
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
                    <div className="flex space-x-1 text-xs leading-6">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                      <span>55%</span>
                    </div>
                  </div>
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                      <span>30%</span>
                    </div>
                  </div>
                  <div className="mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-info"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                      <span>15%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <img x-tooltip="'Award Level 2'" className="h-6 w-6" src="../assets/images/awards/award-15.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 3'" className="h-6 w-6" src="../assets/images/awards/award-5.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 3'" className="h-6 w-6" src="../assets/images/awards/award-25.svg" alt="avatar" />
                </div>
                <button className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <img className="mask is-squircle" src="../assets/images/avatar/avatar-7.jpg" alt="avatar" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                      Katrina West
                    </p>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Employee
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </button>
                    <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                      1
                    </div>
                  </div>
                  <div className="relative cursor-pointer">
                    <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between space-x-2">
                <div>
                  <p className="text-xs+">Sells</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    3 481
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Target</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    5 000
                  </p>
                </div>
                <div>
                  <p className="text-xs+">Clients</p>
                  <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                    96
                  </p>
                </div>
              </div>

              <div className="grow">
                <div className="flex w-full space-x-1">
                  <div x-tooltip="'Phone Calls'" className="h-2 w-1/12 rounded-full bg-primary dark:bg-accent"></div>
                  <div x-tooltip="'Chats Messages'" className="h-2 w-5/12 rounded-full bg-success"></div>
                  <div x-tooltip="'Emails'" className="h-2 w-6/12 rounded-full bg-info"></div>
                </div>
                <div className="mt-2 flex flex-wrap">
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
                    <div className="flex space-x-1 text-xs leading-6">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                      <span>9%</span>
                    </div>
                  </div>
                  <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                      <span>41%</span>
                    </div>
                  </div>
                  <div className="mb-1 inline-flex items-center space-x-2 font-inter">
                    <div className="h-2 w-2 rounded-full bg-info"></div>
                    <div className="flex space-x-1 text-xs">
                      <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <img x-tooltip="'Award Level 2'" className="h-6 w-6" src="../assets/images/awards/award-1.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 3'" className="h-6 w-6" src="../assets/images/awards/award-24.svg" alt="avatar" />
                  <img x-tooltip="'Award Level 3'" className="h-6 w-6" src="../assets/images/awards/award-30.svg" alt="avatar" />
                </div>
                <button className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
