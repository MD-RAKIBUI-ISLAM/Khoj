import { useEffect, useMemo, useState } from 'react';
// সঠিক আইকন ইম্পোর্ট নিশ্চিত করুন
import { LuHouse, LuSearchX, LuX } from 'react-icons/lu';

import Filter from '../../components/common/Filter';
import MapViewer from '../../components/common/MapViewer';
import RentalCard from '../../components/common/RentalCard';
import { homeRentalsData } from '../../data/mockData';

const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.toString().replace(/,/g, '').replace(/[^\d]/g, ''), 10);
};

function HomeRentalsPage() {
    const [searchLocation, setSearchLocation] = useState('');
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [priceRange, setPriceRange] = useState(150000); // ফিল্টারের maxPrice এর সাথে মিল রাখা হয়েছে
    const [userCoords, setUserCoords] = useState(null);

    // Geolocation লজিক (StudentHousingPage এর মতো হুবহু)
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
                    setSearchLocation('Dhaka');
                },
                { enableHighAccuracy: true }
            );
        }
    }, []);

    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

    const filteredResults = useMemo(
        () =>
            homeRentalsData.filter((item) => {
                const searchTerm = searchLocation.toLowerCase().trim();
                const matchesLocation = item.location.toLowerCase().includes(searchTerm);
                const matchesTitle = item.title.toLowerCase().includes(searchTerm);

                const itemPrice = parsePrice(item.price);
                const matchesPrice = itemPrice <= priceRange;

                // এ্যামেনিটিস লজিক (StudentHousing এর মতই গভীর ফিল্টারিং)
                const allAmenities = item.amenities
                    ? Object.values(item.amenities).flatMap((category) => {
                          if (Array.isArray(category)) return category;
                          if (category.items)
                              return category.items.map((i) =>
                                  typeof i === 'string' ? i : i.name
                              );
                          return [];
                      })
                    : [];

                const matchesAmenities =
                    selectedAmenities.length === 0 ||
                    selectedAmenities.every((selected) => allAmenities.includes(selected));

                return (matchesLocation || matchesTitle) && matchesAmenities && matchesPrice;
            }),
        [searchLocation, selectedAmenities, priceRange]
    );

    const handleNavigation = (item) => {
        // এখানে longitude এর বদলে item.lng হবে
        if (item.lat && item.lng) {
            setUserCoords({ lat: item.lat, lng: item.lng });
        }

        const fullAddress = `${item.title}, ${item.location}`;
        setSelectedDestination(fullAddress);

        // Google Maps URL সংশোধন (Template Literal এর জন্য ${} ব্যবহার করতে হবে)
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}&travelmode=driving`;

        window.open(googleMapsUrl, '_blank');
    };
    const mapUrl = selectedDestination
        ? `https://maps.google.com/maps?q=${encodeURIComponent(selectedDestination)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
        : `https://maps.google.com/maps?q=${encodeURIComponent(`${searchLocation} apartments rentals`)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    const handleResetFilters = () => {
        setSearchLocation('Dhaka');
        setSelectedAmenities([]);
        setPriceRange(150000);
        setUserCoords(null);
        setSelectedDestination(null);
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-20 font-sans text-slate-900">
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
                        Explore available apartments and homes based on your preferred location.
                    </p>
                </div>
            </header>

            <div className="max-w-[1600px] mx-auto px-4 lg:px-12 pt-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-[380px] space-y-8 shrink-0 lg:sticky lg:top-8 h-fit">
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            userCoords={userCoords}
                            foundCount={filteredResults.length}
                            category="rentals"
                            onRouteClick={handleNavigation}
                        />

                        <Filter
                            data={homeRentalsData}
                            selectedAmenities={selectedAmenities}
                            setSelectedAmenities={setSelectedAmenities}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            maxPrice={150000}
                        />
                    </aside>

                    {/* Main Content */}
                    <main className="flex-grow space-y-8">
                        <div className="flex items-center justify-between px-2">
                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
                                Showing {filteredResults.length} rentals available
                            </p>
                            {(searchLocation !== '' || selectedAmenities.length > 0) && (
                                <button
                                    type="button"
                                    onClick={handleResetFilters}
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
                                    <button
                                        type="button"
                                        onClick={handleResetFilters}
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
