'use client'

const BookingButton = () => {
  return <button
    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
    onClick={() => {
      // Add booking logic here
    }}
  >
    Book Now
  </button>
}

export default BookingButton;