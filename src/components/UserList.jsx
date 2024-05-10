import React from 'react'
import userdata1 from "../data/users.json"
import Profile from './Profile'
import Profile25 from './Profile25'
export default function UserList() {
    return (
        <div>
            {
                userdata1.map((item, i) => {
                    return item.age > 25 ?
                        <Profile data={item} key={item.id} /> :
                        <Profile25 data={item} key={item.id} />
                }
                )
            }
        </div>
    )
}
