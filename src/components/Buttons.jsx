import React from 'react'

export default function Buttons({data,...rest}) {
    const btnpress =()=>{
        let a=1+2;
        console.log(a);
        if(a==3){
            data.showUserData()
        }else{
            alert("Not allow")
        }
    }
    console.log(data.user,"-------");
  return (
    <button {...rest} onClick={btnpress}>name</button>
  )
}
