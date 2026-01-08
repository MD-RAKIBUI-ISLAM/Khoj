import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Link এর বদলে navigate ব্যবহার করা নিরাপদ

import { lpHeroData } from '../../../data/mockData';
import Button from '../../common/Button';

function LP_Hero() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate(); // নেভিগেশন হুক

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % lpHeroData.animatedText.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const currentItem = lpHeroData.animatedText[index];

    return (
        <section className="bg-[#F0F8FF] py-12 lg:py-20 px-6 lg:px-20 overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Side: Animated Text Content */}
                <div className="space-y-8 relative z-10 lg:pr-10">
                    {/* একটি ছোট ব্যাজ যোগ করা হয়েছে প্রিমিয়াম লুকের জন্য */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-blue-700 text-xs font-bold uppercase tracking-widest">
                            Partner with Confidence
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            Grow Faster with <br />
                            <span className="relative inline-block">
                                <span className="text-[#0095FF] italic">Booking Khoj</span>
                                {/* টেক্সটের নিচে একটি স্টাইলিশ আন্ডারলাইন */}
                                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-100 rounded-full -z-10" />
                            </span>
                        </h1>

                        {/* Digital Board Effect (স্মুথ স্লাইডিং অ্যানিমেশন সহ) */}
                        <div className="h-[80px] lg:h-[100px] flex items-center overflow-hidden">
                            <p
                                key={index}
                                className={`text-4xl lg:text-7xl font-black transition-all duration-1000 ease-out animate-in fade-in slide-in-from-bottom-8 ${currentItem.color}`}
                                style={{
                                    filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.08))',
                                    letterSpacing: '-1px'
                                }}
                            >
                                {currentItem.text}
                            </p>
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
                    <div className="flex items-center gap-4 pt-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm"
                                >
                                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-400 text-sm font-semibold">
                            <span className="text-slate-900">500+</span> Property owners already
                            joined
                        </p>
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
