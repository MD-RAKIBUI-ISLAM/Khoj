import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        // শুধুমাত্র PUSH এর সময় উপরে যাবে।
        // POP (Back/Forward) এর সময় ব্রাউজারকে তার নিজের কাজ করতে দিন।
        if (navType === 'PUSH') {
            window.scrollTo(0, 0);
        } else if (navType === 'POP') {
            // ব্রাউজারের ডিফল্ট রেস্টোরেশনকে কিছুটা সময় দিন
            // যদি এটি কাজ না করে তবে window.history.scrollRestoration = 'auto' নিশ্চিত করুন
        }
    }, [pathname, navType]);

    return null;
}
