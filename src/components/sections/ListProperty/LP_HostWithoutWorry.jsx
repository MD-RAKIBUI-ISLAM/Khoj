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

                {/* Perfect For Section - Advanced Glassmorphism Look */}
                <div className="bg-white rounded-[40px] p-10 lg:p-16 border border-blue-50 shadow-[0_20px_50px_rgba(0,149,255,0.05)] relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full -mr-40 -mt-40 blur-3xl opacity-60" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/30 rounded-full -ml-32 -mb-32 blur-2xl opacity-50" />

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative gap-4">
                        <div className="space-y-2">
                            <span className="text-[#0095FF] font-bold tracking-widest uppercase text-sm">
                                Categories
                            </span>
                            <h4 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                                {lpHostWorryData.perfectFor.title}
                            </h4>
                        </div>
                        <p className="text-slate-400 font-medium italic">
                            Showing all {lpHostWorryData.perfectFor.items.length} types
                        </p>
                    </div>

                    {/* Dynamic Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 relative">
                        {lpHostWorryData.perfectFor.items.map((item, idx) => (
                            <div
                                key={item.id || idx}
                                className="group flex flex-col gap-5 p-6 rounded-[28px] border border-transparent hover:border-blue-100 hover:bg-blue-50/40 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300"
                            >
                                {/* Icon Container with Hover Animation */}
                                <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-blue-100">
                                    <span className="filter drop-shadow-sm">{item.icon}</span>
                                </div>

                                <div className="space-y-3">
                                    <h5 className="font-bold text-slate-900 text-xl lg:text-2xl tracking-tight leading-tight group-hover:text-[#0095FF] transition-colors">
                                        {item.label}
                                    </h5>
                                    <p className="text-slate-500 text-base leading-relaxed opacity-90">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Subtle Action Link */}
                                <div className="pt-2">
                                    <span className="text-xs font-bold text-[#0095FF] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 cursor-pointer">
                                        Learn More
                                        <svg
                                            className="w-3 h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </span>
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
