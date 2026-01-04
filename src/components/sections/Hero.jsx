import hero1 from '../../assets/hero-1.png'; // No. 1 (Bedroom)
import hero2 from '../../assets/hero-2.png'; // No. 4 (Men making bed)
import hero3 from '../../assets/hero-3.png'; // No. 5 (Balcony)
import hero5 from '../../assets/hero-4.png'; // No. 2 (Girl at desk)
import hero4 from '../../assets/hero-5.png'; // No. 3 (Sofa/Living)

function Hero() {
    return (
        <section className="bg-gradient-to-r from-[#CADCFF] via-[#E2E8FF] to-[#A5C9FF] py-16 lg:py-24 px-6 lg:px-20 overflow-hidden min-h-[750px] flex items-center">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Content - Created as per image_013d0d.jpg */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-white border-[3px] border-[#0095FF] px-8 py-3 rounded-full shadow-md">
                        <span className="w-3.5 h-3.5 bg-[#0095FF] rounded-full shadow-[0_0_8px_rgba(0,149,255,0.8)]" />
                        <span className="text-[#0095FF] text-xl font-extrabold tracking-tight">
                            Accrose all of Bangladesh
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-7xl lg:text-[105px] font-serif font-medium text-[#1A1A1A] leading-[1] tracking-tight">
                        Find Your Perfect Stay
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium opacity-90">
                        Discover verified accommodations tailored for students, tourists, families,
                        and travelers. Browse thousands of listings with detailed information and
                        real reviews.
                    </p>

                    {/* Search Bar - Precise Alignment as per Image */}
                    <div className="w-full max-w-2xl bg-white p-3 rounded-[35px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border-2 border-white flex items-center gap-4">
                        <button
                            type="button"
                            className="bg-[#0095FF] text-white px-12 py-5 rounded-[28px] font-black text-xl hover:bg-blue-600 transition-all active:scale-95 shadow-lg"
                        >
                            Search
                        </button>
                        <input
                            type="text"
                            placeholder="Search by a city or distric..."
                            className="flex-1 px-4 outline-none text-[#1A1A1A] text-xl font-semibold placeholder-gray-400 bg-transparent"
                        />
                    </div>
                </div>

                {/* Right Content - Collage (Kept as per your instruction) */}
                <div className="relative h-[550px] w-full flex items-center justify-end mt-12 lg:mt-0">
                    <div className="relative w-full h-full max-w-[580px]">
                        {/* No. 1: Bedroom */}
                        <div className="absolute top-[3%] left-[10%] w-[50%] z-10">
                            <img
                                src={hero1}
                                alt="Bedroom"
                                className="rounded-xl shadow-lg border-2 border-black object-cover h-[210px] w-full"
                            />
                        </div>

                        {/* No. 4: Men making bed */}
                        <div className="absolute top-0 right-0 w-[50%] z-40">
                            <img
                                src={hero2}
                                alt="Hostel"
                                className="rounded-xl shadow-md border-2 border-black object-cover h-[210px] w-full"
                            />
                        </div>

                        {/* No. 3: Living Room */}
                        <div className="absolute top-[28%] right-[5%] w-[55%] z-30">
                            <img
                                src={hero4}
                                alt="Living Room"
                                className="rounded-xl shadow-xl border-2 border-black object-cover h-[200px] w-full"
                            />
                        </div>

                        {/* No. 5: Balcony */}
                        <div className="absolute bottom-[15%] left-[5%] w-[45%] z-50">
                            <img
                                src={hero3}
                                alt="Balcony"
                                className="rounded-xl shadow-2xl border-2 border-black object-cover h-[230px] w-full"
                            />
                        </div>

                        {/* No. 2: Girl at desk */}
                        <div className="absolute bottom-[10%] right-[-4%] w-[52%] z-20">
                            <img
                                src={hero5}
                                alt="Study Area"
                                className="rounded-xl shadow-xl border-2 border-black object-cover h-[210px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
