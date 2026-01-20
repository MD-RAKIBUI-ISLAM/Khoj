import { motion } from 'framer-motion';
import { LuChevronRight } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import travel_hero, { travelServices } from '../../../data/mockTravelData';

function TravelNeeds() {
    const navigate = useNavigate();

    return (
        <section
            className="relative w-full pb-24 px-6 overflow-hidden"
            // TravelHero এর মতো একই গ্রেডিয়েন্ট থিম ব্যবহার করা হয়েছে
            style={{ background: travel_hero.styling.backgroundGradient }}
        >
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন (সফট লুমিনোসিটি) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-200 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* হেডিং */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                        What's your <span className="text-blue-600">travel need?</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full" />
                </motion.div>

                {/* সার্ভিস গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {travelServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }} // প্রিমিয়াম লিফট ইফেক্ট
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/70 backdrop-blur-md p-10 rounded-[40px] border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer overflow-hidden"
                            onClick={() => navigate(service.path)}
                        >
                            {/* হোভার গ্রেডিয়েন্ট লেয়ার */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* আইকন কন্টেইনার - গ্লাস ইফেক্টসহ */}
                                <div
                                    className={`w-20 h-20 ${service.color} rounded-[24px] flex items-center justify-center text-4xl mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                                >
                                    {service.icon}
                                </div>

                                {/* টেক্সট কন্টেন্ট */}
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 font-medium mb-8 leading-relaxed line-clamp-2">
                                    {service.description}
                                </p>

                                {/* এক্সপ্লোর বাটন - প্রিমিয়াম স্টাইল */}
                                <button
                                    type="button"
                                    aria-label={`Explore details for ${service.title}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/travel-tours/details/${service.id}`);
                                    }}
                                    className="inline-flex items-center gap-3 text-blue-600 font-black text-sm uppercase tracking-widest group/btn hover:gap-5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg py-2"
                                >
                                    <span>Explore Now</span>

                                    {/* আইকন কন্টেইনার */}
                                    <div
                                        className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover/btn:bg-slate-900 group-active/btn:scale-90 transition-all duration-300"
                                        aria-hidden="true"
                                    >
                                        <LuChevronRight size={20} />
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TravelNeeds;
