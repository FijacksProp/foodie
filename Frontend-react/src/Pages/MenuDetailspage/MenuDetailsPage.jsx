import React, { useContext } from 'react'
import { ProductsData } from '../../assets/data'
import { useNavigate, useParams } from 'react-router-dom'
import { ShopContext } from '../../Hooks/ShopContext/ShopContext'
// import { ShopContext } from '../../Componets/ShopContext/ShopContext'


function MenuDetailspage() {
     const {id} = useParams()
        const {handleAddtoCart} = useContext(ShopContext)
        const navigate = useNavigate()
        const product = ProductsData.find(product =>{
            return product.id === parseInt(id)
        }) //mm
  return (
    <div className="max-w-screen sm:px-6 py-24 mt-16 dark:bg-color-browwn">
      <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
        <div className='w-full lg:w-1/2 p-5'>
          <h1 className='text-3xl font-bold text-center my-4 dark:text-color-yellow'>{product.title}</h1>
          <img src={product.image} alt={product.title} className='w-full h-auto max-w-full rounded-lg shadow-lg mt-8'/>
        </div>
        <div className='w-full lg:w-1/2 p-5 bg-white rounded-lg'>
          <p className='text-lg font-bold  my-2'>Price: ${product.price}</p>
          <p className='text-gray-600 mb-4 mt-6'>{product.description}</p>
          <div className='flex items-center mt-6'>
          <button onClick={()=>{handleAddtoCart(product)}} className='bg-orange-600 dark:bg-color-brown dark:text-color-yellow text-white py-4 px-4 rounded-md font-bold text-sm'>ADD TO CART</button>
          <button onClick={() => {navigate('/Menu')}} className='bg-gray-200 hover:bg-gray-300 text-green font-bold py-4 px-4 rounded ml-4'>BACK TO PRODUCTS</button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default MenuDetailspage