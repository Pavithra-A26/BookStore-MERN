import React from 'react'
import Layout from '../Layout/Layout.js'
import { useNavigate } from 'react-router-dom';
import '../Styles/home.css'

const Home = () => {
  const navigate = useNavigate();
  const  handler = ()=>{
    navigate('/products');
  }
  return (
    <Layout>
      <div className='home-page'>
        <h1>Empower Your Knowledge – Dive Into the World of Technology!</h1>
        <p>Dive into a world where knowledge meets opportunity. TechTome isn’t just a book store; 
          it’s a learning hub designed for those who seek to understand, innovate, and create. 
          Explore resources from leading experts and discover insights that fuel technological advancements across industries.
          Whether you're refining your coding skills or exploring cloud, AI, or blockchain technologies, 
          our collection is here to support your goals. 
          Find your inspiration, enhance your skills, and step confidently into the future of tech.</p>
        <button onClick={handler}>Shop Now</button>
      </div>
    </Layout>
  )
}

export default Home