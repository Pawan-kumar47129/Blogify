import { Link } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import Loading from "./Loading";
const fetchPost = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`);
  return res.data;
};
const FeaturedPosts = () => {
  const {isPending, data } = useQuery({
    queryKey: ["featuredPost"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return <Loading />;
  const posts=data?.posts||[];
  if(posts && posts.length==0) return;
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8 w-full">
      {/* first part */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        {posts[0].img && <img
          src={posts[0].img}
          className="rounded-xl object-cover w-full h-48 md:h-64 lg:h-80"
        />}
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-base lg:text-lg">01.</h1>
          <Link className="text-blue-800 text-base lg:text-lg">{posts[0].category}</Link>
          <span className="text-gray-500 text-sm">{format(posts[0].createdAt)}</span>
        </div>
        {/* title */}
        <Link className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold leading-tight hover:text-blue-700 transition-colors">
         {posts[0].title}
        </Link>
      </div>
      {/* other parts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second, third, fourth */}
        {posts.slice(1).map((post,idx) => (
          <div key={idx+2} className="flex gap-4 items-start">
            {post.img && <img
              src={post.img}
              className="rounded-xl object-cover w-1/3 min-w-[100px] aspect-video"
            />}
            <div className="flex flex-col justify-between flex-1">
              <div className="flex items-center gap-4 text-sm lg:text-base">
                <h1 className="font-semibold">{`0${idx+2}.`}</h1>
                <Link className="text-blue-800" to={`/posts?cat=${post.category}`}>{post.category}</Link>
                <span className="text-gray-500 text-sm">{format(post.createdAt)}</span>
              </div>
              <div className="mt-2 text-base sm:text-lg md:text-xl xl:text-2xl font-medium leading-snug hover:text-blue-700 transition-colors">
                <Link to={`posts/${post.slug}`}>
                  {post.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
