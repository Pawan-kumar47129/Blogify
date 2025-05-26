import React from 'react'
import Comment from './Comment'
const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className='flex items-center justify-between gap-8 w-full mb-2'>
        <textarea name="" id="" placeholder='write a comment...' className=' w-full p-4 rounded-xl bg-gray-300'/>
        <button className='bg-blue-800 px-4 py-3 text-white font-medium rounded-xl'>send</button>
      </div>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  )
}

export default Comments
