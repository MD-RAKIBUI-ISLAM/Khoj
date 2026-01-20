import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
    LuArmchair,
    LuArrowLeft,
    LuClock,
    LuInfo,
    LuLuggage,
    LuMapPin,
    LuPlaneLanding,
    LuPlaneTakeoff,
    LuZap
} from 'react-icons/lu';
import { useNavigate, useParams } from 'react-router-dom';

import { allServiceData } from '../../data/mockTravelData';
import BookingFormModal from './TravelBookingForm';

function DynamicDetailsServicePage() {
    const { serviceId, itemId } = useParams();
    const navigate = useNavigate();

    const category = allServiceData ? allServiceData[serviceId] : null;
    const item = category?.items?.find((i) => i.id === parseInt(itemId, 10));
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!item) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h2 className="text-2xl font-black text-slate-800">Details Not Found!</h2>
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="mt-4 text-blue-600 font-bold underline"
                >
                    Go Back
                </button>
            </div>
        );
    }

    // --- কন্ডিশনাল রেন্ডারিং লজিক ---
    // যদি সার্ভিসটি 'flights' হয়, তবে আপনার বোর্ডিং পাস ডিজাইন দেখাবে
    const isFlight = serviceId === 'flights';

    return (
        <main className="min-h-screen bg-[#F1F5F9] pb-20 selection:bg-blue-100">
            {/* হেডার অংশ (সবার জন্য সেম) */}
            <div className="h-[350px] w-full bg-[#0F172A] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-[#F1F5F9]"
                />
                <div className="max-w-7xl mx-auto px-8 pt-10 relative z-20">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl text-white rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold border border-white/20 shadow-2xl"
                    >
                        <LuArrowLeft
                            className="group-hover:-translate-x-1 transition-transform"
                            size={20}
                        />
                        Back to {category.title}
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-44 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* --- ডাইনামিক কন্টেন্ট এরিয়া --- */}
                        {isFlight ? (
                            // আপনার সেই অরিজিনাল বোর্ডিং পাস ডিজাইন (ফ্লাইটের জন্য)
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-[50px] overflow-hidden shadow-2xl border border-white"
                            >
                                <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-10 py-6 flex justify-between items-center text-white">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                            <img
                                                src={item.logo}
                                                className="w-8 h-8 object-contain brightness-0 invert"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[3px] opacity-70">
                                                Boarding Pass
                                            </p>
                                            <h2 className="text-xl font-black">{item.name}</h2>
                                        </div>
                                    </div>
                                    <p className="text-xl font-mono font-bold hidden md:block">
                                        BS-{item.id}092
                                    </p>
                                </div>
                                <div className="p-10 md:p-14 relative">
                                    {/* ফ্লাইটের নির্দিষ্ট DAC to CXB লজিক এখানে থাকবে */}
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                                        <LocationBlock
                                            code="DAC"
                                            city="Dhaka"
                                            time="09:45 AM"
                                            icon={<LuPlaneTakeoff />}
                                        />
                                        <div className="flex-1 flex flex-col items-center">
                                            <div className="w-full h-[2px] bg-slate-100 relative">
                                                <LuPlaneTakeoff
                                                    size={32}
                                                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-blue-500 rotate-45"
                                                />
                                            </div>
                                            <span className="mt-6 px-4 py-1 bg-slate-100 rounded-full text-[10px] font-black text-slate-400">
                                                1h 15m • Non-stop
                                            </span>
                                        </div>
                                        <LocationBlock
                                            code="CXB"
                                            city="Cox's Bazar"
                                            time="11:00 AM"
                                            icon={<LuPlaneLanding />}
                                            isRight
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-slate-50">
                                        <InfoBlock
                                            icon={<LuArmchair />}
                                            label="Class"
                                            value="Business"
                                        />
                                        <InfoBlock
                                            icon={<LuLuggage />}
                                            label="Baggage"
                                            value="30kg + 7kg"
                                        />
                                        <InfoBlock
                                            icon={<LuClock />}
                                            label="Boarding"
                                            value="09:15 AM"
                                        />
                                        <InfoBlock
                                            icon={<LuZap />}
                                            label="Status"
                                            value="On Time"
                                            isStatus
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            // অন্য সব ক্যাটাগরির (Tour, Hotel) জন্য প্রিমিয়াম কার্ড ডিজাইন
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-[50px] overflow-hidden shadow-2xl border border-white p-10"
                            >
                                <div className="flex flex-col md:flex-row gap-10">
                                    <div className="w-full md:w-1/3 aspect-square bg-slate-50 rounded-[40px] flex items-center justify-center p-8 border border-slate-100">
                                        <img
                                            src={item.logo}
                                            className="w-full h-full object-contain"
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="flex-1 space-y-6">
                                        <div>
                                            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                Premium {category.title}
                                            </span>
                                            <h2 className="text-4xl font-black text-slate-900 mt-4">
                                                {item.name}
                                            </h2>
                                            <p className="text-slate-500 font-bold flex items-center gap-2 mt-2">
                                                <LuMapPin className="text-blue-500" /> {item.route}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-slate-50 rounded-3xl">
                                                <p className="text-[10px] font-black text-slate-400 uppercase">
                                                    Availability
                                                </p>
                                                <p className="text-slate-800 font-black">
                                                    Instant Booking
                                                </p>
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-3xl">
                                                <p className="text-[10px] font-black text-slate-400 uppercase">
                                                    Rating
                                                </p>
                                                <p className="text-slate-800 font-black">
                                                    ★ {item.rating} / 5
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FeatureCard
                                title="Premium Quality"
                                desc="Top-rated services with verified providers."
                            />
                            <FeatureCard
                                title="Easy Cancellation"
                                desc="Flexible booking with 100% security."
                            />
                        </div>
                    </div>

                    {/* রাইট সাইড: প্রাইসিং সেকশন (সবার জন্য সেম) */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="sticky top-10 bg-white rounded-[40px] p-8 shadow-2xl border border-white"
                        >
                            <h4 className="text-slate-400 font-black uppercase text-[10px] tracking-[2px] mb-4">
                                Pricing Details
                            </h4>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between font-bold text-slate-600">
                                    <span>Base Rate</span>
                                    <span>৳{(item.price * 0.9).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between font-bold text-slate-600">
                                    <span>Service Fee</span>
                                    <span>৳{(item.price * 0.1).toLocaleString()}</span>
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                                    <span className="font-black text-slate-900 text-lg">Total</span>
                                    <span className="text-3xl font-black text-blue-600">
                                        ৳{item.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)} // এখানে ক্লিক করলে মোডাল খুলবে
                                className="w-full py-6 bg-slate-900 text-white rounded-[25px] font-black text-lg ..."
                            >
                                Confirm Booking
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isModalOpen && (
                    <BookingFormModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        item={item}
                        categoryTitle={category.title}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}

// হেল্পার কম্পোনেন্টস
function LocationBlock({ code, city, time, icon, isRight }) {
    return (
        <div className={`text-center ${isRight ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                {code}
            </h3>
            <p className="text-slate-500 font-bold mt-1 text-lg">{city}</p>
            <p className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-black text-sm">
                {icon} {time}
            </p>
        </div>
    );
}

function InfoBlock({ icon, label, value, isStatus }) {
    return (
        <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                {icon} {label}
            </p>
            <p className={`text-lg font-black ${isStatus ? 'text-green-500' : 'text-slate-800'}`}>
                {isStatus && (
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                )}
                {value}
            </p>
        </div>
    );
}

function FeatureCard({ title, desc }) {
    return (
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-[30px] border border-white flex gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600">
                <LuInfo size={24} />
            </div>
            <div>
                <h4 className="font-black text-slate-800">{title}</h4>
                <p className="text-sm text-slate-500 font-medium">{desc}</p>
            </div>
        </div>
    );
}

export default DynamicDetailsServicePage;
