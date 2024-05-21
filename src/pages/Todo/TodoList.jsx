import React from 'react'
import { Link } from 'react-router-dom'

export default function TodoList() {
  return (
    <div>
        <table>
            <thead>
                <th>#</th>
                <th>Task</th>
                <th>Action
                    <Link to="/add-todo"><button>Add</button></Link>
                </th>
            </thead>
            <tbody>
                <td>1</td>
                <td>task 1</td>
                <td>
                    <button>View</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tbody>
        </table>
    </div>
  )
}
