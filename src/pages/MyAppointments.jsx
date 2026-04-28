import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    // <div>
    //   <p>My Appointments</p>
    //   <div>
    //     {doctors.slice(0,2).map((doc,index)=>(
    //       <div key={index}>
    //        <div>
    //          <img src={doc.image} alt="doctor img" />
    //        </div>
    //        <div>
    //         <p>{doc.name}</p>
    //         <p>{doc.speciality}</p>
    //         <p>Address:</p>
    //         <p>{doc.address.line1}</p>
    //         <p>{doc.address.line2}</p>
    //         <p><span>Date & Time</span>1, May 2026 | 10:00 AM</p>
    //        </div>
    //        <div></div>
    //        <div>
    //         <button>Pay Online</button>
    //         <button>Cancel Apptment</button>
    //        </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className='md:mx-10 my-10'>
      {/* Page Title */}
      <p className='pb-3 mt-12 font-bold text-slate-900 border-b border-slate-200 text-xl md:text-2xl'>
        My <span className='text-emerald-500'>Appointments</span>
      </p>

      <div className='flex flex-col gap-6 mt-8'>
        {doctors.slice(0, 2).map((doc, index) => (
          <div
            key={index}
            className='grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] gap-6 p-6 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group'>
              
            {/* --- Doctor Image Container --- */}
            <div className='w-full h-56 sm:h-40 sm:w-40 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50'>
              <img
                className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
                src={doc.image}
                alt={`Dr. ${doc.name}`}
              />
            </div>

            {/* Doctor Details */}
            <div className='flex-1 flex flex-col justify-center gap-1'>
              <p className='text-xl font-bold text-slate-800 tracking-tight'>{doc.name}</p>
              <p className='text-emerald-600 font-medium text-sm bg-emerald-50 w-fit px-3 py-1 rounded-full'>{doc.speciality}</p>

              <div className='mt-4'>
                <p className='text-slate-900 font-bold text-xs uppercase tracking-wider mb-1'>Address:</p>
                <p className='text-slate-500 text-sm leading-relaxed'>
                  {doc.address.line1} <br />
                  {doc.address.line2}
                </p>
              </div>

              <p className='text-sm mt-4 text-slate-700 font-medium'>
                <span className='text-slate-900 font-bold'>Date & Time:</span>
                <span className='ml-2 text-slate-500'>1, May 2026 | 10:00 AM</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col justify-end gap-3 min-w-48'>
              <button className='w-full py-3 px-6 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-slate-200 active:scale-95'>
                Pay Online
              </button>
              <button className='w-full py-3 px-6 rounded-xl text-sm font-bold border border-slate-200 text-slate-500 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all duration-300 active:scale-95'>
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
