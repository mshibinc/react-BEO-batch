import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
    const {id} =useParams();
    console.log(id);
  return (
    <div>BlogDetails</div>
  )
}
