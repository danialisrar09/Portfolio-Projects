import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { Link,NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
// import { setShowSearch } from '../context/ShopContext'


const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <Link to={'/'}><img src={ assets.logo } className='w-40' alt=''/></Link>

            <ul className='hidden sm:flex gap-10 text-sm text-gray-700'>
                <NavLink to='/' className="flex flex-col items-center gap-1">
                    <p className='hover:text-black'>HOME</p>

                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>
                <NavLink to='/collection' className="flex flex-col items-center gap-1">
                    <p className='hover:text-black'>COLLECTION</p>

                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>
                <NavLink to='/about' className="flex flex-col items-center gap-1">
                    <p className='hover:text-black'>ABOUT</p>

                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1">
                    <p className='hover:text-black'>CONTACT</p>

                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>
                
            </ul>

            <div className='flex items-center gap-8'>
                <img onClick={() => setShowSearch(true)} src={ assets.search_icon } className='w-5 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img src={ assets.profile_icon } className='w-5 cursor-pointer' alt="" />

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'> 
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>

                </div>

                <Link to="/cart" className='relative' >
                    <img src={ assets.cart_icon } className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* Sidebar for mobile view */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 pl-4 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <hr />
                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6' to='/' >HOME</NavLink>
                    <hr />
                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6' to='/about' >ABOUT</NavLink>
                    <hr />
                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6' to='/contact' >CONTACT</NavLink>
                    <hr />
                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6' to='/collection' >COLLECTION</NavLink>
                    <hr />
                </div>
            </div>

        </div>
    )
}

export default Navbar