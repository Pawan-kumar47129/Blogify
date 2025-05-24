import { Link } from "react-router";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 px-4 md:px-12 lg:px-24">
      {/* BREADCRUMB */}
      <div className="flex gap-2 text-sm md:text-base text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span>•</span>
        <span className="text-blue-800 font-semibold">Blogs and Articles</span>
      </div>

      {/* INTRODUCTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Titles */}
        <div className="text-center md:text-left">
          <h1 className="text-gray-800 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Discover Inspiring Stories and Ideas
          </h1>
          <p className="mt-6 text-gray-600 text-md md:text-lg lg:text-xl">
            Dive into a world of creativity, innovation, and thought-provoking
            articles written by passionate individuals.
          </p>
        </div>

        {/* Animated Button */}
        <Link
          to="write"
          className="relative hidden md:block hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <svg
            viewBox="0 0 200 200"
            width="150"
            height="150"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text className="rotate-text">
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* CATEGORIES */}

      <MainCategories />

      {/* FEATURED POSTS */}
        <FeaturedPosts />
      

      {/* POST LIST */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
