import { useState } from 'react';
import {
    LuBed,
    LuCalendar,
    LuChevronDown,
    LuMail,
    LuPhone,
    LuShieldCheck,
    LuUser,
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
        selectedRoom: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 5000);
    };

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xl animate-in fade-in duration-500">
            {/* Modal Card */}
            <div className="bg-white w-full max-w-xl rounded-[48px] shadow-2xl relative overflow-hidden border border-white/20">
                {!isSubmitted ? (
                    <div className="p-8 md:p-12 animate-in slide-in-from-bottom-8 duration-700">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                                    Secure Your Spot
                                </h2>
                                <p className="text-slate-500 font-medium">
                                    Booking for{' '}
                                    <span className="text-blue-600 font-bold">@{hostelTitle}</span>
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all p-3 rounded-2xl"
                            >
                                <LuX size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleBookingSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div className="group space-y-2">
                                <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                                    <LuUser
                                        size={14}
                                        className="group-focus-within:text-blue-500 transition-colors"
                                    />
                                    Full Name
                                </label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="e.g. John Doe"
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[22px] focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-300"
                                />
                            </div>

                            {/* Email & Phone Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="group space-y-2">
                                    <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                                        <LuMail
                                            size={14}
                                            className="group-focus-within:text-blue-500 transition-colors"
                                        />
                                        Email Address
                                    </label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[22px] focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-semibold text-slate-800"
                                    />
                                </div>
                                <div className="group space-y-2">
                                    <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                                        <LuPhone
                                            size={14}
                                            className="group-focus-within:text-blue-500 transition-colors"
                                        />
                                        Phone Number
                                    </label>
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        placeholder="017XXXXXXXX"
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[22px] focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-semibold text-slate-800"
                                    />
                                </div>
                            </div>

                            {/* Date & Room Grid */}
                            <div
                                className={`grid grid-cols-1 ${roomOptions.length > 0 ? 'md:grid-cols-2' : ''} gap-5`}
                            >
                                <div className="group space-y-2">
                                    <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                                        <LuCalendar
                                            size={14}
                                            className="group-focus-within:text-blue-500 transition-colors"
                                        />
                                        Move-in Date
                                    </label>
                                    <input
                                        required
                                        name="moveInDate"
                                        type="date"
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[22px] focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-semibold text-slate-500 cursor-pointer"
                                    />
                                </div>

                                {roomOptions.length > 0 && (
                                    <div className="group space-y-2">
                                        <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                                            <LuBed
                                                size={14}
                                                className="group-focus-within:text-blue-500 transition-colors"
                                            />
                                            Preferred Room
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="selectedRoom"
                                                onChange={handleInputChange}
                                                className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[22px] focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-semibold text-slate-700 appearance-none cursor-pointer"
                                            >
                                                <option value="">Select a Room</option>
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
                                            <LuChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-blue-500 transition-colors" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="pt-6 flex justify-center">
                                <Button
                                    type="submit"
                                    label="Confirm Request"
                                    className={`
            /* Width & Sizing */
            w-full md:w-[80%] py-5 px-10 rounded-[22px] 
            
            /* Typography - Font size boro kora hoyeche */
            text-base font-black uppercase tracking-[0.15em]
            
            /* Modern Black & White Theme */
            bg-slate-900 text-white border-2 border-slate-900
            
            /* Shadows & Hover Effects */
            shadow-xl shadow-slate-900/20
            hover:bg-white hover:text-slate-900 
            hover:shadow-2xl hover:shadow-slate-900/30
            
            /* Animation */
            transition-all duration-300 ease-in-out
            hover:scale-[1.03] active:scale-95
            relative overflow-hidden
        `}
                                />
                            </div>
                            <div>
                                <p className="text-center text-slate-400 text-[10px] mt-6 font-medium uppercase tracking-widest">
                                    No immediate payment required • Secured by SSL
                                </p>
                            </div>
                        </form>
                    </div>
                ) : (
                    /* Success State - More Emotional & Clean */
                    <div className="p-12 text-center animate-in zoom-in-95 duration-700">
                        <div className="relative mx-auto w-32 h-32 mb-10">
                            <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />
                            <div className="relative w-full h-full bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/40">
                                <LuShieldCheck size={64} strokeWidth={1.5} />
                            </div>
                        </div>

                        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                            Request Received!
                        </h2>
                        <div className="space-y-2 mb-10">
                            <p className="text-slate-600 font-medium text-lg leading-relaxed">
                                Great news,{' '}
                                <span className="text-blue-600 font-bold">
                                    {formData.name.split(' ')[0]}
                                </span>
                                !
                            </p>
                            <p className="text-slate-500 px-6">
                                Your booking interest for{' '}
                                <b>{formData.selectedRoom || 'a premium seat'}</b> is being
                                reviewed. Check your email for details.
                            </p>
                        </div>

                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-2xl text-slate-400 text-sm font-bold border border-slate-100">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            Manager will call within 24 hours
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookingModal;
