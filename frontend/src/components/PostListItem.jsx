import React from "react";
import Image from "./Image";
import { Link } from "react-router";
import {format} from "timeago.js"
const PostListItem = ({post}) => {
  console.log(post);
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      {post.img && (
        // <div className="w-full md:w-auto xl:w-1/3 flex-shrink-0">
        //   <img
        //     className="w-full h-48 md:h-72 xl:h-64 object-cover rounded-lg shadow-sm"
        //     src={post.img}
        //     alt={post.title}
        //   />
        // </div>
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={post.img} className="rounded-2xl object-cover" width="735" height="300"  alt={post.title}/>
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-400">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-400">Web Design</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>
          {post.desc}
        </p>
        <Link to={`/${post.slug}`} className=" underline text-blue-500">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
