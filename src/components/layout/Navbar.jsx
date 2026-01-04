import { Link, useNavigate } from 'react-router-dom'; // ইমপোর্ট করুন

import logo from '../../assets/khoj_logo.png';
import { navData } from '../../data/mockData';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="bg-white border-b border-gray-50 shadow-sm">
            <div className="w-full flex items-center justify-between px-6 py-6 lg:px-10">
                {/* Logo - Clickable to Home */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Khoj Logo" className="h-14 w-auto object-contain" />
                </Link>

                {/* Right Actions */}
                <div className="flex items-center gap-10">
                    <Link
                        to="/signin"
                        className="text-[#1A1A1A] font-bold text-base hover:text-blue-600 transition"
                    >
                        {navData.signInText}
                    </Link>

                    {/* List Property Button with Navigation */}
                    <button
                        type="button"
                        onClick={() => navigate(navData.btnUrl)} // এখানে নেভিগেশন হচ্ছে
                        className="bg-[#0095FF] text-white px-7 py-3 rounded-md font-bold text-sm hover:bg-blue-600 shadow-md transition-all"
                    >
                        {navData.btnText}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
