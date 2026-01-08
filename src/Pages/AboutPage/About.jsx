import {
    LuAward,
    LuCircleCheck,
    LuHeart,
    LuShieldCheck,
    LuTarget,
    LuUsersRound
} from 'react-icons/lu';
import { Link } from 'react-router-dom';

import img1 from '../../assets/about1.jpeg';
import img2 from '../../assets/about2.jpeg';

function About() {
    const stats = [
        { label: 'Successful Placements', value: '12K+' },
        { label: 'Partner Properties', value: '450+' },
        { label: 'Cities Covered', value: '25+' },
        { label: 'Happy Clients', value: '98%' }
    ];

    const values = [
        {
            icon: <LuTarget className="text-blue-600" size={28} />,
            title: 'Our Mission',
            desc: 'To simplify the housing search for students and travelers through innovation and trust.',
            color: 'hover:bg-blue-50/50'
        },
        {
            icon: <LuHeart className="text-rose-500" size={28} />,
            title: 'Client First',
            desc: 'Every decision we make starts with the question: How does this benefit our users?',
            color: 'hover:bg-rose-50/50'
        },
        {
            icon: <LuAward className="text-amber-500" size={28} />,
            title: 'Quality Assured',
            desc: 'We personally verify every property to ensure it meets our high standards of living.',
            color: 'hover:bg-amber-50/50'
        },
        {
            icon: (
                <LuShieldCheck span className="text-emerald-600 font-bold text-xl">
                    04
                </LuShieldCheck>
            ), // Example for dynamic numbering
            title: 'Transparency',
            desc: 'No hidden costs. Clear communication and honest pricing are our core principles.',
            color: 'hover:bg-emerald-50/50'
        },
        {
            icon: <LuCircleCheck className="text-indigo-600" size={28} />,
            title: 'Reliability',
            desc: 'With 24/7 support, we ensure you never feel alone in your search for a home.',
            color: 'hover:bg-indigo-50/50'
        },
        {
            icon: <LuUsersRound className="text-orange-500" size={28} />,
            title: 'Community Focused',
            desc: 'Building a network where residents feel safe, connected, and part of a community.',
            color: 'hover:bg-orange-50/50'
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-24 md:pt-36 pb-20 overflow-x-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                {/* --- Hero Section: Visionary Header --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                            </span>
                            <span className="text-blue-700 font-black text-[10px] uppercase tracking-[2px]">
                                Our Journey
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8">
                            Redefining <br />
                            <span className="text-blue-600 italic">Living Spaces.</span>
                        </h1>
                        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                            Started in 2024, we set out to bridge the gap between premium housing
                            and accessibility. We don't just list properties; we curate experiences.
                        </p>
                    </div>

                    {/* Abstract Image Grid */}
                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <div className="h-64 bg-slate-100 rounded-[32px] overflow-hidden">
                                <img
                                    src={img1}
                                    alt="Team"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="h-40 bg-blue-600 rounded-[32px] flex items-center justify-center p-8 text-white">
                                <p className="text-2xl font-black leading-tight italic">
                                    Trust in every key.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-40 bg-slate-900 rounded-[32px] flex flex-col justify-end p-8 text-white">
                                <span className="text-4xl font-black">10+</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-400">
                                    Years Industry Exp
                                </span>
                            </div>
                            <div className="h-64 bg-slate-100 rounded-[32px] overflow-hidden">
                                <img
                                    src={img2}
                                    alt="Office"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Stats Section: Premium & Animated --- */}
                <div className="relative mb-24 group/stats">
                    {/* Background Decorative Pattern (Optional) */}
                    <div className="absolute inset-0 bg-slate-50/50 rounded-[40px] -z-10 transition-colors duration-500 group-hover/stats:bg-blue-50/30" />

                    {/* Container-e gap-6 use korun */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 relative">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="relative px-6 py-12 text-center transition-all duration-500 group rounded-[32px] overflow-hidden bg-white/50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                {/* Hover Background */}
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/0 to-blue-50/80 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />

                                <div className="relative z-10">
                                    <div className="inline-block relative">
                                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-2 transition-all duration-500 group-hover:text-blue-600">
                                            {stat.value}
                                        </h2>
                                        <div className="h-1 w-0 bg-blue-600 mx-auto rounded-full transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[3px] text-slate-400 mt-4 group-hover:text-slate-900 transition-colors">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Enhanced Core Values Section --- */}
                <div className="mb-32 relative">
                    {/* Decorative Background Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/30 blur-[120px] rounded-full -z-10" />

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[2px] w-12 bg-blue-600" />
                                <span className="text-blue-600 font-black text-[11px] uppercase tracking-[4px]">
                                    Our Core DNA
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                                Values that drive us <br />
                                <span className="text-blue-600 italic">forward.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 font-medium text-lg max-w-md lg:text-right italic">
                            "Building trust through transparency and a relentless focus on the user
                            experience."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {values.map((val, i) => (
                            <div
                                key={i}
                                className={`p-10 bg-white border border-slate-100 rounded-[48px] transition-all duration-700 group hover:-translate-y-4 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative overflow-hidden ${val.color}`}
                            >
                                {/* Subtle Card Glow on Hover */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-slate-50 rounded-full group-hover:scale-[2] transition-transform duration-1000 ease-in-out opacity-40" />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-slate-50 rounded-[24px] flex items-center justify-center mb-8 group-hover:bg-white group-hover:shadow-lg group-hover:rotate-[10deg] transition-all duration-500">
                                        {val.icon}
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">
                                        {val.title}
                                    </h3>

                                    <p className="text-slate-500 leading-relaxed font-medium transition-colors group-hover:text-slate-700">
                                        {val.desc}
                                    </p>
                                </div>

                                {/* Bottom Number Indicator */}
                                <div className="absolute bottom-10 right-10 text-slate-100 font-black text-6xl group-hover:text-slate-200/50 transition-colors -z-0">
                                    0{i + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Call to Action: Bottom --- */}
                <div className="relative bg-slate-900 rounded-[56px] p-12 md:p-24 overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Ready to find your <br />
                            <span className="text-blue-400">next home?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                            {/* Corrected: Linked to /list-property as per your App.js route */}
                            <Link
                                to="/list-property"
                                className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-2xl font-center font-black text-[11px] uppercase tracking-[3px] hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-2xl shadow-blue-900/20 active:scale-95"
                            >
                                Browse Properties
                            </Link>
                            {/* Corrected: Linked to /contact */}
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-12 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-center font-black text-[11px] uppercase tracking-[3px] hover:bg-white/20 transition-all backdrop-blur-md active:scale-95"
                            >
                                Contact Team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
