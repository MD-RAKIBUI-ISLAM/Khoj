import { useEffect, useState } from 'react';

import Filter from '../../components/common/Filter';
import HotelCard from '../../components/common/HotelCard'; // আপনার ইম্পোর্ট করা নাম
import MapViewer from '../../components/common/MapViewer';
import { hotelResortData } from '../../data/mockData';

const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/,/g, '').replace('BDT', ''), 10);
};

function HotelResortPage() {
    const [searchLocation, setSearchLocation] = useState('Dhaka');
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [priceRange, setPriceRange] = useState(25000);

    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

    // ফিল্টারিং লজিক আপনার নতুন ডাটা অবজেক্ট অনুযায়ী ফিক্স করা হয়েছে
    const filteredResults = hotelResortData.filter((item) => {
        const searchTerm = searchLocation.toLowerCase();
        const matchesLocation = item.location.toLowerCase().includes(searchTerm);
        const matchesTitle = item.title.toLowerCase().includes(searchTerm);
        const hostelPrice = parsePrice(item.price);
        const matchesPrice = hostelPrice <= priceRange;

        // আপনার নেস্টেড এ্যামেনিটিস থেকে নামগুলো বের করে আনা হচ্ছে
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
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
        window.open(googleMapsUrl, '_blank');
    };

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
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            foundCount={filteredResults.length}
                        />

                        <Filter
                            data={hotelResortData} // ফিল্টার কম্পোনেন্ট এই ডাটা থেকেই এ্যামেনিটিস লিস্ট তৈরি করবে
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
                            filteredResults.map((item) => (
                                <HotelCard // সঠিক কম্পোনেন্ট নাম
                                    key={item.id}
                                    item={item}
                                    onRouteClick={() => handleNavigation(item)}
                                />
                            ))
                        ) : (
                            <div className="bg-white rounded-[32px] p-20 text-center border-2 border-dashed border-gray-100 text-gray-400 font-bold">
                                No resorts found with the selected amenities.
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default HotelResortPage;
