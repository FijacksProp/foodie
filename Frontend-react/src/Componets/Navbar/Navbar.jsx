import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import useDarkMode from '../../Hooks/DarkMode/useDarkMode'
import lightIcon from '../../assets/icon-light-theme.svg';
import darkIcon from '../../assets/icon-dark-theme.svg';
import { ShopContext } from '../../Hooks/ShopContext/ShopContext';


function Navbar() {

  const [theme, toggleTheme] = useDarkMode();
  const {handleMenu, cartItem} = useContext(ShopContext);
  const navigate = useNavigate()

 function handleMode() {
    toggleTheme();
}
  

     


  return (
    <div className='fixed top-0 left-0 w-full z-50'>
       
        <nav className='mx-auto flex md:gap-12 justify-between py-4 px-6 md:px-20 lg:px-32 bg-white shadow-md dark:bg-color-brown z-50'>
          {/* left side */}
          <div className="flex gap-4">
            <div onClick={() => handleMenu()} className='text-orange-600 dark:text-color-yellow text-2xl mt-2 cursor-pointer md:hidden'>
                    {<FaBars/>}
                </div>
                
                  <img src={theme === 'dark' ? lightIcon : darkIcon} alt="" className="hidden md:block w-5 h-5 mt-2 cursor-pointer" onClick={handleMode}/>
                
            <h2 className='text-xl font-bold text-orange-600 dark:text-color-yellow cursor-pointer mt-1'>Foodie</h2>

          </div>
          {/* center */}
          <ul className='hidden md:flex gap-7'>
                <Link to={'/'} className='text-orange-600 dark:text-color-yellow hover:opacity-80 text-[17px] font-semibold'>Home</Link>
                <Link to={'/Menu'} className='text-orange-600 dark:text-color-yellow hover:opacity-80 text-[17px] font-semibold'>Menu</Link>
                <Link to={'/Favorite'} className='text-orange-600 dark:text-color-yellow hover:opacity-80 text-[17px] font-semibold'>Favorite</Link>
                <Link to={'Contacts'} className='text-orange-600 dark:text-color-yellow hover:opacity-80 text-[17px] font-semibold'>Contact</Link>
            </ul>
            <div className='flex gap-5'>
               <div onClick={()=>navigate('/Cart')} className='relative cursor-pointer text-orange-600 dark:text-white mt-2'>
                <FaShoppingCart className='text-[26px]'/>
                <p className='absolute bg-orange-100 text-orange-600 dark:text-color-brown text-[12px] -right-2 h-5 flex rounded-md w-5 items-center justify-center -top-2'>{cartItem.reduce((total, item) => total + item.quatity, 0)}</p>
            </div>
             <Link to={'/LoginPage'}>
                <button  className='hidden lg:block md:block bg-orange-600 dark:bg-color-yellow text-white dark:text-color-brown px-8 py-2 text-sm rounded-full hover:opacity-80 font-medium'>Login</button>
                </Link>
            </div>
        </nav>
    </div>
  )    
}

export default Navbar


// className='text-orange-600 dark:text-color-yellow hover:opacity-80 text-[17px] font-semibold

// className="hidden lg:block md:block bg-orange-600 dark:bg-color-yellow  text-white dark:text-color-brown px-8 py-2 text-sm rounded-full hover:opacity-80 font-bold