import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <Navbar />
      </div>
      {/* Main content */}
      <main className="mt-16 px-2 md:px-4 lg:px-8 xl:px-16 w-full max-w-7xl mx-auto flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
