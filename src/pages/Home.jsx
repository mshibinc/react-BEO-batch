import React from 'react'
import { useSelector } from 'react-redux'
export default function Home() {
  const { users } = useSelector((state) => state.user);
  console.log(users, "----usersusersusers");
  return (
    <div>Home

      <>
        {users.map(itm => (
          <div key={itm.id}>
            <h6>{itm.name}</h6>
          </div>
        ))}
      </>
    </div>
  )
}
