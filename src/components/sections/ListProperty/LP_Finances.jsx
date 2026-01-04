import { LuCircleCheckBig } from 'react-icons/lu'; // গোল নীল টিক আইকনের জন্য

import { lpFinancesData } from '../../../data/mockData';
import Button from '../../common/Button';

function LP_Finances() {
    return (
        <section className="py-20 px-6 lg:px-20 bg-[#F2F2F7]">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Heading */}
                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-[#1A1A1A] mb-16">
                    {lpFinancesData.title}
                </h2>

                {/* Features Grid - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
                    {lpFinancesData.items.map((item) => (
                        <div key={item.id} className="flex items-start gap-4">
                            {/* Blue Circle Check Icon */}
                            <LuCircleCheckBig className="text-[#0095FF] text-3xl mt-1 flex-shrink-0" />

                            <div className="space-y-2">
                                <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A1A]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                                    {item.description}
                                </p>

                                {/* One Solution সেকশনের জন্য সাব-পয়েন্ট */}
                                {item.subPoints && (
                                    <ul className="mt-2 space-y-1">
                                        {item.subPoints.map((sub, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-gray-600 text-base"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0095FF]" />
                                                {sub}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div>
                    <Button
                        label={lpFinancesData.btnLabel}
                        variant="primary"
                        className="px-10 py-4 text-xl font-bold rounded-xl bg-[#0095FF] hover:bg-blue-600 transition-all shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}

export default LP_Finances;
