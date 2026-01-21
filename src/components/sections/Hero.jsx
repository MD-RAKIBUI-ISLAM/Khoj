import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import hero1 from '../../assets/hero-1.png'; // No. 1 (Bedroom)
import hero2 from '../../assets/hero-2.png'; // No. 4 (Men making bed)
import hero3 from '../../assets/hero-3.png'; // No. 5 (Balcony)
import hero5 from '../../assets/hero-4.png'; // No. 2 (Girl at desk)
import hero4 from '../../assets/hero-5.png'; // No. 3 (Sofa/Living)

function Hero() {
    const navigate = useNavigate();
    const categories = [
        { id: 'student', label: 'Students Housing & Hostels', path: '/student-housing' },
        { id: 'hotel', label: 'Tourist Resorts and Hotels', path: '/hotel-resort' },
        { id: 'rental', label: 'Home Rentals & Apartments', path: '/home-rentals' },
        { id: 'travel', label: 'Travel Bd & Tours', path: '/travel-tours' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[0].path);

    const handleSearch = () => {
        navigate(selectedCategory);
    };
    return (
        <section className="bg-gradient-to-r from-[#CADCFF] via-[#E2E8FF] to-[#A5C9FF] py-16 lg:py-24 px-6 lg:px-20 overflow-hidden min-h-[750px] flex items-center">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Content - Created as per image_013d0d.jpg */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 lg:space-y-14">
                    {/* Animated Badge */}
                    <div className="inline-flex items-center gap-3 bg-blue-50/50 border border-blue-100 px-6 py-2.5 rounded-full shadow-sm backdrop-blur-sm group">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0095FF] opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0095FF]" />
                        </span>
                        <span className="text-[#0095FF] text-base lg:text-lg font-bold tracking-wider uppercase">
                            Across all of Bangladesh
                        </span>
                    </div>

                    {/* Main Heading with Gradient Touch */}
                    <h1 className="text-6xl lg:text-[110px] font-black text-slate-900 leading-[0.95] tracking-tight">
                        Find Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0095FF] to-blue-700">
                            Perfect Stay
                        </span>
                    </h1>

                    {/* Description - Improved Readability */}
                    <p className="text-slate-500 text-lg lg:text-2xl leading-relaxed max-w-2xl font-medium">
                        Discover verified accommodations tailored for{' '}
                        <span className="text-slate-900">students, tourists, and families</span>.
                        Browse thousands of listings with real-time availability and trusted
                        reviews.
                    </p>

                    {/* Modern Search Bar Container */}
                    <div className="w-full max-w-3xl relative group">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-[#0095FF] rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000" />

                        {/* Parent Div: এখানে flex-row ফিক্সড রাখা হয়েছে এবং আইটেমগুলোকে ডানে-বামে সরানোর জন্য justify-between ব্যবহার করা হয়েছে */}
                        <div className="relative w-full bg-white p-2 lg:p-3 rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-between overflow-hidden">
                            {/* Left Side: Icon + Select Menu */}
                            <div className="flex items-center flex-grow pl-4 sm:pl-6">
                                <svg
                                    className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>

                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full bg-transparent outline-none text-slate-400 text-base sm:text-xl font-bold cursor-pointer appearance-none px-3 sm:px-4"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.path}>
                                            {cat.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Right Side: Search Button */}
                            {/* এখানে w-full সরিয়ে শুধু w-auto রাখা হয়েছে যাতে এটি সবসময় ছোট থাকে */}
                            <button
                                type="button"
                                onClick={handleSearch}
                                className="flex-shrink-0 whitespace-nowrap bg-[#0095FF] text-white px-6 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-[40px] font-bold text-base sm:text-xl hover:bg-blue-600 transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2"
                            >
                                <span>Search</span>
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Trust Badges - Adds Authority */}
                    <div className="flex items-center gap-8 pt-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">
                            Trusted Partners:
                        </p>
                        <div className="flex gap-6 text-slate-900 font-black italic text-xl">
                            <span>Booking.com</span>
                            <span>Airbnb</span>
                            <span>Agoda</span>
                        </div>
                    </div>
                </div>

                {/* Right Content - Collage (Kept as per your instruction) */}
                <div className="relative h-[550px] w-full flex items-center justify-end mt-12 lg:mt-0">
                    <div className="relative w-full h-full max-w-[580px]">
                        {/* No. 1: Bedroom */}
                        <div className="absolute top-[3%] left-[10%] w-[50%] z-10">
                            <img
                                src={hero1}
                                alt="Bedroom"
                                className="rounded-xl shadow-lg border-2 border-black object-cover h-[210px] w-full"
                            />
                        </div>

                        {/* No. 4: Men making bed */}
                        <div className="absolute top-0 right-0 w-[50%] z-40">
                            <img
                                src={hero2}
                                alt="Hostel"
                                className="rounded-xl shadow-md border-2 border-black object-cover h-[210px] w-full"
                            />
                        </div>

                        {/* No. 3: Living Room */}
                        <div className="absolute top-[28%] right-[5%] w-[55%] z-30">
                            <img
                                src={hero4}
                                alt="Living Room"
                                className="rounded-xl shadow-xl border-2 border-black object-cover h-[200px] w-full"
                            />
                        </div>

                        {/* No. 5: Balcony */}
                        <div className="absolute bottom-[15%] left-[5%] w-[45%] z-40">
                            <img
                                src={hero3}
                                alt="Balcony"
                                className="rounded-xl shadow-2xl border-2 border-black object-cover h-[230px] w-full"
                            />
                        </div>

                        {/* No. 2: Girl at desk */}
                        <div className="absolute bottom-[10%] right-[-4%] w-[52%] z-20">
                            <img
                                src={hero5}
                                alt="Study Area"
                                className="rounded-xl shadow-xl border-2 border-black object-cover h-[210px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
