import { Link } from "react-router";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-between gap-8 w-full max-w-5xl mx-auto">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap gap-2 text-black">
        <Link
          to="/posts"
          className="bg-blue-500 text-white rounded-full px-4 py-2 font-medium shadow hover:bg-blue-600 transition"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 text-gray-800 rounded-full px-4 py-2 font-medium transition"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 text-gray-800 rounded-full px-4 py-2 font-medium transition"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 text-gray-800 rounded-full px-4 py-2 font-medium transition"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 text-gray-800 rounded-full px-4 py-2 font-medium transition"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 text-gray-800 rounded-full px-4 py-2 font-medium transition"
        >
          Marketing
        </Link>
      </div>
      <span className="hidden xl:inline text-xl font-medium mx-4">|</span>
      {/* Search */}
      {/* <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 min-w-[180px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="Search a post..."
          className="bg-transparent outline-none text-gray-700 w-32 md:w-40"
          // onKeyDown={handleKeyPress}
        />
      </div> */}
      <Search/>
    </div>
  );
};

export default MainCategories;
