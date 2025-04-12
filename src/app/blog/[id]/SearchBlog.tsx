import { useLanguage } from "@/context/LanguageContext";
import { useGetBlog } from "@/hooks/useGetBlog";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBlog = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const { data } = useGetBlog();
  const [searchQuery, setSearchQuery] = useState("");

  const allBlog = data?.data.filter((blog) => blog.locale === language) ?? [];

  // Filter blogs based on search query
  const filteredBlogs = allBlog.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full lg:w-3/5 mt-12 lg:mt-0">
      {/* Search Box */}
      <div className="rounded-lg overflow-hidden border border-gray-200 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 pr-12 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#D4B760] text-white p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6">Categories</h3>
        <div className="space-y-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <button
                key={index}
                className={`block w-full text-left py-2 ${index < filteredBlogs.length - 1 ? "border-b border-white/30" : ""
                  } hover:text-gray-200 line-clamp-2 overflow-ellipsis cursor-pointer`}
                onClick={() => router.push(blog.documentId)}
              >
                {blog.title}
              </button>
            ))
          ) : (
            <p>No blogs found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBlog;