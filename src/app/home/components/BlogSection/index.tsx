'use client';

import { useGetBlog } from '@/hooks/useGetBlog';
import { BlogItem } from '@/types/blog';
import { FC } from 'react';
import Image from 'next/image';

const BlogSection: FC = () => {
  const { data, isLoading, error } = useGetBlog();

  const featuredBlog = data?.data[0];
  const blogs = data?.data || [];

  const extractText = (blog: BlogItem): string => {
    if (!blog.content || !blog.content.length) return '';

    const paragraphBlock = blog.content.find(block =>
      block.type === 'paragraph' && block.children?.length);

    if (paragraphBlock && paragraphBlock.children[0]) {
      return paragraphBlock.children[0].text;
    }

    return '';
  };

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">Latest Blog Posts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">Latest Blog Posts</h2>
            <p className="text-lg text-red-600 max-w-2xl mx-auto">Error loading blog posts. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay updated with our latest articles and insights about Hajj and Umrah journey</p>
        </div>

        {/* Featured Blog Post */}
        {featuredBlog && (
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/2 h-[400px] relative rounded-xl overflow-hidden">
              {featuredBlog.coverImage?.file?.url ? (
                <Image
                  src={featuredBlog.coverImage.file.url}
                  alt={featuredBlog.coverImage.alternativeText || featuredBlog.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#F5F5F5] flex items-center justify-center">
                  <div className="w-24 h-24 border-4 border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">
                {featuredBlog.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {extractText(featuredBlog)}
              </p>
              <button className="bg-[#FFC100] text-[#232323] px-8 py-3 rounded-2xl font-medium w-fit transition-all duration-200 hover:bg-[#FFD54F] hover:scale-105 hover:shadow-lg">
                Read more
              </button>
            </div>
          </div>
        )}

        {/* Blog Post Previews */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
            {blogs.slice(1).map((blog) => (
              <div key={blog.id} className="flex-none w-72">
                <div className="h-48 bg-[#F5F5F5] rounded-xl mb-4 relative overflow-hidden">
                  {blog.coverImage?.file?.url ? (
                    <Image
                      src={blog.coverImage.file.url}
                      alt={blog.coverImage.alternativeText || blog.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 line-clamp-2">{extractText(blog)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;