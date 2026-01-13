/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // নিশ্চিত করুন এই লাইনটি আছে
        './public/index.html'
    ],
    theme: {
        extend: {
            animation: {
                marquee: 'marquee 50s linear infinite'
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' }
                }
            }
        }
    },
    plugins: []
};
