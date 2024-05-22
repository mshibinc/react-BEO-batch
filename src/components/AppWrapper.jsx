import React from 'react'
import { Link, Outlet } from "react-router-dom";
export default function AppWrapper() {
    return (
        <div>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="blog">Blog</Link>
                <Link to="todo">ToDo</Link>
                <Link to="users">Users</Link>

            </div>
            <Outlet />
            <footer className='footer'>
                <p>Footer</p>
            </footer>
        </div>
    )
}
