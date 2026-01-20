const travel_hero = {
    title: 'Travel Smart Across Bangladesh',
    subtitle:
        'Flights, trains, cars, moving services, and tours - everything for your journey in one place',
    searchFilters: {
        fromPlaceholder: 'Departure City...',
        toPlaceholder: 'Destination...',
        datePlaceholder: 'mm/dd/yyyy',
        buttonText: 'Search'
    },
    // ইমেজের গ্রেডিয়েন্ট এবং স্টাইল অনুযায়ী কালার ডাটা
    styling: {
        backgroundGradient: 'linear-gradient(to right, #A855F7, #6EE7B7)', // পার্পল থেকে সায়ান গ্রেডিয়েন্ট
        buttonColor: 'bg-[#0095FF]',
        textColor: 'text-[#000000]'
    }
};
export default travel_hero;

export const travelPackages = [
    {
        id: 1,
        title: 'Sylhet Tea Garden Tour',
        destination: 'Sylhet',
        description: 'Explore the green tea gardens and Jafflong.',
        price: '4,500',
        image: 'https://images.unsplash.com/photo-1581340158223-9da53e9702ea?q=80&w=500'
    },
    {
        id: 2,
        title: 'Cox’s Bazar Beach Escape',
        destination: "Cox's Bazar",
        description: 'Longest sea beach in the world with sunset view.',
        price: '6,200',
        image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=500'
    }
];

export const travelServices = [
    {
        id: 'flights',
        title: 'Flights',
        description: 'Find and book for the best option for you',
        icon: '✈️', // আপনি চাইলে আপনার ইমেজের আইকন পাথ ব্যবহার করতে পারেন
        path: '/services/flights',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        id: 'trains-buses',
        title: 'Trains & Buses',
        description: 'Find and book for the best option for you',
        icon: '🚌',
        path: '/services/transport',
        color: 'bg-green-100 text-green-600'
    },
    {
        id: 'car-rentals',
        title: 'Car Rentals',
        description: 'Find and book for the best option for you',
        icon: '🚗',
        path: '/services/cars',
        color: 'bg-red-100 text-red-600'
    },
    {
        id: 'moving-services',
        title: 'Moving Services',
        description: 'Find and book for the best option for you',
        icon: '🚚',
        path: '/services/moving',
        color: 'bg-sky-100 text-sky-600'
    },
    {
        id: 'airport-transport',
        title: 'Airport Transport',
        description: 'Find and book for the best option for you',
        icon: '📍',
        path: '/services/airport',
        color: 'bg-orange-100 text-orange-600'
    },
    {
        id: 'tour-package',
        title: 'Tour Package',
        description: 'Find and book for the best option for you',
        icon: '🏨',
        path: '/services/packages',
        color: 'bg-purple-100 text-purple-600'
    }
];

