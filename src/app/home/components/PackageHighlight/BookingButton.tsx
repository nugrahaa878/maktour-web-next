'use client'

import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const BookingButton = ({ id }: Props) => {
  const router = useRouter();
  return <button
    className="bg-[#DCB04B] hover:bg-[#f5c842] text-[#232323] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer"
    onClick={() => {
      router.push(`/packages/${id}`)
    }}
  >
    See Details
  </button>
}

export default BookingButton;