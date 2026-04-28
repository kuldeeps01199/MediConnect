import { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "yash",
    image: assets.profile_pic,
    email: "yashraj9627@gmail.com",
    phone: "9627083212",
    address: {
      line1: "Mahavir nagar janti kalan",
      line2: "Sonipat Haryana-131028"
    },
    gender: "male",
    dob: "2003-10-30"
  })

  const [isEdit, setIsEdit] = useState(false)
 
  return (
//  <div className='p-5 md:p-10 min-h-screen bg-slate-50 relative'>
      
//       {/* 1. Header Section - Dark Gradient Background */}
//       <div className='w-full h-60 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-6 relative shadow-2xl shadow-slate-900/10'>
        
//         {/* Profile Image & Name (Combined for naya design) */}
//         <div className='w-32 h-32 md:w-40 md:h-40 rounded-full border-8 border-white shadow-xl flex-shrink-0 relative overflow-hidden'>
//             <img className='w-full h-full object-cover' src={userData.image} alt="user image" />
//             {isEdit && (
//                 <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer'>
//                     <p className='text-white text-xs font-bold'>Upload</p>
//                 </div>
//             )}
//         </div>

//         <div className='text-center md:text-left'>
//             {isEdit ? (
//                 <input 
//                     className='bg-transparent text-white text-4xl md:text-5xl font-extrabold p-2 outline-none border-b-2 border-emerald-500 w-full md:w-auto' 
//                     type="text" 
//                     value={userData.name} 
//                     onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
//                 />
//             ) : (
//                 <p className='text-white text-4xl md:text-5xl font-extrabold'>{userData.name}</p>
//             )}
//             <p className='text-slate-400 mt-1'>Patient Profile</p>
//         </div>
//       </div>

//       {/* 2. Floating Content Section */}
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-8 -mt-10 md:-mt-16 px-5 relative z-10'>
        
//         {/* --- CONTACT INFORMATION CARD --- */}
//         <div className='bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col gap-6'>
//             <div className='flex items-center justify-between'>
//                 <p className='text-xl font-bold text-slate-900'>Contact Info</p>
//                 <div className='h-[3px] w-12 bg-emerald-500 rounded-full'></div>
//             </div>

//             <div className='flex flex-col gap-5 text-gray-700'>
//                 {/* Email */}
//                 <div className='flex flex-col gap-1'>
//                     <p className='text-sm text-slate-500 font-medium'>Email id</p>
//                     {isEdit ? (
//                         <input 
//                             className='bg-slate-50 rounded-xl p-3 border border-slate-100 outline-none hover:border-emerald-200 transition-all focus:border-emerald-400 focus:bg-white' 
//                             type="email" 
//                             value={userData.email} 
//                             onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))} 
//                         />
//                     ) : (
//                         <p className='text-slate-900 font-medium bg-slate-100/60 p-3 rounded-xl border border-slate-100'>{userData.email}</p>
//                     )}
//                 </div>

//                 {/* Phone */}
//                 <div className='flex flex-col gap-1'>
//                     <p className='text-sm text-slate-500 font-medium'>Phone</p>
//                     {isEdit ? (
//                         <input 
//                             className='bg-slate-50 rounded-xl p-3 border border-slate-100 outline-none hover:border-emerald-200 transition-all focus:border-emerald-400 focus:bg-white' 
//                             type="tel" 
//                             value={userData.phone} 
//                             onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
//                         />
//                     ) : (
//                         <p className='text-slate-900 font-medium bg-slate-100/60 p-3 rounded-xl border border-slate-100'>{userData.phone}</p>
//                     )}
//                 </div>

//                 {/* Address */}
//                 <div className='flex flex-col gap-1'>
//                     <p className='text-sm text-slate-500 font-medium'>Address</p>
//                     {isEdit ? (
//                         <div className='flex flex-col gap-3'>
//                             <input 
//                                 className='bg-slate-50 rounded-xl p-3 border border-slate-100 outline-none hover:border-emerald-200 transition-all focus:border-emerald-400 focus:bg-white' 
//                                 type="text" 
//                                 placeholder='Address Line 1'
//                                 value={userData.address.line1} 
//                                 onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
//                             />
//                             <input 
//                                 className='bg-slate-50 rounded-xl p-3 border border-slate-100 outline-none hover:border-emerald-200 transition-all focus:border-emerald-400 focus:bg-white' 
//                                 type="text" 
//                                 placeholder='Address Line 2 (Optional)'
//                                 value={userData.address.line2} 
//                                 onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
//                             />
//                         </div>
//                     ) : (
//                         <p className='text-slate-900 leading-relaxed bg-slate-100/60 p-3 rounded-xl border border-slate-100'>
//                             {userData.address.line1}
//                             {userData.address.line2 && <><br />{userData.address.line2}</>}
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </div>

//         {/* --- BASIC INFORMATION CARD --- */}
//         <div className='bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col gap-6'>
//             <div className='flex items-center justify-between'>
//                 <p className='text-xl font-bold text-slate-900'>Basic Info</p>
//                 <div className='h-[3px] w-12 bg-emerald-500 rounded-full'></div>
//             </div>

//             <div className='flex flex-col gap-5 text-gray-700'>
//                 {/* Gender */}
//                 <div className='flex flex-col gap-1'>
//                     <p className='text-sm text-slate-500 font-medium'>Gender</p>
//                     {isEdit ? (
//                         <select 
//                             className='bg-slate-50 rounded-xl p-3 border border-slate-100 outline-none hover:border-emerald-200 transition-all focus:border-emerald-400 focus:bg-white w-full' 
//                             value={userData.gender} 
//                             onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
//                         >
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                             <option value="other">Other</option>
//                         </select>
//                     ) : (
//                         <p className='text-slate-900 font-medium bg-slate-100/60 p-3 rounded-xl border border-slate-100 capitalize'>{userData.gender}</p>
//                     )}
//                 </div>

//                 {/* Birthday */}
//                 <div className='flex flex-col gap-1'>
//                     <p className='text-sm text-slate-500 font-medium'>Birthday</p>
//                     {isEdit ? (
//                         <input 
//                             className='bg-slate-50 rounded-xl p-3 border border-slate-100 outline-none hover:border-emerald-200 transition-all focus:border-emerald-400 focus:bg-white' 
//                             type="date" 
//                             value={userData.dob} 
//                             onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} 
//                         />
//                     ) : (
//                         <p className='text-slate-900 font-medium bg-slate-100/60 p-3 rounded-xl border border-slate-100'>{userData.dob}</p>
//                     )}
//                 </div>
//             </div>
//         </div>

//       </div>

//       {/* 3. Floating Action Button (FAB) for Save/Edit */}
//       <div className='fixed bottom-10 right-10 z-50'>
//         {isEdit ? (
//             <button 
//                 onClick={() => setIsEdit(false)} 
//                 className='flex items-center gap-2 border border-emerald-600 px-8 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/30 group active:scale-95'
//             >
//                 <span className='group-hover:rotate-12 transition-transform'>💾</span> Save Information
//             </button>
//         ) : (
//             <button 
//                 onClick={() => setIsEdit(true)} 
//                 className='flex items-center gap-2 border border-slate-900 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/30 group active:scale-95'
//             >
//                 <span className='group-hover:rotate-12 transition-transform'>✏️</span> Edit Profile
//             </button>
//         )}
//       </div>

// </div>
<div className='p-4 md:p-10 min-h-screen bg-slate-50 relative'>
      
      {/* 1. Header Section - Isme flex-col mobile ke liye hai aur flex-row desktop ke liye */}
      <div className='w-full min-h-[350px] md:h-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative shadow-2xl overflow-hidden'>
        
        {/* Background Subtle Glow */}
        <div className='absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]'></div>
        
        {/* Profile Image Container */}
        <div className='relative shrink-0'>
          <div className='w-32 h-32 md:w-44 md:h-44 rounded-full border-[6px] border-white/10 md:border-8 border-white shadow-2xl overflow-hidden bg-slate-700'>
            <img 
              className='w-full h-full object-cover' 
              src={userData.image} 
              alt="User Profile" 
            />
            {isEdit && (
              <div className='absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer transition-opacity'>
                <p className='text-white text-[10px] font-bold uppercase tracking-widest'>Change</p>
              </div>
            )}
          </div>
        </div>

        {/* Text Content: Name and Patient Profile Tag */}
        <div className='flex flex-col items-center md:items-start gap-3 w-full z-10'>
          {isEdit ? (
            <input 
              className='bg-white/10 text-white text-2xl md:text-5xl font-black p-3 outline-none border-b-4 border-emerald-500 w-full md:w-auto rounded-xl text-center md:text-left backdrop-blur-sm' 
              type="text" 
              value={userData.name} 
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
            />
          ) : (
            <h1 className='text-white text-3xl md:text-6xl font-black tracking-tighter text-center md:text-left leading-tight'>
              {userData.name}
            </h1>
          )}
          
          {/* Patient Profile Tag - Jo ab kabhi nahi chhipega */}
          <div className='bg-emerald-500/20 border border-emerald-500/30 px-5 py-1.5 rounded-full'>
            <p className='text-emerald-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em]'>
              Patient Profile
            </p>
          </div>
        </div>
      </div>

      {/* 2. Content Cards Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 -mt-10 md:-mt-12 px-2 md:px-10 relative z-20'>
        
        {/* Contact Info Card */}
        <div className='bg-white p-6 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col gap-8'>
          <div className='flex items-center gap-4'>
            <div className='w-2 h-8 bg-emerald-500 rounded-full'></div>
            <p className='text-xl font-black text-slate-800 uppercase tracking-wider'>Contact Details</p>
          </div>

          <div className='space-y-6'>
            <div className='space-y-1'>
              <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1'>Email Address</p>
              {isEdit ? (
                <input className='w-full bg-slate-50 p-4 rounded-2xl border border-slate-100 outline-none focus:border-emerald-400 transition-all' type="email" value={userData.email} onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))} />
              ) : (
                <p className='text-slate-700 font-bold bg-slate-50/50 p-4 rounded-2xl border border-slate-50'>{userData.email}</p>
              )}
            </div>

            <div className='space-y-1'>
              <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1'>Phone Number</p>
              {isEdit ? (
                <input className='w-full bg-slate-50 p-4 rounded-2xl border border-slate-100 outline-none focus:border-emerald-400 transition-all' type="tel" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              ) : (
                <p className='text-slate-700 font-bold bg-slate-50/50 p-4 rounded-2xl border border-slate-50'>{userData.phone}</p>
              )}
            </div>

            <div className='space-y-1'>
              <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1'>Address</p>
              {isEdit ? (
                <div className='flex flex-col gap-3'>
                  <input className='bg-slate-50 p-4 rounded-2xl border border-slate-100 outline-none focus:border-emerald-400 transition-all' type="text" value={userData.address.line1} onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                  <input className='bg-slate-50 p-4 rounded-2xl border border-slate-100 outline-none focus:border-emerald-400 transition-all' type="text" value={userData.address.line2} onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                </div>
              ) : (
                <p className='text-slate-700 font-bold bg-slate-50/50 p-4 rounded-2xl border border-slate-50 leading-relaxed'>
                  {userData.address.line1}<br />{userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Basic Info Card */}
        <div className='bg-white p-6 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col gap-8'>
          <div className='flex items-center gap-4'>
            <div className='w-2 h-8 bg-emerald-500 rounded-full'></div>
            <p className='text-xl font-black text-slate-800 uppercase tracking-wider'>Basic Info</p>
          </div>

          <div className='space-y-8'>
            <div className='flex justify-between items-center border-b border-slate-50 pb-4'>
              <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>Gender</p>
              {isEdit ? (
                <select className='bg-slate-50 p-2 rounded-lg outline-none font-bold text-emerald-600' value={userData.gender} onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className='font-black text-slate-700 uppercase'>{userData.gender}</p>
              )}
            </div>

            <div className='flex justify-between items-center border-b border-slate-50 pb-4'>
              <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>Date of Birth</p>
              {isEdit ? (
                <input className='bg-slate-50 p-2 rounded-lg outline-none font-bold text-emerald-600' type="date" value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
              ) : (
                <p className='font-black text-slate-700'>{userData.dob}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Modern Action Button */}
      <div className='mt-12 flex justify-center md:justify-end md:mr-10'>
        <button 
          onClick={() => setIsEdit(!isEdit)} 
          className={`px-12 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl transition-all active:scale-95 ${isEdit ? 'bg-emerald-500 text-white shadow-emerald-200' : 'bg-slate-900 text-white shadow-slate-300'}`}
        >
          {isEdit ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
 
)
}

export default MyProfile
