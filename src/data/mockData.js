import centralHostelImg from '../assets/central_hostel.png';
import familyHouseImg from '../assets/Family_House_Complex_Feni.png';
import luxuryResortImg from '../assets/luxuary_resort.png';
import feniComplexImg from '../assets/Modern_Apartment_Complex_Feni.png';
import modernHostelImg from '../assets/modern_student_hostel.png';
import premiumHousingImg from '../assets/premium_student_housing.png';
import bananiApartmentImg from '../assets/Spacious_Apartment_Banani.png';
import sylhetHostelImg from '../assets/sylhet_hostel.png';

export const buttonTexts = {
    search: 'Search Now',
    bookNow: 'Confirm Booking',
    viewDetails: 'View Details'
};

export const navData = {
    logo: '/assets/khoj_logo.png',
    signInText: 'Sign In',
    links: [{ id: 1, name: 'Sign In', url: '/signin' }],
    btnText: 'List Property',
    btnUrl: '/list-property'
};

export const footerData = {
    logo: '/assets/khoj_logo.png',
    description: 'Your trusted accommodation platform for all of Bangladesh',
    sections: [
        {
            title: 'Browse',
            links: [
                'Student Housing',
                'Hostels',
                'Hotels',
                'Home Rentals',
                'Luxury Villas',
                'Guest Houses',
                'Shared Apartments'
            ]
        },
        {
            title: 'For Owners',
            links: ['List Property', 'Resources', 'Pricing', 'Owner Dashboard', 'Success Stories']
        },
        {
            title: 'Legal',
            links: [
                'Privacy Policy',
                'Terms of Service',
                'Contact Us',
                'Cookie Policy',
                'Disclaimer'
            ]
        }
    ],
    copyright: '© 2025 Khoj. All rights reserved.'
};

export const heroData = {
    badge: 'Across all of Bangladesh',
    title: 'Find Your Perfect Stay',
    description:
        'Discover verified accommodations tailored for students, tourists, families, and travelers. Browse thousands of listings with detailed information and real reviews.',
    placeholder: 'Search by a city or district...',
    stats: [
        { label: 'Districts Covered', value: '60K+' },
        { label: 'Total Listings', value: '28K+' },
        { label: 'Happy User', value: '50K+' }
    ]
};

export const statsData = [
    { id: 1, label: 'Districts Covered', value: '60K+' },
    { id: 2, label: 'Total Listings', value: '28K+' },
    { id: 3, label: 'Happy User', value: '50K+' }
];

export const categoriesData = [
    {
        id: 1,
        title: 'Students Housing & Hostels',
        description: 'Affordable accommodation near Universitys',
        listings: '12K+ listings',
        features: ['Affordable rates', 'Study rooms', 'Shared kitchens'],
        image: '/assets/students_housing.png',
        borderColor: 'border-blue-400',
        bgColor: 'bg-[#EBF5FF]',
        btnColor: 'bg-[#0095FF]'
    },
    {
        id: 2,
        title: 'Tourist Resorts and Hotels',
        description: 'Budget-friendly stays for travelers',
        listings: '4.6K+ listings',
        features: ['5-star service', 'Restaurants', 'Family Packages'],
        image: '/assets/tourist_resort.png',
        borderColor: 'border-green-400',
        bgColor: 'bg-[#F0FFF4]',
        btnColor: 'bg-[#0095FF]'
    },
    {
        id: 3,
        title: 'Home Rentals & Apartments',
        description: 'Entire apartments and houses',
        listings: '8.9K+ listings',
        features: ['Family Friendly', 'Long-term rent', 'Full Spaces'],
        image: '/assets/home_rentals.png',
        borderColor: 'border-yellow-400',
        bgColor: 'bg-[#FFF9E5]',
        btnColor: 'bg-[#0095FF]'
    }
];

export const whyChooseData = [
    {
        id: 1,
        title: 'Nationwide Coverage',
        desc: '28,000+ verified listings across all 60+ districts of Bangladesh',
        image: '/assets/nationwide_cov.png'
    },
    {
        id: 2,
        title: 'Detailed Information',
        desc: 'Complete specs: rooms, utilities, amenities, security, and real photos',
        image: '/assets/Detailed_inform.png'
    },
    {
        id: 3,
        title: 'Verified Reviews',
        desc: 'Honest ratings and reviews from real users who have stayed there',
        image: '/assets/verified_reviews.png'
    }
];

export const lpHeroData = {
    title: 'Grow Faster with Booking Khoj',
    animatedText: [
        { text: 'Student Housing', color: 'text-[#6366F1]' }, // Indigo
        { text: 'Tourist Resorts', color: 'text-[#0095FF]' }, // Blue
        { text: 'Hotels', color: 'text-[#F59E0B]' }, // Amber
        { text: 'Home Rentals', color: 'text-[#10B981]' } // Emerald
    ],
    description:
        "List your property on one of the world's fastest-growing travel platforms and reach more guests—quickly and securely.",
    registrationCard: {
        title: 'Register for free',
        features: [
            '45% of hosts get their first booking within a week',
            'Choose instant bookings or Request to Book',
            "We'll facilitate payments for you"
        ],
        btnLabel: 'Get Started Now',
        footerText: 'Already started a registration?',
        footerLink: 'Continue your registration?'
    }
};

