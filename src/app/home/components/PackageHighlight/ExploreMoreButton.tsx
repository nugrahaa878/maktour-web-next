'use client'

import { useRouter } from "next/navigation";

const ExploreMoreButton = () => {
  const router = useRouter();

  return (
    <div className="mt-12 text-center" onClick={() => router.push('/packages')} >
      <button className="bg-[#FFC100] text-[#232323] px-8 py-3 rounded-2xl font-medium transition-all duration-200 cursor-pointer hover:bg-[#FFD54F] hover:scale-105 hover:shadow-lg">
        Explore More
      </button>
    </div >
  );
}

export default ExploreMoreButton;