import { useState } from 'react';
import {
    LuChevronDown,
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
    const [price, setPrice] = useState(50000);
    const [searchLocation, setSearchLocation] = useState('Dhaka');
    const [selectedRooms, setSelectedRooms] = useState('Any');

    // ফিল্টার স্টেট (বাটন ক্লিক করার পর যা কার্যকর হবে)
    const [activeFilters, setActiveFilters] = useState({
        maxPrice: 100000,
        rooms: 'Any'
    });

    // --- লজিক: ফিল্টারিং ---
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
                : hostel.rooms.includes(activeFilters.rooms));

        return (matchesLocation || matchesTitle) && matchesPrice && matchesRooms;
    });

    const handleApplyFilters = () => {
        setActiveFilters({
            maxPrice: price,
            rooms: selectedRooms
        });
    };

    const mapUrl = `https://maps.google.com/maps?q=hostels+in+${encodeURIComponent(searchLocation)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-20 font-sans">
            <header className="bg-white border-b px-6 lg:px-24 py-10">
                <div className="max-w-[1440px] mx-auto">
                    <h1 className="text-4xl font-extrabold text-[#1A1A1A] mb-2 tracking-tight">
                        Student Housing & Hostels
                    </h1>
                    <p className="text-gray-500 font-medium text-lg">
                        Find affordable, comfortable hostels for students across Bangladesh
                    </p>
                </div>
            </header>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-24 pt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* --- Left Sidebar --- */}
                    <aside className="w-full lg:w-[350px] space-y-6 shrink-0">
                        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <LuMapPin className="text-[#00C2FF]" size={20} />
                                <h2 className="font-extrabold text-lg">Live Map View</h2>
                            </div>
                            <div className="relative mb-4">
                                <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchLocation}
                                    onChange={(e) => setSearchLocation(e.target.value)}
                                    placeholder="Enter location..."
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 ring-blue-100 outline-none transition-all"
                                />
                            </div>
                            <div className="h-64 bg-blue-50 rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
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
                                <LuFilter className="text-gray-800" size={20} />
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
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#0070FF]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Rooms Available
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={selectedRooms}
                                            onChange={(e) => setSelectedRooms(e.target.value)}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm appearance-none outline-none focus:ring-2 ring-blue-50 cursor-pointer font-semibold text-gray-700"
                                        >
                                            <option value="Any">Any Room Type</option>
                                            <option value="1">1 Room Only</option>
                                            <option value="2">2 Rooms</option>
                                            <option value="3">3 Rooms</option>
                                            <option value="4+">4+ Rooms</option>
                                        </select>
                                        <LuChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleApplyFilters}
                                    className="w-full bg-gradient-to-r from-[#0070FF] to-[#00C2FF] text-white py-4 rounded-2xl font-black text-sm shadow-md hover:shadow-blue-200 hover:scale-[1.02] active:scale-95 transition-all duration-300 uppercase tracking-wider"
                                >
                                    Apply Search Filters
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* --- Right Content --- */}
                    <main className="flex-grow space-y-6">
                        <div className="flex justify-between items-center px-2">
                            <span className="text-gray-400 font-bold italic text-sm bg-white px-4 py-1 rounded-full shadow-sm border border-gray-50">
                                Showing {filteredHostels.length} hostels found
                            </span>
                        </div>

                        {filteredHostels.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-[40px] border border-gray-100 p-6 flex flex-col xl:flex-row gap-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 group"
                            >
                                <div className="w-full xl:w-[320px] shrink-0 space-y-4">
                                    <div className="h-[250px] rounded-[32px] overflow-hidden shadow-inner relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-[#0070FF] uppercase">
                                            Verified Property
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            window.open(
                                                `https://www.google.com/maps/search/${encodeURIComponent(`${item.title} ${item.location}`)}`,
                                                '_blank'
                                            )
                                        }
                                        className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-blue-50 text-[#0070FF] bg-blue-50/30 rounded-2xl font-black text-sm hover:bg-gradient-to-r hover:from-[#0070FF] hover:to-[#00C2FF] hover:text-white hover:border-transparent transition-all duration-300 group/btn"
                                    >
                                        <LuNavigation
                                            size={16}
                                            className="group-hover/btn:animate-bounce"
                                        />
                                        Get Directions
                                    </button>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-2xl font-black text-[#1A1A1A] leading-tight mb-1 group-hover:text-[#0070FF] transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm font-bold flex items-center gap-1">
                                                <LuMapPin size={14} className="text-[#00C2FF]" />{' '}
                                                {item.location}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-2xl border border-orange-100 shadow-sm">
                                            <LuStar
                                                size={16}
                                                className="text-orange-400 fill-orange-400"
                                            />
                                            <span className="text-sm font-black text-orange-700">
                                                {item.rating}
                                            </span>
                                            <span className="text-xs text-gray-400 font-bold">
                                                ({item.reviews})
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                                        {[
                                            {
                                                label: 'Rooms',
                                                val: item.rooms,
                                                color: 'blue',
                                                icon: null
                                            },
                                            {
                                                label: 'Electricity',
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
                                                className={`bg-${stat.color}-50/50 p-3 rounded-2xl text-center border border-${stat.color}-100 hover:scale-105 transition-transform cursor-default`}
                                            >
                                                <p className="text-[10px] text-gray-500 uppercase font-black mb-1 flex items-center justify-center gap-1">
                                                    {stat.icon} {stat.label}
                                                </p>
                                                <p
                                                    className={`text-sm font-black text-${stat.color}-700`}
                                                >
                                                    {stat.val}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-gray-50/50 rounded-2xl p-4 mt-5 border border-gray-100 group-hover:bg-white transition-colors duration-500">
                                        <p className="text-[11px] font-black text-gray-400 mb-3 uppercase tracking-widest">
                                            Live Seat Status
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                            {item.roomAvailability.map((room, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <span
                                                        className={`w-2 h-2 rounded-full animate-pulse ${room.includes('0 free') ? 'bg-red-400' : 'bg-green-400'}`}
                                                    />
                                                    <p className="text-xs text-gray-600 font-bold">
                                                        {room}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-5 border-t border-gray-100 gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[9px] px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-gray-500 font-black uppercase tracking-wider"
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
                                                <p className="text-2xl font-black text-[#0070FF] tracking-tighter">
                                                    {item.price}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                className="bg-gradient-to-r from-[#1A1A1A] to-[#444] text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-1 active:scale-95 transition-all duration-300"
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
