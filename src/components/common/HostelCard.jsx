import { LuDroplets, LuFlame, LuMapPin, LuNavigation, LuStar, LuZap } from 'react-icons/lu';

function HostelCard({ item, onRouteClick }) {
    return (
        <div className="bg-white rounded-[40px] border border-gray-100 p-6 flex flex-col xl:flex-row gap-8 hover:shadow-2xl transition-all duration-500 group">
            {/* Image Section */}
            <div className="w-full xl:w-[280px] shrink-0">
                <div className="h-[250px] rounded-[32px] overflow-hidden shadow-inner relative">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black text-[#0070FF] uppercase shadow-sm">
                        Verified
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow flex flex-col justify-between overflow-hidden">
                <div>
                    <div className="flex justify-between items-start mb-2 gap-4">
                        <div className="min-w-0">
                            <h3 className="text-2xl font-black text-[#1A1A1A] truncate group-hover:text-[#0070FF] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm font-bold flex items-center gap-1 mt-1">
                                <LuMapPin size={14} className="text-[#00C2FF]" /> {item.location}
                            </p>
                        </div>
                        <div className="shrink-0 flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-2xl border border-orange-100">
                            <LuStar size={16} className="text-orange-400 fill-orange-400" />
                            <span className="text-sm font-black text-orange-700">
                                {item.rating}
                            </span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-5">
                        {[
                            { label: 'Rooms', val: item.rooms, icon: null },
                            {
                                label: 'Washroom',
                                val: item.washrooms,
                                icon: <LuDroplets size={10} />
                            },
                            {
                                label: 'Current',
                                val: item.utilities.current,
                                icon: <LuZap size={10} />
                            },
                            { label: 'Gas', val: item.utilities.gas, icon: <LuFlame size={10} /> },
                            {
                                label: 'Water',
                                val: item.utilities.water,
                                icon: <LuDroplets size={10} />
                            }
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-slate-50/50 p-3 rounded-2xl text-center border border-gray-50"
                            >
                                <p className="text-[10px] text-gray-500 uppercase font-black mb-1 flex items-center justify-center gap-1 whitespace-nowrap">
                                    {stat.icon} {stat.label}
                                </p>
                                <p className="text-sm font-black text-slate-800">{stat.val}</p>
                            </div>
                        ))}
                    </div>

                    {/* Availability */}
                    <div className="bg-gray-50/50 rounded-2xl p-4 mt-5 border border-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                            {item.roomAvailability.map((room, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full ${room.includes('0 free') ? 'bg-red-400' : 'bg-green-400 animate-pulse'}`}
                                    />
                                    <p className="text-[11px] text-gray-600 font-bold truncate">
                                        {room}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-end mt-6 pt-5 border-t border-gray-50 gap-6">
                    <div className="flex flex-wrap gap-2 max-w-[300px]">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] px-3.5 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-slate-500 font-black uppercase tracking-wider shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                        <div className="text-right mr-3 hidden sm:block">
                            <p className="text-[9px] text-gray-400 font-black uppercase">Monthly</p>
                            <p className="text-2xl font-black text-[#0070FF] tracking-tighter">
                                {item.price}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={onRouteClick}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-slate-100 text-slate-600 bg-white rounded-2xl font-black text-xs hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300 group"
                        >
                            <LuNavigation size={14} className="group-hover:animate-bounce" /> ROUTE
                        </button>
                        <button
                            type="button"
                            className="flex-1 sm:flex-none bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl font-black text-xs hover:bg-slate-800 hover:shadow-xl transition-all duration-300 uppercase tracking-widest"
                        >
                            DETAILS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostelCard;
