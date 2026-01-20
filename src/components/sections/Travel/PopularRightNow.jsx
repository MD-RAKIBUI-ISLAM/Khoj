import { motion } from 'framer-motion';
import { LuChevronRight, LuFlame, LuStar } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

// আপনার ডেটা এবং থিম ইমপোর্ট করুন
import travel_hero, { allServiceData } from '../../../data/mockTravelData';

function PopularRightNow() {
    const navigate = useNavigate();

    // প্রতি ক্যাটাগরি থেকে প্রথম ডেটাটি নিয়ে একটি অ্যারে তৈরি করা
    const popularItems = Object.keys(allServiceData).map((key) => {
        const category = allServiceData[key];
        const firstItem = category.items[0];

        // ডিজাইন সুন্দর করার জন্য হার্ডকোডেড ইমেজ ম্যাপ
        const categoryImages = {
            flights:
                'https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1000',
            'trains-buses':
                'https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=1000',
            'car-rentals':
                'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1000',
            'moving-services':
                'https://images.pexels.com/photos/4506249/pexels-photo-4506249.jpeg?auto=compress&cs=tinysrgb&w=1000',
            'airport-transport':
                'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1000',
            'tour-package':
                'https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=1000&auto=format&fit=crop'
        };

        return {
            ...firstItem,
            categoryName: category.title,
            image:
                categoryImages[key] ||
                'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
            categoryKey: key // ইউআরএল এর জন্য ক্যাটাগরি কী (যেমন: flights)
        };
    });

    // নেভিগেশন হ্যান্ডলার
    const handleViewDetails = (categoryKey, itemId) => {
        // সেশন স্টোরেজে সেভ করে রাখুন যে ইউজার Popular সেকশন থেকে যাচ্ছে
        sessionStorage.setItem('scrollBackTo', 'popular-right-now');
        navigate(`/service/${categoryKey}/${itemId}`);
    };

    return (
        <section
            id="popular-right-now"
            className="relative w-full py-24 px-6 overflow-hidden"
            style={{ background: travel_hero.styling.backgroundGradient }}
        >
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* হেডিং */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                <LuFlame size={20} className="animate-pulse" />
                            </span>
                            <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                                Trending Services
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                            Popular <span className="text-blue-600">Right Now</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full" />
                    </motion.div>
                </div>

                {/* ডাইনামিক গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {popularItems.map((item, index) => (
                        <motion.div
                            key={`${item.categoryKey}-${item.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -12 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            // viewport once: true নিশ্চিত করে যে ব্যাক করার সময় নতুন করে অ্যানিমেশন হয়ে স্ক্রল লাফাবে না
                            viewport={{ once: true, amount: 0.1 }}
                            // min-h-[500px] যুক্ত করা হয়েছে যাতে ছবি লোড হওয়ার আগেই কার্ডের সাইজ ঠিক থাকে
                            className="group relative min-h-[500px] bg-white rounded-[40px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer overflow-hidden"
                            onClick={() => handleViewDetails(item.categoryKey, item.id)}
                        >
                            {/* ইমেজ সেকশন */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="relative h-64 w-full bg-slate-200 overflow-hidden rounded-t-[40px]">
                                    {/* ইমেজের পেছনে একটি হালকা কালার (bg-slate-200) দিয়ে রাখা হয়েছে যাতে লোড হওয়ার আগে ফাঁকা না লাগে */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy" // পারফরম্যান্স ভালো করবে
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.src =
                                                'https://images.unsplash.com/photo-1488646953014-85cb44e25828'; // ব্যাকআপ ইমেজ
                                        }}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl flex items-center gap-2 shadow-lg">
                                    <span className="font-black text-blue-600 text-[10px] uppercase tracking-widest">
                                        {item.categoryName}
                                    </span>
                                </div>
                            </div>

                            {/* কন্টেন্ট */}
                            <div className="p-10">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                                        {item.name}
                                    </h3>
                                    <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                                        <LuStar className="text-blue-600 fill-blue-600" size={12} />
                                        <span className="font-black text-blue-600 text-xs">
                                            {item.rating}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-slate-500 font-bold text-sm mb-6">
                                    {item.route}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                                            Starting From
                                        </p>
                                        <span className="text-2xl font-black text-slate-900">
                                            ৳{item.price.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-[-45deg] transition-all duration-500 shadow-xl">
                                        <LuChevronRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularRightNow;