// mockData.js e eita add korun
export const lpHostWorryData = {
    title: 'Host without worry — Booking Khoj',
    columns: [
        {
            id: 1,
            header: 'Your rental, your rules',
            iconName: 'check', // LuCheckCircle
            points: [
                { text: 'Accept or decline bookings with ', linkText: 'Request to Book', url: '#' },
                {
                    text: 'Set clear ',
                    linkText: 'house rules',
                    url: '#',
                    suffix: ' to manage guest expectations'
                },
                {
                    text: 'Communicate with guests before confirming bookings using ',
                    linkText: 'pre-booking messaging*',
                    url: '#'
                }
            ]
        },
        {
            id: 2,
            header: 'Get to know your guests',
            iconName: 'users', // FiUsers
            points: [
                { text: 'Access guest travel history insights' },
                { text: 'Make confident hosting decisions' }
            ]
        },
        {
            id: 3,
            header: 'Stay protected',
            iconName: 'shield', // FiShield
            points: [
                {
                    text: 'Up to ',
                    linkText: '€/$/£1 million liability protection',
                    url: '#',
                    suffix: ' against claims from guests and neighbours'
                },
                {
                    text: 'Included at no extra cost with ',
                    linkText: 'Partner Liability Insurance',
                    url: '#'
                },
                {
                    text: 'Optional ',
                    linkText: 'damage protection plans',
                    url: '#',
                    suffix: ' to suit your property'
                }
            ]
        }
    ],
    perfectFor: {
        title: 'Perfect for:',
        items: [
            {
                icon: '🎓',
                label: 'Student Housing',
                desc: 'Host verified students with flexible stay options'
            },
            { icon: '🏨', label: 'Hotels', desc: 'Increase occupancy with smart booking tools' },
            { icon: '🏖️', label: 'Tourist Resorts', desc: 'Reach global travelers effortlessly' },
            { icon: '🏡', label: 'Home Rentals', desc: 'Earn more from your extra space' }
        ]
    }
};

export const lpFinancesData = {
    title: 'Take Control of Your Finances with Our Payment Solution',
    btnLabel: 'Start earning Today',
    items: [
        {
            id: 1,
            title: 'Payments Made Simple for Every Type of Property',
            description:
                'We handle the entire payment process for you—so you can focus on growing your business, not managing transactions.',
            icon: 'check'
        },
        {
            id: 2,
            title: 'Faster Payouts in Select Markets',
            description:
                'Get paid quicker—payouts are sent within 24 hours after guest checkout in selected regions.',
            icon: 'check'
        },
        {
            id: 3,
            title: 'Greater Revenue Security',
            description:
                'When guests complete prepaid reservations and pay online, your payment is guaranteed.',
            icon: 'check'
        },
        {
            id: 4,
            title: 'One Solution for Multiple Properties',
            description:
                'Manage finances for student housing, resorts, hotels, and home rentals in one place with:',
            subPoints: ['Group invoicing', 'Easy reconciliation'],
            icon: 'check'
        },
        {
            id: 5,
            title: 'More Control Over Your Cash Flow',
            description:
                'Choose your preferred payout method and payout timing, based on regional availability.',
            icon: 'check'
        },
        {
            id: 6,
            title: 'Reduced Financial Risk',
            description:
                'We help you stay compliant with regulations and reduce the risk of fraud and chargebacks.',
            icon: 'check'
        }
    ]
};

export const lpGuidesAndFAQ = {
    // Simple to get started section data
    stepsSection: {
        title: 'Simple to get started and easy to stay ahead',
        btnLabel: 'Get Started Today',
        items: [
            {
                id: 1,
                iconType: 'import',
                title: 'Import Your Property Details',
                description:
                    'Quickly import your property information from other travel websites and avoid overbookings with automatic calendar sync.'
            },
            {
                id: 2,
                iconType: 'star',
                title: 'Start Strong with Review Scores',
                description:
                    'Your existing review scores from other platforms are displayed on your listing from day one—before your first guests leave reviews.'
            },
            {
                id: 3,
                iconType: 'market',
                title: 'Stand Out in the Market',
                description:
                    'The “New to the platform” label helps your property get noticed in search results.'
            }
        ]
    },
    // Your questions answered section data
    faqSection: {
        title: 'Your questions answered',
        btnLabel: 'Start Welcoming Guests',
        questions: [
            {
                id: 1,
                q: 'What happens if my property is damaged by a guest?',
                a: 'Property owners can request damage deposits from guests. Deposits help cover any potential damage caused by a guest, offering some reassurance that your property will be treated respectfully. If anything goes wrong, it can be reported to our team through our misconduct reporting feature.'
            },
            {
                id: 2,
                q: 'When will my property go online?',
                a: 'Once you’ve finished creating your listing, you can open your property for bookings on our site. We may ask you to verify your property before you can start accepting bookings, but you can use this time to get familiar with our extranet and get prepared for your first guests.'
            }
        ]
    }
};

