import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero'; // Hero সেকশনটি ইমপোর্ট করুন

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen font-sans">
                {/* সব পেজের জন্য কমন নেভিগেশন বার */}
                <Navbar />

                {/* মেইন কন্টেন্ট এরিয়া */}
                <main className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    {/* এখানে পরবর্তী সেকশনগুলো (যেমন: Stats, Categories) এক এক করে আসবে */}
                                </>
                            }
                        />
                    </Routes>
                </main>

                {/* সব পেজের জন্য কমন ফুটার */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
