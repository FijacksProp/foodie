import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Componets/Navbar/Navbar";
import Sidebar from "./Componets/Sidebar/Sidebar";
import Footer from "./Componets/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Contact from "./Pages/ContactPage/Contact";
import MenuPage from "./Pages/MenuPage/MenuPage";
import CartPage from "./Pages/CartPage/CartPage";
import MenuDetailsPage from "./Pages/MenuDetailspage/MenuDetailsPage";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
import FavoritePage from "./Pages/FavouritePage/FavoritePage";
import CheckoutPage from "./Pages/CheckoutPage/Checkoutpage";



export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Sidebar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Cart" element={<CartPage/>}/>
          <Route path="/Menu" element={<MenuPage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/Contacts" element={<Contact/>}/>
          <Route path='/Favorite' element={<FavoritePage/>}/>
          <Route path='/recipe/:id' element={<RecipeDetails/>}/> 
          <Route path='Menu/recipe/:id' element={<MenuDetailsPage/>}/>
          <Route path="*" element={<h1 className="text-3xl font-bold text-center mt-32">404 - Page Not Found</h1>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
