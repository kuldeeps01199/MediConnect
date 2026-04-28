import React from 'react'

import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
const navigate = useNavigate();

  return (
<div className='flex bg-[#f0fdf4] border border-emerald-100 rounded-[2.5rem] px-6 sm:px-14 md:px-14 lg:px-12 my-20 md:mx-10 relative overflow-hidden shadow-sm'>
    
    {/* Soft Emerald Glow in Background */}
    <div className='absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl'></div>
    <div className='absolute top-0 right-1/4 w-32 h-32 bg-emerald-100/60 rounded-full blur-2xl'></div>

    {/* Banner Left Side */}
    <div className='flex-1 py-12 md:py-20 relative z-10'>
        <div className='inline-flex items-center gap-2 bg-white border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-sm'>
            <span className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></span>
            Fast & Easy Booking
        </div>
        
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]'>
            Ready to Start Your <br /> 
            <span className='text-emerald-600'>Healthy Journey?</span>
        </h2>
        
        <p className='text-slate-600 mt-6 text-base md:text-lg max-w-md leading-relaxed font-medium'>
            Connect with 100+ verified specialists today. Your better health is just a few clicks away.
        </p>

        <button 
            onClick={() => { navigate(`/login`); window.scrollTo(0, 0) }}  
            className='group flex items-center gap-3 bg-slate-900 text-white text-sm sm:text-base hover:bg-emerald-600 font-bold py-4 px-12 rounded-2xl mt-10 transition-all duration-500 shadow-xl hover:shadow-emerald-200 active:scale-95'
        >
            Create Account
            <img className='w-3 invert group-hover:translate-x-2 transition-transform' src={assets.arrow_icon} alt="" />
        </button>
        
    </div>

    {/* Banner Right Side */}
    <div className='hidden md:flex md:w-1/2 lg:w-[420px] relative items-end'>
        {/* Subtle Green Circle behind Image */}
        <div className='absolute w-[300px] h-[300px] bg-emerald-100/80 rounded-full blur-xl mb-10'></div>
        
        <img 
            className='w-full h-auto object-contain relative z-10 drop-shadow-[-20px_20px_40px_rgba(0,0,0,0.1)]' 
            src={assets.appointment_img} 
            alt="appointment_img" 
        />
    </div>
</div>
  )
}

export default Banner

   