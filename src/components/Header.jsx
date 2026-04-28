import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (

<div className='flex flex-col md:flex-row flex-wrap bg-[#F0F4F8] border border-white rounded-3xl px-6 md:px-10 lg:px-20 relative overflow-hidden shadow-sm'>
    
    {/* --------- Left Side --------- */}
    <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 m-auto md:py-[10vw] relative z-10'>
        
        {/* Unique Tagline Badge */}
        <div className='flex items-center gap-2 bg-green-100 text-green-700 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full'>
            <span className='w-2 h-2 bg-green-500 rounded-full animate-ping'></span>
            Trusted Healthcare
        </div>
        
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-slate-800 font-extrabold leading-[1.1] tracking-tight'>
            Your Health, <br /> <span className='text-emerald-500'>Our Priority.</span>
        </h1>
        
        <p className='text-slate-600 text-base md:text-lg max-w-md leading-relaxed'>
            Connect with top-rated specialists within minutes. High-quality care from the comfort of your home.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-5 mt-4'>
            {/* Dark Styled Button */}
            <a href="#speciality" className='group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl text-sm font-semibold hover:bg-emerald-600 transition-all duration-500 shadow-xl'>
                Book Appointment 
                <img className='w-3 group-hover:translate-x-1 transition-transform invert' src={assets.arrow_icon} alt="" />
            </a>
            
            {/* Social Proof Section */}
            <div className='flex items-center gap-3'>
                <img className='w-24' src={assets.group_profiles} alt="" />
                <div className='flex flex-col'>
                    <span className='text-slate-900 font-bold text-sm'>10k+ Patients</span>
                    <span className='text-slate-500 text-[10px]'>Consulted this month</span>
                </div>
            </div>
        </div>
    </div>

    {/* --------- Right Side --------- */}
    <div className='md:w-1/2 relative flex items-end justify-center pt-10 md:pt-0'>
        {/* Background Soft Decoration - Circle */}
        <div className='absolute w-[350px] h-[350px] bg-emerald-100/50 rounded-full blur-3xl -bottom-10 -right-10 z-0'></div>
        
        <img 
            className='w-[85%] relative z-10 h-auto object-contain drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.1)]' 
            src={assets.header_img} 
            alt="doctor" 
        />
    </div>
</div>
  )
}

export default Header
