import React from 'react'
import musicImg from '../images/music-cover.jpeg'
import { PlusCircle, ShareIcon } from 'lucide-react'

const MusicSidebar = () => {
  return (
    <div className='w-full flex flex-col gap-[15px]'>
      <div className="h-[400px] w-full overflow-hidden rounded-[10px]">
        <img src={musicImg} alt="" className='h-full w-full object-cover' />
      </div>
      {/* song and singer*/}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col leading-[22px]">
          <h1 className='text-white capitalize font-bold text-[21px]'>bolanle - pepper dem</h1>
          <p className="capitalize text-gray-300 text-[14px]">zlatan ibile</p>
        </div>
        <div className="flex gap-[10px] items-center">
          <ShareIcon size={20} />
          <PlusCircle size={20} />
        </div>
      </div>
      {/*lyrics preview*/}
      <div className="bg-red-800 flex flex-col gap-[10px] p-[20px] w-full h-[150px] rounded-[10px]">
        <h3 className="text-white font-semibold">Lyrics preview</h3>
        {/* lyrics*/}
        <div className="text-red-300 font-semibold text-[22px]">
          Pepper dem, Pepper dem o
        </div>

      </div>


    </div>
  )
}

export default MusicSidebar