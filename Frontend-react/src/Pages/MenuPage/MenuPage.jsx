import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Hooks/ShopContext/ShopContext'
import { useNavigate } from 'react-router-dom';
import {FaHeart} from "react-icons/fa";



function MenuPage() {
  const {product, handleAddtoCart, favorite, handleAddtoFavorites} = useContext(ShopContext);
  const navigate = useNavigate()

  return (
    <div className="max-w-screen sm:px-6 py-24 mt-16 dark:bg-color-browwn">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <i>Our</i> <span className="text-orange-600 dark:text-color-yellow"><i>Menu</i></span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
        {product.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white dark:bg-color-brown rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={recipe.image}
                alt=""
                className=" w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {recipe.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-color-yellow">
                  {recipe.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-600 dark:text-color-yellow">
                    ${recipe.price}
                  </span>
                  <div className='flex'>
                    <div
                                            className={`text-xl cursor-pointer p-2 ${
                                              favorite.some((item) => item.id === recipe.id)
                                                ? "text-color-browwn dark:text-orange-600"
                                                : "text-orange-600 dark:text-color-yellow"
                                            }`}
                                          >
                                            <FaHeart
                                              onClick={() => handleAddtoFavorites(recipe)}
                                            />
                                          </div>
                  <button
                    onClick={() => navigate(`recipe/${recipe.id}`)}
                    className="bg-orange-600 dark:bg-color-yellow text-white dark:text-color-brown py-2 px-3  rounded-md hover:from-green-600 hovertoorange-700 font-bold text-sm"
                  >
                    Details
                  </button>
                  </div>
                </div>
                <button
                  onClick={()=>handleAddtoCart(recipe)}
                  className="w-full bg-orange-600 dark:bg-color-yellow dark:text-color-brown hover:to-orange-700 text-white py-3 px-4 rounded-md font-bold text-sm"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default MenuPage