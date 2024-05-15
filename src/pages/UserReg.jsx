import React, { useState, useRef, useEffect } from 'react'
import Inputs from '../components/Inputs';
import Buttons from '../components/Buttons';

export default function UserReg() {
    // const [name, setName] = useState('Shibin');
    // const [age, setAge] = useState('');
    // const [place, setPlace] = useState('');
    const [userData, setUserdata] = useState({
        name: "",
        age: 0,
        place: "",
    });
    useEffect(() => {
        console.log("onload");
        setUserdata({
            name: "shibn",
            age: 27,
            place: "PMNA",
        })
    }, [])
    const placeRef = useRef();
    const nameRef = useRef();
    const alertplace = () => {
        console.log('my place', ":", placeRef.current.value);
    }
    const showUserData = () => {
        console.log(userData);
    }
    return (
        <div>
            <h2>User Reg</h2>
            <p>Name:{userData.name}</p>
            <p>Age:{userData.age}</p>

            <label>Name:
                <Inputs value={userData.name} type='text'
                    onChange={(e) => { setUserdata({ ...userData, name: e.target.value }) }} />
                {/* <input type='text' ref={nameRef}
                    value={userData.name}
                    onChange={(e) => { setUserdata({ ...userData, name: e.target.value }) }} /> */}
            </label> <br />
            <label>Age:
                <Inputs value={userData.age}
                    type='number' onChange={(e) => { setUserdata({ ...userData, age: e.target.value }) }} />
            </label> <br />
            <label>Place:
                <Inputs type='text' defaultValue={userData.place} ref={placeRef} /></label>
            <button onClick={() => alertplace()}>Alert place</button>
            {/* <Mybutton name={"save"} color={0}/> */}
            <Buttons userdata={showUserData} data={{
                showUserData, user:userData
            }} />
        </div>
    )
}
