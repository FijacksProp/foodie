import React, { useContext } from 'react'
import { ShopContext } from '../../Hooks/ShopContext/ShopContext'
import { useNavigate } from 'react-router-dom'
import CartTile from '../../Componets/CartTile/CartTile'

function CartPage() {
  const {cartItem} = useContext(ShopContext)
  const navigate = useNavigate()
 return (
  <div className='min-h-screen py-20 bg-cover bg-center dark:bg-gradient-to-br shadow-sm dark:bg-color-browwn'>
    <div className='max-w-6xl mx-auto max-md:max-w-xl p-4'>
      <h1 className='text-3xl font-bold mb-4 text-center text-orange-600 dark:text-text-color-yellow mt-8 dark:text-color-yellow'>Your Cart</h1>
      <div className='grid md:grid-cols-3 gap-8  mt-12'>
        <div className='md:col-span-2 space-y-4'>
          {cartItem.length ?
          cartItem.map((singleCartFood,index) => (
              <CartTile singleCartFood = {singleCartFood} key={index}/>
            ))
          : <h1 className="text-bold text-2xl text-orange-600 dark:text-color-yellow justify-center flex">No items available in cart! please add some items</h1>}
        </div>
        <div className='bg-gray-200 dark:bg-color-yellow rounded-sm p-4 h-max'>
          <h3 className='text-xl font-extrabold dark:text-color-brown border-b border-gray-700 pb-2'>Order Summary</h3>
          <ul className='text-gray-700 mt-4 space-y-2'>
            <p className='flex flex-wrap gap-4 text-sm font-bold'>
              Total <span>${cartItem.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}</span> 
            </p>
          </ul>
          <div className='mt-5 flex gap-2'>
            <button disabled={cartItem.length === 0} className={`py-2 px-4 bg-orange-600 dark:bg-color-browwn text-white font-extrabold rounded-md disabled:opacity-65`} onClick={()=>navigate('/checkout')}>Check Out</button>
            <button onClick={() => navigate('/Menu')} className='py-2 px-4 bg-orange-600 dark:bg-color-browwn text-white font-extrabold rounded-md'>Countinue Shopping</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartPage



    