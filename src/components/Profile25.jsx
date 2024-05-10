import React from 'react'

export default function Profile25({data}) {
    let title ="Profile25"
  return (
    <div>
        <h1 style={{color:'red'}}>{title}</h1>
        <p>Id:{data.id}</p>
        <p>Name:{data.name}</p>
        <p>Age:{data.age}</p>
    </div>
  )
}
