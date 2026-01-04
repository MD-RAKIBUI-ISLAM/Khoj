import { LuImport, LuStar, LuStore } from 'react-icons/lu'; // প্রয়োজনীয় আইকন

import { lpGuidesAndFAQ } from '../../../data/mockData';
import Button from '../../common/Button';

function LP_GuidesAndFAQ() {
    const { stepsSection, faqSection } = lpGuidesAndFAQ;

    // আইকন সিলেকশন ফাংশন
    const renderIcon = (type) => {
        switch (type) {
            case 'import':
                return <LuImport className="text-5xl text-orange-400" />;
            case 'star':
                return <LuStar className="text-5xl text-orange-500" />;
            case 'market':
                return <LuStore className="text-5xl text-green-600" />;
            default:
                return null;
        }
    };

    return (
        <div className="space-y-0">
            {/* --- Section 1: Simple to get started --- */}
            <section className="py-20 px-6 lg:px-20 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-serif font-bold text-[#1A1A1A] mb-16">
                        {stepsSection.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        {stepsSection.items.map((item) => (
                            <div key={item.id} className="space-y-5">
                                <div className="mb-6">{renderIcon(item.iconType)}</div>
                                <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A1A]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Button
                        label={stepsSection.btnLabel}
                        variant="primary"
                        className="px-8 py-3.5 text-lg font-bold rounded-xl bg-[#0095FF]"
                    />
                </div>
            </section>

            {/* --- Section 2: Your questions answered --- */}
            <section className="py-20 px-6 lg:px-20 bg-[#F2F2F7]">
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-serif font-bold text-[#1A1A1A] mb-16">
                        {faqSection.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mb-16">
                        {faqSection.questions.map((faq) => (
                            <div key={faq.id} className="space-y-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A1A]">
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>

                    <Button
                        label={faqSection.btnLabel}
                        variant="primary"
                        className="px-8 py-3.5 text-lg font-bold rounded-xl bg-[#0095FF]"
                    />
                </div>
            </section>
        </div>
    );
}

export default LP_GuidesAndFAQ;
