'use client';

export const ExploreButton = () => {
  return (
    <button
      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300"
      onClick={() => {
        // Add navigation or scroll to packages section
      }}
    >
      Explore Packages
    </button>
  );
};