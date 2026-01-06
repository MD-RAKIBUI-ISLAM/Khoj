import {
    LuArrowRight,
    LuCheck, // আপনার লিস্ট অনুযায়ী 'LuCheck' ব্যবহার করা হলো
    LuDroplets,
    LuFlame,
    LuMapPin,
    LuNavigation,
    LuStar,
    LuUsers,
    LuZap
} from 'react-icons/lu';

function HostelCard({ item, onRouteClick }) {
    return (
        <div className="bg-white rounded-[32px] border border-gray-100 p-6 flex flex-col xl:flex-row gap-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group relative overflow-hidden">
            {/* Image Section */}
            <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-4">
                <div className="h-[220px] rounded-[24px] overflow-hidden relative shadow-sm">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm border border-white/20">
                        <div className="flex items-center gap-1">
                            <LuStar size={16} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-bold text-slate-800">{item.rating}</span>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-lg">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">
                            Verified Hostel
                        </span>
                    </div>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-1.5">
                    {item.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="text-[10px] font-bold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg border border-blue-100/50 flex items-center gap-1"
                        >
                            <LuCheck size={12} className="text-blue-500" />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1.5 min-w-0">
                            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors truncate">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 text-base font-medium flex items-center gap-2">
                                <span className="p-1.5 bg-slate-50 rounded-lg text-blue-500">
                                    <LuMapPin size={18} />
                                </span>
                                {item.location}
                            </p>
                        </div>
                        <div className="hidden sm:block text-right shrink-0">
                            <p className="text-xs font-black text-slate-300 uppercase tracking-[2px]">
                                Reviews
                            </p>
                            <p className="text-sm font-bold text-slate-500">
                                {item.reviews} Verified
                            </p>
                        </div>
                    </div>

                    {/* Stats Row - Enhanced & Professional Look */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {/* 1. Capacity Card */}
                        <div className="flex-1 min-w-[120px] group/stat flex flex-col items-center justify-center gap-2 p-5 bg-gradient-to-b from-blue-50/50 to-white border border-blue-100/60 rounded-[24px] hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                            <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600 group-hover/stat:scale-110 transition-transform">
                                <LuUsers size={24} />
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                                    Capacity
                                </p>
                                <p className="text-lg font-black text-slate-900">{item.capacity}</p>
                            </div>
                        </div>

                        {/* 2. Rooms Card */}
                        <div className="flex-1 min-w-[120px] group/stat flex flex-col items-center justify-center gap-2 p-5 bg-gradient-to-b from-slate-50/50 to-white border border-slate-100 rounded-[24px] hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                            <div className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600 group-hover/stat:scale-110 transition-transform">
                                <LuMapPin size={24} />{' '}
                                {/* আপনি এখানে LuHome ও ব্যবহার করতে পারেন */}
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                                    Rooms
                                </p>
                                <p className="text-lg font-black text-slate-900">{item.rooms}</p>
                            </div>
                        </div>

                        {/* 3. Washroom Card */}
                        <div className="flex-1 min-w-[120px] group/stat flex flex-col items-center justify-center gap-2 p-5 bg-gradient-to-b from-cyan-50/50 to-white border border-cyan-100/60 rounded-[24px] hover:border-cyan-400 hover:shadow-lg transition-all duration-300">
                            <div className="p-3 bg-white rounded-2xl shadow-sm text-cyan-500 group-hover/stat:scale-110 transition-transform">
                                <LuDroplets size={24} />
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                                    Washroom
                                </p>
                                <p className="text-lg font-black text-slate-900">
                                    {item.washrooms}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Availability & Utilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-emerald-50/40 border border-emerald-100/40 rounded-2xl p-4">
                            <p className="text-[11px] font-black text-emerald-700 uppercase tracking-wider mb-2">
                                Room Availability
                            </p>
                            <div className="space-y-1.5">
                                {item.roomAvailability?.map((line, i) => (
                                    <p
                                        key={i}
                                        className="text-xs text-slate-600 font-semibold flex items-center gap-2"
                                    >
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full ${line.includes('0 free') ? 'bg-rose-400' : 'bg-emerald-500 animate-pulse'}`}
                                        />
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex items-center">
                            <div className="grid grid-cols-3 gap-2 w-full text-center">
                                <div>
                                    <LuZap size={14} className="mx-auto text-yellow-500 mb-1" />
                                    <p className="text-[9px] font-black text-slate-400 uppercase">
                                        Power
                                    </p>
                                    <p className="text-[11px] font-black text-slate-800">
                                        {item.utilities.current}
                                    </p>
                                </div>
                                <div className="border-x border-slate-200">
                                    <LuFlame size={14} className="mx-auto text-orange-500 mb-1" />
                                    <p className="text-[9px] font-black text-slate-400 uppercase">
                                        Gas
                                    </p>
                                    <p className="text-[11px] font-black text-slate-800">
                                        {item.utilities.gas}
                                    </p>
                                </div>
                                <div>
                                    <LuDroplets size={14} className="mx-auto text-blue-500 mb-1" />
                                    <p className="text-[9px] font-black text-slate-400 uppercase">
                                        Water
                                    </p>
                                    <p className="text-[11px] font-black text-slate-800">
                                        {item.utilities.water}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-50">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-blue-600 tracking-tight">
                            {item.price}
                        </span>
                        <span className="text-slate-400 font-bold text-xs uppercase">/ month</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                            type="button"
                            onClick={onRouteClick}
                            className="flex items-center gap-2 px-5 py-4 bg-slate-900 text-white rounded-2xl hover:bg-blue-600 transition-all duration-300 group/btn"
                        >
                            <LuNavigation
                                size={20}
                                className="group-hover/btn:rotate-12 transition-transform"
                            />
                            <span className="font-bold text-xs uppercase tracking-wider">
                                Route
                            </span>
                        </button>

                        <button
                            type="button"
                            className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all group/details"
                        >
                            View Details
                            <LuArrowRight
                                size={18}
                                className="group-hover/details:translate-x-1 transition-transform"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostelCard;
