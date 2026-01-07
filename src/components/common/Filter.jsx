import { useMemo, useState } from 'react';
import { LuCheck, LuChevronDown, LuChevronUp, LuFilter, LuX } from 'react-icons/lu';

function Filter({ studentHostelsData, selectedAmenities, setSelectedAmenities }) {
    const [openCategory, setOpenCategory] = useState(null);

    // মেমোজাইজড ক্যাটাগরি লজিক - শুধুমাত্র amenities সেকশন থেকে ডাটা নেবে
    const categories = useMemo(() => {
        const cats = {};

        studentHostelsData.forEach((hotel) => {
            // যদি হোটেল বা তার amenities না থাকে তবে স্কিপ করবে
            if (!hotel || !hotel.amenities) return;

            Object.entries(hotel.amenities).forEach(([key, value]) => {
                // ক্যাটাগরি টাইটেল (যেমন: "Leisure & Wellness" অথবা "Connectivity")
                const categoryTitle = value.title || key.charAt(0).toUpperCase() + key.slice(1);

                if (!cats[categoryTitle]) {
                    cats[categoryTitle] = new Set();
                }

                // আপনার নতুন স্ট্রাকচার: value.items এর ভেতরে name আছে
                if (value.items && Array.isArray(value.items)) {
                    value.items.forEach((item) => {
                        if (item.name) cats[categoryTitle].add(item.name);
                    });
                }
                // আপনার পুরাতন স্ট্রাকচার: সরাসরি স্ট্রিং এর অ্যারে
                else if (Array.isArray(value)) {
                    value.forEach((item) => cats[categoryTitle].add(item));
                }
            });
        });

        // Set-কে অ্যারেতে রূপান্তর
        const finalCats = {};
        Object.keys(cats).forEach((cat) => {
            if (cats[cat].size > 0) {
                finalCats[cat] = Array.from(cats[cat]).sort();
            }
        });
        return finalCats;
    }, [studentHostelsData]);

    const handleToggle = (item) => {
        setSelectedAmenities((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    return (
        <div className="bg-white/80 backdrop-blur-md rounded-[32px] shadow-2xl shadow-slate-200/50 border border-white overflow-hidden sticky top-8">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-50">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 rounded-xl text-white">
                        <LuFilter size={18} />
                    </div>
                    <div>
                        <h2 className="font-black text-slate-900 text-lg leading-none">Filters</h2>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                            Refine your stay
                        </p>
                    </div>
                </div>
                {selectedAmenities.length > 0 && (
                    <button
                        type="button"
                        onClick={() => setSelectedAmenities([])}
                        className="group flex items-center gap-1.5 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-full transition-all duration-300"
                    >
                        <LuX size={12} className="group-hover:rotate-90 transition-transform" />
                        <span className="text-[10px] font-black uppercase">Clear</span>
                    </button>
                )}
            </div>

            {/* Categories Content */}
            <div className="p-4 space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto no-scrollbar">
                {Object.entries(categories).map(([catName, items]) => {
                    const isActive = openCategory === catName;
                    const selectedInCat = items.filter((i) => selectedAmenities.includes(i)).length;

                    return (
                        <div
                            key={catName}
                            className={`group transition-all duration-500 rounded-[24px] ${isActive ? 'bg-slate-50' : 'bg-transparent'}`}
                        >
                            <button
                                type="button"
                                onClick={() => setOpenCategory(isActive ? null : catName)}
                                className="w-full flex items-center justify-between p-4"
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`text-[11px] font-black uppercase tracking-[0.1em] transition-colors ${isActive ? 'text-slate-900' : 'text-slate-400'}`}
                                    >
                                        {catName}
                                    </span>
                                    {selectedInCat > 0 && (
                                        <span className="w-4 h-4 flex items-center justify-center bg-slate-900 text-white text-[8px] font-bold rounded-full">
                                            {selectedInCat}
                                        </span>
                                    )}
                                </div>
                                <div
                                    className={`p-1 rounded-lg transition-all ${isActive ? 'bg-white shadow-sm text-slate-900' : 'text-slate-300'}`}
                                >
                                    {isActive ? (
                                        <LuChevronUp size={16} />
                                    ) : (
                                        <LuChevronDown size={16} />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden px-4">
                                    <div className="grid grid-cols-1 gap-2">
                                        {items.map((item) => {
                                            const isChecked = selectedAmenities.includes(item);
                                            return (
                                                <label
                                                    key={item}
                                                    className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-300 ${isChecked ? 'bg-white shadow-sm border-slate-100' : 'hover:bg-white/60 border-transparent'} border`}
                                                >
                                                    <span
                                                        className={`text-xs font-bold transition-colors ${isChecked ? 'text-slate-900' : 'text-slate-500'}`}
                                                    >
                                                        {item}
                                                    </span>
                                                    <div className="relative flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={isChecked}
                                                            onChange={() => handleToggle(item)}
                                                            className="peer appearance-none w-5 h-5 rounded-lg border-2 border-slate-200 checked:bg-slate-900 checked:border-slate-900 transition-all cursor-pointer"
                                                        />
                                                        <LuCheck
                                                            size={12}
                                                            className="absolute left-1 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                                                        />
                                                    </div>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Summary */}
            <div className="p-6 bg-slate-900 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Total Selected
                        </p>
                        <p className="text-xl font-black">{selectedAmenities.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
