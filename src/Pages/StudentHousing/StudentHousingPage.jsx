import { useEffect, useState } from 'react';

import Filter from '../../components/common/Filter';
import HostelCard from '../../components/common/HostelCard';
import MapViewer from '../../components/common/MapViewer';
import { studentHostelsData } from '../../data/mockData';

const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/,/g, '').replace(/[^\d]/g, ''), 10);
};

function StudentHousingPage() {
    const [searchLocation, setSearchLocation] = useState('Dhaka');
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [priceRange, setPriceRange] = useState(25000);
    const [userCoords, setUserCoords] = useState(null);

    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

    // ফিল্টারিং লজিক (HotelResortPage-এর সাথে হুবহু মিল রাখা হয়েছে)
    const filteredHostels = studentHostelsData.filter((hostel) => {
        const searchTerm = searchLocation.toLowerCase();
        const matchesLocation = hostel.location.toLowerCase().includes(searchTerm);
        const matchesTitle = hostel.title.toLowerCase().includes(searchTerm);
        const hostelPrice = parsePrice(hostel.price);
        const matchesPrice = hostelPrice <= priceRange;

        // এ্যামেনিটিস লজিক
        const allHostelAmenities = hostel.amenities
            ? Object.values(hostel.amenities).flatMap((category) =>
                  Array.isArray(category)
                      ? category
                      : category.items
                        ? category.items.map((i) => i.name)
                        : []
              )
            : [];

        const matchesAmenities =
            selectedAmenities.length === 0 ||
            selectedAmenities.every((selected) => allHostelAmenities.includes(selected));

        return (matchesLocation || matchesTitle) && matchesAmenities && matchesPrice;
    });

    const handleNavigation = (item) => {
        // পিন আপডেট করার জন্য userCoords সেট করুন
        if (item.lat && item.lng) {
            setUserCoords({ lat: item.lat, lng: item.lng });
        }

        // গন্তব্য সেট করা
        const fullAddress = `${item.title}, ${item.location}`;
        setSelectedDestination(fullAddress);

        // ডিরেকশন দেখানোর জন্য গুগল ম্যাপস ইউআরএল (আপনার লোকেশন থেকে হোস্টেল পর্যন্ত)
        // 'My Location' অরিজিন হিসেবে দিলে ব্রাউজার অটোমেটিক আপনার লোকেশন নেবে
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodeURIComponent(fullAddress)}&travelmode=driving`;

        window.open(googleMapsUrl, '_blank');
    };

    const mapUrl = selectedDestination
        ? `https://maps.google.com/maps?q=${encodeURIComponent(selectedDestination)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
        : `https://maps.google.com/maps?q=${encodeURIComponent(`${searchLocation} student hostels`)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

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
                    {/* Left Sidebar */}
                    <aside className="w-full lg:w-[350px] space-y-6 shrink-0 lg:sticky lg:top-8 h-fit">
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            userCoords={userCoords}
                            foundCount={filteredHostels.length}
                            category="hostel"
                            onRouteClick={handleNavigation}
                        />

                        <Filter
                            data={studentHostelsData}
                            selectedAmenities={selectedAmenities}
                            setSelectedAmenities={setSelectedAmenities}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            maxPrice={25000}
                        />
                    </aside>

                    {/* Right Side: List */}
                    <main className="flex-grow space-y-6">
                        <div className="flex justify-between items-center px-2">
                            <p className="text-sm font-bold text-gray-400">
                                Showing {filteredHostels.length} hostels available
                            </p>
                        </div>

                        {filteredHostels.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6">
                                {filteredHostels.map((item) => (
                                    <HostelCard
                                        key={item.id}
                                        item={item}
                                        onRouteClick={() => handleNavigation(item)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-[32px] p-20 text-center border-2 border-dashed border-gray-100 text-gray-400 font-bold">
                                No hostels found matching your search.
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default StudentHousingPage;
