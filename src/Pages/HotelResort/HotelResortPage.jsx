import { useEffect, useState } from 'react';

import Filter from '../../components/common/Filter';
import HotelCard from '../../components/common/HotelCard';
import MapViewer from '../../components/common/MapViewer';
import { hotelResortData } from '../../data/mockData';

const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/,/g, '').replace(/[^\d]/g, ''), 10);
};

function HotelResortPage() {
    const [searchLocation, setSearchLocation] = useState('Dhaka');
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [priceRange, setPriceRange] = useState(25000);
    const [userCoords, setUserCoords] = useState(null); // নতুন ম্যাপের জন্য

    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

    // ফিল্টারিং লজিক
    const filteredResults = hotelResortData.filter((item) => {
        const searchTerm = searchLocation.toLowerCase();
        const matchesLocation = item.location.toLowerCase().includes(searchTerm);
        const matchesTitle = item.title.toLowerCase().includes(searchTerm);
        const itemPrice = parsePrice(item.price);
        const matchesPrice = itemPrice <= priceRange;

        const allItemAmenities = item.amenities
            ? Object.values(item.amenities).flatMap((category) => category.items.map((i) => i.name))
            : [];

        const matchesAmenities =
            selectedAmenities.length === 0 ||
            selectedAmenities.every((selected) => allItemAmenities.includes(selected));

        return (matchesLocation || matchesTitle) && matchesAmenities && matchesPrice;
    });

    const handleNavigation = (item) => {
        const fullAddress = `${item.title}, ${item.location}`;
        setSelectedDestination(fullAddress);

        // নতুন ম্যাপকে ওই লোকেশনে মুভ করানোর জন্য কোঅর্ডিনেট সেট করা
        if (item.lat && item.lng) {
            setUserCoords({ lat: item.lat, lng: item.lng });
        }

        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
        window.open(googleMapsUrl, '_blank');
    };

    // আপনার আগের mapUrl লজিক (যদি MapViewer-এ iframe ব্যবহার করেন)
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
                    {/* Left Sidebar */}
                    <aside className="w-full lg:w-[350px] space-y-6 shrink-0 lg:sticky lg:top-8 h-fit">
                        {/* ম্যাপ ভিউয়ার: আপনার ডিজাইন অনুযায়ী প্রপস পাস করা হয়েছে */}
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            userCoords={userCoords} // নতুন ম্যাপ লজিকের জন্য
                            foundCount={filteredResults.length}
                            category="hotel"
                            onRouteClick={handleNavigation}
                        />

                        <Filter
                            data={hotelResortData}
                            selectedAmenities={selectedAmenities}
                            setSelectedAmenities={setSelectedAmenities}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            maxPrice={100000}
                        />
                    </aside>

                    {/* Right Side: List */}
                    <main className="flex-grow space-y-6">
                        <div className="flex justify-between items-center px-2">
                            <p className="text-sm font-bold text-gray-400">
                                Showing {filteredResults.length} resorts available
                            </p>
                        </div>

                        {filteredResults.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6">
                                {filteredResults.map((item) => (
                                    <HotelCard
                                        key={item.id}
                                        item={item}
                                        onRouteClick={() => handleNavigation(item)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-[32px] p-20 text-center border-2 border-dashed border-gray-100 text-gray-400 font-bold">
                                No resorts found matching your search.
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default HotelResortPage;
