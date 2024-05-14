import React from 'react'

export default function Inputs({ ...rest }) {
  return (
    <input {...rest} style={{ borderColor: 'green', height: '20', borderRadius: 10, margin: 10 }} />
  )
}
