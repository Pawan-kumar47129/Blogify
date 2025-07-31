import Search from "./Search";
import { Link, useSearchParams } from "react-router";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };
  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
  };
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
            onChange={handleFilterChange}
            className="appearance-none w-4 h-4 border-2 border-blue-800 rounded-full cursor-pointer checked:bg-blue-800 checked:border-blue-800 bg-white transition"
          />
          <span className="text-gray-700">Newest</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            onChange={handleFilterChange}
            className="appearance-none w-4 h-4 border-2 border-blue-800 rounded-full cursor-pointer checked:bg-blue-800 checked:border-blue-800 bg-white transition"
          />
          <span className="text-gray-700">Most Popular</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            onChange={handleFilterChange}
            className="appearance-none w-4 h-4 border-2 border-blue-800 rounded-full cursor-pointer checked:bg-blue-800 checked:border-blue-800 bg-white transition"
          />
          <span className="text-gray-700">Trending</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            onChange={handleFilterChange}
            className="appearance-none w-4 h-4 border-2 border-blue-800 rounded-full cursor-pointer checked:bg-blue-800 checked:border-blue-800 bg-white transition"
          />
          <span className="text-gray-700">Oldest</span>
        </label>
      </div>
      <h1 className="mt-8 text-base font-semibold text-blue-800">Categories</h1>
      <div className="flex flex-col gap-3 text-sm min-w-[220px]">
        <span className="hover:underline text-blue-700 cursor-pointer" onClick={()=>handleCategoryChange('general')}>
          General
        </span>
        <span className="hover:underline text-blue-700 cursor-pointer" onClick={()=>handleCategoryChange("web-design")}>
          Web Design
        </span>
        <span className="hover:underline text-blue-700 cursor-pointer" onClick={()=>handleCategoryChange("development")}>
          Development
        </span>
        <span className="hover:underline text-blue-700 cursor-pointer" onClick={()=>handleCategoryChange("databases")}>
          Databases
        </span>
        <span className="hover:underline text-blue-700 cursor-pointer " onClick={()=>handleCategoryChange("seo")}>
          Search Engine
        </span>
        <span className="hover:underline text-blue-700 cursor-pointer " onClick={()=>handleCategoryChange("marketing")}>
          Marketing
        </span>
      </div>
    </aside>
  );
};

export default SideMenu;
