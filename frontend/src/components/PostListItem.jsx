import React from "react";
import Image from "./Image";
import { Link } from "react-router";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="https://ik.imagekit.io/vbygr1pkk0/blog/logo.png?updatedAt=1745668908282"
          className="rounded-2xl object-cover"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, reprehenderit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-400">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-400">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          dolores dolorum, debitis architecto nisi animi incidunt nostrum
          ducimus hic reiciendis at explicabo praesentium dolor?
        </p>
        <Link to="/test" className=" underline text-blue-500">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
