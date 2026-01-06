import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Categories from './components/sections/Categories';
import Hero from './components/sections/Hero';
import WhyChoose from './components/sections/WhyChoose';
import HomeRentalsPage from './Pages/HomeRentalsPage/HomeRentalsPage';
import HotelResortPage from './Pages/HotelResort/HotelResortPage';
import ListProperty from './Pages/ListProperty/ListProperty'; // এটি যোগ করুন
import SignIn from './Pages/Sign/SignIn';
import StudentHousingPage from './Pages/StudentHousing/StudentHousingPage';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen font-sans">
                <Navbar />

                <main className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Categories />
                                    <WhyChoose />
                                </>
                            }
                        />
                        <Route path="/signin" element={<SignIn />} />
                        {/* List Property পেজের জন্য নতুন রাউট */}
                        <Route path="/list-property" element={<ListProperty />} />
                        <Route path="/student-housing" element={<StudentHousingPage />} />
                        <Route path="/hotel-resort" element={<HotelResortPage />} />
                        <Route path="/home-rentals" element={<HomeRentalsPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
