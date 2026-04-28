import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const About = () => {
  return (
   
    <div className='md:mx-10 my-16'>
  {/* --- Header Section --- */}
  <div className='text-center text-2xl md:text-3xl pt-5 font-bold text-slate-900'>
    <p>ABOUT <span className='text-emerald-500'>US</span></p>
    <div className='h-1.5 w-16 bg-emerald-500 rounded-full mx-auto mt-2'></div>
  </div>

  {/* --- Content Section --- */}
  <div className='my-16 flex flex-col md:flex-row gap-12 lg:gap-24 items-center'>
    
    {/* LEFT SIDE → IMAGE (With Premium Styling) */}
    <div className='w-full md:max-w-[420px] relative group'>
      {/* Decorative background shape */}
      <div className='absolute -top-4 -left-4 w-full h-full border-2 border-emerald-100 rounded-2xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500'></div>
      
      <img 
        className='w-full rounded-2xl shadow-2xl shadow-slate-200 object-cover' 
        src={assets.about_image} 
        alt="About Us image" 
      />
    </div>

    {/* RIGHT SIDE → TEXT CONTENT */}
    <div className='flex flex-col justify-center gap-8 md:w-2/4 text-slate-600'>
      <div className='flex flex-col gap-4'>
        <p className='text-lg font-medium text-slate-800 leading-relaxed'>
          Welcome to <span className='text-emerald-600 font-bold'>MediConnect</span>! We are dedicated to providing the best healthcare services to our patients through our trusted network.
        </p>
        <p className='leading-7 text-[15px]'>
          Our team of experienced professionals is committed to delivering personalized care and ensuring the well-being of every patient. We bridge the gap between world-class doctors and your health needs.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <div className='bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500 hover:shadow-lg transition-all duration-300'>
          <b className='text-slate-900 text-lg block mb-2 tracking-tight'>Our Vision</b>
          <p className='text-sm leading-6'>To be a leading healthcare provider, known for our compassionate care and innovative treatments across the globe.</p>
        </div>

        <div className='bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500 hover:shadow-lg transition-all duration-300'>
          <b className='text-slate-900 text-lg block mb-2 tracking-tight'>Our Mission</b>
          <p className='text-sm leading-6'>To improve the health and lives of our patients through exceptional medical care and a patient-centered approach.</p>
        </div>
      </div>
    </div>
  </div>
<div className='md:mx-10 my-20'>
  {/* --- Section Title --- */}
  <div className='flex items-center gap-3 mb-12'>
    <p className='text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-tight'>
      Why <span className='text-emerald-500'>Choose Us</span>
    </p>
    <div className='flex-1 h-[2px] bg-slate-200'></div>
  </div>

  {/* --- Features Grid --- */}
  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
    
    {/* Feature 1 */}
    <div className='group p-8 rounded-3xl border border-slate-100 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-500 cursor-pointer relative overflow-hidden'>
      {/* Decorative Gradient Background (Halka sa glow) */}
      <div className='absolute -right-4 -top-4 w-24 h-24 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-all'></div>
      
      <div className='w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm'>
        🩺
      </div>
      
      <div className='mt-8'>
        <b className='text-slate-900 text-xl group-hover:text-emerald-600 transition-all duration-300 tracking-tight'>Expert Medical Care</b>
        <p className='text-slate-500 text-sm leading-7 mt-3 group-hover:text-slate-600 transition-all'>
          Our team of experienced professionals provides top-notch medical services tailored to your specific health needs and goals.
        </p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className='group p-8 rounded-3xl border border-slate-100 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-500 cursor-pointer relative overflow-hidden'>
      <div className='absolute -right-4 -top-4 w-24 h-24 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-all'></div>
      
      <div className='w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm'>
        🤝
      </div>
      
      <div className='mt-8'>
        <b className='text-slate-900 text-xl group-hover:text-emerald-600 transition-all duration-300 tracking-tight'>Personalized Treatment</b>
        <p className='text-slate-500 text-sm leading-7 mt-3 group-hover:text-slate-600 transition-all'>
          We believe in a patient-centered approach, ensuring each individual receives customized care plan for better recovery.
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className='group p-8 rounded-3xl border border-slate-100 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-500 cursor-pointer relative overflow-hidden'>
      <div className='absolute -right-4 -top-4 w-24 h-24 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-all'></div>
      
      <div className='w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm'>
        📅
      </div>
      
      <div className='mt-8'>
        <b className='text-slate-900 text-xl group-hover:text-emerald-600 transition-all duration-300 tracking-tight'>Convenient Access</b>
        <p className='text-slate-500 text-sm leading-7 mt-3 group-hover:text-slate-600 transition-all'>
          We provide easy access to healthcare services with flexible appointment scheduling and various locations for your ease.
        </p>
      </div>
    </div>

  </div>
</div>
  </div>
  )
}

export default About
