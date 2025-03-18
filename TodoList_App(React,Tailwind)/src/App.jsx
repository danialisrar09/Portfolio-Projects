import { useState } from 'react';
import Navbar  from './components/Navbar/Navbar';     
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 p-5 rounded-xl  bg-blue-950">
        <div className="bg-blue-300 ">
          <h1 className='font-bold text-xl text-center'>Your Todo App</h1>
        </div>
      </div>
    </>
  )
}

export default App
