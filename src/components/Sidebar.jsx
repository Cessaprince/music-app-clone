import { Heart, ListCollapse, Play, Minimize2, Plus, SearchIcon, TableOfContents } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import playlistImg from '../images/album-cover.jpeg'
import artist from '../images/musician.jpeg'

const Sidebar = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [searchLibrary, setSearchLibrary] = useState(false)

  //for the search bar to close when the button is clicked outside
  const searchRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchLibrary(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])


  return (
    <div className="h-full">
      <div className="sidebar h-full flex flex-col gap-[15px] text-gray-300 w-[320px] px-[20px] py-[30px] rounded-[10px]">
        <div className='flex flex-col gap-[10px] shrink-0'>
          {/* heading */}
          <div className="flex justify-between w-full items-center group cursor-pointer">
            <div className="flex gap-[10px] items-center group cursor-pointer">
              <ListCollapse size={20} className='group-hover:animate-[slide-in_0.3s_ease-out_forwards] hidden group-hover:block' />
              <h3 className="font-semibold capitalize group-hover:text-white group-hover:transition-all hover:duration-300 hover:ease-in-out">your library</h3>

            </div>
            <div className="flex items-center gap-[5px]">
              <button className="grayed h-[35px] w-[35px] flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out">
                <Plus size={20} className='text-gray-300 hover:text-white' />
              </button>

              <button className="grayed-hover h-[35px] w-[35px] flex justify-center items-center cursor-pointer rounded-full transition-all duration-300 ease-in-out">
                <Minimize2 size={18} className='text-gray-300 hover:text-white' />
              </button>


            </div>

          </div>

          {/* playlist, artist, albums*/}
          <div className="flex justify-center items-center gap-[7px]">
            <button className='grayed cursor-pointer capitalize hover:text-white w-fit px-[20px] py-[7px] text-[14px] transition-all duration-300 ease rounded-[20px]'>playlists</button>
            <button className='grayed cursor-pointer capitalize hover:text-white w-fit px-[20px] py-[7px] text-[14px] transition-all duration-300 ease rounded-[20px]'>artists</button>
            <button className='grayed cursor-pointer capitalize hover:text-white w-fit px-[20px] py-[7px] text-[14px] transition-all duration-300 ease rounded-[20px]'>albums</button>
          </div>

          {/* search form */}
          <div className="flex items-center justify-between w-full gap-[30px]">
            <div
              ref={searchRef}
              className={`flex gap-[5px] items-center flex-1 py-[5px] ${searchLibrary ? 'px-[10px] grayed rounded-[5px] animate-[slide-in_0.3s_ease-out_forwards]' : ''}`}>
              <span className="grayed-hover flex items-center justify-center p-[7px] rounded-full">
                <SearchIcon
                  onClick={() => {
                    setSearchLibrary(true)
                  }}
                  size={18}
                  // animate-[slide-in_0.3s_ease-out_forwards]
                  className='hover:text-white cursor-pointer' />
              </span>

              <input type="search" name="" id="" className={`[&::-webkit-search-cancel-button]:appearance-none w-full text-[13px] outline-none ${searchLibrary ? 'block' : 'hidden'}`} placeholder='Search in your library' />
            </div>

            <div className="flex items-center gap-[7px] ">
              <p className={`font-light capitalize text-[13px] text-gray-300 ${searchLibrary ? 'hidden' : 'block'}`}>recents</p>
              <TableOfContents size={18} />
            </div>
          </div>
        </div>


        {/* playlists and artist top artist from the playlist */}
        <div className="flex flex-col gap-[10px] flex-1 min-h-0 overflow-y-auto">

          {/* each playlist */}
          <div className="hovered-group group flex gap-[10px] items-center cursor-pointer p-[7px] rounded-[5px]">
            <div className="relative h-[50px] w-[50px] overflow-hidden shrink-0 rounded-[5px]">
              <img src={playlistImg} alt="" className='h-full w-full object-cover' />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={20} fill="white" className="text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-[3px] min-w-[0px]">
              <p className="uppercase text-white truncate">igbo princess</p>
              <span className="text-sm truncate capitalize">Playlist . Princessa Oluchi Prince-Okonye</span>
            </div>
          </div>

          {/* liked songs */}
          <div className="hovered-group group flex gap-[10px] items-center p-[7px] rounded-[5px] cursor-pointer">
            <div className="relative h-[50px] w-[50px] shrink-0 flex items-center justify-center rounded-[5px] bg-linear-to-b from-violet-900 to-teal-500">
              <Heart fill="white" className='text-white' />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={20} fill="white" className="text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-[3px] min-w-[0px]">
              <p className="uppercase text-white truncate">igbo princess</p>
              <span className="text-sm truncate capitalize">Playlist . Princessa Oluchi Prince-Okonye</span>
            </div>
          </div>

          {/*each artist*/}
          <div className="hovered-group group flex gap-[10px] items-center cursor-pointer p-[7px] rounded-[5px]">
            <div className="relative h-[50px] w-[50px] overflow-hidden shrink-0 rounded-full">
              <img src={artist} alt="" className='h-full w-full object-cover' />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={20} fill="white" className="text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-[3px] min-w-[0px]">
              <p className="capitalize text-white truncate">kizz daniel</p>
              <span className="text-sm truncate capitalize">Artist</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar