import React, { createContext, useEffect, useState } from 'react'
import { ClientData, ProductsData } from '../../assets/data'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';



 export const ShopContext = createContext()

function ShopContextProvider({children}) {
  const [ShowMenu, setShowMenu] = useState(false)
  const [isSidebar, setIsSidebar] = useState(false)
  const [product, setProduct] = useState(ProductsData)
  const [clients, setClients] = useState(ClientData)
  const [cartItem, setCartItem] = useState([])
  const [favorite, setFavorite] = useState([])
  const Navigate = useNavigate()
  

  function handleMenu() {
    setShowMenu(!ShowMenu)
    setIsSidebar(!isSidebar)
  }

  function handlRemoveFromCart(getProductDateils, isFullyRemvovedFromcart) {
    let cpyExtistingCartItems = [...cartItem];
    const findIndexOfCurrentItem = cpyExtistingCartItems.findIndex(
      (cartitem) => cartitem.id === getProductDateils.id
    );
    if (isFullyRemvovedFromcart) {
      cpyExtistingCartItems.splice(findIndexOfCurrentItem, 1);
    } else {
      cpyExtistingCartItems[findIndexOfCurrentItem] = {
        ...cpyExtistingCartItems[findIndexOfCurrentItem],
        quatity: cpyExtistingCartItems[findIndexOfCurrentItem].quatity - 1,
        totalPrice:
          (cpyExtistingCartItems[findIndexOfCurrentItem].quatity - 1) *
          cpyExtistingCartItems[findIndexOfCurrentItem].price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(cpyExtistingCartItems));
    setCartItem(cpyExtistingCartItems);
  }

   function handleAddtoCart(getProductDateils) {
    console.log(getProductDateils);
    

     let cpyExtistingCartItems = [...cartItem];

    const findIndexOfCurrentItem = cpyExtistingCartItems.findIndex(
      (cartitem) => cartitem.id === getProductDateils.id
    );

    console.log(findIndexOfCurrentItem);

    if (findIndexOfCurrentItem === -1) {
      cpyExtistingCartItems.push({
        ...getProductDateils,
        quatity: 1,
        totalPrice: getProductDateils.price,
      });
      toast.success("Product added to cart successfully");
    } else {
      console.log("it is comming here");
      cpyExtistingCartItems[findIndexOfCurrentItem] = {
        ...cpyExtistingCartItems[findIndexOfCurrentItem],
        quatity: cpyExtistingCartItems[findIndexOfCurrentItem].quatity + 1,
        totalPrice: 
          (cpyExtistingCartItems[findIndexOfCurrentItem].quatity + 1) *
          cpyExtistingCartItems[findIndexOfCurrentItem].price,
      };
         toast.success('Product has already been added to cart, increased the quantity!');
    }

    console.log(cpyExtistingCartItems);
    setCartItem(cpyExtistingCartItems)

    localStorage.setItem("cartItems", JSON.stringify(cpyExtistingCartItems)); // save the items to local storage

    Navigate("/Cart")
     
  }
    
  
  
  //-----
  function handleAddtoFavorites(getProductDateils) {
  console.log(getProductDateils);

  let cpyExitingFavoriteItems = [...favorite];

  const findIndexOfFavoriteItem = cpyExitingFavoriteItems.findIndex(
    (favorite) => favorite.id === getProductDateils.id
  );

  console.log(findIndexOfFavoriteItem);

  const isFavorited = favorite.some(item => item.id === getProductDateils.id);

  if (isFavorited) {
    // Remove from favorites
    const updatedFavorites = favorite.filter(item => item.id !== getProductDateils.id);
    setFavorite(updatedFavorites);
    localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
    console.log('removed from favorite');
    toast.success('removed from favorite')
  } else {
    // Add to favorites
    const updatedFavorites = [...favorite, getProductDateils];
    setFavorite(updatedFavorites);
    localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
    console.log('added to favorite');
    toast.success('added to favorite')
  }

  console.log(cpyExitingFavoriteItems);
}

   useEffect(() => {
    // after refreshing the cart page so that the food items will not go, we store thm to local storage
    setCartItem(JSON.parse(localStorage.getItem("cartItems") || "[]"));
    setFavorite(JSON.parse(localStorage.getItem('favorite') || '[]'))
  }, []);
  return (
    <ShopContext.Provider value={{
      ShowMenu,
      setShowMenu,
      isSidebar,
      setIsSidebar,
      handleMenu,
      product,
      setProduct,
      clients,
      setClients,
      handleAddtoCart,
      cartItem, 
      setCartItem,
      handlRemoveFromCart,
      handleAddtoFavorites,
      favorite,
      setFavorite,
     }}>
      {children}
     </ShopContext.Provider>
  )
}


export default ShopContextProvider; 