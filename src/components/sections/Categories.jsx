import { useNavigate } from 'react-router-dom';

import homeImg from '../../assets/home_rentals.png';
import studentImg from '../../assets/students_housing.png';
import touristImg from '../../assets/tourist_resort.png';
import { categoriesData, statsData } from '../../data/mockData';

const categoryImages = [studentImg, touristImg, homeImg];

function Categories() {
    const navigate = useNavigate();

    const handleBrowse = (cat) => {
        const title = cat.title.toLowerCase(); // ছোট হাতের অক্ষরে রূপান্তর করে চেক করা নিরাপদ

        if (title.includes('student') || cat.id === 1) {
            navigate('/student-housing');
        } else if (
            title.includes('tourist') ||
            title.includes('resort') ||
            title.includes('hotel') ||
            cat.id === 2
        ) {
            navigate('/hotel-resort');
        } else if (
            title.includes('home') ||
            title.includes('rental') ||
            title.includes('apartment') ||
            cat.id === 3
        ) {
            navigate('/home-rentals');
        } else {
            console.log(`${cat.title} clicked but no route found`);
        }
    };

    return (
        <section className="py-16 px-6 lg:px-24 bg-white">
            <div className="max-w-[1440px] mx-auto">
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className="group relative bg-white p-10 rounded-2xl border border-gray-100 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0095FF] rounded-2xl transition-all duration-500" />
                            <h2 className="text-4xl font-extrabold text-[#0095FF] mb-2 relative z-10 transition-transform duration-300 group-hover:scale-110">
                                {stat.value}
                            </h2>
                            <p className="text-gray-600 font-bold text-lg relative z-10">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Category Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {categoriesData.map((cat, index) => (
                        <div
                            key={cat.id}
                            className={`${cat.bgColor} border-2 ${cat.borderColor} rounded-[40px] overflow-hidden flex flex-col shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]`}
                        >
                            <div className="h-60 overflow-hidden p-5">
                                <img
                                    src={categoryImages[index]}
                                    alt={cat.title}
                                    className="w-full h-full object-cover rounded-3xl transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            <div className="p-8 pt-2 flex-grow flex flex-col">
                                <h3 className="text-2xl font-black text-[#1A1A1A] mb-2 leading-tight">
                                    {cat.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium mb-1">
                                    {cat.description}
                                </p>
                                <p className="text-[#0095FF] font-extrabold text-base mb-5">
                                    {cat.listings}
                                </p>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {cat.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="text-gray-700 text-sm flex items-center gap-3 font-medium"
                                        >
                                            <span className="w-1.5 h-1.5 bg-[#0095FF] rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex justify-center mt-auto">
                                    <button
                                        type="button"
                                        onClick={() => handleBrowse(cat)} // পুরো অবজেক্ট পাস করা ভালো
                                        className="w-[70%] bg-[#0095FF] text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                                    >
                                        Browse
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;
