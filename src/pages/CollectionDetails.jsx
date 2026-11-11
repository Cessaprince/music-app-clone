import { ArrowDown01Icon, CircleAlertIcon, CircleArrowDown, Clock, Heart, List, Play, Shuffle } from 'lucide-react'
import React, { useState } from 'react'
import { useParams, useOutletContext, NavLink } from 'react-router-dom'
import avatar from '../images/avatar.jpeg'
import album from '../images/missing-piece.jpeg'
import albumCover from '../images/music-cover.jpeg'

const CollectionDetails = () => {

  const { type } = useParams()
  const title = type.replace(/-/g, ' ')
  const { openSong } = useOutletContext()
  const songs = [
    { id: 1, title: 'MiSSIN PIECE', album: 'STARLIFE', dateAdded: '2 weeks ago', duration: '2:45', artist: 'Victony' },
    { id: 2, title: 'All For You', album: 'Love & Light', dateAdded: '2 weeks ago', duration: '2:38', artist: 'Victony', cover: albumCover },
  ]
  //for the pipe operator that will show when you hover the header in the table
  const dividerClass = "h-[16px] w-px bg-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  const [activeSong, setActiveSong] = useState(null)

  return (
    <div className='rounded-[10px] overflow-y-auto h-full'>

      {/* header part */}
      <div className="flex items-end gap-[20px] border-b-[0.11px] border-black p-[30px] bg-[var(--purple-bg2)]">
        {/*liked songs diagram*/}
        <div className={`${openSong ? 'h-[150px] w-[150px]' : 'h-[250px] w-[250px]'} bg-linear-to-b from-purple-600 to-teal-500 flex items-center justify-center rounded-[5px]`}>
          <Heart fill='white' size={60} color='white' />
        </div>
        <div className="flex flex-col">
          <p className="font-light leading-0 capitalize text-gray-200 text-[15px]">playlist</p>
          <h1 className={`font-black text-gray-200 ${openSong ? 'text-[60px]' : 'text-[90px]'} capitalize`}>{title}</h1>
          <div className="flex gap-[10px] items-center">
            <div className="flex gap-[3px] items-center">
              <div className={`h-[30px] w-[30px] ${openSong ? 'h-[20px] w-[30px]' : 'h-[30px] w-[30px]'} overflow-hidden rounded-full`}>
                <img src={avatar} alt="" className="w-full h-full object-cover" />
              </div>
              <p className={`${openSong ? 'text-[12px]' : 'text-[14px]'} font-bold text-gray-200 capitalize`}>Princessa Oluchi Prince-Okonye</p>

            </div>

            <p className={`${openSong ? 'text-[12px]' : 'text-[14px]'} text-gray-400 font-light `}>• 391 songs, about 20 hours.</p>
          </div>
        </div>

      </div>

      {/*play icon, reshuffle, download and list as */}

      <div className="flex flex-col gap-[20px] p-[30px] h-full bg-linear-to-b from-[var(--purple-bg)] to-[var(--sidebar-gray)]">
        <div className="flex justify-between w-full items-center ">
          <div className="flex items-center gap-[20px]">
            {/* play*/}
            <div className="rounded-full h-[50px] w-[50px] flex items-center justify-center bg-green-500 hover:scale-105 hover:bg-green-400 cursor-pointer transition-all duration-300 ease">
              <Play fill='black' className='text-black' size={18} />
            </div>
            <Shuffle className='hover:scale-105 transition-all text-gray-400 hover:text-white cursor-pointer' size={30} />
            <CircleArrowDown className='text-gray-400 hover:text-white cursor-pointer' size={30} />
          </div>

          <div className="flex items-center group cursor-pointer gap-[7px]">
            <span className="font-light text-sm text-gray-300 group-hover:text-white capitalize">
              list
            </span>
            <List className='text-gray-300 group-hover:text-white' size={18} />
          </div>

        </div>

        {/* the table */}
        <table className="w-full table-fixed text-[14px]">

          {/* header: hover on the row to see the | dividers */}
          <thead className='w-full'>
            <tr className="group text-gray-400">
              <th className="w-[50px] px-[16px] py-[8px] text-left font-normal">#</th>
              <th className="w-[45%] px-[16px] py-[8px] text-left font-normal">Title</th>

              <th className="py-[8px] px-[5px] text-left font-normal">
                <div className="flex items-center gap-[10px]">
                  <span className={dividerClass} />
                  Album
                </div>
              </th>

              {/* hidden when the song side is open */}
              {!openSong && (
                <th className="px-[5px] text-left font-normal">
                  <div className="flex items-center gap-[10px]">
                    <span className={dividerClass} />
                    Date added
                  </div>
                </th>
              )}

              <th className="py-[8px] font-normal">
                <div className="flex items-center justify-between gap-[10px] pr-[20px]">
                  <span className={dividerClass} />
                  <Clock size={16} />
                </div>
              </th>
            </tr>
          </thead>

          {/* song rows */}
          <tbody>
            {songs.map((song, index) => (
              <tr
                key={song.id}
                onClick={() => setActiveSong(song.id)}
                className={`${activeSong === song.id ? 'bg-[var(--purple-bg)]' : ''} 'bg-[var(--purple-bg2)]':''} cursor-pointer group text-gray-400 hover:bg-[var(--purple-dark)] hover:text-white transition-all duration-300 [&>td:first-child]:rounded-l-[5px] [&>td:last-child]:rounded-r-[5px]`}
              >
                <td className="w-[48px] px-[16px] py-[10px]">
                  <div className="flex items-center justify-center">
                    <span className="group-hover:hidden">{index + 1}</span>
                    <Play size={20} fill="white" color="white" className="hidden group-hover:block" />
                  </div>
                </td>

                <td className="px-[16px] py-[8px] text-white font-semibold">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-[50px] w-[50px] shrink-0 overflow-hidden rounded">
                      <img
                        src={song.cover || album}
                        alt={song.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start min-w-0">
                      <p className="text-[14px] capitalize truncate w-full">{song.title}</p>
                      {song.artist && (
                        <span className="text-[14px] text-gray-400 font-normal truncate w-full">
                          {song.artist}
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                <td className="px-[16px] py-[8px] capitalize truncate max-w-[180px]">{song.album}</td>
                {!openSong && <td className="px-[16px] py-[8px] truncate">{song.dateAdded}</td>}
                <td className="px-[16px] py-[8px] text-right">{song.duration}</td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default CollectionDetails