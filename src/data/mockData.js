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
        title: 'Students Housing',
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
