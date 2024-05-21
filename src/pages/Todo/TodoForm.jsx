import React, { useState,useId } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function TodoForm() {
  const [todo,setTodo]=useState('');
  const tempId=useId();
  const addTodo =(e)=>{
    let oldStorage =localStorage.getItem('todo');
    let newTodo ={
      id:uuidv4(),
      task:todo
    }
    if(oldStorage==null){
      localStorage.setItem('todo',JSON.stringify([newTodo]))
    }else{
      let parsedTodo =JSON.parse(oldStorage)
      let newList =[...parsedTodo,newTodo]
      console.log(newList);
      localStorage.setItem('todo',JSON.stringify(newList))
    }
    // console.log(oldStorage);
    // console.log(oldStorage);

    // localStorage.setItem('todo',)
  }
  return (
    <div className='todo-form'>
      {/* <form> */}
          <label>Task name</label>
          <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
          <button onClick={addTodo}>Add to list</button>
      {/* </form> */}
    </div>
  )
}
