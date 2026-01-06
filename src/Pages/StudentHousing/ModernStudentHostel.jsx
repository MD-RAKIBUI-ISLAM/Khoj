import { useEffect, useState } from 'react';
import {
    LuArrowLeft,
    LuChevronLeft,
    LuChevronRight,
    LuClock,
    LuDroplets,
    LuFlame,
    LuHistory,
    LuInfo,
    LuShield,
    LuShieldCheck,
    LuStar,
    LuZap
} from 'react-icons/lu';
import { useNavigate, useParams } from 'react-router-dom';

import BookingModal from '../../components/common/BookingModal';
import Button from '../../components/common/Button';
import { studentHostelsData } from '../../data/mockData';

function ModernStudentHostel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Amenities');
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // ডাইনামিক ডাটা ফিল্টারিং (Radix parameter সহ)
    const hostel =
        studentHostelsData.find((item) => item.id === parseInt(id, 10)) || studentHostelsData[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const nextImage = () =>
        setCurrentImgIndex((prev) => (prev + 1) % hostel.additionalImages.length);
    const prevImage = () =>
        setCurrentImgIndex(
            (prev) => (prev - 1 + hostel.additionalImages.length) % hostel.additionalImages.length
        );

    return (
        <div className="min-h-screen bg-[#FDFDFD] pb-44 font-sans selection:bg-blue-100">
            {/* Top Navigation */}
            <header className="sticky top-[72px] z-[110] bg-white/80 backdrop-blur-md max-w-[1200px] mx-auto px-6 py-6">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-500 font-bold hover:text-blue-600 transition-all group"
                >
                    <LuArrowLeft
                        size={20}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    Back to Listings
                </button>
            </header>

            <main className="max-w-[1200px] mx-auto px-6">
                {/* 1. Hero Image Slider (High Resolution Support) */}
                <section className="relative rounded-[32px] md:rounded-[48px] overflow-hidden bg-slate-900 aspect-[4/3] md:aspect-[21/9] shadow-2xl group border border-slate-200">
                    <img
                        src={hostel.additionalImages[currentImgIndex]}
                        alt={hostel.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Image Navigation Buttons */}
                    <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            type="button"
                            onClick={prevImage}
                            className="p-3 md:p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all shadow-xl"
                        >
                            <LuChevronLeft size={24} />
                        </button>
                        <button
                            type="button"
                            onClick={nextImage}
                            className="p-3 md:p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all shadow-xl"
                        >
                            <LuChevronRight size={24} />
                        </button>
                    </div>

                    <div className="absolute bottom-8 left-8 text-white">
                        <div className="flex gap-2 mb-3">
                            <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg">
                                Verified
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                            {hostel.title}
                        </h1>
                    </div>
                </section>

                {/* 2. Content Grid */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Tab Navigation */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-32 flex flex-col gap-3 p-3 bg-slate-50 rounded-[32px] border border-slate-100">
                            {[
                                { id: 'Amenities', icon: <LuShieldCheck />, label: 'Amenities' },
                                { id: 'House Rule', icon: <LuInfo />, label: 'Hostel Info' },
                                { id: 'Reviews', icon: <LuHistory />, label: 'User Reviews' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center justify-between px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                                        activeTab === tab.id
                                            ? 'bg-white text-blue-600 shadow-xl shadow-blue-500/10 scale-[1.02]'
                                            : 'text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                    <span className="flex items-center gap-3">
                                        {tab.icon} {tab.label}
                                    </span>
                                    {activeTab === tab.id && (
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Right: Tab Panels */}
                    <article className="lg:col-span-8 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                Overview
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                {hostel.description}
                            </p>
                        </div>
                        {/* 🚀 New: Capacity & Room Availability Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Capacity Info */}
                            <div className="p-6 bg-slate-900 rounded-[32px] flex items-center gap-5 border border-slate-800 shadow-xl shadow-slate-200/50">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-md">
                                    <LuInfo size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-0.5">
                                        Room Capacity
                                    </p>
                                    <h4 className="text-lg font-black text-white leading-tight">
                                        {hostel.capacity}
                                    </h4>
                                </div>
                            </div>

                            {/* Total Rooms Availability */}
                            <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-[32px] flex items-center gap-5">
                                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                    <LuShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[2px] mb-0.5">
                                        Available Now
                                    </p>
                                    <h4 className="text-lg font-black text-slate-900 leading-tight">
                                        {hostel.rooms} Empty Rooms
                                    </h4>
                                </div>
                            </div>

                            {/* Detailed Room List (Scrollable on mobile) */}
                            <div className="flex flex-wrap gap-3 p-2 bg-slate-50/50 border border-slate-100 rounded-[32px]">
                                {hostel.roomAvailability.map((room, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-1 min-w-[140px] bg-white border border-slate-200/60 p-4 rounded-2xl text-center"
                                    >
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                            {room.room}
                                        </p>
                                        <p
                                            className={`text-[11px] font-black uppercase ${room.status.includes('0 free') ? 'text-rose-500' : 'text-emerald-600'}`}
                                        >
                                            {room.status}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Loader */}
                        <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[40px] shadow-sm min-h-[400px]">
                            {/* Amenities Tab */}
                            {activeTab === 'Amenities' && (
                                <div className="space-y-10 animate-in fade-in duration-500">
                                    {Object.entries(hostel.amenities).map(([category, list]) => (
                                        <div key={category}>
                                            <h3 className="text-[11px] font-black text-blue-600 uppercase tracking-[4px] mb-6">
                                                {category}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {list.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 p-4 rounded-2xl"
                                                    >
                                                        <LuShieldCheck
                                                            className="text-blue-500"
                                                            size={18}
                                                        />
                                                        <span className="font-bold text-slate-700 text-sm">
                                                            {item}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Hostel Info & Rules Tab */}
                            {activeTab === 'House Rule' && (
                                <div className="space-y-10 animate-in fade-in duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4 p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                                            <h3 className="flex items-center gap-2 text-xs font-black text-blue-700 uppercase tracking-widest">
                                                <LuClock /> Operational Info
                                            </h3>
                                            <div className="space-y-3">
                                                {Object.entries(hostel.hostelInfo).map(
                                                    ([key, value]) => (
                                                        <div
                                                            key={key}
                                                            className="flex flex-col border-b border-blue-100/50 pb-2"
                                                        >
                                                            <span className="text-[10px] text-blue-400 font-black uppercase">
                                                                {key.replace(/([A-Z])/g, ' $1')}
                                                            </span>
                                                            <span className="text-sm font-bold text-slate-700">
                                                                {value}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div className="space-y-4 p-6 bg-rose-50/50 rounded-3xl border border-rose-100">
                                            <h3 className="flex items-center gap-2 text-xs font-black text-rose-700 uppercase tracking-widest">
                                                <LuShield /> House Rules
                                            </h3>
                                            <ul className="space-y-3">
                                                {hostel.terms.map((term, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-sm text-slate-600 font-medium flex gap-2"
                                                    >
                                                        <span className="text-rose-500">•</span>{' '}
                                                        {term}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* User Reviews Tab */}
                            {activeTab === 'Reviews' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    {hostel.userReviews.map((rev) => (
                                        <div
                                            key={rev.id}
                                            className="p-6 bg-slate-50 rounded-[32px] border border-slate-100"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-blue-600 shadow-sm border border-slate-100">
                                                        {rev.user.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-black text-slate-900">
                                                            {rev.user}
                                                        </h4>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                                                            {rev.date}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-0.5 text-yellow-400">
                                                    {[...Array(rev.rating)].map((_, i) => (
                                                        <LuStar
                                                            key={i}
                                                            size={14}
                                                            className="fill-current"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-slate-600 font-medium italic leading-relaxed">
                                                "{rev.comment}"
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </article>
                </div>
            </main>

            {/* 3. Floating Bottom Booking Bar - Footer-Aware Sticky Design */}
            <div className="mt-20 px-0 md:px-6 sticky bottom-0 md:bottom-8 z-[100]">
                <div className="max-w-[1100px] mx-auto bg-slate-900/95 backdrop-blur-2xl p-5 md:p-6 rounded-t-3xl md:rounded-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] border-t md:border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300">
                    <div className="flex items-center gap-8 w-full md:w-auto px-4 md:px-0">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                Monthly Package
                            </p>
                            <div className="flex items-baseline gap-2">
                                <h2 className="text-3xl font-black text-white tracking-tighter">
                                    {hostel.totalMonthlyCost}
                                </h2>
                                <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                                    All-Inclusive
                                </span>
                            </div>
                        </div>

                        {/* Bills Highlight */}
                        <div className="hidden lg:flex gap-6 border-l border-white/10 pl-8">
                            <div className="text-center group cursor-help">
                                <LuZap className="text-yellow-400 mx-auto mb-1 group-hover:scale-125 transition-transform" />
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                                    {hostel.utilities.current}
                                </p>
                            </div>
                            <div className="text-center group cursor-help">
                                <LuFlame className="text-orange-400 mx-auto mb-1 group-hover:scale-125 transition-transform" />
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                                    {hostel.utilities.gas}
                                </p>
                            </div>
                            <div className="text-center group cursor-help">
                                <LuDroplets className="text-blue-400 mx-auto mb-1 group-hover:scale-125 transition-transform" />
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                                    {hostel.utilities.water}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto px-4 md:px-0">
                        <Button
                            type="button"
                            label="Add Wishlist"
                            variant="secondary"
                            className="flex-1 md:flex-none bg-white/10 text-white hover:bg-white/20 border-0 rounded-2xl px-6 py-4 font-black text-[10px] uppercase tracking-widest"
                        />
                        <Button
                            type="button" // type change kore button dewa hoyeche
                            onClick={() => setIsBookingModalOpen(true)} // Modal trigger
                            label="Confirm Booking"
                            className="flex-[2] md:flex-none bg-blue-600 hover:bg-blue-500 py-4 px-12 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-blue-600/30 transition-all active:scale-95"
                        />
                    </div>
                </div>
            </div>
            {/* Modal Component Integration */}
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                hostelTitle={hostel.title}
                // হোস্টেলের ডাটা থেকে রুমের লিস্টটি প্রপ হিসেবে পাস করা হচ্ছে
                roomOptions={hostel.roomAvailability}
            />
        </div>
    );
}

export default ModernStudentHostel;
