import { useEffect, useState } from 'react';
import {
    LuChevronLeft,
    LuChevronRight,
    LuCircleCheckBig,
    LuLayoutDashboard,
    LuMapPin,
    LuShield,
    LuStar,
    LuUtensils
} from 'react-icons/lu';
import { useParams } from 'react-router-dom';

import BookingModal from '../../components/common/BookingModal';
import { hotelResortData } from '../../data/mockData';

function HotelResortDetail() {
    const { id } = useParams();
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Amenities');
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const resort =
        hotelResortData.find((item) => item.id === parseInt(id, 10)) || hotelResortData[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const nextImage = () =>
        setCurrentImgIndex((prev) => (prev + 1) % resort.additionalImages.length);
    const prevImage = () =>
        setCurrentImgIndex(
            (prev) => (prev - 1 + resort.additionalImages.length) % resort.additionalImages.length
        );

    const handleViewMap = () => {
        // হোটেলের নাম এবং লোকেশনকে URL friendly ফরম্যাটে নেওয়া হচ্ছে
        const destination = encodeURIComponent(`${resort.title}, ${resort.location}`);

        // 'origin=My+Location' দিলে গুগল ম্যাপস অটোমেটিক ইউজারের বর্তমান লোকেশন থেকে ডিরেকশন দেখাবে
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${destination}&travelmode=driving`;

        window.open(googleMapsUrl, '_blank');
    };

    const formattedRoomOptions = resort.availability.map((roomName) => ({
        room: roomName,
        status: 'Available'
    }));

    return (
        <div className="min-h-screen bg-[#FDFDFD] pb-44 font-sans selection:bg-blue-100">
            <main className="max-w-[1200px] mx-auto px-6 pt-40 lg:px-12">
                {/* Image Slider */}
                <section className="relative mx-auto max-w-[950px] rounded-[40px] overflow-hidden bg-slate-900 aspect-[16/9] md:aspect-[21/9] shadow-2xl group border border-slate-200">
                    <img
                        src={resort.additionalImages[currentImgIndex]}
                        alt={resort.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <button
                            type="button"
                            onClick={prevImage}
                            className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
                        >
                            <LuChevronLeft size={24} />
                        </button>
                        <button
                            type="button"
                            onClick={nextImage}
                            className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
                        >
                            <LuChevronRight size={24} />
                        </button>
                    </div>
                    <div className="absolute bottom-8 left-8 text-white pr-8">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[2px] rounded-lg">
                                Premium Stay
                            </span>
                            <div className="flex items-center gap-1 text-yellow-400 font-bold">
                                <LuStar size={16} className="fill-current" /> {resort.rating}
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
                            {resort.title}
                        </h1>
                        <p className="flex items-center gap-2 text-slate-300 font-medium text-sm md:text-base">
                            <LuMapPin size={18} className="text-blue-400" /> {resort.location}
                        </p>
                    </div>
                </section>

                {/* Content Order Logic for Mobile */}
                <div className="mt-16 flex flex-col lg:grid lg:grid-cols-12 gap-12">
                    {/* 1. Description Section */}
                    <section className="order-1 lg:col-start-5 lg:col-span-8">
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">
                            Description
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg font-medium italic border-l-4 border-blue-500 pl-6 bg-blue-50/20 py-4 rounded-r-2xl">
                            {resort.description}
                        </p>
                    </section>

                    {/* 2. Availability Section */}
                    <section className="order-2 lg:col-start-5 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {resort.availability.map((item, idx) => {
                            // প্রতিটি কার্ডের জন্য আলাদা টাইটেল এবং আইকন সেট করা
                            const configs = [
                                {
                                    label: 'Room Type',
                                    icon: <LuLayoutDashboard className="text-blue-500" size={20} />,
                                    bg: 'bg-blue-50'
                                },
                                {
                                    label: 'Current Status',
                                    icon: (
                                        <LuCircleCheckBig className="text-emerald-500" size={20} />
                                    ),
                                    bg: 'bg-emerald-50'
                                },
                                {
                                    label: 'Guest Capacity',
                                    icon: <LuShield className="text-purple-500" size={20} />,
                                    bg: 'bg-purple-50'
                                }
                            ];

                            // যদি ৩টির বেশি আইটেম থাকে তবে লুপ হবে
                            const config = configs[idx % configs.length];

                            return (
                                <div
                                    key={idx}
                                    className="group relative p-6 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* ব্যাকগ্রাউন্ডে একটি হালকা ডেকোরেশন */}
                                    <div
                                        className={`absolute -right-2 -top-2 w-16 h-16 ${config.bg} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}
                                    />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div
                                                className={`p-2.5 ${config.bg} rounded-2xl transition-transform group-hover:rotate-12`}
                                            >
                                                {config.icon}
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                {config.label}
                                            </p>
                                        </div>

                                        <p className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                            {item}
                                        </p>
                                    </div>

                                    {/* নিচ দিয়ে একটি চিকন কালার বার */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
                                </div>
                            );
                        })}
                    </section>

                    {/* 3. Tab Buttons (Amenities, Policies, Dining) */}
                    <aside className="order-3 lg:col-span-4 lg:row-start-1 lg:row-span-3">
                        <div className="sticky top-32 space-y-4 p-4 bg-slate-50/50 rounded-[40px] border border-slate-100">
                            {[
                                {
                                    id: 'Amenities',
                                    icon: <LuLayoutDashboard />,
                                    label: 'Amenities'
                                },
                                { id: 'Policies', icon: <LuShield />, label: 'Policies' },
                                { id: 'Dining', icon: <LuUtensils />, label: 'Dining' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center justify-between px-6 py-5 rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${
                                        activeTab === tab.id
                                            ? 'bg-white text-blue-600 shadow-xl border border-blue-50'
                                            : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
                                    }`}
                                >
                                    <span className="flex items-center gap-4">
                                        {tab.icon} {tab.label}
                                    </span>
                                    {activeTab === tab.id && (
                                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* 4. Tab Items Content */}
                    <div className="order-4 lg:col-span-8 lg:col-start-5">
                        <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[48px] shadow-sm min-h-[400px]">
                            {activeTab === 'Amenities' && (
                                <div className="space-y-12">
                                    {Object.entries(resort.amenities).map(([key, category]) => (
                                        <div key={key} className="space-y-6">
                                            {/* ক্যাটাগরি হেডার */}
                                            <div className="flex items-center gap-4">
                                                <h3 className="text-sm font-black uppercase tracking-[3px] text-slate-800">
                                                    {category.title}
                                                </h3>
                                                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                                            </div>

                                            {/* আইটেম গ্রিড */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {category.items.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
                                                    >
                                                        <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                            <LuLayoutDashboard size={20} />{' '}
                                                            {/* এখানে আপনি ডাইনামিক আইকন ম্যাপ করতে পারেন */}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-[13px] font-bold text-slate-800 mb-1 leading-none">
                                                                {item.name}
                                                            </h4>
                                                            <p className="text-[11px] text-slate-500 leading-relaxed">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'Policies' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {Object.entries(resort.policies).map(([key, value]) => (
                                        <div
                                            key={key}
                                            className="group p-6 bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-blue-100 rounded-[32px] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
                                        >
                                            {/* হেডার: টাইটেল এবং স্ট্যাটাস */}
                                            <div className="flex items-center justify-between mb-3">
                                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                                                    {key.replace(/([A-Z])/g, ' $1')}
                                                </h4>
                                                {value.time && (
                                                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                                        {value.time}
                                                    </span>
                                                )}
                                            </div>

                                            {/* কন্টেন্ট */}
                                            <div className="space-y-1">
                                                <p className="text-sm font-bold text-slate-800">
                                                    {value.title ||
                                                        value.status ||
                                                        value.policy ||
                                                        value.time}
                                                </p>
                                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                                    {value.description || value.note || value.type}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'Dining' && (
                                <div className="space-y-6">
                                    {Object.entries(resort.meals).map(([mealKey, mealData]) => (
                                        <div
                                            key={mealKey}
                                            className="group p-6 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex items-start gap-4">
                                                    {/* আইকন বক্স */}
                                                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                        <LuUtensils size={24} />
                                                    </div>

                                                    {/* তথ্য সেকশন */}
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h4 className="font-black text-sm uppercase tracking-wider text-slate-800">
                                                                {mealKey.replace(/([A-Z])/g, ' $1')}{' '}
                                                                {/* CamelCase to Space */}
                                                            </h4>
                                                            <span
                                                                className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${mealData.status === 'Free' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}
                                                            >
                                                                {mealData.status}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs font-bold text-blue-600 mb-2">
                                                            {mealData.time}
                                                        </p>
                                                        <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                                                            <span className="font-bold text-slate-700">
                                                                {mealData.type}:
                                                            </span>{' '}
                                                            {mealData.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Bar Code (No changes here as per request) */}
            <div className="mt-20 px-0 md:px-6 sticky bottom-0 md:bottom-8 z-[100]">
                {/* কন্টেইনার: মোবাইলে প্যাডিং এবং গ্যাপ কমানো হয়েছে */}
                <div className="max-w-[1100px] mx-auto bg-slate-900/95 backdrop-blur-xl p-4 md:p-6 md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t md:border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 transition-all duration-500">
                    {/* ১. প্রাইস এবং এভেইলিবিলিটি সেকশন: মোবাইলে ফ্লেক্সবক্স দিয়ে পাশাপাশি রাখা হয়েছে */}
                    <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-10 border-b border-white/5 pb-3 md:pb-0 md:border-none">
                        <div className="group cursor-default">
                            <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[1px] md:tracking-[2px] mb-0.5 md:mb-1 group-hover:text-blue-400 transition-colors">
                                Price Starts From
                            </p>
                            <div className="flex items-baseline gap-1 md:gap-2">
                                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter">
                                    {resort.price}
                                </h2>
                                <span className="text-blue-400 text-[9px] md:text-[10px] font-black uppercase bg-blue-400/10 px-1.5 py-0.5 rounded">
                                    / night
                                </span>
                            </div>
                        </div>

                        {/* ডেক্সটপ ডিভাইডার */}
                        <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                        {/* স্ট্যাটাস ইন্ডিকেটর: মোবাইলে টেক্সট ছোট করা হয়েছে */}
                        <div className="flex flex-col items-end md:items-start">
                            <p className="text-emerald-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest mb-0.5 md:mb-1 flex items-center gap-1.5 md:gap-2">
                                <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-emerald-500" />
                                </span>
                                Live Status
                            </p>
                            <p className="text-white/80 font-bold text-xs md:text-sm whitespace-nowrap">
                                Available Now
                            </p>
                        </div>
                    </div>

                    {/* ২. বাটন সেকশন: মোবাইলে যেন টেক্সট ভেঙে না যায় সেজন্য flex-nowrap এবং প্যাডিং অ্যাডজাস্ট করা হয়েছে */}
                    <div className="flex gap-2.5 w-full md:w-auto">
                        <button
                            type="button"
                            onClick={handleViewMap}
                            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl md:rounded-2xl px-3 md:px-6 py-3.5 md:py-4 font-bold text-[10px] md:text-[11px] uppercase tracking-wider md:tracking-widest transition-all active:scale-95 whitespace-nowrap"
                        >
                            <LuMapPin className="text-blue-400 shrink-0" size={14} />
                            Map
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsBookingModalOpen(true)}
                            className="flex-[2] md:flex-none relative overflow-hidden group bg-blue-600 hover:bg-blue-500 text-white py-3.5 md:py-4 px-5 md:px-10 rounded-xl md:rounded-2xl font-black uppercase tracking-[1px] md:tracking-[2px] text-[10px] md:text-[11px] shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all active:scale-95 whitespace-nowrap"
                        >
                            <span className="relative z-10">Booking Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                    </div>
                </div>
            </div>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                hostelTitle={resort.title}
                roomOptions={formattedRoomOptions}
            />
        </div>
    );
}

export default HotelResortDetail;
