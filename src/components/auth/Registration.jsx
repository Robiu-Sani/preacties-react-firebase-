import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";

export default function Registration() {
  const [showpassword, setShowPAsswoed] = useState(false)

  const handleShowPAssword = () => {
    setShowPAsswoed(!showpassword)
  }


  return (
    <div className='w-full px-2 py-10 bg-gray-100'>
        <Helmet>
            <title>web | registrations</title>
        </Helmet>
        <form className="p-10 rounded-md shadow-md bg-white w-[calc(100%-20px)] mx-[10px] sm:mx-auto sm:w-[450px]">
        <h1 className='text-center text-3xl text-black font-bold my-5'>Registration</h1>
        <input type="text" placeholder='Enter Your Name' name='name' className=' mb-8 input bg-gray-200 w-full'/>
        <input type="email" placeholder='Enter Your Email' name='email' className=' mb-8 input bg-gray-200 w-full'/>
        <label className='w-full relative'>
          <input type={showpassword ? `text` : `password`} placeholder='Enter Your Password' name='password' className='input bg-gray-200 w-full'/>
          <span onClick={handleShowPAssword} className='absolute top-[1px] right-3 text-xl cursor-pointer'>
            {showpassword ? <FaEye /> : <FaEyeSlash />}    
          </span>
        </label>
        <div className="w-full flex justify-around items-center p-5">
          <FaFacebook className='text-4xl cursor-pointer'/>
          <AiFillGoogleCircle className='text-4xl cursor-pointer'/>
          <IoLogoGithub className='text-4xl cursor-pointer'/>
          <AiFillTwitterCircle className='text-4xl cursor-pointer'/>
        </div>
        <input type="submit" className='text-white cursor-pointer input bg-blue-400 w-full'/>
        <small className='m-3'>I have an account <Link to='/login' className='text-blue-500 underline'>Login</Link></small>
      </form>
    </div>
  )
}
