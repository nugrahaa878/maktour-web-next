'use client'

import { useRouter } from 'next/navigation'

const SeeDetailButton = () => {
  const router = useRouter();

  return <button
    className="bg-[#FFC100] hover:bg-[#f5c842] text-[#232323] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer"
    onClick={() => {
      router.push('/packages/rahmatan')
    }}
  >
    See Details
  </button>
}

export default SeeDetailButton;