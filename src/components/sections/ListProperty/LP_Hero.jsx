import { useEffect, useState } from 'react';

import { lpHeroData } from '../../../data/mockData';
import Button from '../../common/Button';

function LP_Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % lpHeroData.animatedText.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const currentItem = lpHeroData.animatedText[index];

    return (
        <section className="bg-[#F0F8FF] py-12 lg:py-20 px-6 lg:px-20 overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Side: Animated Text Content */}
                <div className="space-y-6">
                    <h1 className="text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] leading-tight">
                        Grow Faster with <br />
                        <span className="text-[#0095FF]">Booking Khoj</span>
                    </h1>

                    {/* Digital Board Effect (No Bullet, Dynamic Colors) */}
                    <div className="min-h-[70px] flex items-center">
                        <p
                            key={index}
                            className={`text-4xl lg:text-7xl font-black transition-all duration-700 ease-in-out ${currentItem.color}`}
                            style={{ textShadow: '0px 4px 15px rgba(0,0,0,0.05)' }}
                        >
                            {currentItem.text}
                        </p>
                    </div>

                    <p className="text-gray-600 text-lg lg:text-xl max-w-xl leading-relaxed">
                        {lpHeroData.description}
                    </p>
                </div>

                {/* Right Side: Registration Card (Reduced Height) */}
                <div className="flex justify-center lg:justify-end">
                    <div className="w-full max-w-[480px] bg-white border-[5px] border-[#FF914D] rounded-[28px] p-7 shadow-xl">
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

                        {/* Common Button Component */}
                        <div className="mb-6">
                            <Button
                                label={
                                    <div className="flex items-center justify-center gap-2">
                                        {lpHeroData.registrationCard.btnLabel}
                                        <span className="text-xl">→</span>
                                    </div>
                                }
                                variant="primary"
                                className="w-full py-3 text-base rounded-xl bg-[#0095FF] hover:bg-blue-600 transition-all shadow-md"
                            />
                        </div>

                        <div className="text-sm">
                            <p className="text-[#1A1A1A] font-bold inline mr-1">
                                {lpHeroData.registrationCard.footerText}
                            </p>
                            <button
                                type="button"
                                className="text-[#0095FF] font-bold hover:underline"
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
