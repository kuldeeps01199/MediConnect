
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ( {DocId, speciality} ) => {
  const { doctors } = useContext(AppContext);
  const [relatedDocs, setRelatedDocs] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    
    if(doctors.length > 0 && speciality){
    const DoctorsData = doctors.filter(doc => doc.speciality && speciality && // Check ki dono exist karte hain
  doc.speciality.toLowerCase() === speciality.toLowerCase() && doc._id !== DocId
    );
    setRelatedDocs(DoctorsData);
    // console.log(DoctorsData);
    console.log("URL Doctor ID:", DocId);
    console.log("Speciality:", speciality);
    }
    
  }, [DocId, speciality, doctors])
  return (
    //   <div className='flex flex-col items-center gap-4 my-10 text-gray-900 md:mx-10 '>
    //   <h1 className='text-2xl font-medium'>Related Doctors</h1>
    //   <p className='sm:w-1/3 text-center text-sm'>
    //   Choose your favorite doctors for consultations.
    //   </p>
    //   <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
    //     {relatedDocs.slice(0,4).map((item,index)=>(

    //      <div key={index} onClick={() => { navigate(`/appointments/${item._id}`); window.scrollTo(0, 0); }} className='border border-blue-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
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
    <h1 className='text-3xl md:text-4xl font-bold tracking-tight'>Related Doctors</h1>
    <p className='sm:w-1/3 text-center text-sm text-slate-500 font-medium'>
        Browse through our top-rated specialists similar to your selection.
    </p>
    
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8 px-4 sm:px-0'>
        {relatedDocs.slice(0, 4).map((item, index) => (
            <div 
                key={index} 
                onClick={() => { navigate(`/appointments/${item._id}`); window.scrollTo(0, 0); }} 
                className='group border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-500 bg-white hover:shadow-2xl hover:shadow-emerald-100/50'
            >
                {/* Image Wrapper with Soft Tint */}
                <div className='aspect-[4/5] bg-slate-50 overflow-hidden relative'>
                    <img className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' src={item.image} alt={item.name} />
                    
                    {/* Floating Badge (Optional but Premium) */}
                    <div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm flex items-center gap-1.5'>
                        <span className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></span>
                        <p className='text-[10px] font-bold text-slate-700 uppercase'>Online</p>
                    </div>
                </div>
                
                <div className='p-5'>
                    <p className='text-emerald-600 text-[11px] font-bold uppercase tracking-wider mb-1'>{item.speciality}</p>
                    <p className='text-slate-900 text-lg font-bold group-hover:text-emerald-600 transition-colors'>{item.name}</p>
                    
                    <div className='flex items-center gap-1 mt-2'>
                        <span className='text-yellow-400'>★★★★★</span>
                        <span className='text-slate-400 text-[10px]'>(4.8)</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
    
    <button 
        onClick={() => { navigate(`/doctors`); window.scrollTo(0, 0); }} 
        className='bg-slate-900 text-white py-3.5 px-14 rounded-2xl mt-12 hover:bg-emerald-600 transition-all duration-300 shadow-xl shadow-slate-200 font-bold tracking-wide active:scale-95'
        >
        Explore More Doctors
    </button>
</div>
  )
}

export default RelatedDoctors
