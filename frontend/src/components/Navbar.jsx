import React, { useState } from "react";
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
    <nav className="bg-white h-16 flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-32 shadow-md z-50 fixed top-0 w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-800">
        {/* <IKImage ... /> */}
        <Image
          src="https://ik.imagekit.io/vbygr1pkk0/recipes/panir_uVV8TFKjy.jpg?updatedAt=1745990236849"
          className="w-10 h-10 rounded-full"
        />
        <span>BlogApp</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-700 focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center gap-8 text-xl font-medium text-white transition-all duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
          }
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
          }
          onClick={() => setOpen(false)}
        >
          Trending
        </NavLink>
        <NavLink
          to="/popular"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
          }
          onClick={() => setOpen(false)}
        >
          Most Popular
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
          }
          onClick={() => setOpen(false)}
        >
          About
        </NavLink>
        <SignedOut>
          <NavLink to="/login" onClick={() => setOpen(false)}>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Login
            </button>
          </NavLink>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
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
          to="/trending"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          Trending
        </NavLink>
        <NavLink
          to="/popular"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          Most Popular
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          About
        </NavLink>
        <SignedOut>
          <NavLink to="/login">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Login
            </button>
          </NavLink>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;
