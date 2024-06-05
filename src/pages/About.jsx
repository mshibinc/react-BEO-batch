import React, { useReducer, useRef } from 'react'

const formState = {
  users: [
    {
      name: "shibin",
      age: 27,
    },
    {
      name: "Amar",
      age: 27,
    },
  ],
  place: []

}
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state = { ...state, users: [...state.users, action.data] }
    case 'addPlace':
      return state = { ...state, place: [...state.place, action.data] }
    default:
      return state
  }
}
export default function About() {
  const [reducerState, dispatch] = useReducer(reducer, formState);
  const placeref =useRef()

  // console.log(reducerState.place);
  const adduserTo = () => {
    dispatch({ type: 'add', data: { name: 'Sonu', age: 12 } })
  }
  const Usercard = ({ data }) => {
    return (<div style={{ padding: '10px', margin: '10px', backgroundColor: '#fafafa' }}>
      <h3>Name:{data.name}</h3>
      <p>Age:{data.age}</p>
    </div>)
  }
  const addPlace = () => {
    dispatch({ type: 'addPlace', data: placeref.current.value })
  }
  return (
    <>
      <div>About</div>
      <button onClick={adduserTo}>Add user</button>
      <br/>
      <input type='text' ref={placeref}/>
      <br/>
      <button onClick={addPlace}>Add Place</button>
      {reducerState.users.map((itm, i) => (
        <Usercard data={itm} key={i} />
      ))}

    </>

  )
}
