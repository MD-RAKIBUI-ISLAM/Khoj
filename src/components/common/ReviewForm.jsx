import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function ReviewForm({ onReviewSubmit, onClose }) {
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const tempErrors = {};
        if (!user.trim()) tempErrors.user = 'আপনার নাম লিখুন';
        if (!comment.trim()) tempErrors.comment = 'রিভিউ কমেন্ট লিখুন';
        if (rating === 0) tempErrors.rating = 'দয়া করে রেটিং দিন';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const newReview = {
                id: Date.now(),
                user,
                date: new Date().toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                }),
                rating,
                comment
            };
            onReviewSubmit(newReview);
            setUser('');
            setComment('');
            setRating(0);
            setErrors({});
        }
    };

    return (
        <div className="w-full bg-white p-6 md:p-10 relative">
            {/* ভেতরের ক্লোজ বাটন: 
               ১. এটি এখন 'absolute' পজিশনে কার্ডের ভেতরে থাকবে।
               ২. onClick={onClose} এর মাধ্যমে মেইন ফাইলের মোডাল বন্ধ হবে।
            */}
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault(); // বাড়তি নিরাপত্তার জন্য
                    onClose();
                }}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all z-20 shadow-sm"
            >
                ✕
            </button>

            <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                    Share Your Experience
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                    আপনার মূল্যবান মতামত আমাদের অনুপ্রাণিত করে।
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* আপনার আগের ইনপুট ফিল্ডগুলো এখানে হুবহু থাকবে... */}
                {/* ... (বাকি কোড অপরিবর্তিত) ... */}

                {/* User Name Input */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => {
                            setUser(e.target.value);
                            if (errors.user) setErrors({ ...errors, user: '' });
                        }}
                        placeholder="e.g. Rakibul Islam"
                        className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.user ? 'border-rose-500' : 'border-slate-100'} focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium text-slate-700`}
                    />
                    {errors.user && (
                        <p className="text-[11px] font-bold text-rose-500 ml-1 italic">
                            {errors.user}
                        </p>
                    )}
                </div>

                {/* Star Rating Input */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Overall Rating
                    </label>
                    <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex gap-2">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <button
                                        type="button"
                                        key={starValue}
                                        className={`text-3xl transition-all transform active:scale-90 ${starValue <= (hover || rating) ? 'text-yellow-400' : 'text-slate-200'}`}
                                        onClick={() => {
                                            setRating(starValue);
                                            if (errors.rating) setErrors({ ...errors, rating: '' });
                                        }}
                                        onMouseEnter={() => setHover(starValue)}
                                        onMouseLeave={() => setHover(0)}
                                    >
                                        <FaStar />
                                    </button>
                                );
                            })}
                        </div>
                        {errors.rating && (
                            <p className="text-[11px] font-bold text-rose-500 italic">
                                {errors.rating}
                            </p>
                        )}
                    </div>
                </div>

                {/* Comment Input */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Review Details
                    </label>
                    <textarea
                        rows="4"
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                            if (errors.comment) setErrors({ ...errors, comment: '' });
                        }}
                        placeholder="What did you like or dislike about this hostel?"
                        className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.comment ? 'border-rose-500' : 'border-slate-100'} focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all resize-none font-medium text-slate-700`}
                    />
                    {errors.comment && (
                        <p className="text-[11px] font-bold text-rose-500 ml-1 italic">
                            {errors.comment}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-black transition-all shadow-xl shadow-slate-200 active:scale-[0.98] uppercase text-xs tracking-[2px]"
                >
                    Post Review
                </button>
            </form>
        </div>
    );
}

export default ReviewForm;