export const studentHostelsData = [
    {
        id: 1,
        title: 'Modern Student Hostel-Dhanmondi',
        location: 'Dhanmondi, Dhaka',
        rating: 4.5,
        reviews: 128, // total review count
        price: '12,000BDT', // monthly rent
        rooms: 4, // available rooms
        washrooms: 2,
        capacity: '2-3 People per room',

        // ১. এক্সট্রা কস্ট / ইউটিলিটি (Sidebar এর জন্য)
        utilities: {
            current: '800BDT',
            gas: '500BDT',
            water: '200BDT'
        },
        totalMonthlyCost: '13,500BDT',

        // ২. ডেসক্রিপশন
        description:
            'A comfortable and affordable student hostel located in the heart of Dhanmondi. Perfect for university students seeking quality accommodation with all necessary amenities. The hostel features a common study area, high-speed Wi-Fi throughout, and friendly staff.',

        // ৩. বিস্তারিত এ্যামেনিটিস (Tabs এর জন্য)
        amenities: {
            connectivity: ['High speed Wifi', '24/7 Internet'],
            facilities: [
                'Common Study Area',
                'Laundry Service',
                'Shared Kitchen',
                'Hot Water Facility'
            ],
            safety: ['24/7 Security', 'Safety Deposit Box', 'CCTV Camera'],
            leisure: ['Television Area', 'Outdoor Space', 'Reading Room']
        },

        // ৪. হোস্টেল ইনফরমেশন ও টার্মস
        hostelInfo: {
            gateHours: '6 AM - 12 AM (Late entry available with notice)',
            security: 'Professional security guard on duty 24/7',
            cleaning: 'Daily room cleaning (Monday - Saturday)',
            cookingFacilities: 'Shared kitchen with cooking facilities'
        },
        terms: [
            'Minimum 6 months stay',
            'One month security deposit',
            'No smoking inside rooms',
            'Quiet hours after 11 PM',
            'Guests allowed on weekends only'
        ],

        // ৫. রুম এভেইল্যাবিলিটি (আগের ডাটা বজায় রাখা হয়েছে)
        roomAvailability: [
            { room: 'Room 101', status: '1 free seat out of 3' },
            { room: 'Room 102', status: '0 free seat out of 3' },
            { room: 'Room 103', status: '1 free seat out of 2' },
            { room: 'Room 104', status: '3 free seat out of 3' }
        ],

        // ৬. ইউজার রিভিউ (ইমেজে যেমন দেখা যাচ্ছে)
        userReviews: [
            {
                id: 1,
                user: 'Fatima Khan',
                date: '2 weeks ago',
                rating: 5,
                comment:
                    'Excellent accommodation for students. The WiFi is very fast and the common study area is great for group projects.'
            },
            {
                id: 2,
                user: 'Karim Ahmad',
                date: '1 month ago',
                rating: 4,
                comment:
                    'Great value for money. Location is perfect for university students. Only issue is sometimes hot water pressure is low.'
            }
        ],

        tags: ['High Speed WiFi', 'Laundry Service', 'AC Room', '24/7 Security'],
        image: modernHostelImg,
        // মাল্টিপল ইমেজ থাকলে স্লাইডারের জন্য
        additionalImages: [modernHostelImg, premiumHousingImg, modernHostelImg],
        mapLocation: 'https://www.google.com/maps/search/Dhanmondi+Student+Hostel+Dhaka'
    },
    {
        id: 2,
        title: 'Premium Student Housing - Mirpur',
        location: 'Mirpur-10, Dhaka',
        rating: 4.8,
        reviews: 256,
        price: '10,000BDT',
        rooms: 6,
        washrooms: 2,
        capacity: '2-4 People per room',
        utilities: { current: '1200BDT', gas: '400BDT', water: '200BDT' },
        totalMonthlyCost: '11,800BDT',
        description:
            'Experience premium living in the heart of Mirpur. Our facility provides a studious environment with top-notch security and modern amenities for serious students.',
        roomAvailability: [
            { room: 'Room 301', status: '1 free seat out of 4' },
            { room: 'Room 302', status: '2 free seat out of 4' },
            { room: 'Room 303', status: '1 free seat out of 2' },
            { room: 'Room 304', status: '4 free seat out of 4' }
        ],
        amenities: {
            connectivity: ['High speed Wifi', '24/7 Internet'],
            facilities: ['Library Access', 'Laundry Service', 'AC Rooms', 'Shared Kitchen'],
            safety: ['24/7 Security', 'CCTV Monitoring'],
            leisure: ['Indoor Games', 'Common TV Room']
        },
        hostelInfo: {
            gateHours: '5:30 AM - 11:30 PM',
            security: '24/7 Guard Service',
            cleaning: 'Daily Cleaning',
            cookingFacilities: 'Full Kitchen Available'
        },
        terms: ['1 Month Advance', 'Quiet Hours: 11 PM', 'No Outside Guests after 8 PM'],
        userReviews: [
            {
                id: 1,
                user: 'Sabbir Hossain',
                date: '1 month ago',
                rating: 5,
                comment: 'Best hostel in Mirpur area.'
            }
        ],
        tags: ['High Speed WiFi', 'Laundry Service', 'AC Room', '24/7 Security'],
        image: premiumHousingImg,
        additionalImages: [premiumHousingImg, modernHostelImg, familyHouseImg],
        mapLocation:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.328233583151!2d90.3665091!3d23.8069245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee082232!2sMirpur%2010%20Roundabout!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd'
    },
    {
        id: 3,
        title: 'Central Hostel - Chittagong',
        location: 'GEC Circle, Chittagong',
        rating: 4.3,
        reviews: 92,
        price: '10,000BDT',
        rooms: 5,
        washrooms: 2,
        capacity: '3-4 People per room',
        utilities: { current: '700BDT', gas: '350BDT', water: '180BDT' },
        totalMonthlyCost: '11,230BDT',
        description:
            'Conveniently located near GEC Circle, providing easy access to major universities in Chittagong. Safe, clean, and affordable.',
        roomAvailability: [
            { room: 'Room 501', status: '1 free seat out of 4' },
            { room: 'Room 502', status: '2 free seat out of 4' },
            { room: 'Room 503', status: '3 free seat out of 3' },
            { room: 'Room 504', status: '2 free seat out of 4' }
        ],
        amenities: {
            connectivity: ['Standard WiFi'],
            facilities: ['Basic Kitchen', 'Hot Water', 'Study Room'],
            safety: ['24/7 Guard'],
            leisure: ['Rooftop Access']
        },
        hostelInfo: {
            gateHours: '6 AM - 11 PM',
            security: 'Manual Guard',
            cleaning: 'Weekly Deep Clean',
            cookingFacilities: 'Basic Stove'
        },
        terms: ['Identity Verification Required', 'No Smoking', 'Rent due by 5th of month'],
        userReviews: [
            {
                id: 1,
                user: 'Anika Tasnim',
                date: '3 weeks ago',
                rating: 4,
                comment: 'Good location but kitchen could be cleaner.'
            }
        ],
        tags: ['WiFi', 'Hot Water', 'Basic Kitchen', '24/7 Security'],
        image: centralHostelImg,
        additionalImages: [centralHostelImg],
        mapLocation: 'https://www.google.com/maps/search/Student+Hostel+GEC+Chittagong'
    },
    {
        id: 4,
        title: 'Sylhet Elite Student Home',
        location: 'Zindabazar, Sylhet',
        rating: 4.6,
        reviews: 75,
        price: '9,500BDT',
        rooms: 3,
        washrooms: 2,
        capacity: '2-3 People per room',
        utilities: { current: '800BDT', gas: '300BDT', water: '150BDT' },
        totalMonthlyCost: '10,750BDT',
        description:
            'A home away from home in Sylhet. We focus on providing a quiet and elite environment for students who want to focus on their studies.',
        roomAvailability: [
            { room: 'Room 401', status: '2 free seat out of 4' },
            { room: 'Room 402', status: '1 free seat out of 3' },
            { room: 'Room 403', status: '3 free seat out of 3' }
        ],
        amenities: {
            connectivity: ['Fiber Optic WiFi'],
            facilities: ['Library', 'Dining Hall', 'Prayer Room'],
            safety: ['24/7 Security'],
            leisure: ['Newspaper/Magazine Area']
        },
        hostelInfo: {
            gateHours: '5 AM - 12 AM',
            security: 'CCTV & Guard',
            cleaning: 'Daily Room Service',
            cookingFacilities: 'Canteen Service Available'
        },
        terms: ['Students Only', 'No Noise after 10 PM', 'Security Deposit Required'],
        userReviews: [
            {
                id: 1,
                user: 'Rashed Ahmed',
                date: '2 months ago',
                rating: 5,
                comment: 'Very quiet place, perfect for medical students.'
            }
        ],
        tags: ['WiFi', 'Library', 'Dining Hall', '24/7 Guard'],
        image: sylhetHostelImg,
        additionalImages: [sylhetHostelImg],
        mapLocation: 'https://www.google.com/maps/search/Student+Hostel+Zindabazar+Sylhet'
    }
];

