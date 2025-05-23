'use client';

export const ExploreButton = () => {
  const handleClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = 'https://wa.me/6281268529556';

    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <button
      className="bg-[#DCB04B] hover:bg-[#B68923] text-[#232323] px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-lg font-medium transition-colors duration-300 cursor-pointer"
      onClick={handleClick}
    >
      Contact Us
    </button>
  );
};