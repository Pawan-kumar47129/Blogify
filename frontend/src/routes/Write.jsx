import { useUser } from '@clerk/clerk-react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>
  }
  if (isLoaded && !isSignedIn) {
    return <div className="text-center py-10 text-red-500 font-semibold">You should login!</div>
  }
  return (
    <div className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col items-center py-8 px-2 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-blue-800 text-center">Create a New Post</h1>
        <form className="flex flex-col gap-6">
          <button
            type="button"
            className="self-start bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-200 transition-colors"
          >
            Add a Cover Image
          </button>
          <input
            type="text"
            placeholder="My Awesome Story"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="cat" className="font-medium text-gray-700">Choose a Category:</label>
            <select
              name="cat"
              id="cat"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="general">General</option>
              <option value="web-design">Web Design</option>
              <option value="development">Development</option>
              <option value="databases">Databases</option>
              <option value="seo">Search Engines</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <textarea
            name="desc"
            placeholder="A Short Description"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[60px] resize-y"
          />
          <div>
            <label className="font-medium text-gray-700 mb-2 block">Content:</label>
            <ReactQuill theme="snow" className="bg-white rounded-md" />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors mt-4"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default Write
