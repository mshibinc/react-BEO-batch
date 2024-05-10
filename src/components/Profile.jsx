import React from 'react'

export default function Profile({data}) {
    let title ="Profile above 25"
  return (
    <div>
        <h1>{title}</h1>
        <p>Id:{data.id}</p>
        <p>Name:{data.name}</p>
        <p>Age:{data.age}</p>
    </div>
  )
}
