import React, { useState, useId, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function TodoForm({tiggerAction,todoUpdate,setTodoUpdate}) {
  const [todo, setTodo] = useState('');
  const [updateData,setUpdatedata]=useState(todoUpdate);
  useEffect(()=>{
    if(todoUpdate!=null){
      setTodo(todoUpdate.task)
    }else{
      setTodo('')
    }
  },[todoUpdate])
  const addTodo = (e) => {
    e.preventDefault()
    if (todo) {
      let oldStorage = localStorage.getItem('todo');
      let newTodo = {
        id: uuidv4(),
        task: todo
      }
      if (oldStorage == null) {
        localStorage.setItem('todo', JSON.stringify([newTodo]))
      } else {
        let parsedTodo = JSON.parse(oldStorage)
        let newList = [...parsedTodo, newTodo]
        console.log(newList);
        localStorage.setItem('todo', JSON.stringify(newList))
        setTodo('')
      }
      tiggerAction()
      // console.log(oldStorage);
      // console.log(oldStorage);

      // localStorage.setItem('todo',)}
    }else{
      alert('Enter Task')
    }
  }
  const clearUpdate =()=>{
    setTodoUpdate(null)
  }
  const updateTodo =(e)=>{
    e.preventDefault();
    console.log(todo);
    let oldStorage = localStorage.getItem('todo');
    let parsedTodo = JSON.parse(oldStorage);
    // let toUpdate =parsedTodo.filter(itm=>itm.id==todoUpdate.id);
    let newArray=parsedTodo.map(itm=>{
      if(itm.id==todoUpdate.id){
        return {
          id:itm.id,
          task:todo
        }
      }else{
        return itm;
      }
    });
    localStorage.setItem('todo', JSON.stringify(newArray))
    tiggerAction();
    clearUpdate()
    
    // let index = parsedTodo.map(function (e) {
    //   return e.id
    // }).indexOf(todoUpdate.id);

  }
  return (
    <div className='todo-form'>
      <form>
        <label>Task name</label>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={todoUpdate==null?addTodo:updateTodo}>{todoUpdate==null?"Add to list":"Update list"}</button>
        {todoUpdate!=null&&<button onClick={clearUpdate}>Cancel</button>}

      </form>
    </div>
  )
}
