import React, { useState } from 'react'
import musicCover from '../images/music-cover.jpeg'
import { Logs, Maximize, MicVocal, Minimize, MonitorSpeaker, Pause, Play, PlusCircle, Repeat, Shuffle, SkipBack, SkipForward, Volume, Volume2, VolumeOff, VolumeX } from 'lucide-react'

const MusicStatusbar = ({ song }) => {

  const [play, setPlay] = useState(false)
  const [volume, setVolume] = useState(true)

  return (
    <div className="shrink-0 h-[80px] bg-black px-[20px] flex items-center justify-between w-full">
      {/* image of the song playing, artist, title and add to favorite*/}
      <div className="flex items-center gap-[25px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[55px] w-[55px] overflow-hidden rounded-[5px]">
            <img src={musicCover} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-200 text-[14px] capitalize">Bolanle</h3>
            <p className="text-gray-400 text-xs">Zlatan Ibile</p>
          </div>
        </div>
        <PlusCircle className='hover:text-white text-gray-400 cursor-pointer' size={20} />
      </div>

      {/* music playing side */}
      <div className="flex flex-col gap-[5px] items-center justify-center">
        {/*all icons needed*/}
        <div className="flex items-center justify-center gap-[20px] text-gray-400  max-w-[60%] w-[300px]">
          <Shuffle size={20} className='hover:text-white hover:scale-105 transition-all duration-300 ease' />
          <SkipBack size={20} className='hover:text-white hover:scale-105 transition-all duration-300 ease' />
          {/*Play button*/}
          <span
            onClick={() => {
              setPlay(!play)
            }}
            className="flex group hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-sm  items-center justify-center shrink-0 size-[35px] rounded-full bg-white">
            {play ? <Pause color='black' fill='black' size={15} />
              : <Play color='black' fill='black' size={15} />
            }
          </span>
          <SkipForward size={20} className='hover:text-white hover:scale-105 transition-all duration-300 ease' />
          <Repeat size={20} className='hover:text-white hover:scale-105 transition-all duration-300 ease' />
        </div>
        {/* music playing itself*/}
        <div className="flex gap-[10px] items-center w-[500px]">
          <span className="text-xs text-gray-400">0:00</span>
          <span className="p-[2px] w-[95%] bg-gray-400 rounded-[5px]"></span>
          <span className="text-xs text-gray-400">3:24</span>
        </div>

      </div>

      {/* the right end of the screen*/}
      <div className="flex items-center gap-[12px]">
        <MicVocal size={20} className='text-gray-400 hover:text-white hover:scale-105 cursor-pointer transition-all duration-300 ease' />
        <Logs size={20} className='text-gray-400 hover:text-white hover:scale-105 cursor-pointer transition-all duration-300 ease' />
        <MonitorSpeaker size={20} className='text-gray-400 hover:text-white hover:scale-105 cursor-pointer transition-all duration-300 ease' />
        <div className="flex items-center gap-[8px] w-[130px]">
          <div onClick={() => {
            setVolume(!volume)
          }}>
            {volume ? <Volume2 size={20} className="shrink-0 hover:text-white cursor-pointer hover:scale-105 text-gray-400" />
              : <VolumeX size={20} className="shrink-0 hover:text-white cursor-pointer hover:scale-105 text-gray-400" />
            }

          </div>
          {/* volume button */}
          {/* volume button */}
          <div className={`group h-[4px] relative cursor-pointer flex-1 flex items-center rounded-full bg-gray-500 transition-colors duration-300 ${volume ? '' : 'hover:bg-gray-400'}`}>
            {/* the filled part: full when sound is on, shrinks to nothing when muted */}
            <span className={`${volume ? 'w-full bg-white group-hover:bg-green-400' : 'w-0'} block h-full rounded-full transition-all duration-500 ease-in-out`}></span>

            {/* the circle: only shows on hover, sits at the right when sound is on and slides to the left when muted */}
            <span className={`${volume ? 'left-[calc(100%_-_15px)]' : 'left-0'} absolute top-1/2 -translate-y-1/2 h-[15px] w-[15px] rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out`}></span>
          </div>
        </div>
        <Minimize size={20} className='text-gray-400 hover:text-white hover:scale-105 cursor-pointer transition-all duration-300 ease' />
        <Maximize size={20} className='text-gray-400 hover:text-white hover:scale-105 cursor-pointer transition-all duration-300 ease' />

      </div>

    </div>
  )
}

export default MusicStatusbar