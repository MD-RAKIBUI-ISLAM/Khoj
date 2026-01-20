import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PopularRightNow from '../../components/sections/Travel/PopularRightNow';
import TravelHero from '../../components/sections/Travel/Travel_Hero';
import TravelNeeds from '../../components/sections/Travel/TravelNeeds';

function TravelPage() {
    const location = useLocation();

    useEffect(() => {
        const scrollToSection = () => {
            const targetId = sessionStorage.getItem('scrollBackTo');

            if (targetId) {
                let attempts = 0;
                const interval = setInterval(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        sessionStorage.removeItem('scrollBackTo');
                        clearInterval(interval);
                    }

                    attempts += 1;
                    if (attempts > 10) clearInterval(interval);
                }, 100);
            }
        };

        scrollToSection();
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-white">
            <TravelHero />
            <TravelNeeds />
            <div id="popular-right-now">
                {' '}
                <PopularRightNow />
            </div>
        </div>
    );
}

export default TravelPage;
