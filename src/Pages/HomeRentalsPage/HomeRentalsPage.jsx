import { useEffect, useState } from 'react';
import { LuFilter, LuHouse, LuSearchX, LuX } from 'react-icons/lu';

import MapViewer from '../../components/common/MapViewer';
import RentalCard from '../../components/common/RentalCard';
import { homeRentalsData } from '../../data/mockData';

function HomeRentalsPage() {
    // ১. শুরুতে 'Dhaka' ডিফল্ট হিসেবে সেট করা যাতে শুধু ঢাকার প্রপার্টি দেখায়
    const [searchLocation, setSearchLocation] = useState('Dhaka');
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [price, setPrice] = useState(150000);
    const [selectedSize, setSelectedSize] = useState('Any');

    const [activeFilters, setActiveFilters] = useState({
        maxPrice: 150000,
        minSize: 'Any'
    });

    // লজিক: যখনই নতুন কিছু সার্চ করা হবে, ম্যাপের পিন রিসেট হবে
    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

    // ফিল্টারিং লজিক
    const filteredResults = homeRentalsData.filter((item) => {
        const searchTerm = searchLocation.toLowerCase().trim();

        // লজিক: সার্চ ফিল্ড খালি থাকলে সব (true), না থাকলে টাইটেল বা লোকেশন ম্যাচ করা
        const matchesLocation =
            searchTerm === '' ||
            item.location.toLowerCase().includes(searchTerm) ||
            item.title.toLowerCase().includes(searchTerm);

        const itemPrice = parseInt(item.price.replace(/\D/g, ''), 10) || 0;
        const matchesPrice = itemPrice <= activeFilters.maxPrice;

        const itemSize = parseInt(item.size.replace(/\D/g, ''), 10) || 0;
        const matchesSize =
            activeFilters.minSize === 'Any' || itemSize >= parseInt(activeFilters.minSize, 10);

        return matchesLocation && matchesPrice && matchesSize;
    });

    const handleApplyFilters = () => {
        setActiveFilters({
            maxPrice: price,
            minSize: selectedSize
        });
    };

    const handleNavigation = (item) => {
        const fullAddress = `${item.title}, ${item.location}`;
        setSelectedDestination(fullAddress);
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
        window.open(googleMapsUrl, '_blank');
    };

    const mapUrl = selectedDestination
        ? `https://maps.google.com/maps?q=${encodeURIComponent(selectedDestination)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
        : `https://maps.google.com/maps?q=${encodeURIComponent(`${searchLocation} apartments rentals`)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-20 font-sans text-slate-900">
            {/* Header Section */}
            <header className="bg-white border-b px-4 lg:px-12 py-12 shadow-sm">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-600 rounded-xl text-white">
                            <LuHouse size={28} />
                        </div>
                        <h1 className="text-4xl font-black tracking-tight">
                            Premium <span className="text-blue-600">Rentals</span>
                        </h1>
                    </div>
                    <p className="text-gray-500 font-medium text-lg max-w-2xl">
                        Explore available apartments and homes. Currently showing properties in your
                        area.
                    </p>
                </div>
            </header>

            <div className="max-w-[1600px] mx-auto px-4 lg:px-12 pt-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Sidebar: Map & Controls */}
                    <aside className="w-full lg:w-[380px] space-y-8 shrink-0 lg:sticky lg:top-8 h-fit">
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            foundCount={filteredResults.length}
                        />

                        {/* Filter Card */}
                        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-8">
                            <div className="flex items-center gap-2 mb-8 border-b border-slate-50 pb-5">
                                <LuFilter className="text-blue-600" size={22} />
                                <h2 className="font-black text-xl tracking-tight text-slate-800">
                                    Refine Search
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {/* Price Range */}
                                <div>
                                    <div className="flex justify-between mb-3">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                            Max Rent
                                        </label>
                                        <span className="text-blue-600 font-black text-sm">
                                            {price.toLocaleString()} BDT
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="5000"
                                        max="150000"
                                        step="5000"
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                </div>

                                {/* Size Selection */}
                                <div>
                                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                                        Min Size (sqft)
                                    </label>
                                    <select
                                        value={selectedSize}
                                        onChange={(e) => setSelectedSize(e.target.value)}
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-4 ring-blue-50 transition-all appearance-none"
                                    >
                                        <option value="Any">All Sizes</option>
                                        <option value="800">800+ sqft</option>
                                        <option value="1200">1200+ sqft</option>
                                        <option value="1500">1500+ sqft</option>
                                    </select>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleApplyFilters}
                                    className="w-full bg-slate-900 text-white py-5 rounded-[20px] font-black text-xs uppercase tracking-[2px] hover:bg-blue-600 shadow-lg shadow-slate-200 transition-all duration-300"
                                >
                                    Apply Search Filters
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Right Side: Results List */}
                    <main className="flex-grow space-y-8">
                        <div className="flex items-center justify-between px-2">
                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
                                Results Found: {filteredResults.length}
                            </p>
                            {searchLocation && (
                                <button
                                    type="button"
                                    onClick={() => setSearchLocation('')}
                                    className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-slate-900 transition-colors"
                                >
                                    <LuX size={14} /> Clear Search & Show All
                                </button>
                            )}
                        </div>

                        <div className="space-y-6">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((item) => (
                                    <RentalCard
                                        key={item.id}
                                        item={item}
                                        onRouteClick={() => handleNavigation(item)}
                                    />
                                ))
                            ) : (
                                <div className="bg-white rounded-[40px] p-24 text-center border-2 border-dashed border-slate-100 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                                        <LuSearchX size={40} />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-800 mb-2">
                                        No properties match
                                    </h3>
                                    <p className="text-slate-400 font-medium max-w-xs mx-auto">
                                        We couldn't find anything matching "{searchLocation}". Try
                                        clearing your search.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setSearchLocation('')}
                                        className="mt-6 px-8 py-3 bg-slate-100 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all"
                                    >
                                        Show All Properties
                                    </button>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default HomeRentalsPage;
