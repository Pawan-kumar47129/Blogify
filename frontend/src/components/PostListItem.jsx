import React from "react";
import Image from "./Image";
import { Link } from "react-router";
import { format } from "timeago.js";
const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 w-full">
      {/* Image */}
      {post.img && (
        <div className="w-full xl:w-1/3 flex-shrink-0">
          <img
            src={post.img}
            className="w-full h-48 md:h-72 xl:h-64 object-cover rounded-2xl shadow-sm"
            alt={post.title}
          />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3 w-full">
        <p className="text-2xl md:text-3xl xl:text-4xl font-semibold">
          {post.title}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-400" to={`/posts?author=${post.user.username}`}>{post.user.username}</Link>
          <span>on</span>
          <Link className="text-blue-400">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p className="text-base md:text-lg text-gray-700">{post.desc}</p>
        <Link
          to={`/posts/${post.slug}`}
          className="underline text-blue-500 font-medium"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
