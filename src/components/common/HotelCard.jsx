import { LuArrowRight, LuMapPin, LuNavigation, LuStar } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

function HotelCard({ item, onRouteClick }) {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-[32px] border border-gray-100 p-6 flex flex-col xl:flex-row gap-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group relative overflow-hidden">
            {/* Image Section with Hover Effect */}
            <div className="w-full xl:w-[360px] shrink-0 h-[260px] rounded-[24px] overflow-hidden relative">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm">
                    <div className="flex items-center gap-1">
                        <LuStar size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold text-slate-800">{item.rating}</span>
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1.5">
                            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-green-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 text-base font-medium flex items-center gap-2">
                                <span className="p-1.5 bg-slate-50 rounded-lg text-slate-500">
                                    <LuMapPin size={18} />
                                </span>
                                {item.location}
                            </p>
                        </div>
                        <div className="hidden sm:block text-right">
                            <p className="text-xs font-black text-slate-300 uppercase tracking-[2px]">
                                Reviews
                            </p>
                            <p className="text-sm font-bold text-slate-500">
                                {item.reviews} Verified
                            </p>
                        </div>
                    </div>

                    {/* Tags (আপনার ডাটা থেকে tags গুলো এখানে আসবে) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags?.slice(0, 4).map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[10px] font-black uppercase border border-slate-100"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Room Capacity Chips - Re-designed for Professional Look */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        {Object.entries(item.roomStats).map(([key, val]) => (
                            <div
                                key={key}
                                className={`relative overflow-hidden group/room flex flex-col items-center justify-center p-5 rounded-[28px] border-2 transition-all duration-300 hover:-translate-y-1 ${
                                    key === 'deluxe'
                                        ? 'bg-rose-50/50 border-rose-100 hover:border-rose-300 shadow-sm hover:shadow-rose-100'
                                        : key === 'double'
                                          ? 'bg-emerald-50/50 border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-emerald-100'
                                          : 'bg-sky-50/50 border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-sky-100'
                                }`}
                            >
                                {/* Top Indicator Dot */}
                                <div
                                    className={`absolute top-3 w-2 h-2 rounded-full animate-pulse ${
                                        key === 'deluxe'
                                            ? 'bg-rose-400'
                                            : key === 'double'
                                              ? 'bg-emerald-400'
                                              : 'bg-sky-400'
                                    }`}
                                />

                                <p className="text-[12px] uppercase font-black tracking-[1.5px] text-slate-400 mb-1">
                                    {key}
                                </p>

                                <div className="flex items-baseline gap-0.5">
                                    <span className="text-3xl font-black text-slate-800 tracking-tight">
                                        {val}
                                    </span>
                                </div>

                                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">
                                    Total Rooms
                                </p>

                                {/* Background Decorative Circle */}
                                <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-white/40 group-hover/room:scale-150 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* Status Info with Subtle Styling */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50/50 border border-green-100/50 rounded-2xl p-4">
                            <p className="text-[11px] font-black text-green-700 uppercase tracking-wider mb-2">
                                Live Availability
                            </p>
                            <div className="space-y-1.5">
                                {item.availability.slice(0, 2).map((line, i) => (
                                    <p
                                        key={i}
                                        className="text-xs text-slate-600 font-semibold flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 bg-green-400 rounded-full" />{' '}
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col justify-center">
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {Object.entries(item.meals).map(([meal, details]) => (
                                    <p
                                        key={meal}
                                        className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1.5"
                                    >
                                        <span
                                            className={
                                                details.status?.toLowerCase().includes('free')
                                                    ? 'text-green-500'
                                                    : 'text-slate-300'
                                            }
                                        >
                                            ●
                                        </span>
                                        {meal}:{' '}
                                        <span className="text-slate-800">
                                            {details.status?.split('(')[0]}
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-50">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-green-600">{item.price}</span>
                        <span className="text-slate-400 font-bold text-sm">/ night</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                            type="button"
                            onClick={onRouteClick}
                            title="Get Direction"
                            className="flex items-center gap-2 px-5 py-4 bg-slate-900 text-white rounded-2xl hover:bg-green-600 transition-all duration-300 group/btn"
                        >
                            <LuNavigation
                                size={20}
                                className="group-hover/btn:rotate-12 transition-transform"
                            />
                            <span className="font-bold text-sm uppercase tracking-wider">
                                Route
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate(`/hotel-resort/details/${item.id}`)}
                            className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-600 hover:shadow-lg hover:shadow-green-100 transition-all group/details"
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

export default HotelCard;
