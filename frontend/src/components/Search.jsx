import React from 'react'

const Search = () => {
  return (
    <div className="bg-gray-100 p-3 rounded-full flex items-center gap-3 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="gray"
        className="stroke-current text-gray-500"
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
      <input
        type="text"
        placeholder="Search a post..."
        className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
      />
    </div>
  )
}

export default Search
