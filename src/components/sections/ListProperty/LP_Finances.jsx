import { LuCircleCheckBig } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom'; // নেভিগেশনের জন্য

import { lpFinancesData } from '../../../data/mockData';
import Button from '../../common/Button';

function LP_Finances() {
    const navigate = useNavigate();

    return (
        <section className="py-24 px-6 lg:px-20 bg-[#F8FAFC]">
            {' '}
            {/* হালকা এবং ফ্রেশ ব্যাকগ্রাউন্ড */}
            <div className="max-w-[1440px] mx-auto">
                {/* Section Header */}
                <div className="max-w-4xl mb-20">
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        {lpFinancesData.title}
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="h-1.5 w-24 bg-[#0095FF] rounded-full" />
                        <div className="h-1.5 w-6 bg-blue-200 rounded-full" />
                    </div>
                </div>

                {/* Features Grid - 2 Columns with Card Hover Effects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-20">
                    {lpFinancesData.items.map((item) => (
                        <div
                            key={item.id}
                            className="group p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500"
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon with subtle animation */}
                                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-[#0095FF] transition-colors duration-300">
                                    <LuCircleCheckBig className="text-[#0095FF] group-hover:text-white text-3xl flex-shrink-0" />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-lg leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Sub-points with modern styling */}
                                    {item.subPoints && (
                                        <div className="grid grid-cols-1 gap-3 pt-2">
                                            {item.subPoints.map((sub, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-xl border border-transparent hover:border-blue-100 transition-all"
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-[#0095FF] shadow-[0_0_10px_rgba(0,149,255,0.5)]" />
                                                    <span className="text-slate-600 font-medium text-base">
                                                        {sub}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button with Shadow Effect */}
                <div className="flex justify-start">
                    <Button
                        label={
                            <span className="flex items-center gap-3">
                                {lpFinancesData.btnLabel}
                                <span className="text-2xl">→</span>
                            </span>
                        }
                        variant="primary"
                        onClick={() => navigate('/signin')} // সাইন-ইন লিঙ্কে নেভিগেট
                        className="px-12 py-5 text-xl font-black rounded-2xl bg-[#0095FF] hover:bg-blue-600 transition-all shadow-[0_10px_30px_rgba(0,149,255,0.3)] hover:-translate-y-1 active:scale-95 cursor-pointer"
                    />
                </div>
            </div>
        </section>
    );
}

export default LP_Finances;
