import React, { useContext } from 'react'
import { ShopContext } from '../../Hooks/ShopContext/ShopContext'
import FavoriteTile from '../../Componets/FavoriteTile/FavoriteTile'

function FavoritePage() {
   const {favorite} = useContext(ShopContext)
  return (
    <div className='max-w-screen sm:px-6 py-20 mt-16 dark:bg-color-browwn'>
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"> <i>
          Your </i> <span className="text-orange-600 dark:text-color-yellow"><i>Favorite Food</i></span>
        </h1>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8  mt-12 lg:grid-cols-4  px-4 md:px-8 lg:px-16">
        {/* grid md:grid-cols-3 gap-8  mt-12 */}
        
        {
          favorite.length ?
          favorite.map((singleFavoriteFood,index) => (
              <FavoriteTile singleFavoriteFood = {singleFavoriteFood} key={index}/>
            ))  : <h1 className='text-3xl dark:text-color-yellow'>No it available in favorite </h1>
        }
      </div>
      
    </div>
  )
}

export default FavoritePage