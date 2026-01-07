import { useEffect, useState } from 'react';

import Filter from '../../components/common/Filter'; // আপনার পাথ অনুযায়ী ইম্পোর্ট করুন
import HostelCard from '../../components/common/HostelCard';
import MapViewer from '../../components/common/MapViewer';
import { studentHostelsData } from '../../data/mockData';

function StudentHousingPage() {
    const [searchLocation, setSearchLocation] = useState('Dhaka');
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedAmenities, setSelectedAmenities] = useState([]); // নতুন স্টেট

    useEffect(() => {
        setSelectedDestination(null);
    }, [searchLocation]);

    const filteredHostels = studentHostelsData.filter((hostel) => {
        const searchTerm = searchLocation.toLowerCase();
        const matchesLocation = hostel.location.toLowerCase().includes(searchTerm);
        const matchesTitle = hostel.title.toLowerCase().includes(searchTerm);

        // এ্যামেনিটিস ম্যাচিং লজিক (সবগুলো সিলেক্টেড আইটেম থাকতে হবে)
        const allHostelAmenities = Object.values(hostel.amenities).flat();
        const matchesAmenities =
            selectedAmenities.length === 0 ||
            selectedAmenities.every((selected) => allHostelAmenities.includes(selected));

        return (matchesLocation || matchesTitle) && matchesAmenities;
    });

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
                <div className="flex flex-col lg:flex-row gap-8 items-start relative">
                    <aside className="w-full lg:w-[400px] space-y-6 lg:sticky lg:top-8 shrink-0">
                        <MapViewer
                            searchLocation={searchLocation}
                            setSearchLocation={setSearchLocation}
                            mapUrl={mapUrl}
                            foundCount={filteredHostels.length}
                        />

                        {/* নতুন রিইউজেবল ফিল্টার কম্পোনেন্ট */}
                        <Filter
                            studentHostelsData={studentHostelsData}
                            selectedAmenities={selectedAmenities}
                            setSelectedAmenities={setSelectedAmenities}
                        />
                    </aside>

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
                                    No Hostels Found with these amenities
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
