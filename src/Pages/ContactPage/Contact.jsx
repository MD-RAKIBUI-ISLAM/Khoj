import { LuClock, LuMail, LuMapPin, LuMessageSquare, LuPhone, LuSend } from 'react-icons/lu';

function Contact() {
    const contactDetails = [
        {
            icon: <LuPhone size={24} />,
            title: 'Call Us',
            detail: '+880 1234 567 890',
            subDetail: 'Sunday-Thursday from 9am to 6pm',
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            icon: <LuMail size={24} />,
            title: 'Email Us',
            detail: 'support@yourbrand.com',
            subDetail: 'Online support 24/7',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            icon: <LuMapPin size={24} />,
            title: 'Visit Us',
            detail: 'Dhanmondi, Dhaka',
            subDetail: 'Bangladesh, 1209',
            color: 'text-purple-600',
            bg: 'bg-purple-50'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/30 pt-24 md:pt-36 pb-20 overflow-x-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                {/* --- Header Section --- */}
                <div className="max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm mb-6">
                        <LuMessageSquare className="text-blue-600" size={14} />
                        <span className="text-slate-600 font-bold text-[10px] uppercase tracking-[2px]">
                            Get In Touch
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
                        Let's Start a <br />
                        <span className="text-blue-600 italic">Conversation.</span>
                    </h1>
                    <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed">
                        Have questions about our services or need help finding a place? Our team is
                        here to assist you every step of the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                    {/* --- Left Side: Contact Info --- */}
                    <div className="space-y-8">
                        {contactDetails.map((item, index) => (
                            <div key={index} className="flex items-start gap-6 group">
                                <div
                                    className={`w-14 h-14 shrink-0 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-800 font-bold text-sm md:text-base">
                                        {item.detail}
                                    </p>
                                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mt-1">
                                        {item.subDetail}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Social/Working Hours Badge */}
                        <div className="p-8 bg-slate-900 rounded-[40px] text-white relative overflow-hidden">
                            <LuClock
                                className="absolute -right-4 -bottom-4 text-white/10"
                                size={120}
                            />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative flex h-3 w-3">
                                    {/* স্ট্যাটাস ইন্ডিকেটর: এটি এনিমেটেড থাকবে */}
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[3px] text-blue-400">
                                    Open Now
                                </span>
                            </div>
                            <h4 className="text-xl font-bold mb-2 relative z-10">Working Hours</h4>
                            <p className="text-slate-400 text-sm relative z-10">
                                We are available for on-site visits and calls during these hours.
                            </p>
                            <div className="mt-6 space-y-2 relative z-10">
                                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                    <span>Sunday - Thursday</span>
                                    <span className="text-blue-400">9AM - 8PM</span>
                                </div>
                                <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-50">
                                    <span>Friday - Saturday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Side: Contact Form --- */}
                    <div className="lg:col-span-2">
                        <form className="bg-white border border-slate-100 p-8 md:p-12 rounded-[48px] shadow-xl shadow-slate-200/50 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600/20 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600/20 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
                                    Subject
                                </label>
                                <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none cursor-pointer">
                                    <option value="" disabled selected>
                                        Select a Topic
                                    </option>

                                    {/* General Support */}
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>

                                    {/* Property Specific */}
                                    <option>Student Housing Inquiry</option>
                                    <option>Resort & Hotel Booking</option>
                                    <option>Apartment Rental Inquiry</option>
                                    <option>Commercial Property Listing</option>

                                    {/* Partnerships */}
                                    <option>Become a Host / Partner</option>
                                    <option>Advertising Opportunities</option>
                                    <option>Corporate Collaborations</option>

                                    {/* Feedback & Others */}
                                    <option>Report a Problem</option>
                                    <option>Feedback & Suggestions</option>
                                    <option>Billing & Payment Issues</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
                                    Your Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="How can we help you?"
                                    className="w-full bg-slate-50 border-none rounded-3xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600/20 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto px-12 py-5 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-[2px] hover:bg-slate-900 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-3 group"
                            >
                                Send Message
                                <LuSend
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
