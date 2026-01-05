import { useEffect, useState } from 'react';
import { LuFilter } from 'react-icons/lu';

import HostelCard from '../../components/common/HostelCard';
import MapViewer from '../../components/common/MapViewer';
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

    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

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

    const handleNavigation = (item) => {
        const fullAddress = `${item.title}, ${item.location}`;
        setSelectedDestination(fullAddress);
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
        window.open(googleMapsUrl, '_blank');
    };

    const mapUrl = selectedDestination
        ? `https://maps.google.com/maps?q=${encodeURIComponent(selectedDestination)}&t=&z=13&ie=UTF8&iwloc=&output=embed`
        : `https://maps.google.com/maps?q=${encodeURIComponent(`${searchLocation} student hostel housing`)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

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
                {/* Main Content Layout: sticky map on left, scrollable content on right */}
                <div className="flex flex-col lg:flex-row gap-8 items-start relative">
                    {/* LEFT SIDE: Sticky Map and Filters */}
                    <aside className="w-full lg:w-[400px] space-y-6 lg:sticky lg:top-8 shrink-0">
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            foundCount={filteredHostels.length}
                        />

                        {/* ফিল্টার সেকশন */}
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

                    {/* RIGHT SIDE: Scrollable Hostel Cards */}
                    <main className="flex-grow space-y-6 w-full">
                        {filteredHostels.length > 0 ? (
                            filteredHostels.map((item) => (
                                <HostelCard
                                    key={item.id}
                                    item={item}
                                    onRouteClick={() => handleNavigation(item)}
                                />
                            ))
                        ) : (
                            <div className="bg-white rounded-[32px] p-20 text-center border-2 border-dashed border-gray-100">
                                <p className="text-gray-400 font-bold text-lg text-center mx-auto">
                                    No Hostels Found in this range
                                </p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default StudentHousingPage;
