import { Heart, Play } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import playlistImg from '../images/album-cover.jpeg'
import album from '../images/album-cover-2.jpeg'

const Home = () => {
  return (
    <div className='p-[10px] text-gray-200 bg-linear-to-b from-[var(--purple-bg)] to-[var(--sidebar-gray)]'>
      <header className='px-[25px] py-[7px]'>
        <div className=" flex flex-col gap-[20px]">
          {/* categories: All, music, podcasts, audiobooks*/}
          <div className="flex items-center gap-[10px]">
            <NavLink to='' className={({ isActive }) => `hover:text-white rounded-[25px] cursor-pointer text-[14px] bg-[var(--purple-dark)] hover:bg-[var(--purple-light)] py-[5px] px-[15px] font-light capitalize transition-all duration-300 ease-in-out ${isActive ? 'bg-white text-black' : ''}`}>all</NavLink>
            <NavLink to='\music' className={({ isActive }) => `hover:text-white rounded-[25px] cursor-pointer text-[14px] bg-[var(--purple-dark)] hover:bg-[var(--purple-light)] py-[5px] px-[15px] font-light capitalize transition-all duration-300 ease-in-out ${isActive ? 'bg-white text-black' : ''}`}>music</NavLink>
            <NavLink to='\podcasts' className={({ isActive }) => `hover:text-white rounded-[25px] cursor-pointer text-[14px] bg-[var(--purple-dark)] hover:bg-[var(--purple-light)] py-[5px] px-[15px] font-light capitalize transition-all duration-300 ease-in-out ${isActive ? 'bg-white text-black' : ''}`}>podcasts</NavLink>
            <NavLink to='\audiobooks' className={({ isActive }) => `hover:text-white rounded-[25px] cursor-pointer text-[14px] bg-[var(--purple-dark)] hover:bg-[var(--purple-light)] py-[5px] px-[15px] font-light capitalize transition-all duration-300 ease-in-out ${isActive ? 'bg-white text-black' : ''}`}>audiobooks</NavLink>
          </div>
          {/* liked songs, amd playlists*/}
          <div className="grid grid-cols-4 w-full gap-[20px]">
            {/* liked songs*/}
            <div className="group cursor-pointer transition-all duration-500 ease-in-out flex items-center h-[50px] w-full overflow-hidden rounded-[5px]">
              {/*playlist image*/}
              <div className="h-full w-[50px] shrink-0  bg-linear-to-b from-violet-900 to-teal-400 flex justify-center items-center">
                <Heart fill='white' />
              </div>
              <div className="group-hover:bg-[var(--purple-light)] bg-[var(--purple-dark)] transition-all duration-300 ease-in-out h-full w-full px-[10px] flex items-center justify-between">
                <p className="text-[13px] font-semibold capitalize">liked songs</p>
                <span className='hidden group-hover:flex h-[35px] w-[35px] transition-all duration-300 ease rounded-full bg-green-600 flex items-center justify-center shadow-lg'>
                  <Play fill="black" color='black' size={18} />
                </span>
              </div>
            </div>

            {/* playlists*/}
            <div className="group cursor-pointer transition-all duration-500 ease-in-out flex items-center h-[50px] w-full overflow-hidden rounded-[5px]">
              <div className="h-full w-[50px] overflow-hidden">
                <img src={playlistImg} alt="" className='w-full h-full object-cover' />
              </div>
              <div className="group-hover:bg-[var(--purple-light)] bg-[var(--purple-dark)] transition-all duration-300 ease-in-out h-full w-full px-[10px] flex items-center justify-between">
                <p className="text-[13px] font-semibold capitalize">igbo princess</p>
                <span className='hidden group-hover:flex h-[35px] w-[35px] transition-all duration-300 ease rounded-full bg-green-600 flex items-center justify-center shadow-lg'>
                  <Play fill="black" color='black' size={18} />
                </span>
              </div>
            </div>
          </div>

        </div>
      </header>

      <main className='mt-[50px] px-[25px] py-[7px]'>
        <div className="flex flex-col gap-[30px]">

          {/*pre saved albums (if there are any)*/}
          <div className="flex flex-col gap-[15px]">
            <div className="flex justify-between w-full">
              <h3 className="text-[22px] font-bold">Pre-save upcoming releases</h3>
              <Link to='showall' className=''>
                <p className="hover:border-b-[0.1px] border-white pb-0 font-light text-[13px] text-gray-400 font-semibold capitalize font-bold">show all</p>
              </Link>
            </div>
            {/* actual album that have been saved*/}
            <div className="group relative cursor-pointer hover:bg-[var(--grayed-2)] rounded-[7px] h-auto w-[200px] transition-all duration-300 ease p-[10px]">
              <div className="flex flex-col gap-[7px] relative">
                <div className="h-[60%] w-full shadow-xl overflow-hidden relative">
                  <img src={album} alt="" className='w-full h-full object-cover' />
                  <div className="group-hover:flex group-hover:animate-[slide-up_0.3s_ease-out_forwards] hidden hover:bg-green-400 hover:scale-105 absolute bottom-4 right-3 h-[40px] w-[40px] rounded-full flex justify-center items-center bg-green-600">
                    <Play fill='black' color='black' size={18} />
                  </div>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <Link className=''>
                    <p className="hover:border-b-[0.1px] border-white pb-0 font-light text-[14px] w-fit text-white capitalize font-bold">let that sink in (LTSI)</p>
                  </Link>
                  <Link className='text-light'>
                    <p className="hover:border-b-[0.1px] border-white pb-0 font-light text-[12px] w-fit text-gray-400 capitalize font-bold">phyno</p>
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* its new music friday*/}
          <div className="flex flex-col gap-[15px]">
            <div className="flex justify-between w-full">
              <h3 className="text-[22px] font-bold capitalize">it's new music friday!</h3>
              <Link to='showall' className=''>
                <p className="hover:border-b-[0.1px] border-white pb-0 font-light text-[13px] text-gray-400 font-semibold capitalize font-bold">show all</p>
              </Link>
            </div>

            {/* actual albums for new musicvfriday*/}
            {/* scroll wrapper */}
            <div className="overflow-x-auto overscroll-x-contain [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
              <div className="flex items-stretch gap-[20px]">

                {/* each album card */}
                <div className="group shrink-0 w-[200px] h-auto relative cursor-pointer hover:bg-[var(--grayed-2)] rounded-[7px] transition-all duration-300 ease p-[10px]">
                  <div className="flex flex-col gap-[7px] relative">
                    <div className="h-[60%] w-full shadow-xl overflow-hidden relative">
                      <img src={album} alt="" className='w-full h-full object-cover' />
                      <div className="group-hover:flex group-hover:animate-[slide-up_0.3s_ease-out_forwards] hidden hover:bg-green-400 hover:scale-105 absolute bottom-4 right-3 h-[40px] w-[40px] rounded-full flex justify-center items-center bg-green-600">
                        <Play fill='black' color='black' size={18} />
                      </div>
                    </div>
                    {/* writeup */}
                    <p className="font-light text-[13px] text-gray-400 font-bold line-clamp-2">
                      Expect music from Mavo, Kizz Daniel, Davido and so much more
                    </p>

                  </div>
                </div>


              </div>
            </div>

          </div>

          {/* recents*/}
          <div className="flex flex-col gap-[15px]">
            <div className="flex justify-between w-full">
              <h3 className="text-[22px] font-bold capitalize">recents</h3>
              <Link to='showall' className=''>
                <p className="hover:border-b-[0.1px] border-white pb-0 font-light text-[13px] text-gray-400 font-semibold capitalize font-bold">show all</p>
              </Link>
            </div>

            {/* actual albums for new musicvfriday*/}
            {/* scroll wrapper */}
            <div className="overflow-x-auto overscroll-x-contain [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
              <div className="flex items-stretch gap-[20px]">

                {/* each album card */}
                {/* 1st */}
                <div className="group shrink-0 w-[200px] h-[250px] relative cursor-pointer hover:bg-[var(--grayed-2)] rounded-[7px] transition-all duration-300 ease p-[10px]">
                  <div className="flex flex-col gap-[7px] relative h-full">

                    {/* liked songs cover */}
                    <div className="h-[70%] w-full shadow-xl overflow-hidden relative flex justify-center items-center bg-linear-to-b from-violet-600 to-teal-600">
                      <Heart fill='white' color='white' size={50}/>
                      <div className="group-hover:flex group-hover:animate-[slide-up_0.3s_ease-out_forwards] hidden hover:bg-green-400 hover:scale-105 absolute bottom-4 right-3 h-[40px] w-[40px] rounded-full justify-center items-center bg-green-600">
                        <Play fill='black' color='black' size={18} />
                      </div>
                    </div>

                    {/* writeup */}
                    <div className="flex flex-col">
                      <p className="font-light text-[16px] text-gray-100 font-bold capitalize truncate">
                        liked songs
                      </p>
                      <p className="font-light text-[14px] text-gray-400 font-bold truncate">
                        Playlist . Princessa Oluchi Prince-Okonye
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd */}
                <div className="group shrink-0 w-[200px] h-[250px] relative cursor-pointer hover:bg-[var(--grayed-2)] rounded-[7px] transition-all duration-300 ease p-[10px]">
                  <div className="flex flex-col gap-[7px] relative h-full">

                    <div className="h-[70%] w-full shadow-xl overflow-hidden relative">
                      <img src={playlistImg} alt="" className='w-full h-full object-cover' />
                      <div className="group-hover:flex group-hover:animate-[slide-up_0.3s_ease-out_forwards] hidden hover:bg-green-400 hover:scale-105 absolute bottom-4 right-3 h-[40px] w-[40px] rounded-full justify-center items-center bg-green-600">
                        <Play fill='black' color='black' size={18} />
                      </div>
                    </div>

                    {/* writeup */}
                    <div className="flex flex-col">
                      <p className="font-light text-[16px] text-gray-100 font-bold capitalize truncate">
                        IGBO PRINCESS
                      </p>
                      <p className="font-light text-[14px] text-gray-400 font-bold truncate">
                        Playlist . Princessa Oluchi Prince-Okonye
                      </p>
                    </div>

                  </div>
                </div>


              </div>
            </div>

          </div>

        </div>

      </main>


    </div>
  )
}

export default Home