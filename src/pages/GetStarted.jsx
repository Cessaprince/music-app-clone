import React from 'react'
import logo from '../images/spotify.png'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-linear-to-b from-green-500 to-black h-screen w-screen'>
            <div className="min-h-screen flex flex-col gap-[20px] justify-center items-center">
                <div className="w-[60px] h-[60px] overflow-hidden rounded-full">
                    <img src={logo} alt="" className='w-full-h-full object-cover' />
                </div>
                <div className="flex flex-col leading-[40px] text-center">
                    <h1 className="text-white font-bold text-[30px]">Millions of songs.</h1>
                    <h1 className="text-white font-bold text-[30px]">Free on Spotify.</h1>
                </div>
                <button 
                onClick={()=>{
                    navigate("/login")
                }}
                className="w-fit px-[50px] py-[12px] mt-[100px] cursor-pointer hover:bg-green-400 hover:scale-105 bg-green-500 rounded-[25px] capitalize font-bold">get started</button>

            </div>

        </div>
    )
}

export default GetStarted