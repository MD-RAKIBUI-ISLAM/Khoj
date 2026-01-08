import { FiShield, FiUsers } from 'react-icons/fi';
import { LuBadgeCheck } from 'react-icons/lu';

import { lpHostWorryData } from '../../../data/mockData';

function LP_HostWithoutWorry() {
    const getIcon = (name) => {
        switch (name) {
            case 'check':
                return (
                    <div className="p-3 bg-green-50 rounded-xl">
                        <LuBadgeCheck className="text-green-600 text-3xl" />
                    </div>
                );
            case 'users':
                return (
                    <div className="p-3 bg-orange-50 rounded-xl">
                        <FiUsers className="text-orange-500 text-3xl" />
                    </div>
                );
            case 'shield':
                return (
                    <div className="p-3 bg-red-50 rounded-xl">
                        <FiShield className="text-red-500 text-3xl" />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-20 px-6 lg:px-20 bg-[#FAFBFF]">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                        {lpHostWorryData.title}
                    </h2>
                    <div className="w-20 h-1.5 bg-[#0095FF] rounded-full" />
                </div>

                {/* Grid Columns with Premium Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {lpHostWorryData.columns.map((col) => (
                        <div
                            key={col.id}
                            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="mb-6 inline-block transition-transform group-hover:scale-110 duration-300">
                                {getIcon(col.iconName)}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                {col.header}
                            </h3>

                            <ul className="space-y-4">
                                {col.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group/item">
                                        <div className="mt-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0095FF] group-hover/item:scale-150 transition-transform" />
                                        </div>
                                        <p className="text-slate-600 text-[15px] leading-relaxed">
                                            {point.text}
                                            {point.linkText && (
                                                <a
                                                    href={point.url}
                                                    className="text-[#0095FF] font-semibold hover:text-blue-700 mx-1 underline decoration-blue-200 underline-offset-4"
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

                {/* Perfect For Section - Glassmorphism look */}
                <div className="bg-white rounded-[40px] p-10 lg:p-16 border border-blue-50 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-50" />

                    <h4 className="text-3xl font-black text-slate-900 mb-12 relative">
                        {lpHostWorryData.perfectFor.title}
                    </h4>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 relative">
                        {lpHostWorryData.perfectFor.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-5xl filter drop-shadow-md transition-transform hover:scale-110 cursor-default">
                                    {item.icon}
                                </span>
                                <div className="space-y-1">
                                    <h5 className="font-bold text-slate-900 text-xl tracking-tight">
                                        {item.label}
                                    </h5>
                                    <p className="text-slate-500 text-base">{item.desc}</p>
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
