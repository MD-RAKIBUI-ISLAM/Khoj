import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import logo from '../../assets/khoj_logo.png';

function Register() {
    const [showPassword, setShowPassword] = useState(false);

    // ১. ফর্ম স্টেট ডিক্লেয়ার করা হয়েছে
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        agreeToMarketing: false
    });

    // ২. ইনপুট চেঞ্জ হ্যান্ডলার ফাংশন
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration Data:', formData);
        // এখানে আপনি আপনার API কল করতে পারবেন
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center pt-10 pb-20 px-6 font-sans">
            <div className="max-w-[480px] w-full bg-white p-8 lg:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="Khoj Logo" className="h-10 object-contain" />
                </div>

                <div className="space-y-2 mb-8 text-center">
                    <h1 className="text-2xl font-black text-[#1A1A1A] tracking-tight">
                        Create your account
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Join Booking Khoj to find verified stays across Bangladesh.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Full Name Field */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName" // স্টেট এর সাথে ম্যাচিং নাম
                            value={formData.fullName} // স্টেটের ভ্যালু কানেক্টেড
                            onChange={handleChange} // চেঞ্জ হ্যান্ডলার
                            placeholder="e.g. Rahim Ahmed"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#0095FF] focus:ring-4 ring-blue-50 transition-all text-gray-800 placeholder:text-gray-400"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#0095FF] focus:ring-4 ring-blue-50 transition-all text-gray-800 placeholder:text-gray-400"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a strong password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#0095FF] focus:ring-4 ring-blue-50 transition-all text-gray-800 placeholder:text-gray-400"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
                            </button>
                        </div>
                        <p className="text-[11px] text-gray-400 ml-1">
                            Must be at least 8 characters long.
                        </p>
                    </div>

                    {/* Marketing Agreement */}
                    <div className="flex items-start gap-3 py-2">
                        <input
                            type="checkbox"
                            id="marketing"
                            name="agreeToMarketing"
                            checked={formData.agreeToMarketing}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0095FF] focus:ring-[#0095FF] cursor-pointer"
                        />
                        <label
                            htmlFor="marketing"
                            className="text-xs text-gray-500 leading-normal cursor-pointer"
                        >
                            I'd like to receive travel inspiration and exclusive offers from Booking
                            Khoj via email.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#0095FF] text-white py-3.5 rounded-xl font-bold text-base hover:bg-blue-600 active:scale-[0.98] transition-all shadow-lg shadow-blue-100 mt-2"
                    >
                        Create Account
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center py-8">
                    <div className="flex-grow border-t border-gray-100" />
                    <span className="flex-shrink mx-4 text-gray-400 text-[11px] uppercase tracking-widest font-medium">
                        or sign up with
                    </span>
                    <div className="flex-grow border-t border-gray-100" />
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-3 gap-4">
                    {['Google', 'Apple', 'Facebook'].map((platform) => (
                        <button
                            key={platform}
                            type="button"
                            className="flex justify-center items-center py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all active:bg-gray-100"
                        >
                            <img
                                src={
                                    platform === 'Google'
                                        ? 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'
                                        : platform === 'Apple'
                                          ? 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
                                          : 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg'
                                }
                                alt={platform}
                                className="h-5 w-5"
                            />
                        </button>
                    ))}
                </div>

                <p className="mt-10 text-center text-[11px] text-gray-400 leading-relaxed px-4">
                    By creating an account, you agree to our{' '}
                    <Link to="/terms" className="text-gray-600 font-medium hover:underline">
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-gray-600 font-medium hover:underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Already have an account?{' '}
                <Link to="/signin" className="text-[#0095FF] font-bold hover:underline">
                    Sign in here
                </Link>
            </p>
        </div>
    );
}

export default Register;
