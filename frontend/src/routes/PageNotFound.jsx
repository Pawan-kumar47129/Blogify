import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
      >
        Go Home
      </Link>
    </div>
  )
}

export default PageNotFound
