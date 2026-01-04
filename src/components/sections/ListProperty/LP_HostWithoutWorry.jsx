import { FiShield, FiUsers } from 'react-icons/fi';
// LuCheckCircle এর বদলে LuBadgeCheck বা LuCheck ব্যবহার করুন
import { LuBadgeCheck } from 'react-icons/lu';

import { lpHostWorryData } from '../../../data/mockData';

function LP_HostWithoutWorry() {
    // Icon mapping logic আপডেট করা হয়েছে
    const getIcon = (name) => {
        switch (name) {
            case 'check':
                return <LuBadgeCheck className="text-green-500 text-2xl" />;
            case 'users':
                return <FiUsers className="text-orange-400 text-2xl" />;
            case 'shield':
                return <FiShield className="text-red-500 text-2xl" />;
            default:
                return null;
        }
    };

    return (
        <section className="py-16 px-6 lg:px-20 bg-white">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] mb-12">
                    {lpHostWorryData.title}
                </h2>

                {/* Grid Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {lpHostWorryData.columns.map((col) => (
                        <div key={col.id} className="space-y-6">
                            <div className="flex items-center gap-3">
                                {/* আইকন রেন্ডার হচ্ছে */}
                                {getIcon(col.iconName)}
                                <h3 className="text-xl font-bold text-[#1A1A1A]">{col.header}</h3>
                            </div>

                            <ul className="space-y-5">
                                {col.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#0095FF] mt-2.5 flex-shrink-0" />
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            {point.text}
                                            {point.linkText && (
                                                <a
                                                    href={point.url}
                                                    className="text-[#0095FF] font-medium hover:underline mx-1"
                                                >
                                                    {point.linkText}
                                                </a>
                                            )}
                                            {point.suffix}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Perfect For Section */}
                <div className="pt-12 border-t border-gray-100">
                    <h4 className="text-2xl font-bold text-[#1A1A1A] mb-8">
                        {lpHostWorryData.perfectFor.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
                        {lpHostWorryData.perfectFor.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <span className="text-3xl mt-1">{item.icon}</span>
                                <div className="leading-tight">
                                    <span className="font-bold text-[#1A1A1A] text-lg">
                                        {item.label}
                                    </span>
                                    <span className="text-gray-400 mx-2">—</span>
                                    <span className="text-gray-600 text-base">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LP_HostWithoutWorry;
