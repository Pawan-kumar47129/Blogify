import React from 'react'
import Image from './Image'

const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8' >
      <div className='flex items-center gap-4'>
        <img src="userImg.jpeg"  className="w-10 h-10 rounded-full object-cover"/>
        <span className='font-medium'>Jone Deo</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>
      <div className='mt-4'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eaque iure ad debitis maxime reprehenderit explicabo distinctio labore, quam totam.</p>
      </div>
    </div>
  )
}

export default Comment
