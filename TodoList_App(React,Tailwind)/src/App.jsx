import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
const { v4: uuidv4 } = require('uuid');

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {

  };

  const handleDelete = () => {

  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    todos.filter(id)
  }
  
  return (
    <>
      <Navbar />

      <div className="container mx-auto my-5 p-5 rounded-xl bg-blue-300 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold '>Add a Todo</h2>
          <input onChange={handleChange} value={todo} className='bg-white rounded-md w-1/2' type="text" />
          <button onClick={handleAdd} className=' text-white text-sm font-bold bg-blue-600 hover:bg-blue-950 px-3 py-1 mx-6 rounded-md'>Add</button>
        </div>

        <h2 className=' font-bold text-lg text-center'>Your Todo App</h2>

        <div className="todos">
          {todos.map(item => {

            return (

              <div key={todo} className="todo flex w-1/2 my-3 justify-between ">
                <input onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} name={todo.id} id='' />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                <div className="buttons ">
                  <button onClick={handleEdit} className='text-white text-sm font-bold bg-blue-600 hover:bg-blue-950 px-3 py-1 mx-1 rounded-md'>Edit</button>
                  <button onClick={handleDelete} className='text-white text-sm font-bold bg-blue-600 hover:bg-blue-950 px-3 py-1 mx-1 rounded-md'>Delete</button>
                </div>
              </div>

            )
          })}
        </div>

      </div>
    </>
  )
}

export default App
