import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogData from "../data/blogData.json"
export default function BlogDetails() {
    const {id} =useParams();
    const [blog,setBlog]=useState({});
    useEffect(()=>{
      getData()
    },[])
    const getData=()=>{
     let blogdata= blogData.filter((itm)=>itm.id==id)
     setBlog(blogdata[0]);
    }
    // console.log(blog,"blog---------");
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.blog}</p>
    </div>
  )
}
