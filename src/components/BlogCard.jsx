import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({data}) {
  return (
    <div className='blog-card'>
        <h4>{data.title}</h4>
        <p>{data.blog}</p>
        <Link to={`/blog-details/${data.id}`}>Read more</Link>
    </div>
  )
}
