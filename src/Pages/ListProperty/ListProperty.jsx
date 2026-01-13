import { useEffect } from 'react';

import LpFinances from '../../components/sections/ListProperty/LP_Finances';
import LpGuidesAndFAQ from '../../components/sections/ListProperty/LP_GuidesAndFAQ';
import LpHero from '../../components/sections/ListProperty/LP_Hero';
import LPHostWithoutWorry from '../../components/sections/ListProperty/LP_HostWithoutWorry';

function ListProperty() {
    useEffect(() => {
        // পেজ লোড হলেই স্ক্রল একদম উপরে চলে যাবে
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-white">
            <LpHero />
            <LPHostWithoutWorry />
            <LpFinances />
            <LpGuidesAndFAQ />
            {/* পরবর্তী সেকশনগুলো এখানে আসবে */}
        </div>
    );
}

export default ListProperty;
