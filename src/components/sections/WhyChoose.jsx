import { LuCirclePlus, LuSearch, LuSparkles } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import detailedImg from '../../assets/Detailed_information.png';
import nationwideImg from '../../assets/nationwide_coverage.png';
import verifiedImg from '../../assets/verified_reviews.png';
import { whyChooseData } from '../../data/mockData';

const featureImages = [nationwideImg, detailedImg, verifiedImg];

function WhyChoose() {
    const navigate = useNavigate();
    return (
        <section className="py-24 px-6 lg:px-24 bg-[#F1F5F9]">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-[5px] mb-4 block">
                        Benefits
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                        Why Choose <span className="text-blue-600">Khoj?</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
                    {whyChooseData.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.1)] transition-all duration-500 border border-slate-50 flex flex-col items-center text-center group"
                        >
                            <div className="w-full h-44 mb-10 relative">
                                {/* Subtle background glow behind images */}
                                <div className="absolute inset-0 bg-blue-50 rounded-full scale-75 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={featureImages[index]}
                                    alt={item.title}
                                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-[15px] font-medium leading-relaxed px-2 opacity-80">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(15,23,42,0.3)]">
                    {/* 1. Dynamic Background - মোর প্রফেশনাল ডার্ক গ্রেডিয়েন্ট */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]" />

                    {/* 2. Glassmorphism Decorative Shapes - সাইজ কিছুটা কমানো হয়েছে */}
                    <div className="absolute top-[-40%] right-[-5%] w-80 h-80 bg-blue-500/10 blur-[90px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[-40%] left-[-5%] w-80 h-80 bg-indigo-500/10 blur-[90px] rounded-full" />

                    {/* 3. Content Section - Padding কমানো হয়েছে (p-8 lg:p-14) */}
                    <div className="relative z-10 p-8 lg:p-14 flex flex-col items-center text-center">
                        {/* Badge - মোর কম্প্যাক্ট */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6 transform hover:scale-105 transition-transform cursor-default">
                            {/* এখানে animate-pulse যোগ করা হয়েছে */}
                            <LuSparkles className="text-yellow-400 animate-pulse" size={14} />
                            <span className="text-white text-[9px] font-black uppercase tracking-[2px]">
                                Join 10,000+ Students
                            </span>
                        </div>

                        {/* Headline - সাইজ অ্যাডজাস্ট করা হয়েছে */}
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                            Ready to find your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300">
                                perfect stay?
                            </span>
                        </h2>

                        <p className="text-slate-300 text-base mb-10 max-w-xl mx-auto font-medium leading-relaxed opacity-90">
                            Explore verified hostels and premium rooms today.{' '}
                            <br className="hidden md:block" />
                            Whether you're a student or an owner, we make it simple.
                        </p>

                        {/* 4. Action Buttons - প্যাডিং ব্যালেন্স করা হয়েছে */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                            <button
                                type="button"
                                className="group relative flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-blue-500 transition-all shadow-xl active:scale-95 w-full sm:w-auto overflow-hidden"
                            >
                                <LuSearch
                                    size={18}
                                    className="group-hover:rotate-12 transition-transform"
                                />
                                Start Searching
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('/list-property')} // রাউটে নেভিগেট করবে
                                className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all active:scale-95 w-full sm:w-auto cursor-pointer"
                            >
                                <LuCirclePlus size={20} />
                                List Your Property
                            </button>
                        </div>

                        {/* Trust Badges - মার্জিন কমিয়ে স্লিম করা হয়েছে */}
                        <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-white/5 pt-8 w-full max-w-2xl">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                                </div>
                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                    Verified Listings
                                </span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                                </div>
                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                    Secure Booking
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
