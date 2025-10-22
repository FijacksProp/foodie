import { useContext } from "react";
import { ShopContext } from "../../Hooks/ShopContext/ShopContext";

function FavoriteTile({ singleFavoriteFood }) {
  const {handleAddtoCart} = useContext(ShopContext)
  return (
    // <div className="bg-white py-10 dark:bg-color-brown rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer">
      <div key={singleFavoriteFood.id} className="bg-white dark:bg-color-brown rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer">
       <div className="relative overflow-hidden">
              <img
                src={singleFavoriteFood.image}
                alt=""
                className=" w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {singleFavoriteFood.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-color-yellow">
                  {singleFavoriteFood.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-600 dark:text-color-yellow">
                    ${singleFavoriteFood.price}
                  </span>
                  {/* <button
                    onClick={() => navigate(`recipe/${recipe.id}`)}
                    className="bg-orange-600 dark:bg-color-yellow text-white dark:text-color-brown py-2 px-3  rounded-md hover:from-green-600 hovertoorange-700 font-bold text-sm"
                  >
                    Details
                  </button> */}
                </div>
                <button
                  onClick={()=>handleAddtoCart(singleFavoriteFood)}
                  className="w-full bg-orange-600 dark:bg-color-yellow dark:text-color-brown hover:to-orange-700 text-white py-3 px-4 rounded-md font-bold text-sm"
                >
                  ADD TO CART
                </button>
              </div>
            </div>


      </div>
    // </div>
  );
}
export default FavoriteTile