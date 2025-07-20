import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-blue-900 text-center md:text-left">
        Development Blog
      </h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-6 py-2 rounded-full mb-6 shadow hover:bg-blue-700 transition-colors cursor-pointer md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8 w-full">
        <div className="flex-1 min-w-0">
          <div className="w-full overflow-x-auto">
            <PostList />
          </div>
        </div>
        <div
          className={`w-full md:w-72 ${open ? "block" : "hidden"} md:block`}
          style={{ minWidth: 0 }}
        >
          <div className="w-full md:w-72 overflow-x-auto">
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
