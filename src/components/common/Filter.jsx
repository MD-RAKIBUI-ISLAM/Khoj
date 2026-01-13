import { useMemo, useState } from 'react';
import { LuCheck, LuChevronDown, LuChevronUp, LuFilter, LuX } from 'react-icons/lu';

function Filter({
    data, // যে কোনো ডাটা (Hostels, Rentals, Resorts)
    selectedAmenities,
    setSelectedAmenities,
    priceRange,
    setPriceRange,
    maxPrice = 50000 // ডিফল্ট ম্যাক্স প্রাইস, প্রপস হিসেবে পাঠানো যাবে
}) {
    const [openCategories, setOpenCategories] = useState(['Price Range', 'Amenities']);

    // ১. সব ধরণের ডাটা থেকে ডাইনামিক ক্যাটাগরি এবং অ্যামেনিটিস বের করার লজিক
    const categories = useMemo(() => {
        const cats = {};
        if (!data || !Array.isArray(data)) return cats;

        data.forEach((item) => {
            if (!item || !item.amenities) return;

            Object.entries(item.amenities).forEach(([key, value]) => {
                // ক্যাটাগরি টাইটেল তৈরি (যেমন: 'connectivity' -> 'Connectivity')
                const categoryTitle = key.charAt(0).toUpperCase() + key.slice(1);

                if (!cats[categoryTitle]) cats[categoryTitle] = new Set();

                // যদি ভ্যালু সরাসরি অ্যারে হয় (Hostel Data এর মতো)
                if (Array.isArray(value)) {
                    value.forEach((val) => cats[categoryTitle].add(val));
                }
                // যদি ভ্যালু অবজেক্ট হয় এবং তার ভেতরে items অ্যারে থাকে (Rental Data এর মতো)
                else if (typeof value === 'object' && value.items) {
                    value.items.forEach((i) => cats[categoryTitle].add(i.name || i));
                }
            });
        });

        const finalCats = {};
        Object.keys(cats).forEach((cat) => {
            if (cats[cat].size > 0) finalCats[cat] = Array.from(cats[cat]).sort();
        });
        return finalCats;
    }, [data]);

    const toggleCategory = (catName) => {
        setOpenCategories((prev) =>
            prev.includes(catName) ? prev.filter((c) => c !== catName) : [...prev, catName]
        );
    };

    const handleToggle = (item) => {
        setSelectedAmenities((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    return (
        <div className="bg-[#EAEAEA] rounded-lg shadow-md border border-slate-300 overflow-hidden sticky top-8 w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-300 bg-white/50">
                <div className="flex items-center gap-3">
                    <LuFilter size={20} className="text-slate-700" />
                    <h2 className="font-bold text-slate-900 text-lg uppercase tracking-tight">
                        Filters
                    </h2>
                </div>
                {(selectedAmenities.length > 0 || priceRange < maxPrice) && (
                    <button
                        type="button"
                        onClick={() => {
                            setSelectedAmenities([]);
                            setPriceRange(maxPrice);
                        }}
                        className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors"
                    >
                        <LuX size={14} />
                        <span className="text-[10px] font-bold uppercase">Clear All</span>
                    </button>
                )}
            </div>

            {/* Price Range */}
            <div className="border-b border-slate-300">
                <button
                    type="button"
                    onClick={() => toggleCategory('Price Range')}
                    className="w-full flex items-center justify-between p-4 text-slate-800 font-bold hover:bg-slate-200 transition-colors"
                >
                    <span className="text-[16px]">Price Range</span>
                    {openCategories.includes('Price Range') ? <LuChevronUp /> : <LuChevronDown />}
                </button>

                {openCategories.includes('Price Range') && (
                    <div className="p-5 space-y-6 bg-slate-100/50">
                        <div className="relative w-full h-1.5 bg-slate-300 rounded-full mt-4">
                            <div
                                className="absolute h-full bg-[#D14D32] rounded-full"
                                style={{ width: `${(priceRange / maxPrice) * 100}%` }}
                            />
                            <input
                                type="range"
                                min="0"
                                max={maxPrice}
                                step="500"
                                value={priceRange}
                                onChange={(e) => setPriceRange(parseInt(e.target.value, 10))}
                                className="absolute -top-2 left-0 w-full h-5 opacity-0 cursor-pointer z-30"
                            />
                            <div
                                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#D14D32] rounded-full shadow-md z-20 pointer-events-none"
                                style={{ left: `calc(${(priceRange / maxPrice) * 100}% - 10px)` }}
                            >
                                <div className="w-1.5 h-1.5 bg-[#D14D32] rounded-full m-auto mt-[5px]" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4">
                            <div className="bg-white border border-slate-300 px-3 py-2 text-center flex-1 rounded text-sm text-slate-600">
                                0
                            </div>
                            <div className="bg-white border border-slate-300 px-3 py-2 text-center flex-1 rounded text-sm text-[#D14D32] font-black">
                                {priceRange.toLocaleString()} BDT
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Dynamic Amenities */}
            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                {Object.entries(categories).map(([catName, items]) => {
                    const isActive = openCategories.includes(catName);
                    return (
                        <div key={catName} className="border-b border-slate-300 last:border-0">
                            <button
                                type="button"
                                onClick={() => toggleCategory(catName)}
                                className="w-full flex items-center justify-between p-4 text-slate-800 font-bold hover:bg-slate-200 transition-colors"
                            >
                                <span className="text-[16px]">{catName}</span>
                                {isActive ? <LuChevronUp /> : <LuChevronDown />}
                            </button>
                            {isActive && (
                                <div className="bg-slate-50 p-4 space-y-3">
                                    {items.map((item) => {
                                        const isChecked = selectedAmenities.includes(item);
                                        return (
                                            <label
                                                key={item}
                                                className="flex items-center gap-3 group cursor-pointer"
                                            >
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={() => handleToggle(item)}
                                                        className="appearance-none w-5 h-5 border border-slate-400 rounded-sm bg-white checked:bg-[#D14D32] checked:border-[#D14D32] transition-all cursor-pointer"
                                                    />
                                                    {isChecked && (
                                                        <LuCheck
                                                            className="absolute left-1 text-white"
                                                            size={14}
                                                        />
                                                    )}
                                                </div>
                                                <span
                                                    className={`text-[14px] ${isChecked ? 'text-black font-bold' : 'text-slate-600 font-medium'}`}
                                                >
                                                    {item}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Filter;
