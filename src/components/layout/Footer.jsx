import logo from '../../assets/khoj_logo.png';
import { footerData } from '../../data/mockData';

function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-6 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo & Description */}
                    <div className="space-y-6">
                        <div className="bg-white p-2 rounded-md inline-block">
                            <img src={logo} alt="Khoj Logo" className="h-8" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                            {footerData.description}
                        </p>
                    </div>

                    {/* Dynamic Sections */}
                    {footerData.sections.map((section, idx) => (
                        <div key={idx} className="flex flex-col h-full">
                            <h4 className="text-lg font-bold mb-6 text-white">{section.title}</h4>
                            <ul className="space-y-4 mb-6">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* 'Browse All' Button - Red line indicate kora jaygay */}
                            <div className="mt-auto">
                                <button
                                    type="button"
                                    className="text-[#0095FF] text-sm font-semibold hover:underline flex items-center gap-1 transition-all"
                                >
                                    Browse All <span>→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Border and Copyright */}
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-gray-500 text-xs tracking-wide">
                        {footerData.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
