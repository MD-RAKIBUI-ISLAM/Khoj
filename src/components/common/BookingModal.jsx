import { useState } from 'react';
import {
    LuBed,
    LuCalendar,
    LuChevronDown,
    LuLayoutGrid, // LuLayout এর বদলে এটি ব্যবহার করা হয়েছে
    LuMail,
    LuPhone,
    LuShieldCheck,
    LuUser,
    LuUsers,
    LuX
} from 'react-icons/lu';

import Button from './Button';

function BookingModal({ isOpen, onClose, hostelTitle, roomOptions = [] }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        moveInDate: '',
        selectedRoom: '',
        gender: 'Male',
        occupancy: 'Single'
    });

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            {/* Modal Card */}
            <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative overflow-hidden border border-white/20 max-h-[95vh] overflow-y-auto">
                {!isSubmitted ? (
                    <div className="p-6 md:p-10 animate-in slide-in-from-bottom-4 duration-500">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                                    Secure Your Spot
                                </h2>
                                <p className="text-slate-500 text-sm font-medium mt-1">
                                    Booking for{' '}
                                    <span className="text-blue-600 font-bold">@{hostelTitle}</span>
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all p-2.5 rounded-xl"
                            >
                                <LuX size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleBookingSubmit} className="space-y-5">
                            {/* Row 1: Name & Gender */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuUser size={12} /> Full Name
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="e.g. John Doe"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-semibold text-slate-800 text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuUsers size={12} /> Gender
                                    </label>
                                    <div className="flex p-1 bg-slate-50 rounded-2xl border border-slate-100 h-[52px]">
                                        {['Male', 'Female'].map((g) => (
                                            <button
                                                key={g}
                                                type="button"
                                                onClick={() =>
                                                    setFormData({ ...formData, gender: g })
                                                }
                                                className={`flex-1 rounded-xl text-xs font-bold transition-all ${formData.gender === g ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}
                                            >
                                                {g}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuMail size={12} /> Email Address
                                    </label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-semibold text-slate-800 text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuPhone size={12} /> Phone Number
                                    </label>
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        placeholder="017XXXXXXXX"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-semibold text-slate-800 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Row 3: Date & Occupancy */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuCalendar size={12} /> Move-in Date
                                    </label>
                                    <input
                                        required
                                        name="moveInDate"
                                        type="date"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-semibold text-slate-600 text-sm cursor-pointer"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuLayoutGrid size={12} /> Occupancy
                                    </label>
                                    <div className="flex p-1 bg-slate-50 rounded-2xl border border-slate-100 h-[52px]">
                                        {['Single', 'Shared'].map((o) => (
                                            <button
                                                key={o}
                                                type="button"
                                                onClick={() =>
                                                    setFormData({ ...formData, occupancy: o })
                                                }
                                                className={`flex-1 rounded-xl text-xs font-bold transition-all ${formData.occupancy === o ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}
                                            >
                                                {o}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Row 4: Room Selection */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                    <LuBed size={12} /> Preferred Room Selection
                                </label>
                                <div className="relative group">
                                    <select
                                        name="selectedRoom"
                                        required
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-bold text-slate-700 text-sm appearance-none cursor-pointer"
                                    >
                                        <option value="">Choose a room from list</option>
                                        {roomOptions.map((room, idx) => (
                                            <option
                                                key={idx}
                                                value={room.room}
                                                disabled={room.status.startsWith('0')}
                                            >
                                                {room.room} — {room.status}
                                            </option>
                                        ))}
                                    </select>
                                    <LuChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:rotate-180 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <Button
                                    type="submit" // Button type added
                                    label="Confirm Booking Request"
                                    className="w-full py-4.5 rounded-[22px] text-sm font-black uppercase tracking-[0.15em] bg-slate-900 text-white border-2 border-slate-900 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl shadow-slate-200 active:scale-[0.98]"
                                />
                                <p className="text-center text-slate-400 text-[9px] mt-5 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                    <LuShieldCheck size={12} className="text-emerald-500" />
                                    No payment required now • SSL Secured
                                </p>
                            </div>
                        </form>
                    </div>
                ) : (
                    /* Success State */
                    <div className="p-10 md:p-16 text-center animate-in zoom-in-95 duration-500">
                        <div className="relative mx-auto w-24 h-24 mb-8">
                            <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />
                            <div className="relative w-full h-full bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-100">
                                <LuShieldCheck size={48} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
                            Request Sent!
                        </h2>
                        <p className="text-slate-500 text-sm max-w-xs mx-auto mb-10 font-medium leading-relaxed">
                            Thanks{' '}
                            <span className="text-blue-600 font-bold">
                                {formData.name.split(' ')[0]}
                            </span>
                            ! Your interest in <b>{formData.selectedRoom || 'Premium Seat'}</b> is
                            noted. Our manager will call you soon.
                        </p>

                        <div className="flex flex-col gap-3">
                            <a
                                href={`https://wa.me/88017XXXXXXXX?text=Hi, I just requested a booking for ${hostelTitle}. Name: ${formData.name}, Room: ${formData.selectedRoom}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-200 transition-all active:scale-[0.98]"
                            >
                                Fast Connect via WhatsApp
                            </a>
                            <button
                                type="button" // Button type added
                                onClick={onClose}
                                className="py-3 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-slate-600 transition-colors"
                            >
                                Close Window
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookingModal;
