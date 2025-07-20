import Search from "./Search";
import { Link } from "react-router";

const SideMenu = () => {
  return (
    <aside className="bg-white rounded-xl shadow-md px-4 py-6 h-max sticky top-8 w-full md:w-72 overflow-x-auto min-w-0">
      <h1 className="mb-4 text-base font-semibold text-blue-800">Search</h1>
      <Search />
      <h1 className="mt-8 text-base font-semibold text-blue-800">Filter</h1>
      <div className="flex flex-col gap-3 text-sm min-w-[220px]">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-2 border-blue-800 rounded-full cursor-pointer checked:bg-blue-800 checked:border-blue-800 bg-white transition"
          />
          <span className="text-gray-700">Newest</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-2 border-blue-800 rounded-full cursor-pointer checked:bg-blue-800 checked:border-blue-800 bg-white transition"
          />
          <span className="text-gray-700">Most Popular</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-2 border-blue-800 rounded-full cursor-pointer checked:bg-blue-800 checked:border-blue-800 bg-white transition"
          />
          <span className="text-gray-700">Trending</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-2 border-blue-800 rounded-full cursor-pointer checked:bg-blue-800 checked:border-blue-800 bg-white transition"
          />
          <span className="text-gray-700">Oldest</span>
        </label>
      </div>
      <h1 className="mt-8 text-base font-semibold text-blue-800">Categories</h1>
      <div className="flex flex-col gap-3 text-sm min-w-[220px]">
        <Link className="hover:underline text-blue-700" to="/posts">
          All
        </Link>
        <Link className="hover:underline text-blue-700" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="hover:underline text-blue-700" to="/posts?cat=development">
          Development
        </Link>
        <Link className="hover:underline text-blue-700" to="/posts?cat=databases">
          Databases
        </Link>
        <Link className="hover:underline text-blue-700" to="/posts?cat=seo">
          Search Engines
        </Link>
        <Link className="hover:underline text-blue-700" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </aside>
  );
};

export default SideMenu;
