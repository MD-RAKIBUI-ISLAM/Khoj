import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu'; // পাসওয়ার্ড টগলের জন্য
import { Link } from 'react-router-dom';

import logo from '../../assets/khoj_logo.png';

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center pt-16 pb-20 px-6 font-sans">
            {/* Card Container */}
            <div className="max-w-[440px] w-full bg-white p-8 lg:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <img src={logo} alt="Khoj Logo" className="h-20 object-contain" />
                </div>

                {/* Header Text */}
                <div className="space-y-2 mb-8 text-center">
                    <h1 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                        Sign in or create an account
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Access your Khoj account to manage your stays and listings.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    {/* Email Field */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#0095FF] focus:ring-4 ring-blue-50 transition-all text-gray-800 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <Link
                                to="/forgot-password"
                                size="sm"
                                className="text-xs font-medium text-[#0095FF] hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#0095FF] focus:ring-4 ring-blue-50 transition-all text-gray-800 placeholder:text-gray-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#0095FF] text-white py-3.5 rounded-xl font-bold text-base hover:bg-blue-600 active:scale-[0.98] transition-all shadow-lg shadow-blue-100 mt-2"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center py-8">
                    <div className="flex-grow border-t border-gray-100" />
                    <span className="flex-shrink mx-4 text-gray-400 text-[11px] uppercase tracking-widest font-medium">
                        or continue with
                    </span>
                    <div className="flex-grow border-t border-gray-100" />
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-3 gap-4">
                    <button
                        type="button"
                        className="flex justify-center items-center py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all active:bg-gray-100"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                            alt="Google"
                            className="h-5 w-5"
                        />
                    </button>
                    <button
                        type="button"
                        className="flex justify-center items-center py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all active:bg-gray-100"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                            alt="Apple"
                            className="h-5 w-5"
                        />
                    </button>
                    <button
                        type="button"
                        className="flex justify-center items-center py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all active:bg-gray-100"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                            alt="Facebook"
                            className="h-5 w-5"
                        />
                    </button>
                </div>

                {/* Terms & Privacy */}
                <p className="mt-10 text-center text-[11px] text-gray-400 leading-relaxed px-4">
                    By continuing, you agree to our{' '}
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

            {/* Bottom Register Link */}
            <p className="mt-8 text-sm text-gray-500">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#0095FF] font-bold hover:underline">
                    Create one
                </Link>
            </p>
        </div>
    );
}

export default SignIn;
