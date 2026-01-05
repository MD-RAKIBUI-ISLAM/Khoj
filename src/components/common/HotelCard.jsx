import { LuMapPin, LuStar } from 'react-icons/lu';

import Button from './Button';

function HotelCard({ item, onRouteClick }) {
    return (
        <div className="bg-white rounded-[32px] border border-gray-100 p-5 flex flex-col xl:flex-row gap-6 hover:shadow-xl transition-all duration-300 group">
            {/* Image Section */}
            <div className="w-full xl:w-[320px] shrink-0 h-[240px] rounded-3xl overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Info Section */}
            <div className="flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <div className="min-w-0">
                            <h3 className="text-xl font-bold text-slate-800 truncate">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                                <LuMapPin size={14} /> {item.location}
                            </p>
                        </div>
                        <div className="shrink-0 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                            <LuStar size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-bold text-slate-700">{item.rating}</span>
                            <span className="text-[10px] text-gray-400">({item.reviews})</span>
                        </div>
                    </div>

                    {/* Room Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                        {Object.entries(item.roomStats).map(([key, val]) => (
                            <div
                                key={key}
                                className={`p-2 rounded-2xl text-center border ${key === 'double' ? 'bg-green-50 border-green-100' : key === 'deluxe' ? 'bg-pink-50 border-pink-100' : 'bg-blue-50 border-blue-100'}`}
                            >
                                <p className="text-[10px] uppercase font-bold text-gray-500">
                                    {key}
                                </p>
                                <p className="text-sm font-black text-slate-800">{val}</p>
                            </div>
                        ))}
                    </div>

                    {/* Availability Stats */}
                    <div className="bg-green-50/40 rounded-2xl p-3 mt-4 border border-green-100/50">
                        <h4 className="text-[10px] font-black uppercase text-slate-800 mb-1">
                            Availability Stats
                        </h4>
                        {item.availability.map((line, i) => (
                            <p
                                key={i}
                                className="text-[10px] text-slate-600 font-medium leading-relaxed"
                            >
                                ● {line}
                            </p>
                        ))}
                    </div>

                    {/* Tags & Meals */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[9px] px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-500 rounded-full font-bold uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-3 border-t border-gray-50 pt-3">
                        {Object.entries(item.meals).map(([meal, status]) => (
                            <p key={meal} className="text-[9px] font-bold text-gray-400 capitalize">
                                {meal}:{' '}
                                <span
                                    className={
                                        status.includes('Free')
                                            ? 'text-green-500'
                                            : 'text-slate-600'
                                    }
                                >
                                    {status}
                                </span>
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Per Night</p>
                        <p className="text-xl font-black text-green-500">{item.price}</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={onRouteClick}
                            className="p-3 border border-gray-200 rounded-2xl hover:bg-slate-800 hover:text-white transition-colors"
                        >
                            <LuStar size={18} />
                        </button>
                        <Button
                            label="View Details"
                            variant="primary"
                            className="!bg-green-500 hover:!bg-green-600 !rounded-2xl !px-8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelCard;
