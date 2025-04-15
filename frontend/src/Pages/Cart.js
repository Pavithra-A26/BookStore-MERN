import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import '../Styles/cart.css'

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('https://bookstore-production-ed95.up.railway.app/api/getcart');
        setCartItems(response.data);

        // Calculate total amount
        const total = response.data.reduce((sum, item) => sum + item.price, 0);
        setTotalAmount(total);
      } catch (error) {
        console.log('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <Layout>
      <h1>My Cart</h1>
      <div className="cart-container">
        {cartItems.length > 0 ? (
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item._id} className="cart-item">
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h2 className="cart-item-name">Name : {item.name}</h2>
                  <p className="cart-item-price">Price : ₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="cart-total">
          <h2>Total Amount: ₹{totalAmount}</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Cart