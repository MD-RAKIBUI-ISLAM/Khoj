import { useState } from 'react';
import {
    LuBed,
    LuCalendar,
    LuChevronDown,
    LuFingerprint,
    LuHouse,
    LuImagePlus,
    LuMail,
    LuPhone,
    LuShieldCheck,
    LuUser,
    LuUserPlus,
    LuUsers,
    LuX
} from 'react-icons/lu';

import Button from './Button';

function BookingModal({ isOpen, onClose, hostelTitle, roomOptions = [] }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // লোডিং স্টেট
    const [imageError, setImageError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        fathersName: '',
        mothersName: '',
        email: '',
        phone: '',
        nid: '',
        passport: '',
        presentAddress: '',
        permanentAddress: '',
        moveInDate: '',
        selectedRoom: '',
        gender: 'Male',
        occupancy: 'Single',
        userImage: null
    });

    if (!isOpen) return null;

    // ১. আপনার Google Apps Script এর URL এখানে বসাবেন
    const SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbyCZyPs88JK1GNYLSkq3P7kTUmUG9XicAOc24TM3eWSc4nVZ0VRMTYnPFnDMuFhgtnM4A/exec';

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                setImageError('Image size must be less than 2MB');
                return;
            }
            setImageError('');
            setFormData({ ...formData, userImage: file });
        }
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // ২. ডাটা অবজেক্ট তৈরি
        const dataToSend = {
            ...formData,
            hostelName: hostelTitle,
            dateSubmitted: new Date().toLocaleString(),
            userImage: formData.userImage ? 'Attached' : 'No Image'
        };

        try {
            // ৩. গুগল শিটে ডাটা পাঠানো (POST Request)
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Apps Script এর জন্য জরুরি
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            });

            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Submission failed. Please check your internet.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative overflow-hidden border border-white/20 max-h-[95vh] overflow-y-auto">
                {!isSubmitted ? (
                    <div className="p-6 md:p-10 animate-in slide-in-from-bottom-4 duration-500">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                                    Booking Application
                                </h2>
                                <p className="text-slate-500 text-sm font-medium mt-1">
                                    Applying for{' '}
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
                            {/* Personal Info Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuUser size={12} /> Full Name
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-semibold text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuUserPlus size={12} /> Father's Name
                                    </label>
                                    <input
                                        required
                                        name="fathersName"
                                        type="text"
                                        placeholder="Mr. Richard Roe"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-semibold text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuUserPlus size={12} /> Mother's Name
                                    </label>
                                    <input
                                        required
                                        name="mothersName"
                                        type="text"
                                        placeholder="Mrs. Jane Doe"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-semibold text-sm"
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

                            {/* ID Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuFingerprint size={12} /> NID Number
                                    </label>
                                    <input
                                        required
                                        name="nid"
                                        type="text"
                                        placeholder="19XXXXXXXXXXX"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-semibold text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuFingerprint size={12} /> Passport (Optional)
                                    </label>
                                    <input
                                        name="passport"
                                        type="text"
                                        placeholder="AXXXXXXXX"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-semibold text-sm"
                                    />
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuMail size={12} /> Email
                                    </label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="example@mail.com"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-semibold text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuPhone size={12} /> Phone
                                    </label>
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        placeholder="017XXXXXXXX"
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-semibold text-sm"
                                    />
                                </div>
                            </div>

                            {/* Address Details */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                    <LuHouse size={12} /> Present Address
                                </label>
                                <textarea
                                    required
                                    name="presentAddress"
                                    rows="2"
                                    placeholder="House 12, Road 5, Sector 7, Uttara, Dhaka"
                                    onChange={handleInputChange}
                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-semibold text-sm resize-none"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                    <LuHouse size={12} /> Permanent Address
                                </label>
                                <textarea
                                    required
                                    name="permanentAddress"
                                    rows="2"
                                    placeholder="Village, Post, Thana, District"
                                    onChange={handleInputChange}
                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-semibold text-sm resize-none"
                                />
                            </div>

                            {/* Booking Specifics */}
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
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-semibold text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                        <LuBed size={12} /> Preferred Room
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="selectedRoom"
                                            required
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-[15px] bg-slate-50 border border-slate-100 rounded-2xl outline-none font-bold text-sm appearance-none"
                                        >
                                            <option value="">Choose Room</option>
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
                                        <LuChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Image Upload Row */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">
                                    <LuImagePlus size={12} /> Applicant Image (Max 2MB)
                                </label>
                                <div className="flex flex-col gap-2">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="text-xs font-semibold text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                    {imageError && (
                                        <p className="text-red-500 text-[10px] font-bold">
                                            {imageError}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <div className="flex justify-center w-full">
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        label={isLoading ? 'Sending...' : 'Confirm Application'}
                                        className="w-full max-w-[300px] py-4 rounded-[22px] text-sm font-black uppercase tracking-widest bg-slate-900 text-white hover:bg-white hover:text-slate-900 border-2 border-slate-900 transition-all shadow-xl disabled:opacity-50"
                                    />
                                </div>
                                <p className="text-center text-slate-400 text-[9px] mt-5 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                    <LuShieldCheck size={12} className="text-emerald-500" /> Secure
                                    Data Encryption
                                </p>
                            </div>
                        </form>
                    </div>
                ) : (
                    /* Success Message */
                    <div className="p-10 md:p-16 text-center animate-in zoom-in-95 duration-500">
                        <div className="relative mx-auto w-24 h-24 mb-8">
                            <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />
                            <div className="relative w-full h-full bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl">
                                <LuShieldCheck size={48} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-3">
                            Application Sent!
                        </h2>
                        <p className="text-slate-500 text-sm max-w-xs mx-auto mb-10 font-medium leading-relaxed">
                            Hi <b>{formData.name.split(' ')[0]}</b>, your application for{' '}
                            <b>{formData.selectedRoom || 'Premium Seat'}</b> is received. We'll
                            verify your details and call you soon.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a
                                href={`https://wa.me/88017XXXXXXXX?text=Hi, I applied for ${hostelTitle}. Name: ${formData.name}, NID: ${formData.nid}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                            >
                                Fast Connect via WhatsApp
                            </a>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="py-3 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-slate-600"
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
