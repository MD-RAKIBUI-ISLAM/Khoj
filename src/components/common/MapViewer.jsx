import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { useEffect, useMemo, useState } from 'react';
import { LuMapPin, LuMaximize2, LuSearch } from 'react-icons/lu';
import { Circle, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

// কাস্টম পিন আইকন (আপনার ডিজাইনের সাথে ম্যাচ করে)
const customIcon = L.icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [45, 45],
    iconAnchor: [22, 45],
    popupAnchor: [0, -40]
});

// ম্যাপ সেন্টার অটো-আপডেট করার জন্য সাব-কম্পোনেন্ট
function RecenterMap({ coords }) {
    const map = useMap();
    useEffect(() => {
        if (coords) map.setView(coords, 14);
    }, [coords, map]);
    return null;
}

const userLocationIcon = L.divIcon({
    className: 'user-pos-icon',
    html: `<div style="
        background-color: #0070FF; 
        width: 14px; 
        height: 14px; 
        border-radius: 50%; 
        border: 3px solid white; 
        box-shadow: 0 0 10px rgba(0,112,255,0.5);
        animation: pulse 2s infinite;
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7]
});

function MapViewer({
    searchLocation,
    setSearchLocation,
    userCoords,
    onRouteClick,
    category = 'hotel'
}) {
    const [nearbyItems, setNearbyItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // ডিফল্ট লোকেশন (ঢাকা)
    const defaultPos = useMemo(() => [23.8223, 90.4219], []);
    const [mapCenter, setMapCenter] = useState(defaultPos);

    useEffect(() => {
        // ব্রাউজার Geolocation সাপোর্ট করে কি না দেখা
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // ম্যাপের সেন্টার ইউজারের লোকেশনে সেট করা
                    setMapCenter([latitude, longitude]);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    // যদি ইউজার অনুমতি না দেয়, তবে ডিফল্ট ঢাকা থাকবে (যা অলরেডি set করা আছে)
                }
            );
        }
    }, []); // এটি শুধুমাত্র একবার (মাউন্ট হওয়ার সময়) রান করবে

    // ১. গুগল ম্যাপসে বড় করে দেখার ফাংশন
    const handleLargerView = () => {
        const [lat, lng] = mapCenter;
        window.open(`https://www.google.com/maps/@${lat},${lng},15z`, '_blank');
    };

    // ২. সার্চ ইনপুট লজিক (Nominatim API)
    const handleSearch = async (e) => {
        if (e.key === 'Enter' && searchLocation) {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchLocation)}`
                );
                const data = await response.json();
                if (data.length > 0) {
                    setMapCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
                }
            } catch (error) {
                console.error('Search Error:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    // ৩. লাইভ ডাটা ফেচিং লজিক (Overpass API)
    // ৩. লাইভ ডাটা ফেচিং লজিক (উন্নত ফিল্টারসহ)
    useEffect(() => {
        const fetchNearbyData = async () => {
            const [lat, lng] = mapCenter;
            setLoading(true);

            let filter = '';
            let defaultTitle = '';

            // ক্যাটাগরি অনুযায়ী ফিল্টার (এখানে ট্যাগগুলো আরও বাড়ানো হয়েছে)
            if (category === 'hotel') {
                filter = `
                node["tourism"~"hotel|resort|guest_house|motel"](around:1000, ${lat}, ${lng});
                way["tourism"~"hotel|resort|guest_house|motel"](around:1000, ${lat}, ${lng});
                relation["tourism"~"hotel|resort|guest_house|motel"](around:1000, ${lat}, ${lng});
            `;
                defaultTitle = 'Hotel/Resort';
            } else if (category === 'hostel') {
                filter = `
        node["amenity"~"hostel|dormitory"](around:1500, ${lat}, ${lng});
        way["amenity"~"hostel|dormitory"](around:1500, ${lat}, ${lng});
        node["residential"~"university|student_accommodation"](around:1500, ${lat}, ${lng});
        node["name"~"Hall|Hostel|Mess|Housing|Dormitory", i](around:1500, ${lat}, ${lng});
        way["name"~"Hall|Hostel|Mess|Housing|Dormitory", i](around:1500, ${lat}, ${lng});
    `;
                defaultTitle = 'Student Hostel';
            } else if (category === 'rentals') {
                filter = `
    (
      node["building"~"apartments|residential"](around:2000, ${lat}, ${lng});
      way["building"~"apartments|residential"](around:2000, ${lat}, ${lng});
      node["amenity"~"apartment"](around:2000, ${lat}, ${lng});
    );
    `;
                defaultTitle = 'Rental Property';
            }

            const query = `[out:json][timeout:15]; ( ${filter} ); out center;`;

            try {
                const response = await fetch(
                    `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`
                );
                const data = await response.json();

                const items = data.elements.map((el) => ({
                    id: el.id,
                    title: el.tags.name || el.tags.brand || defaultTitle,
                    lat: el.lat || (el.center && el.center.lat),
                    lng: el.lon || (el.center && el.center.lon)
                }));

                // ডুপ্লিকেট পিন রিমুভ করা এবং স্টেট আপডেট
                setNearbyItems(items.filter((h) => h.lat && h.lng));
            } catch (error) {
                console.error('Map Data Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNearbyData();
    }, [mapCenter, category]);

    // ইউজারের লোকেশন সিঙ্ক
    useEffect(() => {
        if (userCoords) {
            setMapCenter([userCoords.lat, userCoords.lng]);
        }
    }, [userCoords]);
    return (
        <div className="bg-white rounded-[32px] shadow-lg border border-gray-200 p-5 overflow-hidden">
            {/* হেডার: আপনার ডিজাইন অনুযায়ী */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <LuMapPin className="text-[#00C2FF]" size={20} />
                    <h2 className="font-extrabold text-lg text-slate-800 tracking-tight">
                        {category === 'hotel'
                            ? 'Hotel Map View'
                            : category === 'hostel'
                              ? 'Hostel Map View'
                              : 'Rentals Map View'}
                    </h2>
                </div>
                <div className="flex items-center gap-2">
                    <span className="bg-blue-50 text-[#0070FF] text-[10px] font-black px-3 py-1 rounded-full uppercase border border-blue-100">
                        {loading ? '...' : `${nearbyItems.length} Found`}
                    </span>
                    <button
                        type="button"
                        onClick={handleLargerView}
                        className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"
                    >
                        <LuMaximize2 size={16} />
                    </button>
                </div>
            </div>

            {/* সার্চ বক্স: আপনার ডিজাইন অনুযায়ী */}
            <div className="relative mb-4">
                <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    onKeyDown={handleSearch}
                    placeholder="Search location & press Enter..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 ring-blue-100 transition-all"
                />
            </div>

            {/* ম্যাপ এরিয়া: আপনার ডিজাইন + লাইভ ম্যাপ লজিক */}
            <div
                className="h-64 bg-slate-50 rounded-2xl overflow-hidden border border-gray-200 relative shadow-inner"
                style={{ zIndex: 0 }}
            >
                {loading && (
                    <div className="absolute inset-0 bg-white/50 z-[1001] flex items-center justify-center backdrop-blur-[1px]">
                        <div className="bg-white px-4 py-2 rounded-full shadow-md text-[10px] font-black text-blue-600 animate-pulse border border-blue-100">
                            UPDATING MAP...
                        </div>
                    </div>
                )}

                <MapContainer
                    center={mapCenter}
                    zoom={14}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {userCoords && userCoords.lat && userCoords.lng && (
                        <Marker position={[userCoords.lat, userCoords.lng]} icon={userLocationIcon}>
                            <Popup>You are here</Popup>
                        </Marker>
                    )}
                    <RecenterMap coords={mapCenter} />

                    {/* ১ কিমি রেডিয়াস বর্ডার (ডিজাইন অনুযায়ী) */}
                    <Circle
                        center={mapCenter}
                        radius={1500}
                        pathOptions={{
                            color: '#0070FF',
                            weight: 1,
                            fillColor: '#0070FF',
                            fillOpacity: 0.05
                        }}
                    />

                    {/* ডাইনামিক পিন এবং ডিরেকশন লজিক */}
                    {nearbyItems.map((item) => (
                        <Marker key={item.id} position={[item.lat, item.lng]} icon={customIcon}>
                            <Popup closeButton={false}>
                                <div className="p-1 text-center">
                                    <h4 className="font-bold text-[11px] mb-2 text-slate-800">
                                        {item.title}
                                    </h4>
                                    <button
                                        type="button"
                                        onClick={() => onRouteClick(item)}
                                        className="bg-[#0070FF] text-white text-[9px] px-3 py-1.5 rounded-lg font-black hover:bg-blue-700 transition-colors uppercase tracking-wider"
                                    >
                                        Get Direction
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}

export default MapViewer;
