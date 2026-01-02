function Button({ label, onClick, type = 'button', variant = 'primary', className = '' }) {
    // টেলউইন্ডের মাধ্যমে ডিফল্ট স্টাইল
    const baseStyle =
        'px-6 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none';

    // ভ্যারিয়েন্ট অনুযায়ী আলাদা স্টাইল (আপনার ডিজাইনের সাথে পরে ম্যাচ করাবো)
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
    };

    return (
        <button
            type={type === 'submit' ? 'submit' : type === 'reset' ? 'reset' : 'button'}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {label}
        </button>
    );
}

export default Button;
