import detailedImg from '../../assets/Detailed_information.png';
import nationwideImg from '../../assets/nationwide_coverage.png';
import verifiedImg from '../../assets/verified_reviews.png';
import { whyChooseData } from '../../data/mockData';

const featureImages = [nationwideImg, detailedImg, verifiedImg];

function WhyChoose() {
    return (
        <section className="py-20 px-6 lg:px-24 bg-[#F8FAFC]">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-extrabold text-[#0095FF] text-center mb-16">
                    Why Choose Khoj?
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
                    {whyChooseData.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
                        >
                            <div className="w-full h-48 mb-8 overflow-hidden rounded-2xl">
                                <img
                                    src={featureImages[index]}
                                    alt={item.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section - Ready to find your stay? */}
                <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-[#A855F7] via-[#6366F1] to-[#3B82F6] p-12 lg:p-20 text-center">
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -ml-20 -mb-20" />

                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                            Ready to find your stay?
                        </h2>
                        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                            Start searching now or list your property to reach thousands of renters
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                type="button"
                                className="bg-white text-[#0095FF] px-10 py-4 rounded-2xl font-bold text-base hover:bg-gray-100 transition-all shadow-lg active:scale-95"
                            >
                                Start Searching
                            </button>
                            <button
                                type="button"
                                className="bg-[#6366F1] text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-base hover:bg-[#4F46E5] transition-all shadow-lg active:scale-95"
                            >
                                List Your Property
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
