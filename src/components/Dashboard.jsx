import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-black">
      <Navbar />

      {/* everything under the navbar */}
      <div className="flex flex-1 min-h-0 px-[15px] py-[7px]">
        <Sidebar />

        <main className="flex-1 min-w-0 overflow-y-auto black px-[10px] rounded-[10px]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard