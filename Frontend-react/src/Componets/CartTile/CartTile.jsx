
import React, { Fragment, useEffect, useContext } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { ShopContext } from "../../Hooks/ShopContext/ShopContext";



function CartTile({singleCartFood}) {

   const {handlRemoveFromCart, handleAddtoCart} = useContext(ShopContext);
  return (
    <Fragment>
      <div className="grid grid-cols-3 items-start gap-4 ml-3 lg:ml-0 bg-gray-200 dark:bg-color-yellow px-4 py-2">
        <div className="col-span-2 flex items-center gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-orange-600 dark:bg-color-browwn p-1 rounded-sm">
            <img
              src={singleCartFood.image}
              className="w-full h-full object-contain"
              alt=""
           />
         </div>
         <div className="text-base font-bold dark:text-color-browwn text-orange-600">
            {singleCartFood.title}
            <FaTrash className="h-4 w-4 cursor-pointer" onClick={() => handlRemoveFromCart(singleCartFood, true)} />
              
         </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <h3 className="text-lg font-bold  dark:text-color-browwn text-orange-600">
            ${singleCartFood.totalPrice ? singleCartFood.totalPrice.toFixed(2) : '0.00'}
            <p className="mb-2 font-bold text-[16px]">Quantity : {singleCartFood.quatity}</p>
          </h3>
          <div className="flex mt-2 gap-4">
            <div className="h-4 w-4 cursor-pointer dark:text-color-browwn text-orange-600">
           <FaPlus onClick={()=>handleAddtoCart(singleCartFood)}/>
           </div>
            <div 
              className={`h-4 w-4 dark:text-color-browwn text-orange-600 ${singleCartFood.quatity === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
           >
              <FaMinus onClick={singleCartFood.quatity === 1 ? undefined : () => handlRemoveFromCart(singleCartFood, false)} />

            </div>
          </div>
        </div>
      </div>
      <hr className="border-orange-300 dark:border-color-yellow"/>
    </Fragment>
  )
}

export default CartTile