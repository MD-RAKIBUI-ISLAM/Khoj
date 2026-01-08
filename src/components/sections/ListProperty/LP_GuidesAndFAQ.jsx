import { LuArrowRight, LuImport, LuStar, LuStore } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import { lpGuidesAndFAQ } from '../../../data/mockData';
import Button from '../../common/Button';

function LP_GuidesAndFAQ() {
    const { stepsSection, faqSection } = lpGuidesAndFAQ;
    const navigate = useNavigate();

    const renderIcon = (type) => {
        const iconClasses = 'text-4xl transition-transform duration-300 group-hover:scale-110';
        switch (type) {
            case 'import':
                return (
                    <div className="p-4 bg-orange-50 rounded-2xl">
                        <LuImport className={`${iconClasses} text-orange-500`} />
                    </div>
                );
            case 'star':
                return (
                    <div className="p-4 bg-yellow-50 rounded-2xl">
                        <LuStar className={`${iconClasses} text-yellow-600`} />
                    </div>
                );
            case 'market':
                return (
                    <div className="p-4 bg-green-50 rounded-2xl">
                        <LuStore className={`${iconClasses} text-green-600`} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white">
            {/* --- Section 1: Simple to get started --- */}
            <section className="py-24 px-6 lg:px-20 border-b border-slate-100">
                <div className="max-w-[1440px] mx-auto">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                            {stepsSection.title}
                        </h2>
                        <div className="h-1.5 w-24 bg-[#0095FF] rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
                        {stepsSection.items.map((item, index) => (
                            <div
                                key={item.id}
                                className="relative group p-8 rounded-[32px] bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue-100"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute top-6 right-8 text-6xl font-black text-slate-200 opacity-50 group-hover:text-blue-100 transition-colors">
                                    0{index + 1}
                                </div>

                                <div className="mb-8 inline-block relative z-10">
                                    {renderIcon(item.iconType)}
                                </div>

                                <div className="space-y-4 relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-lg leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <Button
                            label={
                                <span className="flex items-center gap-2">
                                    {stepsSection.btnLabel} <LuArrowRight />
                                </span>
                            }
                            variant="primary"
                            onClick={() => navigate('/signin')}
                            className="px-10 py-4 text-lg font-black rounded-2xl bg-[#0095FF] hover:bg-blue-600 transition-all shadow-lg hover:-translate-y-1 cursor-pointer"
                        />
                    </div>
                </div>
            </section>

            {/* --- Section 2: Your questions answered --- */}
            <section className="py-24 px-6 lg:px-20 bg-[#F8FAFC]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center md:text-left mb-20">
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            {faqSection.title}
                        </h2>
                        <p className="text-slate-500 text-xl max-w-2xl">
                            Everything you need to know about partnering with Booking Khoj.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {faqSection.questions.map((faq) => (
                            <div
                                key={faq.id}
                                className="p-8 bg-white rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex gap-4">
                                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-[#0095FF] font-bold text-sm">
                                        Q
                                    </span>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-slate-900 leading-snug">
                                            {faq.q}
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center p-12 bg-white rounded-[40px] border border-blue-50 shadow-sm text-center">
                        <h4 className="text-2xl font-bold text-slate-900 mb-4">
                            Still have questions?
                        </h4>
                        <p className="text-slate-500 mb-8 max-w-md italic">
                            Can't find the answer you're looking for? Please chat with our friendly
                            team.
                        </p>
                        <Button
                            label={faqSection.btnLabel}
                            variant="primary"
                            onClick={() => navigate('/contact')}
                            className="px-12 py-4 text-lg font-black rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-md cursor-pointer"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LP_GuidesAndFAQ;
