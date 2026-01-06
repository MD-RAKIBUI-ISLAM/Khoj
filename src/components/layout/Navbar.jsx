import { useState } from 'react';
import { LuCircleUser, LuMenu, LuX } from 'react-icons/lu'; // LuUserCircle এর বদলে LuCircleUser
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/khoj_logo.png';
import { navData } from '../../data/mockData';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Active link highlighting logic
    const isActive = (path) =>
        location.pathname === path
            ? 'text-blue-600 font-bold bg-blue-50 lg:bg-transparent px-3 py-2 rounded-lg lg:px-0 lg:py-0'
            : 'text-slate-600 font-semibold hover:text-blue-500 px-3 py-2 rounded-lg lg:px-0 lg:py-0 transition-all';

    return (
        <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3 lg:px-12">
                {/* 1. Logo Section */}
                <Link to="/" className="flex items-center shrink-0">
                    <img
                        src={logo}
                        alt="Khoj Logo"
                        className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105"
                    />
                </Link>

                {/* 2. Desktop Navigation Menus (Middle) */}
                <div className="hidden lg:flex items-center gap-10">
                    <Link to="/" className={`text-[15px] ${isActive('/')}`}>
                        Home
                    </Link>
                    <Link to="/services" className={`text-[15px] ${isActive('/services')}`}>
                        Services
                    </Link>
                    <Link to="/contact" className={`text-[15px] ${isActive('/contact')}`}>
                        Contact Us
                    </Link>
                    <Link to="/about" className={`text-[15px] ${isActive('/about')}`}>
                        About Us
                    </Link>
                </div>

                {/* 3. Right Side Actions */}
                <div className="flex items-center gap-3 lg:gap-6">
                    {/* User Profile / Login */}
                    <Link
                        to="/signin"
                        className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:text-blue-600 rounded-xl transition group"
                    >
                        <LuCircleUser
                            size={24}
                            className="text-slate-500 group-hover:text-blue-600 transition-colors"
                        />
                        <span className="text-sm font-bold hidden sm:block">
                            {navData.signInText}
                        </span>
                    </Link>

                    {/* List Property Button */}
                    <button
                        type="button"
                        onClick={() => navigate(navData.btnUrl)}
                        className="hidden md:block bg-[#0095FF] text-white px-6 py-2.5 rounded-[12px] font-black text-xs uppercase tracking-wider hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
                    >
                        {navData.btnText}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        className="lg:hidden p-2 text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
            >
                <div className="flex flex-col px-6 gap-4">
                    <Link onClick={() => setIsMenuOpen(false)} to="/" className={isActive('/')}>
                        Home
                    </Link>
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/rooms"
                        className={isActive('/rooms')}
                    >
                        Hostels
                    </Link>
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/services"
                        className={isActive('/services')}
                    >
                        Services
                    </Link>
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/about"
                        className={isActive('/about')}
                    >
                        About Us
                    </Link>

                    <hr className="border-slate-100 my-2" />

                    <button
                        type="button"
                        onClick={() => {
                            navigate(navData.btnUrl);
                            setIsMenuOpen(false);
                        }}
                        className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold text-sm shadow-md"
                    >
                        {navData.btnText}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
