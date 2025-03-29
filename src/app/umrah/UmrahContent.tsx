'use client';

import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

const dummyBlogs: BlogPost[] = [
  {
    id: 1,
    title: 'The Spiritual Journey of Umrah',
    description: 'Discover the profound spiritual significance of performing Umrah and how it transforms the hearts of millions of Muslims worldwide.',
    imageUrl: '/assets/images/blog1.jpg'
  },
  {
    id: 2,
    title: 'Preparing for Your Umrah Journey',
    description: 'Essential tips and guidance for those planning to embark on their sacred journey to perform Umrah.',
    imageUrl: '/assets/images/blog2.jpg'
  },
  {
    id: 3,
    title: 'Understanding Umrah Rituals',
    description: 'A comprehensive guide to understanding the various rituals and practices involved in performing Umrah.',
    imageUrl: '/assets/images/blog3.jpg'
  },
  {
    id: 4,
    title: 'Best Time to Perform Umrah',
    description: 'Learn about the most favorable times throughout the year to perform Umrah and plan your journey accordingly.',
    imageUrl: '/assets/images/blog4.jpg'
  },
];

const UmrahContent: FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<number>(1);
  const [blogs, setBlogs] = useState<BlogPost[]>(dummyBlogs);
  const blogRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleBlogSelect = (blogId: number) => {
    setSelectedBlog(blogId);
    const selectedBlogRef = blogRefs.current[blogs.findIndex(blog => blog.id === blogId)];
    selectedBlogRef?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left section - Blog Cards */}
        <div className="w-full md:w-2/3 space-y-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              ref={(el: HTMLDivElement | null) => { blogRefs.current[index] = el }}
              data-blog-id={blog.id}
              className={`p-6 rounded-xl transition-all duration-300 ${selectedBlog === blog.id ? 'bg-white shadow-lg scale-102' : 'bg-gray-50'}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden bg-gray-200">
                  {blog.imageUrl ? (
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      fill
                      className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 abhaya-libre">{blog.title}</h3>
                  <p className="text-gray-600">{blog.description}</p>
                  <button className="mt-4 bg-[#FFC100] text-[#232323] px-6 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-[#FFD54F] hover:scale-105">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right section - Blog Menu */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 abhaya-libre">Latest Articles</h2>
          <div className="space-y-4">
            {blogs.map(blog => (
              <button
                key={blog.id}
                onClick={() => handleBlogSelect(blog.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${selectedBlog === blog.id ? 'bg-[#FFC100] text-[#232323]' : 'hover:bg-gray-50'}`}
              >
                <h3 className="font-medium">{blog.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmrahContent;