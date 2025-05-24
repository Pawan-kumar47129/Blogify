import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="absolute top-0 w-full bg-white shadow-md z-50">
        <Navbar />
      </div>
      <main className="mt-16 px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
