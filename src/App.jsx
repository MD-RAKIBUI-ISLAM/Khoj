import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Categories from './components/sections/Categories';
import Hero from './components/sections/Hero';
import WhyChoose from './components/sections/WhyChoose';
import AboutPage from './Pages/AboutPage/About';
import ContactPge from './Pages/ContactPage/Contact';
import HomeRentalDetail from './Pages/HomeRentalsPage/HomeRentalDetail';
import HomeRentalsPage from './Pages/HomeRentalsPage/HomeRentalsPage';
import HotelResortDetail from './Pages/HotelResort/HotelResortDetail';
import HotelResortPage from './Pages/HotelResort/HotelResortPage';
import ListProperty from './Pages/ListProperty/ListProperty';
import RegistrationPage from './Pages/RegistrationPage/Registration';
import Services from './Pages/Services/ServicesMenu';
import SignIn from './Pages/Sign/SignIn';
import ModernStudentHostel from './Pages/StudentHousing/StudentHousingDetail';
import StudentHousingPage from './Pages/StudentHousing/StudentHousingPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
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
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/register" element={<RegistrationPage />} />
                        <Route path="/list-property" element={<ListProperty />} />
                        <Route path="/student-housing" element={<StudentHousingPage />} />
                        <Route path="/hotel-resort" element={<HotelResortPage />} />
                        <Route path="/contact" element={<ContactPge />} />
                        <Route path="/home-rentals" element={<HomeRentalsPage />} />
                        <Route
                            path="/student-housing/details/:id"
                            element={<ModernStudentHostel />}
                        />
                        <Route path="/hotel-resort/details/:id" element={<HotelResortDetail />} />
                        <Route path="/home-rentals/details/:id" element={<HomeRentalDetail />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
