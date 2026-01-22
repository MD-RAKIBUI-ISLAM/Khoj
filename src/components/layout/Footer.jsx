import { useState } from 'react';

import logo from '../../assets/khoj_logo.png';
import { footerData } from '../../data/mockData';

function Footer() {
    // প্রতিটি সেকশনের জন্য আলাদা স্টেট মেইনটেইন করার জন্য অবজেক্ট ব্যবহার করছি
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (index) => {
        setExpandedSections((prev) => ({
            ...prev,
            [index]: !prev[index] // ক্লিক করলে ট্রু/ফলস টগল হবে
        }));
    };

    return (
        <footer className="bg-[#1A1A1A] text-white pt-10 pb-4 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <div className="bg-white p-1.5 rounded-3xl inline-block">
                            <img src={logo} alt="Khoj Logo" className="h-16 w-16" />
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                            {footerData.description}
                        </p>
                    </div>

                    {/* Dynamic Sections */}
                    {footerData.sections.map((section, idx) => {
                        const isExpanded = expandedSections[idx];
                        // শুরুতে মাত্র ৪টি লিংক দেখাবে, বাটন টিপলে সব দেখাবে
                        const displayedLinks = isExpanded
                            ? section.links
                            : section.links.slice(0, 4);

                        return (
                            <div key={idx} className="flex flex-col">
                                <h4 className="text-base font-bold mb-4 text-white">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2 mb-3">
                                    {displayedLinks.map((link, i) => (
                                        <li key={i}>
                                            <a
                                                href="#"
                                                className="text-gray-400 hover:text-white transition text-xs"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {section.links.length > 4 && (
                                    <button
                                        type="button"
                                        onClick={() => toggleSection(idx)}
                                        className="text-[#0095FF] text-xs font-semibold hover:text-blue-400 w-fit transition-all flex items-center gap-1"
                                    >
                                        {isExpanded ? 'Show Less ↑' : 'Browse All ↓'}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Border and Copyright */}
                <div className="border-t border-gray-800 pt-6">
                    <p className="text-center text-gray-500 text-[10px] tracking-wide">
                        {footerData.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
