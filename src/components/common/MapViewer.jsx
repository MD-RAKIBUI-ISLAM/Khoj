import { LuMapPin, LuSearch } from 'react-icons/lu';

function MapViewer({ searchLocation, setSearchLocation, mapUrl, foundCount }) {
    return (
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <LuMapPin className="text-[#00C2FF]" size={20} />
                    <h2 className="font-extrabold text-lg text-slate-800">Live Map View</h2>
                </div>
                <span className="bg-blue-50 text-[#0070FF] text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    {foundCount} Found
                </span>
            </div>
            <div className="relative mb-4">
                <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Search location..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 ring-blue-100"
                />
            </div>
            <div className="h-64 bg-blue-50 rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                    title="Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={mapUrl}
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default MapViewer;
