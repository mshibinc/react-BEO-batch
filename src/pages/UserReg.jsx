import React, { useState } from 'react'

export default function UserReg() {
    const [name, setName] = useState('Shibin');
    const [age, setAge] = useState('');
    const [place, setPlace] = useState('');

    return (
        <div>
            <h2>User Reg</h2>
            <p>{name}</p>
            <label>Name: <input type='text'
                value={name}
                onChange={(e) => { setName(e.target.value) }} /></label> <br />
            <label>Age: <input type='number' /></label> <br />
            <label>Place: <input type='text' /></label>
        </div>
    )
}
