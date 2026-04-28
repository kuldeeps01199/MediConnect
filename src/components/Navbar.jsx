import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
            <img
                onClick={() => navigate("/")}
                className="w-44 cursor-pointer bg-white rounded-md"
                src={assets.logo}
                alt="Logo"
            />
            
            {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 font-medium  text-gray-700">
    {/* HOME */}
    <NavLink to="/" className="group flex flex-col items-center gap-1">
        <li className="py-1 group-hover:text-emerald-600 transition-all duration-300 cursor-pointer">
            HOME
        </li>
        <hr className="border-none outline-none h-0.5 bg-emerald-500 w-3/5 m-auto hidden group-[.active]:block transition-all duration-300" />
    </NavLink>

    {/* ALL DOCTORS */}
    <NavLink to="/doctors" className="group flex flex-col items-center gap-1">
        <li className="py-1 group-hover:text-emerald-600 transition-all duration-300 cursor-pointer">
            ALL DOCTORS
        </li>
        <hr className="border-none outline-none h-0.5 bg-emerald-500 w-3/5 m-auto hidden group-[.active]:block transition-all duration-300" />
    </NavLink>

    {/* ABOUT */}
    <NavLink to="/about" className="group flex flex-col items-center gap-1">
        <li className="py-1 group-hover:text-emerald-600 transition-all duration-300 cursor-pointer">
            ABOUT
        </li>
        <hr className="border-none outline-none h-0.5 bg-emerald-500 w-3/5 m-auto hidden group-[.active]:block transition-all duration-300" />
    </NavLink>

    {/* CONTACT */}
    <NavLink to="/contact" className="group flex flex-col items-center gap-1">
        <li className="py-1 group-hover:text-emerald-600 transition-all duration-300 cursor-pointer">
            CONTACT
        </li>
        <hr className="border-none outline-none h-0.5 bg-emerald-500 w-3/5 m-auto hidden group-[.active]:block transition-all duration-300" />
    </NavLink>
</ul>

            <div className="flex items-center gap-4">
                {token ? (
                    <div className='flex items-center gap-2 cursor-pointer relative'>
                        <div onClick={() => setShowProfileMenu(!showProfileMenu)} className='flex items-center gap-2'>
                            <img className='w-9 rounded-full border-2 border-emerald-500 p-0.5' src={assets.profile_pic} alt="Profile" />
                            <img className={`w-2.5 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} src={assets.dropdown_icon} alt="" />
                        </div>

                        {/* Profile Dropdown */}
                        <div className={`absolute top-full right-0 pt-3 text-base font-medium text-gray-600 z-50 ${showProfileMenu ? 'block' : 'hidden'}`}>
                            <div className='min-w-48 bg-white shadow-2xl border border-emerald-50 rounded-xl flex flex-col overflow-hidden'>
                                <p onClick={() => { navigate('my-profile'); setShowProfileMenu(false) }} className='px-4 py-3 hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer transition-all border-b border-gray-50'>My Profile</p>
                                <p onClick={() => { navigate('my-appointments'); setShowProfileMenu(false) }} className='px-4 py-3 hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer transition-all border-b border-gray-50'>My Appointment</p>
                                <p onClick={() => { setToken(false); setShowProfileMenu(false) }} className='px-4 py-3 hover:bg-red-50 text-red-500 cursor-pointer transition-all'>Logout</p>
                            </div>
                        </div>
                        {showProfileMenu && <div onClick={() => setShowProfileMenu(false)} className='fixed inset-0 z-40 '></div>}
                    </div>
                ) : (
                    /* Desktop Create Account Button */
                    <button onClick={() => navigate('/login')} className='bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hidden md:block'>
                        Create Account
                    </button>
                )}

                {/* Mobile Menu Icon */}
                <img onClick={() => setShowMenu(true)} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="menu" />

                {/* --- Mobile Menu Drawer --- */}
                <div className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-300 flex flex-col`}>
                    
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between px-5 py-6 border-b border-gray-100">
                        <img className="w-36" src={assets.logo} alt="logo" />
                        <img className="w-7 cursor-pointer" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="close" />
                    </div>

                    {/* Drawer Links */}
                    <ul className="flex flex-col gap-2 mt-8 px-6 text-base font-medium">
                        <NavLink onClick={() => setShowMenu(false)} to="/" className="w-full group">
                            <p className="px-6 py-4 rounded-2xl text-slate-600 group-[.active]:bg-emerald-50 group-[.active]:text-emerald-700 hover:bg-slate-50 transition-all duration-300 tracking-wide">HOME</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/doctors" className="w-full group">
                            <p className="px-6 py-4 rounded-2xl text-slate-600 group-[.active]:bg-emerald-50 group-[.active]:text-emerald-700 hover:bg-slate-50 transition-all duration-300 tracking-wide">ALL DOCTORS</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/about" className="w-full group">
                            <p className="px-6 py-4 rounded-2xl text-slate-600 group-[.active]:bg-emerald-50 group-[.active]:text-emerald-700 hover:bg-slate-50 transition-all duration-300 tracking-wide">ABOUT</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/contact" className="w-full group">
                            <p className="px-6 py-4 rounded-2xl text-slate-600 group-[.active]:bg-emerald-50 group-[.active]:text-emerald-700 hover:bg-slate-50 transition-all duration-300 tracking-wide">CONTACT</p>
                        </NavLink>
                    </ul>

                    {/* --- MOBILE CREATE ACCOUNT BUTTON (FIXED POSITION) --- */}
                    {!token && (
                        <div className="mt-auto p-10">
                            <button 
                                onClick={() => { navigate('/login'); setShowMenu(false) }} 
                                className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-all"
                            >
                                Create Account
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;