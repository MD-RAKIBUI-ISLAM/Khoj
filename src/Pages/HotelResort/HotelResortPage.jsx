import { useEffect, useState } from 'react';
import { LuFilter } from 'react-icons/lu';

import HotelCard from '../../components/common/HotelCard';
import MapViewer from '../../components/common/MapViewer';
import { hotelResortData } from '../../data/mockData';

function HotelResortPage() {
    const [searchLocation, setSearchLocation] = useState('Dhaka');
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [price, setPrice] = useState(100000);
    const [selectedRooms, setSelectedRooms] = useState('Any');
    const [activeFilters, setActiveFilters] = useState({
        maxPrice: 100000,
        rooms: 'Any'
    });

    // লজিক: যখনই searchLocation চেঞ্জ হবে, ডিরেকশন/ডেস্টিনেশন রিসেট হয়ে যাবে
    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

    // ফিল্টারিং লজিক (StudentHousing লজিক অনুযায়ী)
    const filteredResults = hotelResortData.filter((item) => {
        const searchTerm = searchLocation.toLowerCase();
        const matchesLocation = item.location.toLowerCase().includes(searchTerm);
        const matchesTitle = item.title.toLowerCase().includes(searchTerm);

        const itemPrice = parseInt(item.price.replace(/\D/g, ''), 10) || 0;
        const matchesPrice = itemPrice <= activeFilters.maxPrice;

        // রুম ক্যালকুলেশন (রুম টাইপ গুলোর যোগফল)
        const totalRooms = Object.values(item.roomStats).reduce((a, b) => a + b, 0);
        const matchesRooms =
            activeFilters.rooms === 'Any' ||
            (activeFilters.rooms === '40+'
                ? totalRooms >= 40
                : totalRooms >= parseInt(activeFilters.rooms, 10));

        return (matchesLocation || matchesTitle) && matchesPrice && matchesRooms;
    });

    const handleApplyFilters = () => {
        setActiveFilters({
            maxPrice: price,
            rooms: selectedRooms
        });
    };

    // সরাসরি নেভিগেশনের জন্য ফাংশন (Direction Logic)
    const handleNavigation = (item) => {
        const fullAddress = `${item.title}, ${item.location}`;

        // ১. অ্যাপের ম্যাপ ভিউয়ারকে ডিরেকশন মোডে নেওয়ার জন্য অ্যাড্রেস আপডেট
        setSelectedDestination(fullAddress);

        // ২. নতুন ট্যাবে গুগল ম্যাপে ডিরেকশন (ইউজারের কারেন্ট লোকেশন থেকে গন্তব্য) ওপেন হবে
        // এখানে 'dir' প্যারামিটারটি ডিরেকশন নিশ্চিত করে
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
        window.open(googleMapsUrl, '_blank');
    };

    // ম্যাপ ইউআরএল লজিক: ডিরেকশন শো করার জন্য
    const mapUrl = selectedDestination
        ? `https://maps.google.com/maps?q=${encodeURIComponent(selectedDestination)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
        : `https://maps.google.com/maps?q=${encodeURIComponent(`${searchLocation} hotels resorts`)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-20 font-sans">
            <header className="bg-white border-b px-4 lg:px-12 py-10">
                <div className="max-w-[1600px] mx-auto">
                    <h1 className="text-4xl font-extrabold text-[#1A1A1A] mb-2 tracking-tight">
                        Hotels & Tourist <span className="text-green-600">Resorts</span>
                    </h1>
                    <p className="text-gray-500 font-medium text-lg">
                        Explore premium accommodations and luxury stays across Bangladesh
                    </p>
                </div>
            </header>

            <div className="max-w-[1600px] mx-auto px-4 lg:px-12 pt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar: Map & Filter */}
                    <aside className="w-full lg:w-[350px] space-y-6 shrink-0 lg:sticky lg:top-8 h-fit">
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            foundCount={filteredResults.length}
                        />

                        {/* ফিল্টার সেকশন */}
                        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center gap-2 mb-6 border-b pb-4">
                                <LuFilter className="text-slate-800" size={20} />
                                <h2 className="font-extrabold text-lg">Search Filters</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-bold text-gray-700">
                                            Max Price (Night):
                                        </label>
                                        <span className="text-green-600 font-black">
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
                                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Room Capacity
                                    </label>
                                    <select
                                        value={selectedRooms}
                                        onChange={(e) => setSelectedRooms(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 ring-green-50 font-semibold text-gray-700"
                                    >
                                        <option value="Any">All Categories</option>
                                        <option value="20">Min 20 Rooms</option>
                                        <option value="30">Min 30 Rooms</option>
                                        <option value="40+">40+ Rooms</option>
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

                    {/* Right Side: List */}
                    <main className="flex-grow space-y-6">
                        <div className="flex justify-between items-center px-2">
                            <p className="text-sm font-bold text-gray-400">
                                Showing {filteredResults.length} resorts available
                            </p>
                        </div>

                        {filteredResults.map((item) => (
                            <HotelCard
                                key={item.id}
                                item={item}
                                onRouteClick={() => handleNavigation(item)}
                            />
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default HotelResortPage;
