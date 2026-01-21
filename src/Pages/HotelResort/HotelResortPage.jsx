import { useEffect, useState } from 'react';

import Filter from '../../components/common/Filter';
import HotelCard from '../../components/common/HotelCard';
import MapViewer from '../../components/common/MapViewer';
import { hotelResortData } from '../../data/mockData';

const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.toString().replace(/,/g, '').replace(/[^\d]/g, ''), 10);
};

function HotelResortPage() {
    const [searchLocation, setSearchLocation] = useState('');
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [priceRange, setPriceRange] = useState(100000);
    const [userCoords, setUserCoords] = useState(null);

    // ১. Geolocation লজিক (StudentHousingPage থেকে নেওয়া)
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserCoords({ lat: latitude, lng: longitude });

                    // try {
                    //     const res = await fetch(
                    //         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    //     );
                    //     const data = await res.json();
                    //     const locationName =
                    //         data.address.neighbourhood ||
                    //         data.address.suburb ||
                    //         data.address.village ||
                    //         data.address.town ||
                    //         data.address.city ||
                    //         'Current Location';

                    //     setSearchLocation(locationName);
                    // } catch (err) {
                    //     setSearchLocation('Current Location');
                    // }
                },
                (error) => {
                    console.error('Location access denied', error);
                    setSearchLocation('Dhaka'); // ডিফল্ট
                },
                { enableHighAccuracy: true }
            );
        }
    }, []);

    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

    // ২. ফিল্টারিং লজিক (গভীর এ্যামেনিটিস সার্চ সহ)
    const filteredResults = hotelResortData.filter((item) => {
        const searchTerm = searchLocation.toLowerCase().trim();
        const matchesLocation = item.location.toLowerCase().includes(searchTerm);
        const matchesTitle = item.title.toLowerCase().includes(searchTerm);

        const itemPrice = parsePrice(item.price);
        const matchesPrice = itemPrice <= priceRange;

        // এ্যামেনিটিস ফ্ল্যাট লিস্ট তৈরি
        const allItemAmenities = item.amenities
            ? Object.values(item.amenities).flatMap((category) =>
                  Array.isArray(category)
                      ? category
                      : category.items
                        ? category.items.map((i) => i.name)
                        : []
              )
            : [];

        const matchesAmenities =
            selectedAmenities.length === 0 ||
            selectedAmenities.every((selected) => allItemAmenities.includes(selected));

        return (matchesLocation || matchesTitle) && matchesAmenities && matchesPrice;
    });

    // ৩. ডিরেকশন এবং নেভিগেশন হ্যান্ডলার (সঠিক সিনট্যাক্স সহ)
    const handleNavigation = (item) => {
        if (item.lat && item.lng) {
            setUserCoords({ lat: item.lat, lng: item.lng });
        }
        const fullAddress = `${item.title}, ${item.location}`;
        setSelectedDestination(fullAddress);

        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}&travelmode=driving`;
        window.open(googleMapsUrl, '_blank');
    };

    // ৪. ম্যাপ ইউআরএল আপডেট
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
                    <aside className="w-full lg:w-[350px] space-y-6 shrink-0 lg:sticky lg:top-8 h-fit">
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            userCoords={userCoords}
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
