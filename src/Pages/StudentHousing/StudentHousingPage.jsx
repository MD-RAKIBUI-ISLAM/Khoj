import { useState } from 'react';
import {
    LuChevronDown,
    LuDroplets,
    LuFilter,
    LuFlame,
    LuMapPin,
    LuSearch,
    LuStar,
    LuZap
} from 'react-icons/lu';

import { studentHostelsData } from '../../data/mockData';

function StudentHousingPage() {
    const [price, setPrice] = useState(50000);
    const [searchLocation, setSearchLocation] = useState('Dhaka');

    // ম্যাপের জন্য URL জেনারেট করা
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(searchLocation)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-20 font-sans">
            {/* Header Section */}
            <header className="bg-white border-b px-6 lg:px-24 py-10">
                <div className="max-w-[1440px] mx-auto">
                    <h1 className="text-4xl font-extrabold text-[#1A1A1A] mb-2">
                        Student Housing & Hostels
                    </h1>
                    <p className="text-gray-500 font-medium text-lg">
                        Find affordable, comfortable hostels for students across Bangladesh
                    </p>
                </div>
            </header>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* --- Left Sidebar (Map & Filters) --- */}
                    <aside className="w-full lg:w-[350px] space-y-6 shrink-0">
                        {/* Interactive Map Card */}
                        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <LuMapPin className="text-[#0095FF]" size={20} />
                                <h2 className="font-extrabold text-lg">Live Map View</h2>
                            </div>
                            <div className="relative mb-4">
                                <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchLocation}
                                    onChange={(e) => setSearchLocation(e.target.value)}
                                    placeholder="Enter location (e.g. Dhanmondi)..."
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 ring-blue-100 outline-none transition-all"
                                />
                            </div>
                            {/* Google Map Embed */}
                            <div className="h-64 bg-blue-50 rounded-2xl overflow-hidden border border-gray-100">
                                <iframe
                                    title="Map"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    src={mapUrl}
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        {/* Filter Card */}
                        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center gap-2 mb-6 border-b pb-4">
                                <LuFilter className="text-gray-800" size={20} />
                                <h2 className="font-extrabold text-lg">Filters</h2>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-bold text-gray-700">
                                            Max Price:
                                        </label>
                                        <span className="text-[#0095FF] font-black">
                                            {price.toLocaleString()} BDT
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="2000"
                                        max="100000"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#0095FF]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Rooms Available
                                    </label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm appearance-none outline-none">
                                            <option>Any</option>
                                            <option>1 Room</option>
                                            <option>2+ Rooms</option>
                                        </select>
                                        <LuChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-[#0095FF] text-white py-4 rounded-2xl font-black text-sm hover:shadow-lg active:scale-95 transition-all"
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* --- Right Content (Results) --- */}
                    <main className="flex-grow space-y-6">
                        <div className="flex justify-between items-center px-2">
                            <span className="text-gray-400 font-bold italic text-sm">
                                Showing {studentHostelsData.length} results
                            </span>
                        </div>

                        {studentHostelsData.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-[40px] border border-gray-100 p-6 flex flex-col xl:flex-row gap-8 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image Section */}
                                <div className="w-full xl:w-[320px] h-[250px] rounded-[32px] overflow-hidden shrink-0 shadow-inner">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Details Section */}
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-2xl font-black text-[#1A1A1A] leading-tight mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm font-bold flex items-center gap-1">
                                                <LuMapPin size={14} className="text-[#0095FF]" />{' '}
                                                {item.location}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-2xl border border-orange-100">
                                            <LuStar
                                                size={16}
                                                className="text-orange-400 fill-orange-400"
                                            />
                                            <span className="text-sm font-black text-orange-700">
                                                {item.rating}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                ({item.reviews})
                                            </span>
                                        </div>
                                    </div>

                                    {/* Stats & Utilities Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                                        <div className="bg-[#EEF2FF] p-3 rounded-2xl text-center border border-blue-50">
                                            <p className="text-[10px] text-gray-500 uppercase font-black mb-1">
                                                Rooms
                                            </p>
                                            <p className="text-lg font-black text-blue-800">
                                                {item.rooms}
                                            </p>
                                        </div>
                                        {/* Utility: Current */}
                                        <div className="bg-yellow-50 p-3 rounded-2xl text-center border border-yellow-100">
                                            <p className="text-[10px] text-gray-500 uppercase font-black mb-1 flex items-center justify-center gap-1">
                                                <LuZap size={10} /> Electricity
                                            </p>
                                            <p className="text-sm font-black text-yellow-700">
                                                {item.utilities.current}
                                            </p>
                                        </div>
                                        {/* Utility: Gas */}
                                        <div className="bg-orange-50 p-3 rounded-2xl text-center border border-orange-100">
                                            <p className="text-[10px] text-gray-500 uppercase font-black mb-1 flex items-center justify-center gap-1">
                                                <LuFlame size={10} /> Gas
                                            </p>
                                            <p className="text-sm font-black text-orange-700">
                                                {item.utilities.gas}
                                            </p>
                                        </div>
                                        {/* Utility: Water */}
                                        <div className="bg-blue-50 p-3 rounded-2xl text-center border border-blue-100">
                                            <p className="text-[10px] text-gray-500 uppercase font-black mb-1 flex items-center justify-center gap-1">
                                                <LuDroplets size={10} /> Water
                                            </p>
                                            <p className="text-sm font-black text-blue-700">
                                                {item.utilities.water}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Availability List */}
                                    <div className="bg-gray-50 rounded-2xl p-4 mt-5 border border-gray-100">
                                        <p className="text-[11px] font-black text-gray-700 mb-3 uppercase tracking-wider">
                                            Live Seat Status
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                            {item.roomAvailability.map((room, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <span
                                                        className={`w-2 h-2 rounded-full ${room.includes('0 free') ? 'bg-red-400' : 'bg-green-400'}`}
                                                    />
                                                    <p className="text-xs text-gray-600 font-semibold">
                                                        {room}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer: Tags & Price */}
                                    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-5 border-t border-gray-100 gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-500 font-bold uppercase shadow-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-6 self-end sm:self-center">
                                            <div className="text-right">
                                                <p className="text-[10px] text-gray-400 font-black uppercase">
                                                    Monthly Rent
                                                </p>
                                                <p className="text-2xl font-black text-[#0095FF] tracking-tighter">
                                                    {item.price}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                className="bg-[#0095FF] text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-blue-600 hover:shadow-lg active:scale-95 transition-all"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default StudentHousingPage;
