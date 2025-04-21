import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    if(storedTodos){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const savetoLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  } 

  const ToggleFinished = (params) => {
    setshowFinished(!showFinished )
  }
  

  const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo);
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos);
    savetoLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos);
    savetoLS();

  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("");
    console.log(todos); 
    savetoLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    savetoLS();

  }
  
  return (
    <>
      <Navbar />

      <div className="container mx-auto my-5 p-5 rounded-xl bg-blue-300 min-h-[80vh] w-1/2">
        <h1 className="text-center text-3xl font-bold ">DailyTodo - Manage your tasks on the go!</h1>
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold pb-5'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} className='bg-white rounded-md w-full py-3 ' type="text" />
          <button onClick={handleAdd} disabled={todo.length<=1} className=' text-white text-sm font-bold bg-blue-600 hover:bg-blue-950 px-3 py-1 my-2 w-full rounded-md'>Save</button>
        </div>
        <input onClick={ToggleFinished} type="checkbox" checked={showFinished} /> Show Finished
        <h2 className=' font-bold text-lg'>Your Todo App</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>Empty Todo list</div> }

          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-1/2 my-3 justify-between ">
                <div className='flex gap-5'>
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e)=>{handleEdit(e, item.id)}} className='text-white text-sm font-bold bg-blue-600 hover:bg-blue-950 px-3 py-1 mx-1 rounded-md'>Edit</button>
                  <button onClick={(e)=>{handleDelete(e, item.id)}} className='text-white text-sm font-bold bg-blue-600 hover:bg-blue-950 px-3 py-1 mx-1 rounded-md'>Delete</button>
                </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
