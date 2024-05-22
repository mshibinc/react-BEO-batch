import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TodoForm from './TodoForm'

export default function TodoList() {
    const [allTodo, setAllTodo] = useState([])
    const [todoUpdate, setTodoUpdate] = useState(null)
    const [triggerTodo, setTriggerTodo] = useState(true)
    useEffect(() => {
        getdata()
    }, [triggerTodo])
    const getdata = () => {
        let oldStorage = localStorage.getItem('todo');
        if (oldStorage != null) {
            let todtoArr = JSON.parse(oldStorage)
            setAllTodo(todtoArr);
        }
    }
    const tiggerAction = () => {
        setTriggerTodo(!triggerTodo)
    }
    const deleteTodo =(tId)=>{
        let oldStorage = localStorage.getItem('todo');
        localStorage.removeItem('todo');
        let parsedTodo = JSON.parse(oldStorage);
        let toUpdate =parsedTodo.filter(itm=>itm.id!=tId);
        localStorage.setItem('todo', JSON.stringify(toUpdate));
        getdata()
    }
    const clearAll=()=>{
        // let oldStorage = localStorage.getItem('todo');
        localStorage.removeItem('todo');
        localStorage.setItem('todo', JSON.stringify([]));
        getdata()
    }
    return (
        <div>
            <TodoForm tiggerAction={tiggerAction} todoUpdate={todoUpdate} setTodoUpdate={setTodoUpdate}/>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Action
                        <button onClick={clearAll}>Clear all</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allTodo.map((itm, i) => (
                        <tr key={itm.id}>
                            <td>{i + 1}</td>
                            <td>{itm.task}</td>
                            <td>
                                <button>View</button>
                                <button onClick={()=>setTodoUpdate(itm)}>Edit</button>
                                <button onClick={()=>deleteTodo(itm.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
