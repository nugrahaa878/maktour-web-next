'use client';

import { useGetBlog } from '@/hooks/useGetBlog';
import { FC } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BlogSection: FC = () => {
  const { data } = useGetBlog();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay updated with our latest articles and insights about Hajj and Umrah journey</p>
        </div>

        {/* Featured Blog Post */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/2 h-[400px] relative rounded-xl overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-gray-300 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">
              Lorem Ipsum dolor sit amer, consectur
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-[#FFC100] text-[#232323] px-8 py-3 rounded-2xl font-medium w-fit transition-all duration-200 hover:bg-[#FFD54F] hover:scale-105 hover:shadow-lg">
              Read more
            </button>
          </div>
        </div>

        {/* Blog Post Previews */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex-none w-72">
                <div className="h-48 bg-[#F5F5F5] rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog Post {index}</h3>
                <p className="text-gray-600 line-clamp-2">Short description for blog post {index}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;