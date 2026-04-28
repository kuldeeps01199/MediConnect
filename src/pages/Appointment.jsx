import React, { use, useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
const Appointment = () => {
  const { DocId } = useParams();
  const { doctors, CurrencySymbol } = useContext(AppContext);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [DocInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  
  const getDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === DocId);
    setDocInfo(docInfo);
  }
    const getAvailableSlots = async () => {
      // setDocSlots([]);
      let allDaysSlots = []; // Sabse pehle empty array
      // getting current date and time
      let today = new Date();
      for(let i=0; i<7; i++){

        // setting date with index
        let currentDate =new Date(today)
        currentDate.setDate(today.getDate() + i);

        // Setting end time of the date with index
        let endTime = new Date(currentDate);
        endTime.setHours(21,0,0,0);

        // setting hours
        if(i===0){
          currentDate.setHours(currentDate.getHours() > 10  ? currentDate.getHours() + 1 : 10);
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        }  
      else{       
             currentDate.setHours(10);
             currentDate.setMinutes(0);
          }
      let daySlots = [];
         while(currentDate < endTime){
         daySlots.push(
          {  
             datetime: new Date(currentDate),
            time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });

          // incrementing time by 30 mins
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
      allDaysSlots.push(daySlots); // ✅ Har din ka array yahan save hoga
    }
      setDocSlots(allDaysSlots);// loop ke bhaar ek baar update
  }


  useEffect(() => {
    getDocInfo();
  }, [DocId, doctors]);

  useEffect(() => {
      getAvailableSlots(); 
  }, [DocInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [ docSlots]);


  return (
//     <div >

//       <div className="flex flex-col md:flex-row gap-6">

//         {/* LEFT SIDE → IMAGE */}
//         <div>
//           <img
//             src={DocInfo?.image}
//             alt={DocInfo?.name}
//             className="w-full sm:max-w-72  rounded-xl bg-blue-200"
//           />
//         </div>

//         {/* RIGHT SIDE → TEXT */}
//         <div className="flex-1 bg-white border border-gray-300 rounded-xl shadow-sm p-6 mx-2 sm:mx-0 mt-[-40px] sm:mt-0">
//           {/* Name */}
//           <p className="text-2xl font-medium flex items-center gap-2 text-gray-900">
//             {DocInfo?.name}
//             <img src={assets.verified_icon} className="w-5" />
//           </p>

//           {/* Degree + Speciality + Experience */}
//           <div className="flex items-center gap-3 mt-1 text-gray-600 text-sm ">
//             <p>{DocInfo?.degree} - {DocInfo?.speciality}</p>
//             <span className="text-xs border px-2 py-1 rounded-full">
//               {DocInfo?.experience}
//             </span>
//           </div>

//           {/* About */}
//           <div >
//             <p className="font-semibold flex items-center gap-1 text-gray-900 mt-3 text-sm">
//               About
//               <img src={assets.info_icon} className="w-4" />
//             </p>

//             <p className="text-gray-500 text-sm mt-1 leading-relaxed max-w-[700px]">
//               {DocInfo?.about}
//             </p>
//           </div>

//           {/* Fees */}
//           <p className="mt-4 font-medium text-gray-500">
//             Appointment fee: <span className="text-gray-600 font-semibold">{CurrencySymbol}{DocInfo?.fees}</span>
//           </p>

//         </div>
//       </div>
// {/* ------ booking slots section ---------- */}
//       <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-600">
//         <p>Available Slots</p>
//         <div className='flex gap-3 items-center w-full ovwerflow-x-scroll mt-5'>
//           {
//             docSlots.length > 0 && docSlots.map((daySlots, index) => {
//               const firstSlot = daySlots[0];
//               return (
            
//               <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full curosr-pointer ${slotIndex === index ? 'bg-blue-400 text-white' : 'border border-gray-300' }`} key={index}>
//                 <p>{daySlots[0] && daysOfWeek[daySlots[0].datetime.getDay()]}</p>
//                 <p>{daySlots[0] && daySlots[0].datetime.getDate()}</p>
//               </div>
//             );
//           })
//         }
//         </div>

//         <div className='flex gap-3 items-center w-full overflow-x-scroll mt-5' >
//           {
//             docSlots.length > 0 && docSlots[slotIndex].map((slot, index) => (
//             <p className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${slotTime === slot.time ? "bg-blue-400 text-white" : "border border-gray-300"}`} key={index} onClick={()=>setSlotTime(slot.time)}>
//             {slot.time.toLowerCase()}
//             </p>
//             ))
//           }
//         </div> 
//         <button className="bg-blue-400 text-white  text-sm py-3 px-10 rounded-full hover:bg-blue-600 transition-colors mt-4">
//           Book an Appointment
//         </button>
//       </div>
//       {/* related doctors  */}
//       <RelatedDoctors  DocId={DocInfo?._id} speciality = {DocInfo?.speciality} />
//     </div>
<div className="p-4 sm:p-0">
  {/* ------ Doctor Detail Container ------ */}
  <div className="flex flex-col md:flex-row gap-8">
    
    {/* LEFT SIDE → IMAGE */}
    <div className="flex-shrink-0">
      <img
        src={DocInfo?.image}
        alt={DocInfo?.name}
        className="w-full sm:max-w-72 rounded-3xl bg-slate-50 shadow-sm border border-slate-100 object-cover aspect-[4/5]"
      />
    </div>

    {/* RIGHT SIDE → TEXT INFO */}
    <div className="flex-1 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm p-8 mt-[-50px] sm:mt-0 relative z-10 mx-2 sm:mx-0">
      {/* Name & Verified Icon */}
      <div className="flex flex-col gap-1">
        <p className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-slate-900">
          {DocInfo?.name}
          <img src={assets.verified_icon} className="w-6" alt="verified" />
        </p>
        <p className="text-emerald-600 font-bold uppercase tracking-[2px] text-xs mt-1">
          {DocInfo?.speciality} Specialist
        </p>
      </div>

      {/* Degree & Experience */}
      <div className="flex items-center gap-3 mt-4">
        <p className="text-slate-700 font-semibold bg-slate-50 px-4 py-1.5 rounded-xl border border-slate-100">
          {DocInfo?.degree}
        </p>
        <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-xl border border-emerald-100">
          {DocInfo?.experience} Experience
        </span>
      </div>

      {/* About Section */}
      <div className="mt-8">
        <p className="font-bold flex items-center gap-2 text-slate-900 text-lg tracking-tight">
          About Professional
          <img src={assets.info_icon} className="w-4 opacity-50" alt="info" />
        </p>
        <p className="text-slate-500 text-[15px] mt-3 leading-relaxed max-w-[700px] font-medium">
          {DocInfo?.about}
        </p>
      </div>

      {/* Fees Section */}
      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between sm:justify-start sm:gap-10">
        <p className="text-slate-500 font-semibold">Consultation Fee</p>
        <p className="text-2xl font-black text-slate-900">
            {CurrencySymbol}{DocInfo?.fees}
        </p>
      </div>
    </div>
  </div>

  {/* ------ BOOKING SLOTS SECTION ---------- */}
  <div className="sm:ml-80 mt-12 font-medium text-slate-800">
    <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1.5 bg-emerald-500 rounded-full"></div>
        <p className="text-2xl font-bold tracking-tight">Available Slots</p>
    </div>
    
    {/* Days Row */}
    <div className='flex gap-4 items-center w-full overflow-x-auto pb-4 no-scrollbar'>
      {
        docSlots.length > 0 && docSlots.map((daySlots, index) => (
          <div 
            key={index}
            onClick={() => setSlotIndex(index)} 
            className={`text-center py-6 min-w-[85px] rounded-3xl cursor-pointer transition-all duration-500 border-2 ${slotIndex === index ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200 scale-105' : 'border-slate-100 hover:border-emerald-200 bg-white text-slate-500 hover:text-emerald-600'}`} 
          >
            <p className="text-[10px] font-black uppercase tracking-widest mb-1">{daySlots[0] && daysOfWeek[daySlots[0].datetime.getDay()]}</p>
            <p className="text-xl font-bold">{daySlots[0] && daySlots[0].datetime.getDate()}</p>
          </div>
        ))
      }
    </div>

    {/* Time Slots Row */}
    <div className='flex gap-3 items-center w-full overflow-x-auto mt-8 pb-4 no-scrollbar'>
      {
        docSlots.length > 0 && docSlots[slotIndex].map((slot, index) => (
          <p 
            key={index} 
            onClick={() => setSlotTime(slot.time)}
            className={`text-sm font-bold flex-shrink-0 px-8 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${slotTime === slot.time ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-100" : "border-slate-100 text-slate-500 hover:bg-slate-50 hover:border-slate-200"}`}
          >
            {slot.time.toLowerCase()}
          </p>
        ))
      }
    </div> 

    {/* Booking Button */}
    <button className="bg-slate-900 text-white text-lg font-bold py-5 px-24 rounded-2xl hover:bg-emerald-600 shadow-2xl shadow-slate-200 transition-all duration-500 mt-10 mb-20 transform active:scale-95 flex items-center gap-3">
      Confirm Appointment
    </button>
  </div>

  {/* ------ Related Doctors Section ------ */}
  <div className="border-t border-slate-100 pt-10">
    <RelatedDoctors DocId={DocInfo?._id} speciality={DocInfo?.speciality} />
  </div>
</div>
  )

}

export default Appointment
