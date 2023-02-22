import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <>
      <div>
        {/* App preloader*/}
        {/* <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
    <div className="app-preloader-inner relative inline-block h-48 w-48" />
  </div> */}
        {/* Page Wrapper */}
        <div id="root" className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900" x-cloak>
          <main className="grid w-full grow grid-cols-1 place-items-center">
            <div className="w-full max-w-[26rem] p-4 sm:px-5">
              <div className="text-center">
                {/* <img className="mx-auto h-16 w-16" src="../../../assets/logo192.png" alt="logo" /> */}
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100"> Welcome Back </h2>
                  <p className="text-slate-400 dark:text-navy-300"> Please sign in to continue </p>
                </div>
              </div>
              <div className="card mt-5 rounded-lg p-5 lg:p-7">
                <label className="block">
                  <span>Username:</span>
                  <span className="relative mt-1.5 flex">
                    <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent pr-3 pl-9 py-2  placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Enter Username" type="text" />
                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </span>
                </label>
                <label className="mt-4 block">
                  <span>Password:</span>
                  <span className="relative mt-1.5 flex">
                    <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent pl-9 pr-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Enter Password" type="password" />
                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </span>
                </label>
                <div className="mt-4 flex items-center justify-between space-x-2">
                  <label className="inline-flex items-center space-x-2">
                    <input className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent" type="checkbox" />
                    <span className="line-clamp-1">Remember me</span>
                  </label>
                  <Link to="/" className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100">Forgot Password?</Link>
                </div>
                <Link onClick={() => { window.location.href = "/dashboard" }} to="/dashboard" className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"> Sign In </Link>
                <div className="mt-4 text-center text-xs+">
                  <p className="line-clamp-1">
                    <span>Switch to Instution?</span>
                    <Link to="/" className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="../login.php">Login</Link>
                  </p>
                </div>
                <div className="my-7 flex items-center space-x-3">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500" />
                  <p>OR</p>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500" />
                </div>
                <div className="flex space-x-4">
                  <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                    <img className="h-5.5 w-5.5" src="../../assets/images/logos/google.svg" alt="logo" />
                    <span>Google</span>
                  </button>
                  <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                    <img className="h-5.5 w-5.5" src="../../assets/images/logos/github.svg" alt="logo" />
                    <span>Github</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="x-teleport-target" />
      </div>
    </>
  )
}
