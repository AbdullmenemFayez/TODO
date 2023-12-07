
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]) //
  const inputRef = useRef() //
  const handelAddToDo  = ()=>{
    const inputTask = inputRef.current.value
    const newItem = {completed : false,inputTask}
    setTodo([...todo,newItem])
    inputRef.current.value ="";

  }
  const TaskIsDone = (index)=>{
     const newToDoList = [...todo]
     newToDoList[index].completed = !newToDoList[index].completed
     setTodo(newToDoList)
  }

  return (
    <div className="App">
      
      <h1>To DO List</h1>
      <div className='ToDO'>
      <div className='inputTask'>
      <input ref = {inputRef} placeholder='Enter item!' className="task-input" required/>
      <button className='addTask' onClick={handelAddToDo}>Add</button>
      </div>
      <ul className='TaskList'>
        {
          todo.map((newItem,index) => {
            return (<li  key={index} onClick={() =>TaskIsDone(index)}>{newItem.inputTask + (newItem.completed == false ? "":" ✅")}</li>)
          }
          )
        }
      </ul>
      </div>
    </div>
  );
}

export default App;
