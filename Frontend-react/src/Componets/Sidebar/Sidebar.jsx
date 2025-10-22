import React, { useContext } from 'react'
import { ShopContext } from '../../Hooks/ShopContext/ShopContext'
import { Link, useNavigate } from "react-router-dom";
import useDarkMode from '../../Hooks/DarkMode/useDarkMode'
import lightIcon from '../../assets/icon-light-theme.svg'
import darkIcon from '../../assets/icon-dark-theme.svg';

function Sidebar() {
  const {isSidebar, setIsSidebar} = useContext(ShopContext)
  const navigate = useNavigate()



    const [theme, toggleTheme] = useDarkMode()


 function handleMode() {
    toggleTheme()
}
function handleSidebar() {
  setIsSidebar(!isSidebar)
}
function handleSidebarForLogin() {
  setIsSidebar(false)
  navigate('/LoginPage')
}
  return (
    <>
    {isSidebar  && (
      <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={() => setIsSidebar(false)}
        />
    )}
    <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-md dark:bg-color-brown border-r border-white dark:border-color-brown
      z-50 px-8 py-7 transform transition-transform duration-300 ease-in-out ${isSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col gap-12 justify-center">
          <div>
            <h1 className="text-2xl text-orange-600 font-bold dark:text-color-yellow">Foodie</h1>
          </div>
          <ul className='flex flex-col gap-6'>
              <Link to={'/'} onClick={()=> handleSidebar()} className="text-orange-600 dark:text-color-yellow hover:opacity-80 text-[22px] font-semibold">
              Home
            </Link>
            <Link to={'/Menu'} onClick={()=> handleSidebar()} className="text-orange-600 dark:text-color-yellow hover:opacity-80 text-[22px] font-semibold">
              Menu
            </Link>
            <Link to={'/Favorite'} onClick={()=> handleSidebar()} className="text-orange-600 dark:text-color-yellow hover:opacity-80 text-[22px] font-semibold">
              Favorite
            </Link>
            <Link to={'/Contacts'} onClick={()=> handleSidebar()} className="text-orange-600 dark:text-color-yellow hover:opacity-80 text-[22px] font-semibold">
              Contact
            </Link>
          </ul>
                    <button onClick={()=> handleSidebarForLogin()} className='lg:block md:block bg-orange-600 dark:bg-white text-color-brown px-3 py-2 text-sm rounded-full hover:opacity-80 font-bold'>Login</button>
        </div>
        <img src={theme === 'dark' ? lightIcon : darkIcon} alt="" className="w-8 h-8 mt-2 cursor-pointer absolute bottom-12 left-12" onClick={handleMode}/>
      </div>
    </>
  )
}

export default Sidebar