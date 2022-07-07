import './App.css';
import ProductScreen from './screens/ProductScreen.jsx'
import Header from './components/Header.jsx'
import { Routes, Route } from "react-router-dom";
import CartScreen from './screens/CartScreen.jsx'
import ProductPage from './screens/ProductPage.jsx'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [currentCart, updateCart] = useState(initGetCart())

  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={5000} pauseOnHover={false} />
      <Header cart={currentCart} />
      <Routes>
        <Route path='/' element={<ProductScreen/>}/>
        <Route path='/cart' element={<CartScreen cart={currentCart} updateCart={updateCart}/>}/>
        <Route path='/product-page/:id' element={<ProductPage updateCart={updateCart} />}/>
      </Routes>
    </div>
  );
}

const initGetCart = () => {
  const cart = localStorage.getItem('cart')
  if(!cart) {
    localStorage.setItem('cart', JSON.stringify([]))
    return []
  }
  else return JSON.parse(cart)
}

export default App;
