import { useAuth, useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Upload from "../components/Upload";

const Write = () => {
  const [cover, setCover] = useState();
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    image && setValue((prev) => prev + `<p><image src="${image.url}"/></p>`);
  }, [image]);
  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newTodo) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newTodo, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: (res) => {
      toast.success(res.data.message);
      navigate(`/${res.data.data.slug}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const handleSubmit = (eve) => {
    eve.preventDefault();
    const formData = new FormData(eve.target);
    const data = {
      img: cover?.url || null,
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    mutation.mutate(data);
  };
  if (!isLoaded) {
    return <Loading />;
  }
  if (isLoaded && !isSignedIn) {
    navigate("/login");
  }
  return (
    <div className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col items-center py-8 px-2 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-blue-800 text-center">
          Create a New Post
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Upload
            type="image"
            setProgress={setProgress}
            setData={setCover}
            setUploading={setUploading}
          >
            <button
              disabled={uploading}
              type="button"
              className={`flex items-center gap-2 self-start px-4 py-2 rounded-md font-medium transition-colors
                ${uploading
                  ? "bg-blue-200 text-blue-400 cursor-not-allowed opacity-60"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 10V6a4 4 0 10-8 0v4M12 16v-4m0 0l-2 2m2-2l2 2"
                />
              </svg>
              Add a Cover Image
            </button>
          </Upload>
          <input
            type="text"
            placeholder="My Awesome Story"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            name="title"
            required
            disabled={uploading}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="cat" className="font-medium text-gray-700">
              Choose a Category:
            </label>
            <select
              name="category"
              id="cat"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              disabled={uploading}
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
            required
            disabled={uploading}
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Upload
                type="image"
                setProgress={setProgress}
                setData={setImage}
                setUploading={setUploading}
              >
                <button
                  disabled={uploading}
                  type="button"
                  className={`flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-md font-medium transition-colors
                    ${uploading
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:bg-green-200 cursor-pointer"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4-4a3 3 0 014 0l4 4M4 16V8a2 2 0 012-2h12a2 2 0 012 2v8M4 16h16"
                    />
                  </svg>
                  Image
                </button>
              </Upload>
              <Upload
                type="video"
                setProgress={setProgress}
                setData={setVideo}
                setUploading={setUploading}
              >
                <button
                  disabled={uploading}
                  type="button"
                  className={`flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-md font-medium transition-colors
                    ${uploading
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:bg-purple-200 cursor-pointer"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 18h16M4 6v12"
                    />
                  </svg>
                  Video
                </button>
              </Upload>
            </div>
            <div className="flex-1">
              <ReactQuill
                value={value}
                onChange={setValue}
                theme="snow"
                className="bg-white rounded-md"
                readOnly={uploading}
              />
            </div>
          </div>
          <button
            disabled={
              mutation.isPending ||
              (progress > 0 && progress < 100) ||
              uploading
            }
            type="submit"
            className={`bg-blue-600 text-white font-semibold px-6 py-3 rounded-md mt-4 transition-colors
              hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed`}
          >
            {mutation.isPending ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Publishing...
              </span>
            ) : (
              "Publish Post"
            )}
          </button>
          <div className="text-xs text-gray-500">
            {progress > 0 && progress < 100 && `Uploading: ${progress}%`}
          </div>
          {mutation.isError && (
            <span className="bg-red-400 text-white px-2 py-1 rounded">
              {mutation.error.message}
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Write;
