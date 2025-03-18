import React from 'react'

const Navbar = () => {
  return (

    <nav className='flex justify-between items-center bg-slate-700 text-white py-2x'>
        <div className="logo mx-20">
            <img className='cursor-pointer w-12 h-12' src="src\assets\Icons\list.png" alt="" />
        </div>
        <ul className="flex gap-10 mx-20">
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar