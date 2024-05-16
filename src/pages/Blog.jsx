import React from 'react'
import BlogCard from '../components/BlogCard'
import blogData from "../data/blogData.json"
export default function Blog() {
  return (
    <div className='blog-wrapper'>
        {blogData.map((itm)=>(
          <BlogCard key={itm.id}  data={itm}/>
        ))}
       
    </div>
  )
}
