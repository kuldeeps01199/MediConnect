import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { useParams, useNavigate } from 'react-router-dom';



const Doctor = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter,setShowFilter] = useState(false)
  const { doctors } = useContext(AppContext);

  const ApplyFilter = () => {
    if (speciality && doctors.length > 0) {
      const filtered = doctors.filter(doc => doc.speciality.trim().toLowerCase().replace(/\s+/g, '-') === speciality);
      setFilterDoc(filtered);
    } else {
      setFilterDoc(doctors);
    }
  }
  useEffect(() => {
    ApplyFilter();
  }, [doctors, speciality]);

return (

  // <div >
  //   <p className='text-gray-800 text-2xl mt-5 text-bold'>Browse Through Doctors Specialist</p>
  //   <div className='flex flex-col sm:flex-row items-start gap-5 mt-10 '>
  //     <div className=' flex flex-col gap-4 text-sm text-gray-600'>
  //       <p onClick={()=> speciality==='general-physician' ? navigate('/doctors') : navigate('/doctors/general-physician')} className={`w-[94vh] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md transition-all duration-300 cursor-pointer hover:bg-blue-100 ${speciality ==="general-physician"? "bg-blue-100 text-black" :""}`}>General Physician  </p>
  //       <p onClick={()=> speciality==='gynecologist' ? navigate('/doctors') : navigate('/doctors/gynecologist')} className={`w-[94vh] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md transition-all duration-300 cursor-pointer hover:bg-blue-100 ${speciality ==="gynecologist"? "bg-blue-100 text-black" :""}`}>Gynecologist</p>

  //       <p onClick={()=> speciality==='dermatologist' ? navigate('/doctors') : navigate('/doctors/dermatologist')} className={`w-[94vh] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md transition-all duration-300 cursor-pointer hover:bg-blue-100 ${speciality ==="dermatologist"? "bg-blue-100 text-black" :""}`}>Dermatologist</p>

  //       <p onClick={()=> speciality==='pediatricians' ? navigate('/doctors') : navigate('/doctors/pediatricians')} className={`w-[94vh] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md transition-all duration-300 cursor-pointer hover:bg-blue-100 ${speciality ==="pediatricians"? "bg-blue-100 text-black" :""}`}>Pediatricians</p>

  //       <p onClick={()=> speciality==='neurologist' ? navigate('/doctors') : navigate('/doctors/neurologist')} className={`w-[94vh] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md transition-all duration-300 cursor-pointer hover:bg-blue-100 ${speciality ==="neurologist"? "bg-blue-100 text-black" :""}`}>Neurologist</p>

  //       <p onClick={()=> speciality==='gastroenterologist' ? navigate('/doctors') : navigate('/doctors/gastroenterologist')} className={`w-[94vh] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-md transition-all duration-300 cursor-pointer hover:bg-blue-100 ${speciality ==="gastroenterologist"? "bg-blue-100 text-black"  :""}`}>Gastroenterologist</p>
  //     </div>
  //     <div className='w-full   grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 gap-y-6 justify-start '>
        
  //       {filterDoc?.map((item, index) => (
  //         <div onClick={() => navigate(`/appointments/${item._id}`)} className={`${filterDoc.length === 1 ? "max-w-[300px]" : ""} border border-blue-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500`}>
  //           <img className='bg-blue-100  ' src  ={item.image} alt={item.name} />
  //           <div className='p-5'>
  //             <div className='flex items-center gap-2 text-md text-center text-green-500'>
  //               <p className='w-2 h-2 bg-green-500 rounded-full'></p>
  //               <p>Available</p>
  //             </div>
  //             <p className='text-gray-900 text-md font-medium'>{item.name}</p>
  //             <p className='text-gray-600 text-sm'>{item.speciality}</p>
  //           </div>
  //         </div>
  //       ))
  //       }
  //     </div>
  //   </div>
  // </div>
<div className='md:mx-10'>
  <p className='text-slate-900 text-2xl md:text-3xl mt-5 font-bold tracking-tight'>Browse Through Specialists</p>
  <div className='flex flex-col sm:flex-row items-start gap-8 mt-10'>
    <button className= {`py-1 px-3 border rounded-md text-sm transtion-all sm:hidden ${showFilter ? 'bg-emerald-600 text-white' : ''}`} onClick={()=>setShowFilter(prev =>!prev)}>Filters</button>
    {/* Left Sidebar - Speciality List */}
    <div className={`flex flex-col gap-3 text-sm text-slate-600 min-w-[220px] w-full sm:w-auto ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
      {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec) => {
        const specValue = spec.toLowerCase().replace(/\s+/g, '-');
        const isActive = speciality === specValue;
        
        return (
          <p 
            key={spec}
            onClick={() => isActive ? navigate('/doctors') : navigate(`/doctors/${specValue}`)} 
            className={`w-full px-5 py-3 border rounded-xl transition-all duration-300 cursor-pointer font-medium shadow-sm ${isActive ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200 translate-x-2" : "bg-white border-slate-100 hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50/30"}`}
          >
            {spec}
          </p>
        );
      })}
    </div>

    {/* Right Side - Doctor Grid */}
    <div className='w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {filterDoc?.map((item, index) => (
        <div 
          key={item._id || index}
          onClick={() => { navigate(`/appointments/${item._id}`); window.scrollTo(0, 0); }} 
          className='group border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-500 bg-white hover:shadow-2xl hover:shadow-emerald-100/40'
        >
          {/* Image Container with Portrait Ratio */}
          <div className='aspect-[4/5] bg-slate-50 overflow-hidden relative'>
            <img 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' 
                src={item.image} 
                alt={item.name} 
            />
            
            {/* Minimal Available Badge */}
            <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5'>
                <span className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></span>
                <p className='text-[9px] font-bold text-slate-700 uppercase tracking-tighter'>Available</p>
            </div>
          </div>

          <div className='p-5'>
            <p className='text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-1'>
                {item.speciality}
            </p>
            <p className='text-slate-900 text-lg font-bold group-hover:text-emerald-600 transition-colors truncate'>
                {item.name}
            </p>
            
            <div className='flex items-center gap-1 mt-2 bg-slate-50 w-fit px-2 py-0.5 rounded-md'>
                <span className='text-yellow-400 text-xs'>★</span>
                <span className='text-slate-600 text-[10px] font-bold'>4.8</span>
                <span className='text-slate-400 text-[9px] font-medium'>(90+ Reviews)</span>
            </div>
          </div>
        </div>
      ))}
      
      {/* Fallback if no doctors found */}
      {filterDoc.length === 0 && (
        <div className='col-span-full flex flex-col items-center justify-center py-32 text-slate-400 gap-4'>
            <div className='text-6xl'>🔍</div>
            <p className='text-lg font-medium'>No doctors found in this category.</p>
        </div>
      )}
    </div>
  </div>
</div>
)
}

export default Doctor
