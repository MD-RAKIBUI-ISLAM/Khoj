import { motion } from 'framer-motion';
import { useState } from 'react';
import { LuCalendar, LuLayers, LuMapPin, LuSend } from 'react-icons/lu';

// আপনার ডাটা ফাইল থেকে ইমপোর্ট করা হলো
import travel_hero, { allServiceData } from '../../../data/mockTravelData';

function TravelHero() {
    const [searchData, setSearchData] = useState({
        serviceType: 'flights', // ডিফল্ট ক্যাটাগরি
        to: '',
        date: ''
    });

    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    // সার্চ লজিক
    const handleSearch = (e) => {
        e.preventDefault();

        if (!searchData.to || !searchData.date) {
            alert('গন্তব্য এবং তারিখ পূরণ করুন!');
            return;
        }

        setIsSearching(true);
        setHasSearched(true);

        setTimeout(() => {
            // ইমপোর্ট করা allServiceData থেকে ক্যাটাগরি অনুযায়ী ফিল্টার
            const selectedCategory = allServiceData[searchData.serviceType];
            if (selectedCategory) {
                const filtered = selectedCategory.items.filter((item) =>
                    item.route.toLowerCase().includes(searchData.to.toLowerCase())
                );
                setResults(filtered);
            }
            setIsSearching(false);
        }, 1500);
    };

    return (
        <section
            className="relative w-full min-h-[550px] flex flex-col items-center justify-center px-4 py-12 overflow-hidden"
            style={{ background: travel_hero.styling.backgroundGradient }}
        >
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
            </div>

            {/* টেক্সট কন্টেন্ট */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center max-w-4xl mb-12"
            >
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                    {travel_hero.title}
                </h1>
                <p className="text-xl text-slate-800 font-medium opacity-80">
                    {travel_hero.subtitle}
                </p>
            </motion.div>

            {/* প্রিমিয়াম সার্চ কার্ড */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10 w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-[30px] md:rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] p-3 md:p-4 border border-white"
            >
                <form
                    onSubmit={handleSearch}
                    className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2"
                >
                    {/* Category Selection */}
                    <div className="flex-1 flex items-center gap-3 px-4 md:px-6 py-4 md:py-5 hover:bg-white rounded-[20px] md:rounded-[30px] transition-all group">
                        <LuLayers
                            className="text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0"
                            size={24}
                        />
                        <div className="flex-1 overflow-hidden">
                            <span className="block text-[10px] font-black text-slate-600 uppercase ml-1">
                                Category
                            </span>
                            <select
                                value={searchData.serviceType}
                                onChange={(e) =>
                                    setSearchData({ ...searchData, serviceType: e.target.value })
                                }
                                className="w-full bg-transparent border-none outline-none text-slate-800 font-bold cursor-pointer focus:ring-0 text-sm md:text-base"
                            >
                                {Object.keys(allServiceData).map((key) => (
                                    <option key={key} value={key}>
                                        {allServiceData[key].title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="hidden lg:block w-[1px] h-12 bg-slate-200" />

                    {/* Destination (To) */}
                    <div className="flex-1 flex items-center gap-3 px-4 md:px-6 py-4 md:py-5 hover:bg-white rounded-[20px] md:rounded-[30px] transition-all group">
                        <LuMapPin
                            className="text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0"
                            size={24}
                        />
                        <div className="flex-1">
                            <span className="block text-[10px] font-black text-slate-600 uppercase ml-1">
                                Destination
                            </span>
                            <input
                                type="text"
                                required
                                value={searchData.to}
                                onChange={(e) =>
                                    setSearchData({ ...searchData, to: e.target.value })
                                }
                                placeholder={travel_hero.searchFilters.toPlaceholder}
                                className="w-full bg-transparent border-none outline-none text-slate-800 font-bold placeholder:font-medium placeholder:text-slate-600 text-sm md:text-base"
                            />
                        </div>
                    </div>

                    <div className="hidden lg:block w-[1px] h-12 bg-slate-200" />

                    {/* Date Selection */}
                    <div className="flex-1 flex items-center gap-3 px-4 md:px-6 py-4 md:py-5 hover:bg-white rounded-[20px] md:rounded-[30px] transition-all group">
                        <LuCalendar
                            className="text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0"
                            size={24}
                        />
                        <div className="flex-1">
                            <span className="block text-[10px] font-black text-slate-600 uppercase ml-1">
                                Date
                            </span>
                            <input
                                type="date"
                                required
                                value={searchData.date}
                                onChange={(e) =>
                                    setSearchData({ ...searchData, date: e.target.value })
                                }
                                className="w-full bg-transparent border-none outline-none text-slate-800 font-bold cursor-pointer text-sm md:text-base"
                            />
                        </div>
                    </div>

                    {/* সার্চ বাটন */}
                    <button
                        disabled={isSearching}
                        type="submit"
                        className={`${travel_hero.styling.buttonColor} px-6 md:px-10 py-5 md:py-6 text-white font-black rounded-[20px] md:rounded-[30px] shadow-xl hover:shadow-blue-300 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 w-full lg:w-auto min-w-[160px]`}
                    >
                        {isSearching ? (
                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <span className="text-sm md:text-base">
                                    {travel_hero.searchFilters.buttonText}
                                </span>
                                <LuSend size={18} />
                            </>
                        )}
                    </button>
                </form>
            </motion.div>

            {/* রেজাল্ট কার্ড সেকশন */}
            <div className="relative z-10 mt-12 w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {hasSearched &&
                        !isSearching &&
                        results.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-white/50 p-6 group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <div className="text-right">
                                        <span className="text-blue-600 font-black text-lg">
                                            ★ {item.rating}
                                        </span>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                                            {item.reviews} Reviews
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-1">
                                    {item.name}
                                </h3>
                                <p className="text-slate-500 text-sm mb-4">{item.route}</p>

                                <div className="flex justify-between items-center border-t pt-4">
                                    <div>
                                        <span className="block text-[10px] text-slate-400 uppercase font-bold">
                                            Price
                                        </span>
                                        <span className="text-xl font-black text-slate-900">
                                            ৳ {item.price}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="bg-blue-600 text-white px-6 py-2 rounded-2xl font-bold hover:bg-blue-700 transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                </div>

                {hasSearched && !isSearching && results.length === 0 && (
                    <div className="text-center py-10 bg-white/40 backdrop-blur-md rounded-[40px] border border-dashed border-slate-300">
                        <p className="text-slate-500 font-bold uppercase tracking-widest">
                            No matching services found!
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default TravelHero;
