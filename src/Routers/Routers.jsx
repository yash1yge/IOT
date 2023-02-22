import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Signin from '../Attendance/auth/signin'
import Sidebar from '../Attendance/layouts/Sidebar';
import SidebarPanel from '../Attendance/layouts/SidebarPanel';
import { Dashboard } from '../Attendance/pages/fornego/Dashboard/Dashboard';
import Profile from '../Attendance/pages/fornego/Profile/Profile';
import Liveattendence from "../Attendance/pages/fornego/Liveattendence/Liveattendence"
import UserLogReport from '../Attendance/pages/fornego/UserLogReport/UserLogReport';
import SchoolSetting from '../Attendance/pages/fornego/SchoolSetting/SchoolSetting';
import ClassBatch from '../Attendance/pages/fornego/ClassBatch/ClassBatch';
import StudentAttendance from '../Attendance/pages/fornego/StudentAttendance/StudentAttendance';
import StudentSummary from '../Attendance/pages/fornego/StudentSummary/StudentSummary';
import ManageUser from '../Attendance/pages/fornego/ManageUser/ManageUser';
import DeviceManager from '../Attendance/pages/fornego/DeviceManager/DeviceManager';
import Communication from '../Attendance/pages/fornego/CommunicationManager/Communication';
import { Header } from '../Attendance/layouts/Header/Header';
import Instutions from '../Attendance/Fornego/Instutions/Instutions';
import SDashboard from '../Attendance/Fornego/Dashboard/Dashboard';

export default function Routers() {
  const [darkMode, setDarkMode] = useState("");
  const [mono, setMono] = useState(false);
  const [header, setHeader] = useState(true)
  const route = window.location.pathname

  if (darkMode) {
    localStorage.setItem("dark-mode", "true")
  } else {
    localStorage.setItem("dark-mode", "false")
  }

  darkMode ? document.getElementById("apply-darkmode").classList.add('dark') : document.getElementById("apply-darkmode").classList.remove('dark')
  const location = useLocation()
  useEffect(() => {
  }, [location])

  return (
    <>
      <div className={`${mono ? "monochromeEffect relative transition-all" : "relative transition-all"} w-full h-full ${darkMode && "bg-[#192132] text-[#a3adc2]"}`}>
        {route !== "/signin" && route !== "/" &&
          <Sidebar header={header} />
        }
        {route !== "/signin" && route !== "/" &&
          <SidebarPanel header={header} setHeader={setHeader} />
        }
        <div className={`${header ? "w-full md:w-[calc(100%-80px)] transition-all" : "w-full md:w-[calc(100%-80px)] xl:w-[calc(100%-320px)]"} ml-auto transition-all ${route === "/signin" && "w-100 h-screen m-0"}`}>
          {route !== "/signin" && route !== "/" &&
            <Header header={header} setHeader={setHeader} setMono={setMono} mono={mono} darkMode={darkMode} setDarkMode={setDarkMode} />
          }
          <div className={`${header ? "px-[16px] md:px-[24px] xl:px-[64px]" : "px-[24px]"} py-[24px] ${route === "/signin" && route !== "/" && "remove-padding"} ${route === "/dashboard" && "pad-rmv-db"}`}>
            <Routes>
              <Route path="/" element={<Navigate to="/signin" />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/dashboard" element={<Dashboard mono={mono} setMono={setMono} header={header} setHeader={setHeader} darkMode={darkMode} setDarkMode={setDarkMode} />} />
              <Route path="/profile" element={<Profile mono={mono} setMono={setMono} darkMode={darkMode} header={header} setHeader={setHeader} setDarkMode={setDarkMode} />} />
              <Route path='/studentattendance' element={<StudentAttendance />} />
              <Route path="/liveattendence" element={<Liveattendence mono={mono} setMono={setMono} darkMode={darkMode} header={header} setHeader={setHeader} setDarkMode={setDarkMode} />} />
              <Route path='/studentsummary' element={<StudentSummary />} />
              <Route path='/communication' element={<Communication />} />
              <Route path='/log-reports' element={<UserLogReport />} />
              <Route path='/manageuser' element={<ManageUser />} />
              <Route path='/devicemanager' element={<DeviceManager />} />
              <Route path='/schoolsetting' element={<SchoolSetting />} />
              <Route path='/classbatch' element={<ClassBatch />} />
              <Route path='/fornego'>
                <Route path='dashboard' element={<SDashboard />} />
                <Route path='instution' element={<Instutions />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
