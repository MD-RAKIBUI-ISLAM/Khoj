import {
    LuArrowRight,
    LuBuilding2,
    LuGraduationCap,
    LuHouse,
    LuStar,
    LuTreePalm
} from 'react-icons/lu';
import { Link } from 'react-router-dom';

function Services() {
    const services = [
        {
            title: 'Student Housing',
            description: 'Find the best hostels and mess facilities near top universities.',
            icon: <LuGraduationCap size={32} />,
            path: '/student-housing',
            count: '150+ Properties',
            color: 'from-blue-500 to-cyan-400',
            bgLight: 'bg-blue-50'
        },
        {
            title: 'Resorts & Hotels',
            description: 'Premium spots for vacations, from luxury resorts to budget hotels.',
            icon: <LuTreePalm size={32} />,
            path: '/hotel-resort',
            count: '80+ Locations',
            color: 'from-emerald-500 to-teal-400',
            bgLight: 'bg-emerald-50'
        },
        {
            title: 'Home Rentals',
            description: 'Spacious houses and flats available for long-term stay.',
            icon: <LuHouse size={32} />,
            path: '/home-rentals',
            count: '200+ Homes',
            color: 'from-orange-500 to-amber-400',
            bgLight: 'bg-orange-50'
        },
        {
            title: 'Apartments',
            description: 'Luxury apartments and studio flats in the heart of the city.',
            icon: <LuBuilding2 size={32} />,
            path: '/home-rentals',
            count: '120+ Units',
            color: 'from-purple-500 to-indigo-400',
            bgLight: 'bg-purple-50'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 pt-24 md:pt-32 pb-12 overflow-x-hidden">
            <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
                {/* --- Header Section --- */}
                <div className="flex flex-col md:items-center md:text-center mb-12 md:mb-20">
                    <div className="inline-flex items-center gap-2 bg-blue-50 self-start md:self-center px-4 py-2 rounded-full mb-6">
                        <LuStar className="text-blue-600 fill-blue-600" size={14} />
                        <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">
                            Our Best Expertise
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
                        Explore Our <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Premium Services
                        </span>
                    </h1>
                    <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl leading-relaxed">
                        Whether you are a student, a traveler, or a family, we find the perfect
                        place for you. Explore our specialized housing categories.
                    </p>
                </div>

                {/* --- Services Layout --- */}
                {/* মোবাইলে স্লাইডার স্টাইল এবং ডেক্সটপে গ্রিড */}
                <div className="flex overflow-x-auto pb-8 gap-5 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="min-w-[85vw] md:min-w-0 snap-center group relative bg-white border border-slate-100 p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                        >
                            {/* Gradient Icon Box */}
                            <div
                                className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-2xl md:rounded-[24px] flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-200 transition-transform group-hover:scale-110 group-hover:rotate-3`}
                            >
                                {service.icon}
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <span
                                    className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${service.bgLight} text-slate-600`}
                                >
                                    {service.count}
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-3">
                                {service.title}
                            </h3>

                            <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed mb-6 md:mb-8">
                                {service.description}
                            </p>

                            <Link
                                to={service.path}
                                className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-slate-900 text-white md:bg-transparent md:text-slate-900 md:p-0 rounded-xl md:rounded-0 font-black text-[11px] uppercase tracking-widest group/link transition-all active:scale-95"
                            >
                                <span className="md:border-b-2 md:border-slate-900 pb-1">
                                    Explore Now
                                </span>
                                <LuArrowRight
                                    className="ml-2 transition-transform group-hover/link:translate-x-2"
                                    size={16}
                                />
                            </Link>

                            {/* Decorative Background Element */}
                            <div className="absolute bottom-0 right-0 opacity-[0.03] text-slate-900 pointer-events-none">
                                {service.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Trust Badge (Mobile Only) --- */}
                <div className="mt-8 md:hidden bg-blue-600 p-6 rounded-[32px] text-white flex items-center justify-between overflow-hidden relative">
                    <div className="relative z-10">
                        <p className="font-bold text-lg mb-1">Need help choosing?</p>
                        <p className="text-blue-100 text-xs">Our experts are here to guide you.</p>
                    </div>
                    <button
                        type="button"
                        className="relative z-10 bg-white text-blue-600 p-3 rounded-full shadow-lg"
                    >
                        <LuArrowRight size={20} />
                    </button>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-50" />
                </div>
            </div>

            {/* CSS for hiding scrollbar */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}

export default Services;
