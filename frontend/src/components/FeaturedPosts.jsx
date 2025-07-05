import React from "react";
import Image from "./Image";
import { Link } from "react-router";
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first parts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src="https://ik.imagekit.io/vbygr1pkk0/recipes/panir_uVV8TFKjy.jpg?updatedAt=1745990236849"
          className=" rounded-xl object-cover"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-grau-500 ">2 days ago</span>
        </div>
        {/* titles */}
        <Link className="text-xl lg:text-3xl font-semibold lg:font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id,
          quasi soluta libero voluptas vol.
        </Link>
      </div>
      {/* others parts */}
      <div className="w-full lg:w-1/2 flex  flex-col gap-4">
        {/* second */}
        <div className=" lg:h-1/3 flex justify-between gap-4">
          <Image
            src="https://ik.imagekit.io/vbygr1pkk0/recipes/panir_uVV8TFKjy.jpg?updatedAt=1745990236849"
            className=" rounded-xl object-cover w-1/3 aspect-video"
          />
          {/* details and title */}
          <div>
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800 ">Web design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <div className="text-base sm:text-lg md:text-2xl lg:text-sm xl:text-2xl font-medium">
              <Link to="/test">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </div>
          </div>
        </div>
        {/* third */}
        <div className=" lg:h-1/3 flex justify-between gap-4">
          <Image
            src="https://ik.imagekit.io/vbygr1pkk0/recipes/panir_uVV8TFKjy.jpg?updatedAt=1745990236849"
            className=" rounded-xl object-cover w-1/3 aspect-video"
          />
          {/* details and title */}
          <div>
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800 ">Web design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <div className="text-base sm:text-lg md:text-2xl lg:text-sm xl:text-2xl font-medium">
              <Link to="/test">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </div>
          </div>
        </div>
        {/* fourth */}
        <div className=" lg:h-1/3 flex justify-between gap-4">
          <Image
            src="https://ik.imagekit.io/vbygr1pkk0/recipes/panir_uVV8TFKjy.jpg?updatedAt=1745990236849"
            className=" rounded-xl object-cover w-1/3 aspect-video"
          />
          {/* details and title */}
          <div>
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800 ">Web design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <div className="text-base sm:text-lg md:text-2xl lg:text-sm xl:text-2xl font-medium">
              <Link to="/test">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
