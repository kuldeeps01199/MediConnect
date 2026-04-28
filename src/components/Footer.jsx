import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    // <div className='md:mx-8'>
    //   <div className='flex flex-col sm:grid grid-cols-[3fr_1.5fr_1fr] gap-5 my-10 mt-30 text-sm'>
    //     {/* Footer left content */}
    //     <div>
    //       <img className='mb-5 w-40' src={assets.logo} alt="logo img" />
    //       <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos vitae repellat rem a incidunt nesciunt optio voluptas labore laboriosam voluptate?</p>
    //     </div>
    //     {/* Footer center content */}
    //     <div>
    //         <p className='text-xl font-medium mb-5'>COMPANY </p>
    //         <ul className='flex flex-col gap-2 text-gray-600'>
    //           <li>Home</li>
    //           <li>About Us</li>
    //           <li>Services</li>
    //           <li>Privacy Policy</li>
    //         </ul>
    //     </div>
    //     {/* Footer right content */}
    //     <div>
    //       <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    //       <ul className='flex flex-col gap-2 text-gray-600'>
    //         <li>123 Main Street</li>
    //         <li>City, State 12345</li>
    //         <li> (123) 456-7890</li>
    //         <li>info@company.com</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <hr />
    //   <div>
    //     <p className='text-sm text-center py-5'> 2026© MediConnect. All rights reserved.</p>
    //   </div>
    // </div>
    <div className='md:mx-10 mt-24 border-t border-slate-100 pt-16 pb-8'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 my-10 text-sm'>
        
        {/* --- LEFT SIDE --- */}
        <div className='flex flex-col gap-6'>
            <img className='w-44 rounded-md' src={assets.logo} alt="logo" />
            <p className='w-full md:w-4/5 text-slate-500 leading-7'>
                Experience the future of healthcare with our trusted network of specialists. 
                Connecting patients with top-rated medical professionals.
            </p>
            {/* Social Icons - Inhe Emerald hover effect diya hai */}
            <div className='flex gap-4'>
               <div className='w-9 h-9 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 cursor-pointer transition-all duration-300 shadow-sm font-bold'>f</div>
               <div className='w-9 h-9 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 cursor-pointer transition-all duration-300 shadow-sm font-bold'>x</div>
               <div className='w-9 h-9 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 cursor-pointer transition-all duration-300 shadow-sm font-bold'>in</div>
            </div>
        </div>

        {/* --- CENTER SIDE --- */}
        <div>
            <p className='text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider'>Company</p>
            <ul className='flex flex-col gap-3 text-slate-600 font-medium'>
                <li className='hover:text-emerald-600 hover:translate-x-1 cursor-pointer transition-all duration-300'>Home</li>
                <li className='hover:text-emerald-600 hover:translate-x-1 cursor-pointer transition-all duration-300'>About us</li>
                <li className='hover:text-emerald-600 hover:translate-x-1 cursor-pointer transition-all duration-300'>Services</li>
                <li className='hover:text-emerald-600 hover:translate-x-1 cursor-pointer transition-all duration-300'>Privacy policy</li>
            </ul>
        </div>

        {/* --- RIGHT SIDE --- */}
        <div>
            <p className='text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider'>Get In Touch</p>
            <ul className='flex flex-col gap-4 text-slate-600 font-medium'>
                <li className='flex items-center gap-3 hover:text-emerald-600 cursor-pointer transition-all'>
                    <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-[10px]">📞</span>
                    +1-212-456-7890
                </li>
                <li className='flex items-center gap-3 hover:text-emerald-600 cursor-pointer transition-all'>
                    <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-[10px]">✉️</span>
                    info@mediconnect.com
                </li>
                <li className='flex items-start gap-3 text-slate-500'>
                    <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-[10px] mt-1">📍</span>
                    123 Main Street, City,<br/>State 12345
                </li>
            </ul>
        </div>
    </div>

    <div className='mt-16'>
        <hr className='border-slate-100' />
        <p className='py-8 text-sm text-center text-slate-400 font-medium'>
            2026© <span className='text-emerald-600 font-bold'>MediConnect</span>. All rights reserved.
        </p>
    </div>
</div>
  )
}

export default Footer
