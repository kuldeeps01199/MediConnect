import React, { use, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {

  const navigate = useNavigate()
  const {doctors} = useContext(AppContext);
  return (
    // <div className='flex flex-col items-center gap-4 my-10 text-gray-900 md:mx-10 '>
    //   <h1 className='text-2xl font-medium'>Top Doctors To Follow</h1>
    //   <p className='sm:w-1/3 text-center text-sm'>
    //   Choose your favorite doctors for consultations.
    //   </p>
    //   <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
    //   {/* <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'> */}
    //     {doctors.slice(0,8).map((item,index)=>(
    //      <div onClick={()=>navigate(`/appointments/${item._id}`)} className='border border-blue-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
    //       <img className='bg-blue-100' src={item.image} alt={item.name} />
    //       <div className='p-5'>
    //         <div className='flex items-center gap-2 text-md text-center text-green-500'>
    //         <p className='w-2 h-2 bg-green-500 rounded-full'></p>
    //       <p>Available</p>
    //       </div>
    //       <p className='text-gray-900 text-md font-medium'>{item.name}</p>
    //       <p className='text-gray-600 text-sm'>{item.speciality}</p>
    //       </div>
    //     </div>
    //     ))}
    //   </div>
    //   <button onClick={()=>{navigate(`/doctors`); scrollTo(0,0)}} className='bg-blue-300 text-white py-2 px-10 rounded-full mt-8 hover:bg-blue-500 transition-colors duration-300'>
    //     More
    //   </button>
    // </div>
 <div className='flex flex-col items-center gap-6 my-20 text-slate-900 md:mx-10'>
    {/* Heading Section */}
    <h1 className='text-3xl md:text-4xl font-bold tracking-tight'>Top Doctors To Follow</h1>
    <p className='sm:w-1/3 text-center text-sm text-slate-500 font-medium'>
        Choose from our highest-rated specialists for your next consultation.
    </p>
    
    {/* Doctors Grid */}
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-8 px-4 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
            <div 
                key={item._id || index} 
                onClick={() => { navigate(`/appointments/${item._id}`); window.scrollTo(0, 0); }} 
                className='group border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-500 bg-white hover:shadow-2xl hover:shadow-emerald-100/40'
            >
                {/* Image Section with Glass Badge */}
                <div className='aspect-[4/5] bg-slate-50 overflow-hidden relative'>
                    <img 
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' 
                        src={item.image} 
                        alt={item.name} 
                    />
                    
                    {/* Status Badge */}
                    <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5'>
                        <span className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></span>
                        <p className='text-[9px] font-bold text-slate-700 uppercase tracking-tighter'>Available</p>
                    </div>
                </div>
                
                {/* Content Section */}
                <div className='p-4'>
                    <p className='text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-1'>
                        {item.speciality}
                    </p>
                    <p className='text-slate-900 text-base font-bold group-hover:text-emerald-600 transition-colors truncate'>
                        {item.name}
                    </p>
                    
                    {/* Rating Section (Adds Premium Feel) */}
                    <div className='flex items-center gap-1 mt-2 bg-slate-50 w-fit px-2 py-0.5 rounded-md'>
                        <span className='text-yellow-400 text-xs'>★</span>
                        <span className='text-slate-600 text-[10px] font-bold'>4.9</span>
                        <span className='text-slate-400 text-[9px] font-medium'>(120+ Reviews)</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
    
    {/* More Button - Styled like Navbar/Footer Buttons */}
    <button 
        onClick={() => { navigate(`/doctors`); window.scrollTo(0, 0); }} 
        className='bg-slate-900 text-white py-3.5 px-16 rounded-2xl mt-12 hover:bg-emerald-600 transition-all duration-300 shadow-xl shadow-slate-200 font-bold tracking-wide active:scale-95'
    >
        Explore All Doctors
    </button>
</div>
  )
}

export default TopDoctors
