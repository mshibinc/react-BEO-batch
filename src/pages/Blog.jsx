import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import blogData from "../data/blogData.json"
export default function Blog() {
  const [searchKey, setSearchKey] = useState('');
  const [filterBlog, setFilterBlog] = useState(blogData);
  useEffect(() => {
    filterData()
  }, [searchKey])
  const filterData = () => {
    // let blogdata = blogData.filter((itm) => itm.title == searchKey)
    // console.log(blogdata, new Date());
    let blogdata2 = blogData.filter(itm => {
      return itm.title.toLocaleLowerCase().includes(searchKey.toLowerCase())
    })
    if (searchKey) {
      setFilterBlog(blogdata2)
    }else{
      setFilterBlog(blogData)
    }
  }
  return (
    <>
      <div className='search'>
        <input type='text' value={searchKey} placeholder='Search....' onChange={(e) => setSearchKey(e.target.value)} />
      </div>
      <div className='blog-wrapper'>

        {filterBlog.map((itm) => (
          <BlogCard key={itm.id} data={itm} />
        ))}

      </div>
    </>

  )
}
