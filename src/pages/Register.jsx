import React from 'react'
import logo from '../images/spotify.png'
import { EyeClosed } from 'lucide-react'
import { Link } from 'react-router-dom'
import googleLogo from '../images/google.jpeg'
import facebookLogo from '../images/facebookLogo.jpeg'
import appleLogo from '../images/apple.jpeg'

const Register = () => {
  return (
    <div className='bg-linear-to-b from-green-600 to-black min-h-screen w-full px-[10px]'>

      {/* register container*/}
      <div className="min-h-screen flex flex-col px-[20px] pb-[40px] pt-[30px] items-center">
        {/* logo and write up*/}
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
            <img src={logo} alt="" className="h-full w-full object-cover" />
          </div>
          <h3 className="text-gray-100 max-w-[270px] text-center text-[28px] leading-[35px] font-semibold">Your number one music platform.</h3>
        </div>

        {/* register form*/}
        <form action="" className='flex flex-col justify-center max-w-[400px] w-[90%] mt-[50px] gap-[20px] '>

          {/* each input*/}
          <div className="flex flex-col gap-[4px]">
            <label htmlFor="email" className='text-gray-100 capitalize font-semibold text-[14px] max-md:text-[12px]'>email</label>
            <input type="email" className='w-full py-[9px] px-[20px] bg-white rounded-[30px] outline-none text-gray-900 text-[14px]' placeholder='example@gmail.com' />
          </div>

          <div className="flex flex-col gap-[4px]">
            <label htmlFor="phoneNumber" className='text-gray-100 capitalize font-semibold text-[14px] max-md:text-[12px]'>Phone Number</label>
            <input type="tel" className='w-full py-[9px] px-[20px] bg-white rounded-[30px] outline-none text-gray-900 text-[14px]' placeholder='0902-389-9735' />
          </div>

          <div className="flex flex-col gap-[5px]">
            <label htmlFor="emailOrPhone" className='text-gray-100 capitalize font-semibold text-[14px] max-md:text-[12px]'>password</label>

            <div className="flex justify-between w-full items-center bg-white rounded-[30px] px-[20px]">
              <input type="password" className='w-[80%] py-[10px] outline-none text-gray-900 text-[14px]' placeholder='*********' />
              <EyeClosed size={18} color='gray' />
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="emailOrPhone" className='text-gray-100 capitalize font-semibold text-[14px] max-md:text-[12px]'>confirm password</label>

            <div className="flex justify-between w-full items-center bg-white rounded-[30px] px-[20px]">
              <input type="password" className='w-[80%] py-[10px] outline-none text-gray-900 text-[14px]' placeholder='*********' />
              <EyeClosed size={18} color='gray' />
            </div>
          </div>


          {/* login button */}
          <button className="max-md:text-[13px] mt-[25px] bg-green-500 w-full max-w-[300px] mx-auto py-[10px] rounded-[35px] cursor-pointer text-[15px] font-semibold capitalize hover:text-white hover:bg-green-400 hover:scale-105 transition-all duration-500 ease-in-out">
            register
          </button>

          <div className="flex flex-col items-center justify-center gap-[10px]">
            <p className="text-green-400 text-[13px] ">or Continue with</p>
            <div className="flex items-center gap-[12px]">
              {/* google, facebook and apple*/}
              <div className="group hover:scale-95 cursor-pointer h-[40px] w-[40px] overflow-hidden rounded-full">
                <img src={googleLogo} alt="" className='w-full h-full object-cover' />
              </div>
              <div className="group hover:scale-95 cursor-pointer h-[40px] w-[40px] overflow-hidden rounded-full">
                <img src={appleLogo} alt="" className='w-full h-full object-cover' />
              </div>
              <div className="group hover:scale-95 cursor-pointer h-[40px] w-[40px] overflow-hidden rounded-full">
                <img src={facebookLogo} alt="" className='w-full h-full object-cover' />
              </div>


            </div>

            <div className="mt-[15px] text-center">
              <p className="text-[14px] text-gray-100">Have an account? <Link to='/login' className='text-green-300 hover:text-green-200'>Login</Link></p>

            </div>
          </div>


        </form>

      </div>
    </div>
  )
}

export default Register