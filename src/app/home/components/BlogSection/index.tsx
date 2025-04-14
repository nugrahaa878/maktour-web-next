'use client';

import { useGetBlog } from '@/hooks/useGetBlog';
import { BlogItem } from '@/types/blog';
import { FC } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

const BlogSection: FC = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const { data, isLoading, error } = useGetBlog();

  // Text content based on language
  const content = {
    en: {
      sectionTitle: "Latest Blog Posts",
      description: "Stay updated with our latest articles and insights about Hajj and Umrah journey",
      readMore: "Read more",
      errorMessage: "Error loading blog posts. Please try again later.",
      loading: "Loading..."
    },
    id: {
      sectionTitle: "Artikel Terbaru",
      description: "Dapatkan informasi terbaru tentang perjalanan Haji dan Umrah melalui artikel kami",
      readMore: "Baca selengkapnya",
      errorMessage: "Gagal memuat artikel. Silakan coba lagi nanti.",
      loading: "Memuat..."
    }
  };

  // Get content based on current language
  const { sectionTitle, description, readMore, errorMessage, loading } =
    language === 'id' ? content.id : content.en;

  const allBlog = data?.data.filter((blog) => blog.locale === language);

  const featuredBlog = allBlog?.[0];
  const blogs = (allBlog || []).slice(1);

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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">{sectionTitle}</h2>
            <div className="container mx-auto px-4 py-16">
              <div className="flex items-center justify-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                <span className="ml-3">{loading}</span>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 abhaya-libre">{sectionTitle}</h2>
            <p className="text-lg text-red-600 max-w-2xl mx-auto">{errorMessage}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4 abhaya-libre">{sectionTitle}</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Featured Blog Post */}
        {featuredBlog && (
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">
            <div className="w-full md:w-1/2 h-[250px] md:h-[400px] relative rounded-xl overflow-hidden">
              {featuredBlog.coverImage?.file?.url ? (
                <Image
                  src={featuredBlog.coverImage.file.url}
                  alt={featuredBlog.coverImage.alternativeText || featuredBlog.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#F5F5F5] flex items-center justify-center">
                  <div className="w-16 md:w-24 h-16 md:h-24 border-4 border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-10 md:w-16 h-10 md:h-16 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-0">
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4 abhaya-libre">
                {featuredBlog.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                {extractText(featuredBlog)}
              </p>
              <button
                className="bg-[#FFC100] text-[#232323] px-6 md:px-8 py-2 md:py-3 rounded-2xl font-medium w-fit transition-all duration-200 hover:bg-[#FFD54F] hover:scale-105 hover:shadow-lg"
                onClick={() => router.push(`/blog/${featuredBlog.documentId}`)}
              >
                {readMore}
              </button>
            </div>
          </div>
        )}

        {/* Blog Post Previews */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 md:pb-6 scrollbar-hide">
            {blogs.slice(1).map((blog) => (
              <div key={blog.id} className="flex-none w-64 md:w-72 cursor-pointer" onClick={() => router.push(`/blog/${blog.documentId}`)}>
                <div className="h-40 md:h-48 bg-[#F5F5F5] rounded-xl mb-3 md:mb-4 relative overflow-hidden">
                  {blog.coverImage?.file?.url ? (
                    <Image
                      src={blog.coverImage.file.url}
                      alt={blog.coverImage.alternativeText || blog.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-12 md:w-16 h-12 md:h-16 border-4 border-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">{blog.title}</h3>
                <p className="text-sm md:text-base text-gray-600 line-clamp-2">{extractText(blog)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;