import { AnimatePresence, motion } from 'framer-motion'; // AnimatePresence যোগ করা হয়েছে
import { useState } from 'react'; // useState যোগ করা হয়েছে
import {
    LuArrowRight,
    LuCalendar,
    LuCircleCheck,
    LuCreditCard,
    LuMail,
    LuPartyPopper, // সাকসেস আইকন
    LuPhone,
    LuUser,
    LuX
} from 'react-icons/lu';

function BookingFormModal({ isOpen, onClose, item, categoryTitle }) {
    const [isSubmitted, setIsSubmitted] = useState(false); // সাবমিট স্টেট

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    // মডাল বন্ধ করার সময় স্টেট রিসেট করার জন্য
    const handleClose = () => {
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* ব্যাকড্রপ ওভারলে */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* মেইন কার্ড */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.2)] border border-white overflow-hidden"
            >
                {/* ক্লোজ বাটন */}
                <button
                    type="button"
                    onClick={handleClose}
                    className="absolute top-6 right-6 p-3 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-2xl transition-all duration-300 z-10"
                >
                    <LuX size={20} />
                </button>

                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        /* --- অরিজিনাল লেআউট (অপরিবর্তিত) --- */
                        <motion.div
                            key="booking-form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-5 h-full"
                        >
                            {/* বাম পাশ */}
                            <div className="md:col-span-2 bg-slate-900 p-8 text-white flex flex-col justify-between">
                                <div>
                                    <span className="px-3 py-1 bg-blue-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        Selected {categoryTitle}
                                    </span>
                                    <h3 className="text-2xl font-black mt-4 leading-tight">
                                        {item.name}
                                    </h3>
                                    <p className="text-slate-400 font-bold text-sm mt-2">
                                        {item.route}
                                    </p>
                                </div>
                                <div className="mt-10 md:mt-0 pt-6 border-t border-white/10">
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">
                                        Final Price
                                    </p>
                                    <span className="text-3xl font-black text-blue-400">
                                        ৳{item.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            {/* ডান পাশ: ফর্ম */}
                            <form
                                onSubmit={handleSubmit}
                                className="md:col-span-3 p-8 md:p-10 space-y-5"
                            >
                                <div className="mb-6">
                                    <h2 className="text-2xl font-black text-slate-900">
                                        Complete Booking
                                    </h2>
                                    <p className="text-slate-500 font-bold text-sm">
                                        Please provide your details below.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <InputField
                                        icon={<LuUser />}
                                        label="Full Name"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                    <InputField
                                        icon={<LuMail />}
                                        label="Email Address"
                                        placeholder="john@example.com"
                                        type="email"
                                    />
                                    <InputField
                                        icon={<LuPhone />}
                                        label="Phone Number"
                                        placeholder="+880 1XXX XXXXXX"
                                        type="tel"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <InputField
                                            icon={<LuCalendar />}
                                            label="Travel Date"
                                            placeholder="Select"
                                            type="date"
                                        />
                                        <InputField
                                            icon={<LuCreditCard />}
                                            label="NID/Passport"
                                            placeholder="Number"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-slate-900 hover:scale-[1.02] transition-all duration-300 mt-6 flex items-center justify-center gap-3"
                                >
                                    <LuCircleCheck size={22} /> Pay & Confirm
                                </button>
                                <p className="text-[10px] text-slate-400 text-center font-bold px-4">
                                    By clicking "Pay & Confirm", you agree to our terms and
                                    conditions.
                                </p>
                            </form>
                        </motion.div>
                    ) : (
                        /* --- সাকসেস মেসেজ লেআউট --- */
                        <motion.div
                            key="success-message"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-12 text-center flex flex-col items-center justify-center min-h-[450px]"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                className="w-24 h-24 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner"
                            >
                                <LuPartyPopper size={45} />
                            </motion.div>

                            <h2 className="text-3xl font-black text-slate-900 mb-2">Success!</h2>
                            <p className="text-slate-500 font-bold max-w-sm mx-auto mb-10">
                                Your booking for <span className="text-blue-600">{item.name}</span>{' '}
                                is confirmed. A confirmation email has been sent to you.
                            </p>

                            <button
                                type="button"
                                onClick={handleClose}
                                className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-blue-600 transition-all duration-300 shadow-xl"
                            >
                                Back to Home <LuArrowRight size={20} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

function InputField({ icon, label, placeholder, type }) {
    return (
        <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                {icon} {label}
            </label>
            <input
                required
                type={type}
                placeholder={placeholder}
                className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-2xl outline-none font-bold text-slate-800 transition-all placeholder:text-slate-300"
            />
        </div>
    );
}

export default BookingFormModal;
