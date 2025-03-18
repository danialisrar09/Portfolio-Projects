import { useState } from 'react';
import Navbar  from './components/Navbar/Navbar';     
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container mx-auto">
        <div className="bg-indigo-600">
          <h1>Your Todo App</h1>
        </div>
      </div>
    </>
  )
}

export default App
