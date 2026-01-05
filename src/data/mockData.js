import centralHostelImg from '../assets/central_hostel.png';
import luxuryResortImg from '../assets/luxuary_resort.png';
import modernHostelImg from '../assets/modern_student_hostel.png';
import premiumHousingImg from '../assets/premium_student_housing.png';
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
        title: 'Home Rentals',
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
        reviews: 128,
        price: '12,000BDT',
        rooms: 4,
        washrooms: 2,
        capacity: '2-3 People per room',
        roomAvailability: [
            'Room 101: 1 free seat out of 3',
            'Room 102: 0 free seat out of 3',
            'Room 103: 1 free seat out of 2',
            'Room 104: 3 free seat out of 3'
        ],
        tags: ['High Speed WiFi', 'Laundry Service', 'AC Room', '24/7 Security'],
        utilities: { current: '1000BDT', gas: '500BDT', water: '250BDT' },
        image: modernHostelImg,
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
        roomAvailability: [
            'Room 301: 1 free seat out of 4',
            'Room 302: 2 free seat out of 4',
            'Room 303: 1 free seat out of 2',
            'Room 304: 4 free seat out of 4'
        ],
        tags: ['High Speed WiFi', 'Laundry Service', 'AC Room', '24/7 Security'],
        utilities: { current: '1200BDT', gas: '400BDT', water: '200BDT' },
        image: premiumHousingImg,
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
        roomAvailability: [
            'Room 501: 1 free seat out of 4',
            'Room 502: 2 free seat out of 4',
            'Room 503: 3 free seat out of 3',
            'Room 504: 2 free seat out of 4'
        ],
        tags: ['WiFi', 'Hot Water', 'Basic Kitchen', '24/7 Security'],
        utilities: { current: '700BDT', gas: '350BDT', water: '180BDT' },
        image: centralHostelImg,
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
        roomAvailability: [
            'Room 401: 2 free seat out of 4',
            'Room 402: 1 free seat out of 3',
            'Room 403: 3 free seat out of 3'
        ],
        tags: ['WiFi', 'Library', 'Dining Hall', '24/7 Guard'],
        utilities: { current: '800BDT', gas: '300BDT', water: '150BDT' },
        image: sylhetHostelImg,
        mapLocation: 'https://www.google.com/maps/search/Student+Hostel+Zindabazar+Sylhet'
    }
];

export const hotelResortData = [
    {
        id: 1,
        title: "Luxuary 5- Star Resort - Cox's Bazar",
        location: "Cox's Bazar",
        rating: 4.9,
        reviews: 128,
        price: '8,000BDT',
        roomStats: { single: 15, double: 25, deluxe: 10 },
        availability: [
            'Single: 12 available, Next free: 5 Dec, 2025',
            'Double: 12 available, Next free: 5 Dec, 2025',
            'Deluxe: 12 available, Next free: 5 Dec, 2025'
        ],
        tags: ['Free WiFi', 'Resturent', 'Spa', 'Beach Access', '24/7 Security'],
        meals: { breakfast: 'Free', lunch: 'Available(Paid)', dinner: 'Available(Paid)' },
        image: luxuryResortImg,
        mapLocation: 'https://www.google.com/maps/search/Student+Hostel+Zindabazar+Sylhet'
    },
    {
        id: 2,
        title: 'Premium student Housing - Mirpur',
        location: 'Mirpur-10, Dhaka',
        rating: 4.8,
        reviews: 256,
        price: '10,000BDT',
        roomStats: { single: 16, double: 20, deluxe: 10 },
        availability: [
            'Single: 12 available, Next free: 5 Dec, 2025',
            'Double: 12 available, Next free: 5 Dec, 2025',
            'Deluxe: 12 available, Next free: 5 Dec, 2025'
        ],
        tags: ['Free WiFi', 'Resturent', 'AC Room', '24/7 Security'],
        meals: { breakfast: 'Free', lunch: 'Available(Paid)', dinner: 'Available(Paid)' },
        image: premiumHousingImg,
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
        roomStats: { single: 5, double: 2, deluxe: 6 },
        availability: [
            'Single: 12 available, Next free: 5 Dec, 2025',
            'Double: 12 available, Next free: 5 Dec, 2025',
            'Deluxe: 12 available, Next free: 5 Dec, 2025'
        ],
        tags: ['WiFi', 'Hot Water', 'Basic Kitchen', '24/7 Security'],
        meals: { breakfast: 'Free', lunch: 'Available(Paid)', dinner: 'Available(Paid)' },
        image: centralHostelImg,
        mapLocation: 'https://www.google.com/maps/search/Student+Hostel+GEC+Chittagong'
    }
];
