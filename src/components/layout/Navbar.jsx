import logo from '../../assets/khoj_logo.png';
import { navData } from '../../data/mockData';

function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-50 shadow-sm">
            {/* w-full দিয়ে পুরো স্ক্রিন কভার করা হয়েছে এবং justify-between দিয়ে লোগো ও বাটনকে দুই কোণায় পাঠানো হয়েছে */}
            <div className="w-full flex items-center justify-between px-6 py-6 lg:px-10">
                {/* Logo Section - Extreme Left */}
                <div className="flex items-center">
                    <img src={logo} alt="Khoj Logo" className="h-14 w-auto object-contain" />
                </div>

                {/* Right Actions - Extreme Right */}
                <div className="flex items-center gap-10">
                    <a
                        href="/signin"
                        className="text-[#1A1A1A] font-bold text-base hover:text-blue-600 transition"
                    >
                        {navData.signInText}
                    </a>
                    <button
                        type="button"
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
