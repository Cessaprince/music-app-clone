import React from 'react'
import logo from '../images/spotify.png'
import { ArrowDown, ArrowDown01, ArrowDownAzIcon, ArrowDownCircle, Bell, BellDotIcon, Box, ChevronDownIcon, Group, Home, Search, UserGroup } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import avatar from "../images/avatar.jpeg"

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div className=" h-[60px] bg-black w-full px-[20px] py-[10px] flex justify-between items-center gap-[30px]">
        {/* logo */}
        <Link className="h-[45px] w-[45px] overflow-hidden">
          <img src={logo} alt="" className='object-cover h-full w-full rounded-full' />
        </Link>


        {/* right part of the header */}
        <div className="flex items-center gap-[35px]">
          {/* the search bar */}
          <div className="flex gap-[7px] items-center">
            <Link className="grayed h-[45px] w-[45px] overflow-hidden flex items-center justify-center rounded-full p-[10px]">
              <Home color='white' />
            </Link>
            {/* form */}
            <div className="grayed flex items-center px-[15px] py-[9px] rounded-[25px] justify-between gap-[15px] w-[500px] max-w-[85%]">
              <form className="flex items-center gap-[5px] w-full">
                <Search color="white" />
                <input type="search" name="" id="" className='w-full bg-transparent outline-none text-white [&::-webkit-search-cancel-button]:appearance-none' placeholder='What do you want to play?' />
              </form>
              <div className="flex items-center gap-[5px]">
                <span className='text-white font-bold'>|</span>
                <Box color='white' />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[15px]">
            <NavLink className="bg-white rounded-[25px] px-[15px] py-[9px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <p className="text-xs capitalize font-semibold">explore premium</p>
            </NavLink>
            <NavLink className="flex gap-[5px] items-center group">
              <ArrowDownCircle color='white' size={20} className='group-hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out' />
              <p className="text-xs text-gray-300 capitalize font-semibold group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out group-hover:scale-105">install app</p>
            </NavLink>
          </div>

          <div className="flex justify-between items-center gap-[15px] relative">
            {/* what's new?*/}

            <Bell className='relative text-gray-300 hover:text-white cursor-pointer transition-all duration-300 ease hover:scale-95' />

            <span className='text-blue-500 absolute font-semibold left-5 top-0'>●</span>

            {/* feed */}
            <UserGroup className='relative text-gray-300 hover:text-white cursor-pointer transition-all duration-300 ease hover:scale-95' />

            <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
              <img src={avatar} alt="" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar