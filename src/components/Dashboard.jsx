import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ChevronLeft, Ellipsis, ListCollapse, Minimize2 } from 'lucide-react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MusicSidebar from './MusicSidebar'
import MusicStatusbar from './MusicStatusbar'

const Dashboard = () => {
  
  //a state for checking if the song playing at the right hand side is open or not
  const [openSong, setOpenSong] = useState(null);

  const openingSong = () => {
    setOpenSong(false)
  }
  //the state for the music status bar that will show in all the pages
  const [currentSong, setCurrentSong] = useState(true)


  return (
    <div className="h-screen flex flex-col bg-black">
      <Navbar />

      {/* everything under the navbar */}
      <div className="flex flex-1 min-h-0 px-[7px] py-[7px]">
        <Sidebar />

        <main className="flex flex-1 gap-[10px] min-w-0 min-h-0 overflow-hidden px-[10px]">

          {/* the outlet: every page shows here. 80% when the song side is closed, 60% when it is open */}
          <div className={`h-full min-w-0 ${openSong ? 'w-[60%]' : 'w-[95%]'} overflow-y-auto rounded-[10px]`}>
            {/* openSong is passed down so any page can use it */}
            <Outlet context={{ openSong, currentSong, setCurrentSong }} />
          </div>

          {/*opening song*/}
          <div className="group overflow-y-auto flex-1 flex items-center bg-[var(--sidebar-gray)]">
            {openSong ?
              <div className="flex flex-col gap-[15px] h-full text-white p-[20px] w-full">
                {/* playlist name from which song came from header */}
                <div className="flex w-full justify-between items-center group cursor-pointer">
                  <div className="group flex items-center gap-[7px] cursor-pointer">
                    <ListCollapse
                      onClick={openingSong}
                      className='hidden group-hover:block group-hover:animate-[slide-in_0.3s_ease-out_forwards]' size={18} />
                    <h3 className="text-white font-semibold capitalize">liked songs</h3>
                  </div>

                  <div className="flex items-center gap-[15px]">
                    <Ellipsis className='text-gray-300 hover:text-white cursor-pointer hover:scale-105' />
                    <Minimize2 size={15} className='text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 ease' />
                  </div>
                </div>

                <MusicSidebar />

              </div>

              :
              <ChevronLeft
                size={28}
                onClick={() => [
                  setOpenSong(true)
                ]}
                className="text-gray-300 transition-all duration-100 ease-out group-hover:text-white group-hover:scale-115 cursor-pointer"
              />
            }

          </div>
        </main>
      </div>

      {currentSong && <MusicStatusbar/>}

    </div>
  )
}

export default Dashboard