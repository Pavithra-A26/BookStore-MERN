import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js'
import Login from './Pages/Login.js'
import Register from './Pages/Register.js'
import Cart from './Pages/Cart.js'
import Products from './Pages/Products.js'
import Wishlist from './Pages/Wishlist.js'
import './App.js'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
      {/* <Layout/> */}
    </>
  );
}

export default App;
