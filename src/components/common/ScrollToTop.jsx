import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        if (navType === 'PUSH') {
            window.scrollTo(0, 0);
        } else if (navType === 'POP') {
            // যদি ব্যাক করার পর পজিশন ঠিক না থাকে, তবে এই ট্রিকটি ট্রাই করুন:
            const savedPosition = window.sessionStorage.getItem(pathname);
            if (savedPosition) {
                setTimeout(() => {
                    window.scrollTo(0, parseInt(savedPosition, 10));
                }, 10);
            }
        }
    }, [pathname, navType]);

    return null;
}