export const hotelResortData = [
    {
        id: 1,
        title: "Luxuary 5- Star Resort - Cox's Bazar", // Replaced
        location: "Cox's Bazar", // Replaced
        rating: 4.5,
        reviews: 128,
        price: '8,000 BDT',
        roomStats: { single: 14, double: 20, deluxe: 10 },
        availability: [
            'Single: 14 available, Next free: 5 Dec, 2025',
            'Double: 20 available, Next free: 5 Dec, 2025',
            'Deluxe: 10 available, Next free: 5 Dec, 2025'
        ],
        tags: [
            'Free WiFi',
            'Swimming Pool',
            'Beach Access',
            'Restaurant & Bar',
            'Spa',
            '24/7 Security'
        ],
        amenities: {
            connectivity: {
                title: 'Connectivity',
                items: [
                    {
                        name: 'Free High-Speed WiFi',
                        desc: 'Available in all rooms and public areas',
                        icon: 'LuWifi'
                    },
                    {
                        name: 'Business Center',
                        desc: 'Equipped with printers and workstations',
                        icon: 'LuPcCase'
                    }
                ]
            },
            facilities: {
                title: 'Hotel Facilities',
                items: [
                    {
                        name: 'Room Service 24/7',
                        desc: 'Delicious meals delivered to your door',
                        icon: 'LuConciergeBell'
                    },
                    {
                        name: 'Restaurant & Bar',
                        desc: 'Cuisine from around the world',
                        icon: 'LuUtensils'
                    },
                    {
                        name: 'Conference Rooms',
                        desc: 'State-of-the-art meeting spaces',
                        icon: 'LuPresentation'
                    },
                    {
                        name: 'Parking Available',
                        desc: 'Secure on-site parking for guests',
                        icon: 'LuCar'
                    }
                ]
            },
            leisure: {
                title: 'Leisure & Wellness',
                items: [
                    {
                        name: 'Swimming Pool',
                        desc: 'Infinity pool with a mountain view',
                        icon: 'LuWaves'
                    },
                    {
                        name: 'Spa & Wellness Center',
                        desc: 'Professional massage and sauna',
                        icon: 'LuFlower2'
                    },
                    {
                        name: 'Fitness Center',
                        desc: 'Modern equipment and personal trainers',
                        icon: 'LuDumbbell'
                    },
                    {
                        name: 'Beach Access',
                        desc: 'Private path to the sandy shore',
                        icon: 'LuPalmtree'
                    }
                ]
            },
            safety: {
                title: 'Safety & Security',
                items: [
                    {
                        name: '24/7 Security',
                        desc: 'CCTV surveillance and professional guards',
                        icon: 'LuShieldCheck'
                    },
                    {
                        name: 'Fire Safety',
                        desc: 'Smoke detectors and extinguishers in all areas',
                        icon: 'LuFlame'
                    }
                ]
            }
        },
        meals: {
            breakfast: {
                status: 'Free',
                type: 'Continental & Local Buffet',
                time: '7:30 AM - 10:30 AM',
                description: 'Fresh fruits, juices, eggs, and traditional delicacies.',
                icon: 'LuCoffee'
            },
            lunch: {
                status: 'Available (Paid)',
                type: 'A La Carte / Set Menu',
                time: '1:00 PM - 3:30 PM',
                description: 'Authentic Bengali cuisine and International dishes.',
                icon: 'LuUtensils'
            },
            dinner: {
                status: 'Available (Paid)',
                type: 'Fine Dining / BBQ',
                time: '7:30 PM - 10:30 PM',
                description: 'Special rooftop BBQ and candle-light dinner options.',
                icon: 'LuMoon'
            },
            allDayDining: {
                status: 'Available',
                type: 'Snacks & Beverages',
                time: '24/7',
                description: 'Room service and café available for quick bites.',
                icon: 'LuPizza'
            }
        },
        description:
            "Experience luxury at our beachfront resort in Cox's Bazar. With stunning ocean views, world-class amenities, and exceptional service, we offer the perfect getaway destination. Our resort features multiple restaurants, spa facilities, and direct beach access.",
        policies: {
            checkIn: {
                time: '2:00 PM',
                note: 'Early check-in subject to availability',
                icon: 'LuClock'
            },
            checkOut: {
                time: '12:00 PM',
                note: 'Express check-out available',
                icon: 'LuLogOut'
            },
            cancellation: {
                title: 'Flexible Cancellation',
                description: 'Full refund if cancelled at least 24 hours before check-in date.',
                isFree: true
            },
            childPolicy: {
                title: 'Children & Extra Beds',
                description:
                    'Children under 5 stay for free using existing bedding. Extra bed incurs additional charges.'
            },
            parking: {
                status: 'Complimentary',
                type: 'On-site Secure Parking',
                note: 'Valet parking available'
            },
            smoking: {
                policy: 'Non-smoking Rooms',
                description:
                    'Smoking is strictly prohibited inside rooms. Designated smoking zones are available outdoors.'
            },
            pets: {
                status: 'Not Allowed',
                description: 'To maintain a hypoallergenic environment, pets are not permitted.'
            },
            securityDeposit: {
                status: 'Required',
                amount: 'BDT 2,000 (Refundable)',
                note: 'Collected at check-in for incidental charges'
            }
        },
        image: luxuryResortImg, // Replaced
        additionalImages: [luxuryResortImg, premiumHousingImg, centralHostelImg],
        mapLocation: 'https://www.google.com/maps/search/Student+Hostel+Zindabazar+Sylhet' // Replaced
    },
    {
        id: 2,
        title: 'Premium Hotels - Mirpur', // Replaced
        location: 'Mirpur-10, Dhaka', // Replaced
        rating: 4.5,
        reviews: 128,
        price: '8,000 BDT',
        roomStats: { single: 14, double: 20, deluxe: 10 },
        availability: [
            'Single: 14 available, Next free: 5 Dec, 2025',
            'Double: 20 available, Next free: 5 Dec, 2025',
            'Deluxe: 10 available, Next free: 5 Dec, 2025'
        ],
        tags: [
            'Free WiFi',
            'Swimming Pool',
            'Beach Access',
            'Restaurant & Bar',
            'Spa',
            '24/7 Security'
        ],
        amenities: {
            connectivity: {
                title: 'Connectivity',
                items: [
                    {
                        name: 'Free High-Speed WiFi',
                        desc: 'Available in all rooms and public areas',
                        icon: 'LuWifi'
                    },
                    {
                        name: 'Business Center',
                        desc: 'Equipped with printers and workstations',
                        icon: 'LuPcCase'
                    }
                ]
            },
            facilities: {
                title: 'Hotel Facilities',
                items: [
                    {
                        name: 'Room Service 24/7',
                        desc: 'Delicious meals delivered to your door',
                        icon: 'LuConciergeBell'
                    },
                    {
                        name: 'Restaurant & Bar',
                        desc: 'Cuisine from around the world',
                        icon: 'LuUtensils'
                    },
                    {
                        name: 'Conference Rooms',
                        desc: 'State-of-the-art meeting spaces',
                        icon: 'LuPresentation'
                    },
                    {
                        name: 'Parking Available',
                        desc: 'Secure on-site parking for guests',
                        icon: 'LuCar'
                    }
                ]
            },
            leisure: {
                title: 'Leisure & Wellness',
                items: [
                    {
                        name: 'Swimming Pool',
                        desc: 'Infinity pool with a mountain view',
                        icon: 'LuWaves'
                    },
                    {
                        name: 'Spa & Wellness Center',
                        desc: 'Professional massage and sauna',
                        icon: 'LuFlower2'
                    },
                    {
                        name: 'Fitness Center',
                        desc: 'Modern equipment and personal trainers',
                        icon: 'LuDumbbell'
                    },
                    {
                        name: 'Beach Access',
                        desc: 'Private path to the sandy shore',
                        icon: 'LuPalmtree'
                    }
                ]
            },
            safety: {
                title: 'Safety & Security',
                items: [
                    {
                        name: '24/7 Security',
                        desc: 'CCTV surveillance and professional guards',
                        icon: 'LuShieldCheck'
                    },
                    {
                        name: 'Fire Safety',
                        desc: 'Smoke detectors and extinguishers in all areas',
                        icon: 'LuFlame'
                    }
                ]
            }
        },
        meals: {
            breakfast: {
                status: 'Free',
                type: 'Continental & Local Buffet',
                time: '7:30 AM - 10:30 AM',
                description: 'Fresh fruits, juices, eggs, and traditional delicacies.',
                icon: 'LuCoffee'
            },
            lunch: {
                status: 'Available (Paid)',
                type: 'A La Carte / Set Menu',
                time: '1:00 PM - 3:30 PM',
                description: 'Authentic Bengali cuisine and International dishes.',
                icon: 'LuUtensils'
            },
            dinner: {
                status: 'Available (Paid)',
                type: 'Fine Dining / BBQ',
                time: '7:30 PM - 10:30 PM',
                description: 'Special rooftop BBQ and candle-light dinner options.',
                icon: 'LuMoon'
            },
            allDayDining: {
                status: 'Available',
                type: 'Snacks & Beverages',
                time: '24/7',
                description: 'Room service and café available for quick bites.',
                icon: 'LuPizza'
            }
        },
        description:
            "Experience luxury at our beachfront resort in Cox's Bazar. With stunning ocean views, world-class amenities, and exceptional service, we offer the perfect getaway destination. Our resort features multiple restaurants, spa facilities, and direct beach access.",
        policies: {
            checkIn: {
                time: '2:00 PM',
                note: 'Early check-in subject to availability',
                icon: 'LuClock'
            },
            checkOut: {
                time: '12:00 PM',
                note: 'Express check-out available',
                icon: 'LuLogOut'
            },
            cancellation: {
                title: 'Flexible Cancellation',
                description: 'Full refund if cancelled at least 24 hours before check-in date.',
                isFree: true
            },
            childPolicy: {
                title: 'Children & Extra Beds',
                description:
                    'Children under 5 stay for free using existing bedding. Extra bed incurs additional charges.'
            },
            parking: {
                status: 'Complimentary',
                type: 'On-site Secure Parking',
                note: 'Valet parking available'
            },
            smoking: {
                policy: 'Non-smoking Rooms',
                description:
                    'Smoking is strictly prohibited inside rooms. Designated smoking zones are available outdoors.'
            },
            pets: {
                status: 'Not Allowed',
                description: 'To maintain a hypoallergenic environment, pets are not permitted.'
            },
            securityDeposit: {
                status: 'Required',
                amount: 'BDT 2,000 (Refundable)',
                note: 'Collected at check-in for incidental charges'
            }
        },
        image: premiumHousingImg, // Replaced
        additionalImages: [premiumHousingImg, luxuryResortImg, centralHostelImg],
        mapLocation:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.328233583151!2d90.3665091!3d23.8069245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee082232!2sMirpur%2010%20Roundabout!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd' // Replaced
    },
    {
        id: 3,
        title: 'Central Hostel - Chittagong', // Replaced
        location: 'GEC Circle, Chittagong', // Replaced
        rating: 4.5,
        reviews: 128,
        price: '8,000 BDT',
        roomStats: { single: 14, double: 20, deluxe: 10 },
        availability: [
            'Single: 14 available, Next free: 5 Dec, 2025',
            'Double: 20 available, Next free: 5 Dec, 2025',
            'Deluxe: 10 available, Next free: 5 Dec, 2025'
        ],
        tags: [
            'Free WiFi',
            'Swimming Pool',
            'Beach Access',
            'Restaurant & Bar',
            'Spa',
            '24/7 Security'
        ],
        amenities: {
            connectivity: {
                title: 'Connectivity',
                items: [
                    {
                        name: 'Free High-Speed WiFi',
                        desc: 'Available in all rooms and public areas',
                        icon: 'LuWifi'
                    },
                    {
                        name: 'Business Center',
                        desc: 'Equipped with printers and workstations',
                        icon: 'LuPcCase'
                    }
                ]
            },
            facilities: {
                title: 'Hotel Facilities',
                items: [
                    {
                        name: 'Room Service 24/7',
                        desc: 'Delicious meals delivered to your door',
                        icon: 'LuConciergeBell'
                    },
                    {
                        name: 'Restaurant & Bar',
                        desc: 'Cuisine from around the world',
                        icon: 'LuUtensils'
                    },
                    {
                        name: 'Conference Rooms',
                        desc: 'State-of-the-art meeting spaces',
                        icon: 'LuPresentation'
                    },
                    {
                        name: 'Parking Available',
                        desc: 'Secure on-site parking for guests',
                        icon: 'LuCar'
                    }
                ]
            },
            leisure: {
                title: 'Leisure & Wellness',
                items: [
                    {
                        name: 'Swimming Pool',
                        desc: 'Infinity pool with a mountain view',
                        icon: 'LuWaves'
                    },
                    {
                        name: 'Spa & Wellness Center',
                        desc: 'Professional massage and sauna',
                        icon: 'LuFlower2'
                    },
                    {
                        name: 'Fitness Center',
                        desc: 'Modern equipment and personal trainers',
                        icon: 'LuDumbbell'
                    },
                    {
                        name: 'Beach Access',
                        desc: 'Private path to the sandy shore',
                        icon: 'LuPalmtree'
                    }
                ]
            },
            safety: {
                title: 'Safety & Security',
                items: [
                    {
                        name: '24/7 Security',
                        desc: 'CCTV surveillance and professional guards',
                        icon: 'LuShieldCheck'
                    },
                    {
                        name: 'Fire Safety',
                        desc: 'Smoke detectors and extinguishers in all areas',
                        icon: 'LuFlame'
                    }
                ]
            }
        },
        meals: {
            breakfast: {
                status: 'Free',
                type: 'Continental & Local Buffet',
                time: '7:30 AM - 10:30 AM',
                description: 'Fresh fruits, juices, eggs, and traditional delicacies.',
                icon: 'LuCoffee'
            },
            lunch: {
                status: 'Available (Paid)',
                type: 'A La Carte / Set Menu',
                time: '1:00 PM - 3:30 PM',
                description: 'Authentic Bengali cuisine and International dishes.',
                icon: 'LuUtensils'
            },
            dinner: {
                status: 'Available (Paid)',
                type: 'Fine Dining / BBQ',
                time: '7:30 PM - 10:30 PM',
                description: 'Special rooftop BBQ and candle-light dinner options.',
                icon: 'LuMoon'
            },
            allDayDining: {
                status: 'Available',
                type: 'Snacks & Beverages',
                time: '24/7',
                description: 'Room service and café available for quick bites.',
                icon: 'LuPizza'
            }
        },
        description:
            "Experience luxury at our beachfront resort in Cox's Bazar. With stunning ocean views, world-class amenities, and exceptional service, we offer the perfect getaway destination. Our resort features multiple restaurants, spa facilities, and direct beach access.",
        policies: {
            checkIn: {
                time: '2:00 PM',
                note: 'Early check-in subject to availability',
                icon: 'LuClock'
            },
            checkOut: {
                time: '12:00 PM',
                note: 'Express check-out available',
                icon: 'LuLogOut'
            },
            cancellation: {
                title: 'Flexible Cancellation',
                description: 'Full refund if cancelled at least 24 hours before check-in date.',
                isFree: true
            },
            childPolicy: {
                title: 'Children & Extra Beds',
                description:
                    'Children under 5 stay for free using existing bedding. Extra bed incurs additional charges.'
            },
            parking: {
                status: 'Complimentary',
                type: 'On-site Secure Parking',
                note: 'Valet parking available'
            },
            smoking: {
                policy: 'Non-smoking Rooms',
                description:
                    'Smoking is strictly prohibited inside rooms. Designated smoking zones are available outdoors.'
            },
            pets: {
                status: 'Not Allowed',
                description: 'To maintain a hypoallergenic environment, pets are not permitted.'
            },
            securityDeposit: {
                status: 'Required',
                amount: 'BDT 2,000 (Refundable)',
                note: 'Collected at check-in for incidental charges'
            }
        },
        image: centralHostelImg, // Replaced
        additionalImages: [centralHostelImg, premiumHousingImg, luxuryResortImg],
        mapLocation: 'https://www.google.com/maps/search/Student+Hostel+GEC+Chittagong' // Replaced
    }
];
export const homeRentalsData = [
    {
        id: 1,
        title: 'Spacious Apartment - Banani',
        location: 'Banani, Dhaka',
        rating: 4.9,
        reviews: 128,
        price: '35,000BDT',
        size: '1,500 sqft',
        rooms: 3,
        baths: 2,
        balcony: 2,
        direction: 'South-East',
        security: 'High - 24/7 Guard',
        flatAvailability: [
            { id: 'Flat 1A', status: 'Vacant' },
            { id: 'Flat 2A', status: 'Vacant' },
            { id: 'Flat 3A', status: 'Vacant' },
            { id: 'Flat 1B', status: 'Booked till Feb, 2026' },
            { id: 'Flat 2B', status: 'Booked till Apr, 2026' }
        ],
        tags: ['Balcony', 'Parking', 'Garden Access', 'Elevator'],
        features: ['Balcony', 'Parking', 'Garden Access'],
        image: bananiApartmentImg,
        mapLocation: 'https://www.google.com/maps?q=Banani+Dhaka'
    },
    {
        id: 2,
        title: 'Modern Apartment Complex - Feni City',
        location: 'Feni City, Feni',
        rating: 4.8,
        reviews: 256,
        price: '28,000BDT',
        size: '900 sqft',
        rooms: 2,
        baths: 2,
        balcony: 1,
        direction: 'North-West',
        security: 'CCTV - 24/7 Security',
        flatAvailability: [
            { id: 'Flat 101', status: 'Booked till Mar, 2026' },
            { id: 'Flat 103', status: 'Booked till Jan, 2026' },
            { id: 'Flat 202', status: 'Vacant' },
            { id: 'Flat 102', status: 'Vacant' },
            { id: 'Flat 201', status: 'Vacant' },
            { id: 'Flat 203', status: 'Booked till Feb, 2026' }
        ],
        tags: ['Balcony', 'Common Garden', 'Security', 'Gas Connection'],
        features: ['Balcony', 'Common Garden', 'Security'],
        image: feniComplexImg,
        mapLocation: 'https://www.google.com/maps?q=Feni+City+Feni'
    },
    {
        id: 3,
        title: 'Family House Complex - Feni',
        location: 'GEC, Feni',
        rating: 4.3,
        reviews: 92,
        price: '28,000BDT',
        size: '1500 sqft',
        rooms: 2,
        baths: 2,
        balcony: 1,
        direction: 'South-East',
        security: 'High - 24/7 Guard',
        flatAvailability: [
            { id: 'Flat A-1', status: 'Vacant' },
            { id: 'Flat B-1', status: 'Booked till Feb, 2026' },
            { id: 'Flat C-1', status: 'Vacant' },
            { id: 'Flat A-2', status: 'Booked till Mar, 2026' },
            { id: 'Flat B-2', status: 'Vacant' }
        ],
        tags: ['Large Balcony', 'Garden', 'Parking', 'Pet Friendly'],
        features: ['Large Balcony', 'Garden', 'Parking'],
        image: familyHouseImg,
        mapLocation: 'https://www.google.com/maps?q=GEC+Feni'
    }
];
