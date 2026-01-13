import { useEffect, useMemo, useState } from 'react';
import { LuHouse, LuSearchX, LuX } from 'react-icons/lu';

import Filter from '../../components/common/Filter'; // Filter কম্পোনেন্ট ইমপোর্ট
import MapViewer from '../../components/common/MapViewer';
import RentalCard from '../../components/common/RentalCard';
import { homeRentalsData } from '../../data/mockData';

const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    // 'BDT 15,000' থেকে '15000' এ রূপান্তর করবে
    return parseInt(priceStr.replace(/,/g, '').replace(/[^\d]/g, ''), 10);
};

function HomeRentalsPage() {
    const [searchLocation, setSearchLocation] = useState('Dhaka');
    const [selectedDestination, setSelectedDestination] = useState(null);

    // নতুন স্টেট: ফিল্টারের জন্য
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [priceRange, setPriceRange] = useState(20000);

    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

    // মূল ফিল্টারিং লজিক (শুধুমাত্র Amenities এবং Location এর উপর ভিত্তি করে)
    const filteredResults = useMemo(
        () =>
            homeRentalsData.filter((item) => {
                const searchTerm = searchLocation.toLowerCase().trim();

                // ১. লোকেশন ফিল্টার
                const matchesLocation =
                    searchTerm === '' ||
                    item.location.toLowerCase().includes(searchTerm) ||
                    item.title.toLowerCase().includes(searchTerm);
                const itemPrice = parsePrice(item.price);
                const matchesPrice = itemPrice <= priceRange;

                // ২. Amenities ফিল্টার লজিক
                const matchesAmenities =
                    selectedAmenities.length === 0 ||
                    selectedAmenities.every((selectedName) =>
                        // চেক করা হচ্ছে যেন আইটেমের amenities এর ভেতরে ঐ নামটি থাকে
                        Object.values(item.amenities || {}).some((cat) =>
                            cat.items?.some((i) => i.name === selectedName)
                        )
                    );

                return matchesLocation && matchesAmenities && matchesPrice;
            }),
        [searchLocation, selectedAmenities, priceRange]
    );

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
                        Explore available apartments and homes based on your preferred amenities.
                    </p>
                </div>
            </header>

            <div className="max-w-[1600px] mx-auto px-4 lg:px-12 pt-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Sidebar */}
                    <aside className="w-full lg:w-[380px] space-y-8 shrink-0 lg:sticky lg:top-8 h-fit">
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            foundCount={filteredResults.length}
                        />

                        {/* নতুন ফিল্টার কম্পোনেন্ট এখানে কল করা হয়েছে */}
                        <Filter
                            data={homeRentalsData}
                            selectedAmenities={selectedAmenities}
                            setSelectedAmenities={setSelectedAmenities}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            maxPrice={100000}
                        />
                    </aside>

                    {/* Right Side: Results List */}
                    <main className="flex-grow space-y-8">
                        <div className="flex items-center justify-between px-2">
                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
                                Results Found: {filteredResults.length}
                            </p>
                            {(searchLocation || selectedAmenities.length > 0) && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchLocation('');
                                        setSelectedAmenities([]);
                                        setPriceRange(25000);
                                    }}
                                    className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-slate-900 transition-colors"
                                >
                                    <LuX size={14} /> Clear All Filters
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
                                        Try changing your amenities selection or location search.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearchLocation('');
                                            setSelectedAmenities([]);
                                            setPriceRange(25000);
                                        }}
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
