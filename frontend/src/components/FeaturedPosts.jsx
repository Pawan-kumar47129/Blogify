import React from "react";
import Image from "./Image";
import { Link } from "react-router";
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8 w-full">
      {/* first part */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src="https://ik.imagekit.io/vbygr1pkk0/recipes/panir_uVV8TFKjy.jpg?updatedAt=1745990236849"
          className="rounded-xl object-cover w-full h-48 md:h-64 lg:h-80"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-base lg:text-lg">01.</h1>
          <Link className="text-blue-800 text-base lg:text-lg">Web Design</Link>
          <span className="text-gray-500 text-sm">2 days ago</span>
        </div>
        {/* title */}
        <Link className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold leading-tight hover:text-blue-700 transition-colors">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id,
          quasi soluta libero voluptas vol.
        </Link>
      </div>
      {/* other parts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second, third, fourth */}
        {[2, 3, 4].map((num) => (
          <div key={num} className="flex gap-4 items-start">
            <Image
              src="https://ik.imagekit.io/vbygr1pkk0/recipes/panir_uVV8TFKjy.jpg?updatedAt=1745990236849"
              className="rounded-xl object-cover w-1/3 min-w-[100px] aspect-video"
            />
            <div className="flex flex-col justify-between flex-1">
              <div className="flex items-center gap-4 text-sm lg:text-base">
                <h1 className="font-semibold">{`0${num}.`}</h1>
                <Link className="text-blue-800">Web design</Link>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
              <div className="mt-2 text-base sm:text-lg md:text-xl xl:text-2xl font-medium leading-snug hover:text-blue-700 transition-colors">
                <Link to="/test">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
