import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/vcart logo.png';
import google from '../assets/google.png';
import { AuthDataContext } from '../context/AuthContext'; // ✅ Correct context name

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { serverUrl } = useContext(AuthDataContext); // ✅ Destructure from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/login`, // ✅ Correct path
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      // Optionally redirect or set auth state here
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center'>

      {/* Logo */}
      <div className='w-full h-[70px] flex items-center justify-start px-6 gap-3 cursor-pointer' onClick={() => navigate('/')}>
        <img src={Logo} alt="logo" className='w-10 sm:w-12' />
        <h1 className='text-xl sm:text-2xl font-sans font-semibold'>OneCart</h1>
      </div>

      {/* Heading */}
      <div className='w-full flex flex-col items-center mt-6 text-center px-4'>
        <span className='text-2xl sm:text-3xl font-semibold'>Login</span>
        <span className='text-sm sm:text-base mt-2 text-gray-300'>
          Welcome back! Login to OneCart
        </span>
      </div>

      {/* Form Box */}
      <div className='w-[90%] max-w-[500px] mt-6 bg-[#00000025] border border-[#96969635] backdrop-blur-md rounded-xl shadow-xl px-6 py-8'>
        <form  onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-6'>

          {/* Google Auth Button */}
          <div className='w-full bg-[#42656cae] hover:bg-[#3c5a5a] rounded-lg flex items-center justify-center gap-3 py-3 cursor-pointer transition duration-200'>
            <img src={google} alt="" className='w-5 h-5' />
            <span className='text-sm sm:text-base'>Login with Google</span>
          </div>

          {/* Divider */}
          <div className='w-full flex items-center justify-center gap-3 text-gray-400 text-sm'>
            <div className='w-[40%] h-px bg-[#96969635]'></div>
            <span>OR</span>
            <div className='w-[40%] h-px bg-[#96969635]'></div>
          </div>

          {/* Input Fields */}
          <div className='w-full flex flex-col items-center gap-4'>
            <input
              type="email"
              placeholder='Email'
              required
              className='w-full h-12 border border-[#96969635] backdrop-blur-sm rounded-lg shadow bg-transparent placeholder-[#ffffffc7] px-4 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#4a63fa]'
              onChange={(e)=>setemail(e.target.value)} value={email}
            />
            <input
              type="password"
              placeholder='Password'
              required
              className='w-full h-12 border border-[#96969635] backdrop-blur-sm rounded-lg shadow bg-transparent placeholder-[#ffffffc7] px-4 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#4a63fa]'
              onChange={(e)=>setpassword(e.target.value)} value={password}
            />

            <button
              type="submit"
              className='w-full h-12 bg-[#6060f5] hover:bg-[#4949f1] text-white font-semibold text-sm rounded-lg shadow-md transition duration-200'
            >
              Login
            </button>

            <p className='text-sm flex gap-2 text-center'>
              Don't have an account?
              <span
                className='text-[#5555f6cf] hover:text-[#7777f9] font-semibold cursor-pointer transition'
                onClick={() => navigate('/register')}
              >
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
