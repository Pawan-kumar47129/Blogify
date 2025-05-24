import React, { useState } from "react";
import { IKImage } from "imagekitio-react";
import { Link, NavLink } from "react-router";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Image from "./Image";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white h-16 flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-32 shadow-md z-50 fixed top-0 w-full">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-800">
          {/* <IKImage
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            src="https://ik.imagekit.io/vbygr1pkk0/blog/logo.png?updatedAt=1745668908282"
            className="w-10 h-10 rounded-full"
            alt="logo"
          /> */}
          <Image src="https://ik.imagekit.io/vbygr1pkk0/blog/logo.png?updatedAt=1745668908282"
            className="w-10 h-10 rounded-full"/>
          <span>BlogApp</span>
        </div>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl text-gray-700"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✖" : "☰"}
        </div>
        {/* Mobile Link List */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute transition-all ease-in-out top-16 bg-gray-800 text-white gap-8 text-xl font-medium ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <a href="/" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="/" className="hover:text-blue-400 transition-colors">
            Trending
          </a>
          <a href="/" className="hover:text-blue-400 transition-colors">
            Most Popular
          </a>
          <a href="/" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Login
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-10 items-center text-lg font-medium text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          Trending
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          Most Popular
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          About
        </NavLink>
        <SignedOut>
          <NavLink to="login">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Login
            </button>
          </NavLink>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
