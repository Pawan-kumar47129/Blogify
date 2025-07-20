import Image from "../components/Image";
import { Link, useNavigate, useParams } from "react-router";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Loading";
import { format } from "timeago.js";
import parser from "html-react-parser";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { error, isPending, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return <Loading />;
  if (error || !data) {
    navigate("/page-not-found");
    return null;
  }

  return (
    <div className="flex flex-col gap-12 mt-8 px-2 md:px-4 lg:px-8 xl:px-16 w-full max-w-7xl mx-auto">
      {/* Post Details */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-6 lg:w-3/5">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
            {data.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm">
            <span>Written by</span>
            <Link className="text-blue-600 hover:underline">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-600 hover:underline">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-600 leading-relaxed">{data.desc}</p>
        </div>
        {data.img && (
          <div className="hidden lg:block lg:w-2/5">
            <Image
              src={data.img}
              width="600"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        )}
      </div>

      {/* Post Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="text-lg flex flex-col gap-6 text-justify text-gray-700 leading-relaxed md:w-2/3">
          {parser(data.content)}
        </div>

        {/* Sidebar */}
        <aside className="px-4 py-6 bg-white rounded-xl shadow-lg h-max sticky top-20 md:w-1/3 lg:w-1/4 min-w-[220px] flex flex-col gap-8 border border-gray-100">
          {/* Author */}
          <div>
            <h2 className="text-lg font-semibold text-blue-800 mb-4">Author</h2>
            <div className="flex items-center gap-4">
              <Image
                src={data.user.img}
                className="rounded-full w-12 h-12 object-cover shadow-md"
              />
              <Link className="text-blue-600 hover:underline font-medium">
                {data.user.username}
              </Link>
            </div>
            <p className="text-gray-600 mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-3 mt-3">
              <Link>
                <img
                  src="/instagram.svg"
                  alt="Instagram logo"
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </Link>
              <Link>
                <img
                  src="/facebook.svg"
                  alt="Facebook logo"
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </Link>
            </div>
          </div>
          {/* Actions */}
          <div>
            <PostMenuAction post={data} />
          </div>
          {/* Categories */}
          <div>
            <h1 className="mb-3 text-sm font-semibold text-blue-800">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="underline" to="/posts">All</Link>
              <Link className="underline" to="/posts?cat=web-design">
                Web Design
              </Link>
              <Link className="underline" to="/posts?cat=development">
                Development
              </Link>
              <Link className="underline" to="/posts?cat=database">
                Database
              </Link>
              <Link className="underline" to="/posts>cat=seo">
                Search Engines
              </Link>
              <Link className="underline" to="/posts?cat=marketing">
                Marketing
              </Link>
            </div>
          </div>
          {/* Search */}
          <div>
            <h1 className="mb-3 text-sm font-semibold text-blue-800">Search</h1>
            <Search />
          </div>
        </aside>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
