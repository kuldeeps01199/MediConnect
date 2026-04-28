import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
   <div className='md:mx-10 my-16'>
  
  {/* --- Header Section --- */}
  <div className='text-center text-2xl md:text-3xl pt-10 font-bold text-slate-900'>
    <p>CONTACT <span className='text-emerald-500'>US</span></p>
    <div className='h-1.5 w-16 bg-emerald-500 rounded-full mx-auto mt-2'></div>
  </div>

  {/* --- Contact Content Section --- */}
  <div className='my-16 flex flex-col md:flex-row gap-12 lg:gap-24 items-center justify-center'>
    
    {/* LEFT SIDE → IMAGE */}
    <div className='w-full md:max-w-[380px] relative group'>
      {/* Decorative box behind image */}
      <div className='absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-100 rounded-2xl -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-500'></div>
      
      <img 
        className='w-full rounded-2xl shadow-2xl shadow-slate-200 object-cover border-4 border-white' 
        src={assets.contact_image} 
        alt="contact image" 
      />
    </div>

    {/* RIGHT SIDE → CONTACT DETAILS */}
    <div className='flex flex-col justify-center gap-8 md:w-2/5'>
      
      {/* Office Details */}
      <div className='flex flex-col gap-4'>
        <p className='text-xl font-bold text-slate-800 tracking-tight'>OUR <span className='text-emerald-600'>OFFICE</span></p>
        <div className='flex flex-col gap-1 text-slate-500 text-[15px] leading-relaxed'>
          <p>123 Main Street, Suite 500</p>
          <p>City, State - 12345</p>
        </div>
        <div className='flex flex-col gap-1 text-slate-500 text-[15px]'>
          <p className='hover:text-emerald-600 cursor-pointer transition-colors font-medium'>Tel: +1-212-456-7890</p>
          <p className='hover:text-emerald-600 cursor-pointer transition-colors font-medium'>Email: info@mediconnect.com</p>
        </div>
      </div>

      {/* Careers Section */}
      <div className='flex flex-col gap-4 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm'>
        <p className='text-lg font-bold text-slate-800 uppercase tracking-wider'>Careers at <span className='text-emerald-600'>MEDICONNECT</span></p>
        <p className='text-slate-500 text-sm leading-6'>
          Learn more about our company culture and current job openings. We're always looking for talent.
        </p>
        
        <button className='w-fit border border-slate-900 px-8 py-4 text-sm font-bold rounded-xl bg-slate-900 text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-emerald-200'>
          Explore Jobs
        </button>
      </div>

    </div>
  </div>
</div>
  )
}

export default Contact
