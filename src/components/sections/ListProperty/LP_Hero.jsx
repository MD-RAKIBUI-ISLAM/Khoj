import { useNavigate } from 'react-router-dom'; // Link এর বদলে navigate ব্যবহার করা নিরাপদ

import { lpHeroData } from '../../../data/mockData';
import Button from '../../common/Button';

function LP_Hero() {
    const navigate = useNavigate();

    return (
        <section className="bg-[#F0F8FF] py-12 lg:py-20 px-6 lg:px-20 overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Side: Animated Text Content */}
                <div className="space-y-8 relative z-10 lg:pr-10">
                    {/* একটি ছোট ব্যাজ যোগ করা হয়েছে প্রিমিয়াম লুকের জন্য */}
                    <div className="inline-flex items-center gap-3 bg-blue-50/50 border border-blue-100 px-6 py-2.5 rounded-full shadow-sm backdrop-blur-sm group">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0095FF] opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0095FF]" />
                        </span>
                        <span className="text-[#0095FF] text-base lg:text-lg font-bold tracking-wider uppercase">
                            Partner With Confidence
                        </span>
                    </div>

                    <div className="space-y-6 max-w-2xl">
                        {/* Headline Section */}
                        <div className="space-y-3">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-slate-900 leading-[1.1] tracking-tight">
                                Grow Faster with <br />
                                <span className="relative inline-block mt-1">
                                    <span className="bg-gradient-to-r from-[#0095FF] to-[#00CCFF] bg-clip-text text-transparent italic px-1">
                                        Booking Khoj
                                    </span>
                                    {/* প্রফেশনাল আন্ডারলাইন ইফেক্ট */}
                                    <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-blue-500/10 rounded-full overflow-hidden">
                                        <span className="block w-1/3 h-full bg-[#0095FF] rounded-full animate-pulse" />
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Digital Board Marquee (স্মুথ এবং কম্প্যাক্ট ডিজাইন) */}
                        <div className="relative mt-10 py-4 border-y border-slate-100 bg-slate-50/50 backdrop-blur-sm rounded-xl overflow-hidden">
                            {/* দুই পাশের ফেড ইফেক্ট কমানো হয়েছে যাতে লেখা স্পষ্ট থাকে */}
                            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F0F8FF] to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F0F8FF] to-transparent z-10" />

                            <div className="flex overflow-hidden">
                                <div className="flex whitespace-nowrap animate-marquee items-center py-2">
                                    {[...lpHeroData.animatedText, ...lpHeroData.animatedText].map(
                                        (item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-4 mx-8 shrink-0"
                                            >
                                                <div
                                                    className={`w-2.5 h-2.5 rounded-full bg-current shadow-[0_0_10px_currentColor] ${item.color} opacity-80`}
                                                />
                                                <p
                                                    className={`text-3xl lg:text-4xl font-black ${item.color} tracking-tighter`}
                                                >
                                                    {item.text}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ডেসক্রিপশন টেক্সটটিকে আরও রিডেবল করা হয়েছে */}
                    <div className="relative">
                        {/* বাঁদিকে একটি বর্ডার লাইন প্রিমিয়াম টাচ দেয় */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-transparent opacity-30 -ml-4 rounded-full" />
                        <p className="text-slate-500 text-lg lg:text-xl max-w-xl leading-relaxed font-medium">
                            {lpHeroData.description}
                        </p>
                    </div>

                    {/* সোশ্যাল প্রুফ বা ট্রাস্ট লেবেল (ঐচ্ছিক কিন্তু প্রিমিয়াম দেখায়) */}
                    <div className="flex items-center gap-5 pt-2">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-11 h-11 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-md"
                                >
                                    <img
                                        src={`https://i.pravatar.cc/150?u=acc${i}`}
                                        alt="user"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            <div className="w-11 h-11 rounded-full border-2 border-white bg-[#0095FF] flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                                +500
                            </div>
                        </div>
                        <div className="space-y-0.5">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s} className="text-yellow-400 text-sm">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-500 text-sm font-semibold">
                                Loved by{' '}
                                <span className="text-slate-900 font-bold">
                                    500+ Property Owners
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Registration Card (Fixed Structure) */}
                <div className="flex justify-center lg:justify-end relative z-20">
                    <div className="w-full max-w-[480px] bg-white border-[5px] border-[#FF914D] rounded-[28px] p-7 shadow-2xl relative">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">
                            {lpHeroData.registrationCard.title}
                        </h3>

                        <ul className="space-y-3 mb-6">
                            {lpHeroData.registrationCard.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                    <span className="text-green-500 font-bold text-lg">✓</span>
                                    <span className="text-gray-700 font-medium text-sm lg:text-base">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div className="mb-6">
                            <Button
                                label={
                                    <div className="flex items-center justify-center gap-2">
                                        {lpHeroData.registrationCard.btnLabel}
                                        <span className="text-xl">→</span>
                                    </div>
                                }
                                variant="primary"
                                onClick={() => navigate('/signin')}
                                className="w-full py-3 text-base rounded-xl bg-[#0095FF] hover:bg-blue-600 transition-all shadow-md cursor-pointer"
                            />
                        </div>

                        {/* Footer Link Section (Fixed & Working) */}
                        <div className="text-sm relative z-30">
                            <p className="text-[#1A1A1A] font-bold inline mr-1">
                                {lpHeroData.registrationCard.footerText}
                            </p>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/signin');
                                }}
                                className="text-[#0095FF] font-black hover:underline cursor-pointer inline-block p-1 focus:outline-none"
                                aria-label="Navigate to Sign In"
                            >
                                {lpHeroData.registrationCard.footerLink}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LP_Hero;