export const allServiceData = {
    flights: {
        title: 'Flights',
        items: [
            {
                id: 1,
                name: 'Biman Bangladesh Airlines',
                route: 'Dhaka - Sylhet',
                rating: 4.9,
                reviews: 480,
                price: 2999,
                logo: 'https://cdn-icons-png.flaticon.com/512/753/753248.png'
            },
            {
                id: 2,
                name: 'US-Bangla Airlines',
                route: "Dhaka - Cox's Bazar",
                rating: 4.7,
                reviews: 1250,
                price: 4500,
                logo: 'https://cdn-icons-png.flaticon.com/512/753/753248.png'
            },
            {
                id: 3,
                name: 'Novoair',
                route: 'Dhaka - Chittagong',
                rating: 4.6,
                reviews: 890,
                price: 3200,
                logo: 'https://cdn-icons-png.flaticon.com/512/753/753248.png'
            },
            {
                id: 4,
                name: 'Air Astra',
                route: 'Dhaka - Saidpur',
                rating: 4.5,
                reviews: 320,
                price: 3800,
                logo: 'https://cdn-icons-png.flaticon.com/512/753/753248.png'
            }
        ]
    },
    'trains-buses': {
        title: 'Trains & Buses',
        items: [
            {
                id: 1,
                name: 'Green Line Paribahan',
                route: 'Dhaka - Rajshahi (AC)',
                rating: 4.8,
                reviews: 2100,
                price: 1200,
                logo: 'https://cdn-icons-png.flaticon.com/512/2830/2830305.png'
            },
            {
                id: 2,
                name: 'Hanif Enterprise',
                route: 'Dhaka - Chittagong',
                rating: 4.5,
                reviews: 5400,
                price: 800,
                logo: 'https://cdn-icons-png.flaticon.com/512/2830/2830305.png'
            },
            {
                id: 3,
                name: 'Subarna Express (Train)',
                route: 'Dhaka - Chittagong',
                rating: 4.9,
                reviews: 12000,
                price: 750,
                logo: 'https://cdn-icons-png.flaticon.com/512/616/616430.png'
            },
            {
                id: 4,
                name: 'Ena Transport',
                route: 'Dhaka - Sylhet',
                rating: 4.3,
                reviews: 3200,
                price: 700,
                logo: 'https://cdn-icons-png.flaticon.com/512/2830/2830305.png'
            }
        ]
    },
    'car-rentals': {
        title: 'Car Rentals',
        items: [
            {
                id: 1,
                name: 'Premium Sedan (Noah)',
                route: 'Full Day - Inside Dhaka',
                rating: 4.7,
                reviews: 450,
                price: 4500,
                logo: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png'
            },
            {
                id: 2,
                name: 'X-Corolla Luxury',
                route: 'Dhaka to Mymensingh (Round Trip)',
                rating: 4.9,
                reviews: 120,
                price: 5500,
                logo: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png'
            },
            {
                id: 3,
                name: 'Hiace Microbus',
                route: 'Airport Pick & Drop',
                rating: 4.6,
                reviews: 890,
                price: 2500,
                logo: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png'
            }
        ]
    },
    'moving-services': {
        title: 'Moving Services',
        items: [
            {
                id: 1,
                name: 'Pack & Shift Ltd.',
                route: 'Home Shifting (Within Dhaka)',
                rating: 4.8,
                reviews: 1500,
                price: 8500,
                logo: 'https://cdn-icons-png.flaticon.com/512/2311/2311545.png'
            },
            {
                id: 2,
                name: 'Truck Lagbe',
                route: 'Commercial Moving (1 Ton)',
                rating: 4.6,
                reviews: 12000,
                price: 3500,
                logo: 'https://cdn-icons-png.flaticon.com/512/2311/2311545.png'
            },
            {
                id: 3,
                name: 'Super Movers',
                route: 'Office Relocation',
                rating: 4.9,
                reviews: 600,
                price: 15000,
                logo: 'https://cdn-icons-png.flaticon.com/512/2311/2311545.png'
            }
        ]
    },
    'airport-transport': {
        title: 'Airport Transport',
        items: [
            {
                id: 1,
                name: 'Uber Intercity',
                route: 'Airport to Uttara/Banani',
                rating: 4.5,
                reviews: 45000,
                price: 800,
                logo: 'https://cdn-icons-png.flaticon.com/512/854/854878.png'
            },
            {
                id: 2,
                name: 'Deshi Fare',
                route: 'Airport to Dhanmondi',
                rating: 4.7,
                reviews: 320,
                price: 1200,
                logo: 'https://cdn-icons-png.flaticon.com/512/854/854878.png'
            },
            {
                id: 3,
                name: 'Luxury Limousine',
                route: 'VIP Airport Transfer',
                rating: 5.0,
                reviews: 45,
                price: 5000,
                logo: 'https://cdn-icons-png.flaticon.com/512/854/854878.png'
            }
        ]
    },
    'tour-package': {
        title: 'Tour Packages',
        items: [
            {
                id: 1,
                name: 'Sajek Valley 2N/3D',
                route: 'Khagrachari - Sajek',
                rating: 4.9,
                reviews: 2500,
                price: 6500,
                logo: 'https://cdn-icons-png.flaticon.com/512/1973/1973943.png'
            },
            {
                id: 2,
                name: 'Saint Martin Island',
                route: 'Teknaf - Saint Martin',
                rating: 4.8,
                reviews: 4200,
                price: 7800,
                logo: 'https://cdn-icons-png.flaticon.com/512/1973/1973943.png'
            },
            {
                id: 3,
                name: 'Sundarbans Adventure',
                route: 'Khulna - Mongla',
                rating: 4.7,
                reviews: 1800,
                price: 12000,
                logo: 'https://cdn-icons-png.flaticon.com/512/1973/1973943.png'
            },
            {
                id: 4,
                name: 'Sylhet Ratargul/Bishnakandi',
                route: 'Sylhet City Tour',
                rating: 4.6,
                reviews: 3100,
                price: 4500,
                logo: 'https://cdn-icons-png.flaticon.com/512/1973/1973943.png'
            }
        ]
    }
};

export const popularDestinations = [
    {
        id: 1,
        title: 'Sajek Valley',
        description: 'Experience the clouds and mountains of Rangamati.',
        image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5dc', // একটি ডামি ইমেজ লিংক
        rating: 4.9,
        price: 4500,
        duration: '3 Days'
    },
    {
        id: 2,
        title: "Cox's Bazar",
        description: 'The longest natural sea beach in the world.',
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d',
        rating: 4.8,
        price: 3200,
        duration: '2 Days'
    },
    {
        id: 3,
        title: 'Sylhet Tea Garden',
        description: 'Greenery and peaceful environment of Malnicherra.',
        image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd',
        rating: 4.7,
        price: 2800,
        duration: '2 Days'
    }
];
