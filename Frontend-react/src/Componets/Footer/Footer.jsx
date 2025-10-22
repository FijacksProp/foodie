import React from "react";
import { Link } from 'react-router-dom';
import client1 from '../../assets/client1.jpg'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-10 px-4 md:px-20 overflow-hidden  bg-white shadow-2xl dark:bg-color-brown  z-30">
      <div className=' mx-auto flex flex-col md:flex-row justify-between items-start'>
         <div className='mb-8 md:mb-0 w-full md:w-1/4 md:m-0'>
        
        <div className='flex gap-2 items-center'>
          <img src={client1} alt="" className='w-9 h-9 rounded-full' />
          <p className='text-xl text-orange-600 dark:text-white font-semibold'>Foodie</p>
          </div>
          <p className='mt-3 dark:text-white'>Enjoy delicious food with fast delivery. Our customers love our great service!</p>
          <div className="flex gap-3 mt-2 text-xl dark:text-gray-300">
            <p>Follow Us</p>
            <FaFacebook className='mt-1 dark:text-white cursor-pointer'/>
            <FaTwitter className='mt-1 dark:text-white cursor-pointer'/>
            <FaInstagram className='mt-1 dark:text-white cursor-pointer'/>
            <FaTiktok className='mt-1 dark:text-white cursor-pointer'/>
          </div>
        </div>
        <div className='flex item justify-between w-full md:w-1/4'>
          <div className='flex flex-col space-y-1'>
            <h3 className='text-lg text-orange-600 dark:text-color-yellow'>Quick Link</h3>
            <ul className='flex flex-col space-y-1 dark:text-color-yellow'>
              <Link to={'/'} className=''>Home</Link>
              <Link to={'/Menu'}>Menu</Link>
              <Link to={'/Favorite'}>Favorite</Link>
              <Link to={'/Contact'}>Contact</Link>
            </ul>
          </div>

          <div className='flex flex-col space-y-1'>
            <h3 className='text-lg text-orange-600 dark:text-color-yellow'>Customer Service</h3>
            <ul className='flex flex-col space-y-1 dark:text-color-yellow'>
              <Link to={'/'} className=''>FAQ</Link>
              <Link to={'/'}>Shipping Info</Link>
              <Link to={'/'}>Returns</Link>
              {/* <Link to={'/Favorite'}>Order Status</Link> */}
              <Link to={'/'}>Private Policy</Link>
            </ul>
          </div>

          

      </div>
      <div className="w-full md:w-1/3 mt-4">
             <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Join Our Foodie Community</h3>
             <p className="text-orange-600 dark:text-color-yellow mb-4 max-w-80">Stay updated with exclusive recipes, dining tips, and special offers delivered straight to your inbox weekly</p>
             <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Enter your email" className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full" />
              <button className="py-3 px-6 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors duration-200 dark:bg-color-yellow dark:text-color-brown">Subscribe</button>
             </div>
          </div>
      
          



            </div>
        <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
            copyright &copy;  © 2025 Foodie. All rights reserved. Crafted with passion for food lovers.
          </div>
      

    </footer>
  );
}

export default Footer;
