import { useState } from 'react';
import {
    LuDroplets,
    LuFilter,
    LuFlame,
    LuMapPin,
    LuNavigation,
    LuSearch,
    LuStar,
    LuZap
} from 'react-icons/lu';

import { studentHostelsData } from '../../data/mockData';

function StudentHousingPage() {
    const [searchLocation, setSearchLocation] = useState('Dhaka');
    const [price, setPrice] = useState(100000);
    const [selectedRooms, setSelectedRooms] = useState('Any');
    const [activeFilters, setActiveFilters] = useState({
        maxPrice: 100000,
        rooms: 'Any'
    });

    const filteredHostels = studentHostelsData.filter((hostel) => {
        const searchTerm = searchLocation.toLowerCase();
        const matchesLocation = hostel.location.toLowerCase().includes(searchTerm);
        const matchesTitle = hostel.title.toLowerCase().includes(searchTerm);
        const hostelPrice = parseInt(hostel.price.replace(/\D/g, ''), 10) || 0;
        const matchesPrice = hostelPrice <= activeFilters.maxPrice;
        const matchesRooms =
            activeFilters.rooms === 'Any' ||
            (activeFilters.rooms === '4+'
                ? parseInt(hostel.rooms, 10) >= 4
                : parseInt(hostel.rooms, 10) === parseInt(activeFilters.rooms, 10));

        return (matchesLocation || matchesTitle) && matchesPrice && matchesRooms;
    });

    const handleApplyFilters = () => {
        setActiveFilters({
            maxPrice: price,
            rooms: selectedRooms
        });
    };

    const mapUrl = `https://www.google.com/maps?q=student+hostels+in+${encodeURIComponent(searchLocation)}&output=embed`;

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-20 font-sans">
            {/* Header - Width Increased */}
            <header className="bg-white border-b px-4 lg:px-12 py-10">
                <div className="max-w-[1600px] mx-auto">
                    <h1 className="text-4xl font-extrabold text-[#1A1A1A] mb-2 tracking-tight">
                        Student Housing & <span className="text-[#0070FF]">Hostels</span>
                    </h1>
                    <p className="text-gray-500 font-medium text-lg">
                        Find affordable, comfortable hostels for students across Bangladesh
                    </p>
                </div>
            </header>

            {/* Main Container - Width Increased to 1600px */}
            <div className="max-w-[1600px] mx-auto px-4 lg:px-12 pt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* --- Left Sidebar --- */}
                    <aside className="w-full lg:w-[350px] space-y-6 shrink-0">
                        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <LuMapPin className="text-[#00C2FF]" size={20} />
                                    <h2 className="font-extrabold text-lg text-slate-800">
                                        Live Map View
                                    </h2>
                                </div>
                                <span className="bg-blue-50 text-[#0070FF] text-[10px] font-black px-3 py-1 rounded-full">
                                    {filteredHostels.length} Found
                                </span>
                            </div>
                            <div className="relative mb-4">
                                <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchLocation}
                                    onChange={(e) => setSearchLocation(e.target.value)}
                                    placeholder="Search location..."
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 ring-blue-100"
                                />
                            </div>
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

                        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center gap-2 mb-6 border-b pb-4">
                                <LuFilter className="text-slate-800" size={20} />
                                <h2 className="font-extrabold text-lg">Filters</h2>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-bold text-gray-700">
                                            Max Price:
                                        </label>
                                        <span className="text-[#0070FF] font-black">
                                            {price.toLocaleString()} BDT
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="2000"
                                        max="100000"
                                        step="500"
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#0070FF]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Rooms Category
                                    </label>
                                    <select
                                        value={selectedRooms}
                                        onChange={(e) => setSelectedRooms(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 ring-blue-50 font-semibold text-gray-700"
                                    >
                                        <option value="Any">Any Room Count</option>
                                        <option value="1">1 Room</option>
                                        <option value="2">2 Rooms</option>
                                        <option value="3">3 Rooms</option>
                                        <option value="4+">4+ Rooms</option>
                                    </select>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleApplyFilters}
                                    className="w-full bg-[#1A1A1A] text-white py-4 rounded-2xl font-black text-sm hover:bg-[#333] transition-all uppercase tracking-wider shadow-lg shadow-gray-200"
                                >
                                    Apply Search Filters
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* --- Right Content --- */}
                    <main className="flex-grow space-y-6">
                        <div className="px-2">
                            <span className="text-slate-500 font-bold italic text-sm bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100">
                                Showing {filteredHostels.length} hostels in{' '}
                                <span className="text-[#0070FF]">{searchLocation}</span>
                            </span>
                        </div>

                        {filteredHostels.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-[40px] border border-gray-100 p-6 flex flex-col xl:flex-row gap-8 hover:shadow-2xl hover:shadow-gray-200/40 transition-all duration-500 group"
                            >
                                {/* Image Section - Slightly smaller width for more space */}
                                <div className="w-full xl:w-[280px] shrink-0">
                                    <div className="h-[240px] rounded-[32px] overflow-hidden shadow-inner relative">
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

                                {/* Content Details Section */}
                                <div className="flex-grow flex flex-col justify-between overflow-hidden">
                                    <div>
                                        <div className="flex justify-between items-start mb-2 gap-4">
                                            <div className="min-w-0">
                                                <h3 className="text-2xl font-black text-[#1A1A1A] truncate group-hover:text-[#0070FF] transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm font-bold flex items-center gap-1 mt-1">
                                                    <LuMapPin
                                                        size={14}
                                                        className="text-[#00C2FF]"
                                                    />{' '}
                                                    {item.location}
                                                </p>
                                            </div>
                                            <div className="shrink-0 flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-2xl border border-orange-100 shadow-sm">
                                                <LuStar
                                                    size={16}
                                                    className="text-orange-400 fill-orange-400"
                                                />
                                                <span className="text-sm font-black text-orange-700">
                                                    {item.rating}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                                            {[
                                                {
                                                    label: 'Rooms',
                                                    val: item.rooms,
                                                    color: 'blue',
                                                    icon: null
                                                },
                                                {
                                                    label: 'Current',
                                                    val: item.utilities.current,
                                                    color: 'yellow',
                                                    icon: <LuZap size={10} />
                                                },
                                                {
                                                    label: 'Gas',
                                                    val: item.utilities.gas,
                                                    color: 'orange',
                                                    icon: <LuFlame size={10} />
                                                },
                                                {
                                                    label: 'Water',
                                                    val: item.utilities.water,
                                                    color: 'cyan',
                                                    icon: <LuDroplets size={10} />
                                                }
                                            ].map((stat, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-slate-50/50 p-3 rounded-2xl text-center border border-gray-50 hover:bg-white hover:shadow-sm transition-all"
                                                >
                                                    <p className="text-[10px] text-gray-500 uppercase font-black mb-1 flex items-center justify-center gap-1 whitespace-nowrap">
                                                        {stat.icon} {stat.label}
                                                    </p>
                                                    <p className="text-sm font-black text-slate-800">
                                                        {stat.val}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Seat Status */}
                                        <div className="bg-gray-50/50 rounded-2xl p-4 mt-5 border border-gray-50">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                                                {item.roomAvailability.map((room, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-2"
                                                    >
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

                                    {/* Action Footer - Fixed alignment */}
                                    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-5 border-t border-gray-50 gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[9px] px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-full text-gray-400 font-bold uppercase tracking-wider"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                                            <div className="text-right mr-2 hidden sm:block">
                                                <p className="text-[9px] text-gray-400 font-black uppercase">
                                                    Monthly
                                                </p>
                                                <p className="text-xl font-black text-[#0070FF] tracking-tighter">
                                                    {item.price}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    window.open(
                                                        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${item.title} ${item.location}`)}`,
                                                        '_blank'
                                                    )
                                                }
                                                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-100 text-[#0070FF] bg-blue-50/20 rounded-2xl font-black text-xs hover:bg-[#0070FF] hover:text-white transition-all duration-300 group"
                                            >
                                                <LuNavigation
                                                    size={14}
                                                    className="group-hover:animate-bounce"
                                                />
                                                ROUTE
                                            </button>
                                            <button
                                                type="button"
                                                className="flex-1 sm:flex-none bg-[#1A1A1A] text-white px-8 py-3.5 rounded-2xl font-black text-xs hover:bg-[#0070FF] hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 uppercase tracking-widest"
                                            >
                                                DETAILS
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
