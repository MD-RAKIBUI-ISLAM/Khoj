import { BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* সব পেজের জন্য কমন নেভিগেশন বার */}
                <Navbar />

                {/* মেইন কন্টেন্ট এরিয়া */}
                <main className="flex-grow">
                    <Routes />
                </main>

                {/* সব পেজের জন্য কমন ফুটার */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
