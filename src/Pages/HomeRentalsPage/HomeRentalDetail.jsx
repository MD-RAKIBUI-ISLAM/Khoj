import { useEffect, useState } from 'react';
import {
    LuBath,
    LuChevronLeft,
    LuChevronRight,
    LuCircleCheckBig,
    LuCompass,
    LuCookingPot,
    LuFileText,
    LuHouse,
    LuLayoutDashboard,
    LuLayoutGrid,
    LuLock,
    LuMapPin,
    LuShield,
    LuStar
} from 'react-icons/lu';
import { useParams } from 'react-router-dom';

import BookingModal from '../../components/common/BookingModal';
// আপনার ডাটা সোর্স অনুযায়ী ইমপোর্ট পাথ ঠিক করে নিন
import { homeRentalsData } from '../../data/mockData';

function RentalDetail() {
    const { id } = useParams();
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Amenities');
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // ডাটা খুঁজে বের করা
    const rental =
        homeRentalsData.find((item) => item.id === parseInt(id, 10)) || homeRentalsData[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const nextImage = () =>
        setCurrentImgIndex((prev) => (prev + 1) % rental.additionalImages.length);
    const prevImage = () =>
        setCurrentImgIndex(
            (prev) => (prev - 1 + rental.additionalImages.length) % rental.additionalImages.length
        );

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        const element = document.getElementById('tab-content-container');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleViewMap = () => {
        // হোটেলের নাম এবং লোকেশনকে URL friendly ফরম্যাটে নেওয়া হচ্ছে
        const destination = encodeURIComponent(`${rental.title}, ${rental.location}`);
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${destination}&travelmode=driving`;
        window.open(googleMapsUrl, '_blank');
    };

    // Modal এর জন্য ডাটা ফরম্যাট করা
    const formattedRoomOptions = rental.flatAvailability.map((flat) => ({
        room: flat.id,
        status: flat.status
    }));

    return (
        <div className="min-h-screen bg-[#FDFDFD] pb-44 font-sans selection:bg-blue-100">
            <main className="max-w-[1400px] mx-auto px-6 pt-40 lg:px-12">
                {/* Image Slider Section */}
                <section className="relative mx-auto max-w-[950px] rounded-[40px] overflow-hidden bg-slate-900 aspect-[16/9] md:aspect-[21/9] shadow-2xl group border border-slate-200">
                    <img
                        src={rental.additionalImages[currentImgIndex]}
                        alt={rental.title}
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
                                Premium Rental
                            </span>
                            <div className="flex items-center gap-1 text-yellow-400 font-bold">
                                <LuStar size={16} className="fill-current" /> {rental.rating}
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
                            {rental.title}
                        </h1>
                        <p className="flex items-center gap-2 text-slate-300 font-medium text-sm md:text-base">
                            <LuMapPin size={18} className="text-blue-400" /> {rental.location}
                        </p>
                    </div>
                </section>

                <div className="mt-16 flex flex-col lg:grid lg:grid-cols-12 gap-12">
                    {/* 1. Description Section */}
                    <section className="order-1 lg:col-start-5 lg:col-span-8">
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">
                            Property Description
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg font-medium italic border-l-4 border-blue-500 pl-6 bg-blue-50/20 py-4 rounded-r-2xl">
                            {rental.description}
                        </p>
                    </section>

                    {/* 2. Key Features Section (Using size, rooms, security, etc. from object) */}
                    <section className="order-2 lg:col-start-5 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            {
                                label: 'Total Size',
                                val: rental.size,
                                icon: <LuHouse className="text-blue-500" />,
                                bg: 'bg-blue-50'
                            },
                            {
                                label: 'Total Rooms',
                                val: `${rental.rooms} Bedrooms`,
                                icon: <LuLayoutDashboard className="text-emerald-500" />,
                                bg: 'bg-emerald-50'
                            },
                            {
                                label: 'Bathrooms',
                                val: `${rental.bathrooms} Units`,
                                icon: <LuBath className="text-orange-500" />,
                                bg: 'bg-orange-50'
                            },
                            {
                                label: 'Verandas',
                                val: `${rental.verandas} Units`,
                                icon: <LuLayoutGrid className="text-cyan-500" />,
                                bg: 'bg-cyan-50'
                            },
                            {
                                label: 'Kitchen',
                                val: `${rental.kitchen} Unit`,
                                icon: <LuCookingPot className="text-rose-500" />,
                                bg: 'bg-rose-50'
                            },
                            {
                                label: 'Facing Direction',
                                val: rental.direction,
                                icon: <LuCompass className="text-amber-500" />,
                                bg: 'bg-amber-50'
                            },
                            {
                                label: 'Security Level',
                                val: rental.security,
                                icon: <LuShield className="text-purple-500" />,
                                bg: 'bg-purple-50'
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative p-6 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                <div
                                    className={`absolute -right-2 -top-2 w-16 h-16 ${item.bg} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}
                                />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className={`p-2.5 ${item.bg} rounded-2xl transition-transform group-hover:rotate-12`}
                                        >
                                            {item.icon}
                                        </div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                            {item.label}
                                        </p>
                                    </div>
                                    <p className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                        {item.val}
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </section>

                    {/* 3. Aside Tab Buttons */}
                    <aside className="order-3 lg:col-span-4 lg:row-start-1 lg:row-span-3">
                        <div className="sticky top-32 flex flex-row lg:flex-col gap-3 p-3 overflow-x-auto lg:overflow-x-visible bg-slate-50/50 rounded-[30px] lg:rounded-[40px] border border-slate-100 no-scrollbar">
                            {[
                                {
                                    id: 'Amenities',
                                    icon: <LuLayoutDashboard />,
                                    label: 'Amenities'
                                },
                                { id: 'Security', icon: <LuLock />, label: 'Security' },
                                { id: 'Policies', icon: <LuFileText />, label: 'Policies' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => handleTabClick(tab.id)}
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

                    {/* 4. Tab Items Content Container */}
                    <div
                        id="tab-content-container"
                        className="order-4 lg:col-span-8 lg:col-start-5 scroll-mt-32"
                    >
                        <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[48px] shadow-sm min-h-[400px]">
                            {/* Amenities Tab */}
                            {activeTab === 'Amenities' && (
                                <div className="space-y-12">
                                    {Object.entries(rental.amenities).map(([key, category]) => (
                                        <div key={key} className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <h3 className="text-sm font-black uppercase tracking-[3px] text-slate-800">
                                                    {category.title}
                                                </h3>
                                                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {category.items.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
                                                    >
                                                        <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                            <LuCircleCheckBig size={20} />
                                                        </div>
                                                        <h4 className="text-[13px] font-bold text-slate-800">
                                                            {item.name}
                                                        </h4>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Security Tab */}
                            {activeTab === 'Security' && (
                                <div className="space-y-12">
                                    {Object.entries(rental.securityDetails).map(
                                        ([key, category]) => (
                                            <div key={key} className="space-y-6">
                                                <div className="flex items-center gap-4">
                                                    <h3 className="text-sm font-black uppercase tracking-[3px] text-slate-800">
                                                        {category.title}
                                                    </h3>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {category.items.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-4 p-5 bg-slate-50/50 border border-slate-100 rounded-3xl group"
                                                        >
                                                            <div className="p-3 bg-white text-blue-600 rounded-2xl shadow-sm">
                                                                <LuShield size={20} />
                                                            </div>
                                                            <h4 className="text-[13px] font-bold text-slate-800">
                                                                {item.name}
                                                            </h4>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}

                            {/* Policies Tab */}
                            {activeTab === 'Policies' && (
                                <div className="space-y-12">
                                    {Object.entries(rental.terms).map(([key, category]) => (
                                        <div key={key} className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <h3 className="text-sm font-black uppercase tracking-[3px] text-slate-800">
                                                    {category.title}
                                                </h3>
                                                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {category.items.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-4 p-5 border border-dashed border-slate-200 rounded-3xl"
                                                    >
                                                        <LuFileText
                                                            className="text-slate-400"
                                                            size={18}
                                                        />
                                                        <h4 className="text-[13px] font-bold text-slate-600">
                                                            {item.name}
                                                        </h4>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Sticky Bar */}
            <div className="mt-20 px-0 md:px-6 sticky bottom-0 md:bottom-8 z-[100]">
                <div className="max-w-[1100px] mx-auto bg-slate-900/95 backdrop-blur-xl p-4 md:p-6 md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t md:border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 transition-all duration-500">
                    <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-10 border-b border-white/5 pb-3 md:pb-0 md:border-none">
                        <div className="group cursor-default">
                            <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-1 group-hover:text-blue-400 transition-colors">
                                Monthly Rent
                            </p>
                            <div className="flex items-baseline gap-2">
                                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter">
                                    {rental.price}
                                </h2>
                                <span className="text-blue-400 text-[10px] font-black uppercase bg-blue-400/10 px-1.5 py-0.5 rounded">
                                    / month
                                </span>
                            </div>
                        </div>
                        <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                        <div className="flex flex-col items-end md:items-start">
                            <p className="text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-1 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                Availability
                            </p>
                            <p className="text-white/80 font-bold text-xs md:text-sm whitespace-nowrap">
                                {
                                    rental.flatAvailability.filter((f) => f.status === 'Vacant')
                                        .length
                                }{' '}
                                Flats Left
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2.5 w-full md:w-auto">
                        <button
                            type="button"
                            onClick={handleViewMap}
                            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl px-3 md:px-6 py-3.5 md:py-4 font-bold text-[10px] uppercase tracking-widest transition-all active:scale-95 whitespace-nowrap"
                        >
                            <LuMapPin className="text-blue-400 shrink-0" size={14} /> View Map
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsBookingModalOpen(true)}
                            className="flex-[2] md:flex-none relative overflow-hidden group bg-blue-600 hover:bg-blue-500 text-white py-3.5 md:py-4 px-5 md:px-10 rounded-xl md:rounded-2xl font-black uppercase tracking-[2px] text-[10px] shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all active:scale-95 whitespace-nowrap"
                        >
                            <span className="relative z-10">Rent This Flat</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                    </div>
                </div>
            </div>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                hostelTitle={rental.title}
                roomOptions={formattedRoomOptions}
            />
        </div>
    );
}

export default RentalDetail;
