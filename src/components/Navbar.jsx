import React from 'react'
import logo from '../images/spotify.png'
import { ArrowDown, ArrowDown01, ArrowDownAzIcon, ArrowDownCircle, Bell, BellDotIcon, Box, ChevronDownIcon, Group, Home, Search, UserGroup } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="h-[60px] bg-black w-screen px-[20px] py-[10px] flex justify-between items-center">
        {/* logo */}
        <div className="h-[45px] w-[45px] overflow-hidden">
          <img src={logo} alt="" className='object-cover h-full w-full rounded-full' />
        </div>


        {/* right part of the header */}
        <div className="flex items-center gap-[35px]">
          {/* the search bar */}
          <div className="flex gap-[7px] items-center">
            <div className="h-[45px] w-[45px] overflow-hidden bg-gray-800 flex items-center justify-center rounded-full p-[10px]">
              <Home color='white' />
            </div>
            {/* form */}
            <div className="flex items-center px-[15px] py-[9px] bg-gray-800 rounded-[25px] justify-between gap-[15px] w-[500px]">
              <form className="flex items-center gap-[5px] w-full">
                <Search color="white" />
                <input type="search" name="" id="" className='w-full bg-transparent outline-none text-white' placeholder='What do you want to play?' />
              </form>
              <div className="flex items-center gap-[5px]">
                <span className='text-white font-bold'>|</span>
                <Box color='white' />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[15px]">
            <div className="bg-white rounded-[25px] px-[15px] py-[9px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <p className="text-xs capitalize font-semibold">explore premium</p>
            </div>
            <NavLink className="flex gap-[5px] items-center group"> 
              <ArrowDownCircle color='white' size={20} className='group-hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out' />
              <p className="text-xs text-gray-300 capitalize font-semibold group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out group-hover:scale-105">install app</p>
            </NavLink>
          </div>

          <div className="flex justify-between items-center gap-[15px] ">
            <Bell color='white' className='relative'/>
            <span className='text-blue-500 absolute top-1 right-4 font-semibold'>●</span>
            <UserGroup color='white'/>
            <div className="h-[45px] w-[45px] overflow-hidden rounded-full">
              <img src='' alt="" className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar