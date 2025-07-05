import { useAuth, useUser } from '@clerk/clerk-react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import {useMutation} from "@tanstack/react-query";
import axios from "axios"
import { useState } from 'react';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';
import {useNavigate } from 'react-router';
import {IKContext, IKUpload} from "imagekitio-react"
 const authenticator = async () => {
        try {
            // Perform the request to the upload authentication endpoint.
            const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);
            if (!response.ok) {
                // If the server response is not successful, extract the error text for debugging.
                const errorText = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorText}`);
            }

            // Parse and destructure the response JSON for upload credentials.
            const data = await response.json();
            const { signature, expire, token, publicKey } = data;
            return { signature, expire, token, publicKey };
        } catch (error) {
            // Log the original error for debugging before rethrowing a new error.
            console.error("Authentication error:", error);
            throw new Error("Authentication request failed");
        }
      }
const Write = () => {

  const { isLoaded, isSignedIn } = useUser();
  const {getToken}=useAuth()
  const [value,setValue]=useState("");
  const navigate=useNavigate();
  const mutation = useMutation({
    mutationFn: async (newTodo) => {
      const token= await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newTodo,{
        headers:{"Authorization":`Bearer ${token}`}
      })
    },
    onSuccess:(res)=>{
      toast.success(res.data.data.message);
      navigate(`/${res.data.data.slug}`)
    }
  })
  const handleSubmit=(eve)=>{
    eve.preventDefault();
    const formData=new FormData(eve.target);
    const data={
      title:formData.get("title"),
      category:formData.get("category"),
      desc:formData.get("desc"),
      content:value
    };
    mutation.mutate(data);
  }
  const onError=(error)=>{
    console.log(error);
  }
  const onSuccess=(res)=>{
    console.log(res);
  }
  if (!isLoaded) {
    return <Loading/>
  }
  if (isLoaded && !isSignedIn) {
    return <div className="text-center py-10 text-red-500 font-semibold">You should login!</div>
  }
  return (
    <div className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col items-center py-8 px-2 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-blue-800 text-center">Create a New Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* <button
            type="button"
            className="self-start bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-200 transition-colors"
          >
            Add a Cover Image
          </button> */}
          <IKContext publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
          authenticator={authenticator}
          >
            <IKUpload
            //fileName="test-upload.png"
            useUniqueFileName={true}
            folder='BlogsApp'
            onError={onError}
            onSuccess={onSuccess}
            />
          </IKContext>
          <input
            type="text"
            placeholder="My Awesome Story"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            name="title"
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="cat" className="font-medium text-gray-700">Choose a Category:</label>
            <select
              name="category"
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
            <ReactQuill
              value={value}
              onChange={setValue}
            theme="snow" className="bg-white rounded-md" />
          </div>
          <button disabled={mutation.isPending}
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors mt-4 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {mutation.isPending?"loading...":"Publish Post"}
          </button>
          {mutation.isError && <span className='bg-red-400'>{mutation.error.message}</span>}
        </form>
      </div>
    </div>
  )
}

export default Write
