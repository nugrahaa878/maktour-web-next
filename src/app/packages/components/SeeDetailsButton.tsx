'use client'

import { useRouter } from 'next/navigation'

const SeeDetailButton = () => {
  const router = useRouter();

  return <button
    className="bg-[#DCB04B] hover:bg-[#f5c842] text-[#232323] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer"
    onClick={(e) => {
      e.stopPropagation(); // Prevent triggering the parent onClick
      router.push('/packages/rahmatan')
    }}
  >
    See Details
  </button>
}

export default SeeDetailButton;