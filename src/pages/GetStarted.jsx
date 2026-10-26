import React from 'react'
import logo from '../images/spotify.png'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-linear-to-b from-green-600 to-black h-screen w-full'>
            <div className="h-full flex flex-col px-[20px] pt-[30px] pb-[40px]">

                {/* logo and text take the leftover space and center inside it */}
                <div className="flex-1 flex flex-col gap-[20px] justify-center items-center">
                    <div className="w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img src={logo} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="flex flex-col leading-[40px] text-center">
                        <h1 className="text-white font-bold text-[30px]">Millions of songs.</h1>
                        <h1 className="text-white font-bold text-[30px]">Free on Spotify.</h1>
                    </div>
                </div>

                {/* button at the bottom */}
                <button
                    onClick={() => navigate("/login")}
                    className="w-full max-w-[400px] mx-auto py-[14px] cursor-pointer hover:bg-green-400 hover:scale-105 bg-green-500 hover:text-white rounded-[25px] capitalize font-bold transition-all duration-500 ease">
                    get started
                </button>

            </div>
        </div>
    )
}

export default GetStarted