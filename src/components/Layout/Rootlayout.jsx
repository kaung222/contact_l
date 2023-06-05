// import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import LeftSidebar from '../Dashboard/LeftSidebar'

const RootLayout = () => {
  return (
    <div className=''>
      <div className="">
        <Navbar />
      </div>
      <div className=" flex">
        <LeftSidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
