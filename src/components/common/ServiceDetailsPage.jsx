import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { LuArrowRight, LuFilter, LuHeart, LuSearch, LuStar } from 'react-icons/lu';
import { useNavigate, useParams } from 'react-router-dom';

import { allServiceData } from '../../data/mockTravelData';

function ServiceDetailsPage() {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const [originalData, setOriginalData] = useState([]);
    const [pageTitle, setPageTitle] = useState('');
    const [favorites, setFavorites] = useState(new Set());

    // ফিল্টার স্টেট
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [minRating, setMinRating] = useState('All');

    useEffect(() => {
        const currentService = allServiceData[serviceId];
        if (currentService) {
            setOriginalData(currentService.items);
            setPageTitle(currentService.title);
        }
    }, [serviceId]);

    // ফেভারিট টগল লজিক
    const toggleFavorite = (id) => {
        setFavorites((prev) => {
            const newFavs = new Set(prev);
            if (newFavs.has(id)) newFavs.delete(id);
            else newFavs.add(id);
            return newFavs;
        });
    };

    const handleViewDetails = (itemId) => {
        // এটি ইউজারকে নির্দিষ্ট আইটেমের ডিটেইলস পেজে নিয়ে যাবে
        // উদাহরণ: /service/flights/101
        navigate(`/service/${serviceId}/${itemId}`);
    };

    const filteredData = useMemo(
        () =>
            originalData.filter((item) => {
                const matchesSearch =
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.route.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesMinPrice =
                    priceRange.min === '' || item.price >= Number(priceRange.min);
                const matchesMaxPrice =
                    priceRange.max === '' || item.price <= Number(priceRange.max);
                const matchesRating = minRating === 'All' || item.rating >= parseFloat(minRating);
                return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesRating;
            }),
        [originalData, searchQuery, priceRange, minRating]
    );

    return (
        <main className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-200 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px]" />
            </div>

            {/* প্রিমিয়াম হেডার */}
            <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-2xl border-b border-white py-6 px-8 sm:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-black text-slate-900 tracking-tight">
                            Explore <span className="text-blue-600">{pageTitle}</span>
                        </h1>
                        <p className="text-slate-500 font-bold mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Found {filteredData.length} premium options
                        </p>
                    </div>

                    <div className="relative group max-w-md w-full">
                        <LuSearch
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                            size={22}
                        />
                        <input
                            type="text"
                            placeholder="Search by name or destination..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none font-bold text-slate-800 placeholder:text-slate-400 shadow-sm transition-all"
                        />
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto p-8 sm:px-12 relative z-10">
                {/* ফিল্টার সেকশন */}
                <section className="bg-white/80 backdrop-blur-md rounded-[35px] p-8 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white">
                    <div className="flex items-center gap-3 mb-8 text-slate-800 font-black uppercase tracking-widest text-xs">
                        <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
                            <LuFilter size={18} />
                        </div>
                        <span>Refine Your Experience</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1">
                                Budget Range (৳)
                            </label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={priceRange.min}
                                    onChange={(e) =>
                                        setPriceRange({ ...priceRange, min: e.target.value })
                                    }
                                    className="w-full bg-white border-2 border-slate-100 rounded-xl p-3.5 focus:border-blue-500 outline-none font-bold text-slate-800 placeholder:text-slate-500 transition-all shadow-sm"
                                />
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={priceRange.max}
                                    onChange={(e) =>
                                        setPriceRange({ ...priceRange, max: e.target.value })
                                    }
                                    className="w-full bg-white border-2 border-slate-100 rounded-xl p-3.5 focus:border-blue-500 outline-none font-bold text-slate-800 placeholder:text-slate-500 transition-all shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1">
                                Guest Experience
                            </label>
                            <select
                                value={minRating}
                                onChange={(e) => setMinRating(e.target.value)}
                                className="w-full bg-white border-2 border-slate-100 rounded-xl p-3.5 focus:border-blue-500 outline-none font-bold text-slate-800 cursor-pointer shadow-sm"
                            >
                                <option value="All">All Ratings</option>
                                <option value="4.8">Exceptional: 4.8+</option>
                                <option value="4.5">Excellent: 4.5+</option>
                                <option value="4.0">Very Good: 4.0+</option>
                            </select>
                        </div>

                        <div className="flex items-end">
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery('');
                                    setPriceRange({ min: '', max: '' });
                                    setMinRating('All');
                                }}
                                className="w-full py-4 text-slate-400 font-black uppercase text-xs tracking-widest hover:text-red-500 hover:bg-red-50 rounded-xl transition-all border-2 border-dashed border-slate-100 hover:border-red-100"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </section>

                {/* কার্ড গ্রিড */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredData.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -10 }}
                                className="relative bg-white rounded-[45px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_30px_60px_rgba(59,130,246,0.12)] transition-all duration-500 group"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFavorite(item.id)}
                                    className={`absolute top-6 right-6 z-10 p-3 rounded-2xl transition-all duration-300 ${favorites.has(item.id) ? 'bg-red-50 text-red-500 shadow-inner' : 'bg-slate-50 text-slate-300 hover:text-red-400 hover:bg-red-50'}`}
                                >
                                    <LuHeart
                                        size={22}
                                        fill={favorites.has(item.id) ? 'currentColor' : 'none'}
                                    />
                                </button>

                                <div className="aspect-[4/3] w-full bg-slate-50 rounded-[35px] flex items-center justify-center mb-6 overflow-hidden group-hover:bg-blue-50 transition-colors duration-500 border border-slate-50">
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="h-24 w-24 object-contain group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-full text-[11px] font-black tracking-tighter shadow-sm border border-orange-100">
                                            <LuStar size={14} fill="currentColor" /> {item.rating}
                                        </div>
                                        <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                            {item.reviews} Reviews
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="font-black text-slate-900 text-xl leading-snug group-hover:text-blue-600 transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-slate-500 font-bold text-sm mt-1">
                                            {item.route}
                                        </p>
                                    </div>

                                    <div className="pt-5 border-t border-slate-50 flex justify-between items-center">
                                        <div>
                                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">
                                                Starting At
                                            </p>
                                            <span className="text-2xl font-black text-slate-900 tracking-tighter">
                                                ৳{item.price.toLocaleString()}
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleViewDetails(item.id)} // ক্লিক ইভেন্ট যোগ করুন
                                            className="h-14 w-14 bg-slate-900 text-white rounded-[22px] flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-blue-200 group/btn"
                                        >
                                            <LuArrowRight
                                                size={24}
                                                className="group-hover/btn:translate-x-1 transition-transform"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}

export default ServiceDetailsPage;
