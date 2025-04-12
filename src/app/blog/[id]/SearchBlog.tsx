import { FaSearch } from "react-icons/fa"

const SearchBlog = () => {
  return (
    <div className="w-full lg:w-3/5 mt-12 lg:mt-0" >
      {/* Search Box */}
      < div className="rounded-lg overflow-hidden border border-gray-200 mb-8" >
        <div className="relative" >
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 pr-12 outline-none"
            value={'asdasd'}
            onChange={(e) => console.log(e.target.value)}
          />
          < div className="absolute right-4 top-1/2 transform -translate-y-1/2" >
            <FaSearch />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#D4B760] text-white p-8 rounded-lg" >
        <h3 className="text-2xl font-bold mb-6" > Categories </h3>
        < div className="space-y-4" >
          <button
            className={`block w-full text-left py-2 border-b border-white/30 hover:text-gray-200 ${!true ? 'font-bold' : ''}`}
            onClick={() => console.log('')}
          >
            All Categories
          </button>

          {/* {
            categories.map((category, index) => (
              <button
                key={index}
                className={`block w-full text-left py-2 ${index < categories.length - 1 ? 'border-b border-white/30' : ''} hover:text-gray-200 ${selectedCategory === category ? 'font-bold' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))} */}
        </div>
      </div>
    </div>

  )
}

export default SearchBlog;