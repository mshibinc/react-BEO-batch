import React, { useReducer } from 'react'

const formState = [
  {
    name: "shibin",
    age: 27,
  },
  {
    name: "Amar",
    age: 27,
  }
]
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state = [...state, action.data]

    default:
      return state
  }
}
export default function About() {
  const [users, dispatch] = useReducer(reducer, formState);
  const adduserTo = () => {
    dispatch({ type: 'add', data: { name: 'Sonu', age: 12 } })
  }
  const Usercard = ({ data }) => {
    return (<div style={{padding:'10px',margin:'10px',backgroundColor:'#fafafa'}}>
      <h3>Name:{data.name}</h3>
      <p>Age:{data.age}</p>
    </div>)
  }
  return (
    <>
      <div>About</div>
      <button onClick={adduserTo}>Add user</button>
      {users.map((itm,i)=>(
        <Usercard data={itm} key={i}/>
      ))}

    </>

  )
}
