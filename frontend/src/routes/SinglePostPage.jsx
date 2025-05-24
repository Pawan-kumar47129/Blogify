import React from "react";
import Image from "../components/Image";
import { Link } from "react-router";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-12 mt-8 px-4 md:px-8 lg:px-16 xl:px-32">
      {/* Post Details */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-6 lg:w-3/5">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            molestiae qui labore, veniam quae nobis?
          </h1>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Written by</span>
            <Link className="text-blue-600 hover:underline">Jone Doe</Link>
            <span>on</span>
            <Link className="text-blue-600 hover:underline">Web Design</Link>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            corporis dignissimos corrupti dolor quod! Reprehenderit laudantium
            temporibus animi, illum explicabo quo odit libero soluta fugiat,
            voluptatem ipsam dolore magni accusantium dolorem hic dolor?
            Laborum, laudantium?
          </p>
        </div>
        <div className="hidden lg:block lg:w-2/5">
          <Image
            src="https://ik.imagekit.io/vbygr1pkk0/blog/logo.png?updatedAt=1745668908282"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Post Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="text-lg flex flex-col gap-6 text-justify text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            incidunt laborum sint a ullam voluptates pariatur rem alias officiis
            labore ea ad neque, odio consequatur reprehenderit ut debitis
            nesciunt facilis atque, dicta similique soluta vero quis. Laboriosam
            error voluptatibus alias illo incidunt exercitationem eveniet quo
            nesciunt velit, illum, nostrum, doloribus enim aliquam doloremque
            nam perferendis quam odio aperiam! Expedita, laborum. Harum soluta
            iste exercitationem quibusdam impedit expedita cupiditate, similique
            consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            incidunt laborum sint a ullam voluptates pariatur rem alias officiis
            labore ea ad neque, odio consequatur reprehenderit ut debitis
            nesciunt facilis atque, dicta similique soluta vero quis. Laboriosam
            error voluptatibus alias illo incidunt exercitationem eveniet quo
            nesciunt velit, illum, nostrum, doloribus enim aliquam doloremque
            nam perferendis quam odio aperiam! Expedita, laborum. Harum soluta
            iste exercitationem quibusdam impedit expedita cupiditate, similique
            consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            incidunt laborum sint a ullam voluptates pariatur rem alias officiis
            labore ea ad neque, odio consequatur reprehenderit ut debitis
            nesciunt facilis atque, dicta similique soluta vero quis. Laboriosam
            error voluptatibus alias illo incidunt exercitationem eveniet quo
            nesciunt velit, illum, nostrum, doloribus enim aliquam doloremque
            nam perferendis quam odio aperiam! Expedita, laborum. Harum soluta
            iste exercitationem quibusdam impedit expedita cupiditate, similique
            consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            incidunt laborum sint a ullam voluptates pariatur rem alias officiis
            labore ea ad neque, odio consequatur reprehenderit ut debitis
            nesciunt facilis atque, dicta similique soluta vero quis. Laboriosam
            error voluptatibus alias illo incidunt exercitationem eveniet quo
            nesciunt velit, illum, nostrum, doloribus enim aliquam doloremque
            nam perferendis quam odio aperiam! Expedita, laborum. Harum soluta
            iste exercitationem quibusdam impedit expedita cupiditate, similique
            consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            incidunt laborum sint a ullam voluptates pariatur rem alias officiis
            labore ea ad neque, odio consequatur reprehenderit ut debitis
            nesciunt facilis atque, dicta similique soluta vero quis. Laboriosam
            error voluptatibus alias illo incidunt exercitationem eveniet quo
            nesciunt velit, illum, nostrum, doloribus enim aliquam doloremque
            nam perferendis quam odio aperiam! Expedita, laborum. Harum soluta
            iste exercitationem quibusdam impedit expedita cupiditate, similique
            consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            incidunt laborum sint a ullam voluptates pariatur rem alias officiis
            labore ea ad neque, odio consequatur reprehenderit ut debitis
            nesciunt facilis atque, dicta similique soluta vero quis. Laboriosam
            error voluptatibus alias illo incidunt exercitationem eveniet quo
            nesciunt velit, illum, nostrum, doloribus enim aliquam doloremque
            nam perferendis quam odio aperiam! Expedita, laborum. Harum soluta
            iste exercitationem quibusdam impedit expedita cupiditate, similique
            consectetur.
          </p>
        </div>

        {/* Sidebar */}
        <div className="px-6 py-6 bg-gray-100 rounded-lg shadow-md h-max sticky top-16 md:w-1/3 lg:w-1/4">
          <h2 className="text-lg font-semibold text-gray-800">Author</h2>
          <div className="flex items-center gap-4 mt-4">
            <Image
              src="https://ik.imagekit.io/vbygr1pkk0/blog/logo.png?updatedAt=1745668908282"
              className="rounded-full w-12 h-12 object-cover shadow-md"
            />
            <Link className="text-blue-600 hover:underline font-medium">
              Jone Doe
            </Link>
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-4 mt-4">
            <Link>
              <img
                src="/instagram.svg"
                alt="Instagram logo"
                className="w-6 h-6 hover:opacity-80"
              />
            </Link>
            <Link>
              <img
                src="/facebook.svg"
                alt="Facebook logo"
                className="w-6 h-6 hover:opacity-80"
              />
            </Link>
          </div>
          <div className="mt-6">
            <PostMenuAction />
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/web-design">
              Web Design
            </Link>
            <Link className="underline" to="Development">
              Development
            </Link>
            <Link className="underline" to="/Database">
              Database
            </Link>
            <Link className="underline" to="/seo">
              Search Engines
            </Link>
            <Link className="underline" to="/marketing">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
