import {
    LuArrowRight,
    LuBath,
    LuCompass,
    LuHouse,
    LuInfo,
    LuMapPin,
    LuNavigation,
    LuShieldCheck,
    LuSquare,
    LuStar,
    LuTrees
} from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

function RentalCard({ item, onRouteClick }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-[40px] border border-slate-100 p-6 flex flex-col xl:flex-row gap-8 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 group relative mb-8">
            {/* ১. ইমেজ সেকশন (রেটিং এবং রিভিওসহ) */}
            <div className="w-full xl:w-[380px] shrink-0 h-[300px] rounded-[32px] overflow-hidden relative shadow-lg">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-1.5">
                        <LuStar size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-black text-slate-800">{item.rating}</span>
                        <span className="text-[11px] text-slate-400 font-bold">
                            ({item.reviews} reviews)
                        </span>
                    </div>
                </div>
            </div>

            {/* ২. মেইন ইনফরমেশন সেকশন */}
            <div className="flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-500 font-bold text-sm uppercase">
                                <LuMapPin size={18} className="text-blue-500" />
                                {item.location}
                            </div>
                        </div>
                        {/* Direction Badge */}
                        <div className="bg-orange-50 px-4 py-2 rounded-2xl border border-orange-100 flex flex-col items-center">
                            <LuCompass className="text-orange-500 mb-1" size={18} />
                            <span className="text-[10px] font-black text-orange-600 uppercase tracking-tighter">
                                {item.direction} Facing
                            </span>
                        </div>
                    </div>

                    {/* Tags (আপনার ডাটা থেকে tags গুলো এখানে আসবে) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags?.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[10px] font-black uppercase border border-slate-100"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Property Stats Grid (বড় করা হয়েছে যাতে Balcony অ্যাড হয়) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                        <div className="flex flex-col items-center p-4 rounded-3xl border-2 border-indigo-50 bg-indigo-50/20">
                            <LuSquare className="text-indigo-500 mb-1" size={18} />
                            <span className="text-lg font-black text-slate-800">
                                {item.size.split(' ')[0]}
                            </span>
                            <p className="text-[9px] font-bold text-slate-400 uppercase">Sq Ft</p>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-3xl border-2 border-emerald-50 bg-emerald-50/20">
                            <LuHouse className="text-emerald-500 mb-1" size={18} />
                            <span className="text-lg font-black text-slate-800">{item.rooms}</span>
                            <p className="text-[9px] font-bold text-slate-400 uppercase">Rooms</p>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-3xl border-2 border-orange-50 bg-orange-50/20">
                            <LuBath className="text-orange-500 mb-1" size={18} />
                            <span className="text-lg font-black text-slate-800">
                                {item.bathrooms}
                            </span>
                            <p className="text-[9px] font-bold text-slate-400 uppercase">Baths</p>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-3xl border-2 border-blue-50 bg-blue-50/20">
                            <LuTrees className="text-blue-500 mb-1" size={18} />
                            <span className="text-lg font-black text-slate-800">
                                {item.verandas}
                            </span>
                            <p className="text-[9px] font-bold text-slate-400 uppercase">Balcony</p>
                        </div>
                    </div>

                    {/* Unit Availability (বিস্তারিত স্ট্যাটাসসহ) */}
                    <div className="mt-6 bg-slate-50/80 rounded-[28px] p-5 border border-slate-100">
                        <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                            <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <LuInfo size={14} /> Unit Availability Status
                            </h4>
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 uppercase">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full" /> Vacant
                                </span>
                                <span className="flex items-center gap-1 text-[9px] font-bold text-rose-500 uppercase">
                                    <span className="w-2 h-2 bg-rose-400 rounded-full" /> Booked
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                            {item.flatAvailability.map((flat, i) => (
                                <div
                                    key={i}
                                    className={`p-2 rounded-xl border text-center transition-all ${flat.status === 'Vacant' ? 'bg-white border-emerald-100 shadow-sm' : 'bg-rose-50 border-rose-100 opacity-60'}`}
                                >
                                    <p className="text-[10px] font-black text-slate-700">
                                        {flat.id}
                                    </p>
                                    <p
                                        className={`text-[8px] font-bold uppercase ${flat.status === 'Vacant' ? 'text-emerald-500' : 'text-rose-400'}`}
                                    >
                                        {flat.status === 'Vacant' ? 'Available' : 'Booked'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ৩. ফুটার সেকশন (সিকিউরিটি এবং প্রাইজ) */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 mt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[2px]">
                                Monthly Rent
                            </span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-black text-blue-600">
                                    {item.price.replace('BDT', '')}
                                </span>
                                <span className="text-slate-400 font-bold text-sm">BDT</span>
                            </div>
                        </div>
                        <div className="h-10 w-[1px] bg-slate-100 mx-2 hidden sm:block" />
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[2px]">
                                Security
                            </span>
                            <div className="flex items-center gap-1.5 text-slate-700 font-black text-xs bg-slate-100 px-3 py-1.5 rounded-xl">
                                <LuShieldCheck size={14} className="text-emerald-500" />
                                High
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        {/* Route Button */}
                        <button
                            type="button"
                            onClick={onRouteClick}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-[20px] hover:bg-blue-600 transition-all duration-300 group/btn"
                        >
                            <LuNavigation
                                size={20}
                                className="group-hover/btn:rotate-12 transition-transform"
                            />
                            <span className="font-bold text-xs uppercase tracking-widest whitespace-nowrap">
                                Route
                            </span>
                        </button>

                        {/* View Details Button */}
                        <button
                            type="button"
                            onClick={() => navigate(`/home-rentals/details/${item.id}`)}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 text-white rounded-[20px] hover:bg-blue-600 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 group/details"
                        >
                            <span className="font-bold text-xs uppercase tracking-widest whitespace-nowrap">
                                View Details
                            </span>
                            <LuArrowRight
                                size={20}
                                className="group-hover/details:translate-x-1 transition-transform"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RentalCard;
