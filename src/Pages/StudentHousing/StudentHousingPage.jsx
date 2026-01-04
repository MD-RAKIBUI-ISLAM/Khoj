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
    const [selectedDestination, setSelectedDestination] = useState(null);
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

        // Price Filter
        const matchesPrice = hostelPrice <= activeFilters.maxPrice;

        // Rooms Filter (Fixing the unused variable error here)
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
            rooms: selectedRooms // Updating filter with selected room count
        });
    };

    const mapUrl = selectedDestination
        ? `https://www.google.com/maps?saddr=My+Location&daddr=${encodeURIComponent(selectedDestination)}&output=embed`
        : `https://www.google.com/maps?q=${encodeURIComponent(`${searchLocation} student hostel`)}&output=embed`;
    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-20 font-sans">
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

            <div className="max-w-[1600px] mx-auto px-4 lg:px-12 pt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="w-full lg:w-[350px] space-y-6 shrink-0">
                        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <LuMapPin className="text-[#00C2FF]" size={20} />
                                    <h2 className="font-extrabold text-lg text-slate-800">
                                        Live Map View
                                    </h2>
                                </div>
                                <span className="bg-blue-50 text-[#0070FF] text-[10px] font-black px-3 py-1 rounded-full uppercase">
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
                                    className="w-full bg-[#1A1A1A] text-white py-4 rounded-2xl font-black text-sm hover:bg-slate-800 transition-all uppercase tracking-wider"
                                >
                                    Apply Search Filters
                                </button>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-grow space-y-6">
                        {filteredHostels.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-[40px] border border-gray-100 p-6 flex flex-col xl:flex-row gap-8 hover:shadow-2xl transition-all duration-500 group"
                            >
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
                                            <div className="shrink-0 flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-2xl border border-orange-100">
                                                <LuStar
                                                    size={16}
                                                    className="text-orange-400 fill-orange-400"
                                                />
                                                <span className="text-sm font-black text-orange-700">
                                                    {item.rating}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                                            {[
                                                { label: 'Rooms', val: item.rooms, icon: null },
                                                {
                                                    label: 'Current',
                                                    val: item.utilities.current,
                                                    icon: <LuZap size={10} />
                                                },
                                                {
                                                    label: 'Gas',
                                                    val: item.utilities.gas,
                                                    icon: <LuFlame size={10} />
                                                },
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
                                                    <p className="text-sm font-black text-slate-800">
                                                        {stat.val}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

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
                                                <p className="text-[9px] text-gray-400 font-black uppercase">
                                                    Monthly
                                                </p>
                                                <p className="text-2xl font-black text-[#0070FF] tracking-tighter">
                                                    {item.price}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setSelectedDestination(
                                                        `${item.title}, ${item.location}`
                                                    )
                                                }
                                                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-slate-100 text-slate-600 bg-white rounded-2xl font-black text-xs hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300 group"
                                            >
                                                <LuNavigation
                                                    size={14}
                                                    className="group-hover:animate-bounce"
                                                />
                                                ROUTE
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
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default StudentHousingPage;
