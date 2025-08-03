import React from "react";
import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">About BlogApp</h1>
      <p className="text-lg text-gray-700">
        <span className="font-semibold text-blue-700">BlogApp</span> is a modern blogging platform designed for creators, developers, and readers who want to share and discover inspiring stories, tutorials, and ideas. Our mission is to provide a clean, user-friendly, and powerful space for everyone to express themselves and connect with a vibrant community.
      </p>
      <div>
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Write, edit, and publish your own blog posts</li>
          <li>Browse posts by category, popularity, or recency</li>
          <li>Comment and interact with other users</li>
          <li>Responsive design for all devices</li>
          <li>Easy search and filtering</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Meet the Creator</h2>
        <p className="text-gray-700">
          This project was built with ❤️ using React, Node.js, MongoDB, and modern web technologies. 
          If you have feedback or want to contribute, feel free to <Link to="/contact" className="text-blue-600 underline">contact us</Link>!
        </p>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BlogApp. All rights reserved.
      </div>
    </div>
  );
};

export default  AboutPage