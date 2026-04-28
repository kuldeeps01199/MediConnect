import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const specialityMenu = () => {
  return (
    // <div  className='flex flex-col items-center gap-3 py-15 text-gray-800' id='#speciality'> 
    //   <h1 className='text-3xl font-semibold'>The Best Doctors For Your Needs</h1>
    //   <p className='sm:w-1/3 text-center text-sm'>Find the right specialist for your health needs with our curated list of trusted doctors</p>
    //   <div className='flex sm:justify-center gap-3 pt-5 w-full overflow-scroll'>
    //     {specialityData.map((item,index)=>( 
        
    //     <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to = {`/doctors/${item.speciality.trim().toLowerCase().replace(/\s+/g, '-')}`} >
    //       <img className='w-16 sm:w-24 mb-2' src={item.image} alt="image of specialist" />
    //       <p>{item.speciality}</p>
    //     </Link>
    //      )) }
    //   </div>
    // </div>
    <div id='speciality' className='flex flex-col items-center gap-6 py-20 text-slate-900 md:mx-10'>
    
    {/* Heading Section */}
    <h1 className='text-3xl md:text-4xl font-bold tracking-tight'>The Best Doctors For Your Needs</h1>
    <p className='sm:w-1/2 md:w-1/3 text-center text-sm text-slate-500 font-medium leading-relaxed'>
        Find the right specialist for your health needs with our curated list of trusted doctors, scheduled at your convenience.
    </p>

    {/* Speciality Cards Container */}
    <div className='flex sm:justify-center gap-6 pt-10 w-full overflow-x-auto no-scrollbar pb-4'>
        {specialityData.map((item, index) => (
            <Link 
                key={index} 
                onClick={() => window.scrollTo(0, 0)} 
                className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 group' 
                to={`/doctors/${item.speciality.trim().toLowerCase().replace(/\s+/g, '-')}`}
            >
                {/* Modern Icon Box */}
                <div className='w-24 h-24 sm:w-32 sm:h-32 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:translate-y-[-12px] group-hover:shadow-xl group-hover:shadow-emerald-100/50'>
                    <img 
                        className='w-14 sm:w-20 transition-transform duration-500 group-hover:scale-110' 
                        src={item.image} 
                        alt={item.speciality} 
                    />
                </div>
                
                {/* Text with Hover Color */}
                <p className='mt-4 text-sm font-bold text-slate-700 transition-colors duration-300 group-hover:text-emerald-600'>
                    {item.speciality}
                </p>
            </Link>
        ))}
    </div>
</div>
  )
}

export default specialityMenu
