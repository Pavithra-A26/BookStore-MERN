import React,{useEffect,useState} from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios'
import '../Styles/product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons'; 

const Products = () => {
  const [products, setProducts] = useState([]);
useEffect(()=>{ 
  const fetchData=async()=>{
      try{
          const response= await axios.get("http://127.0.0.1:5000/api/products")
          console.log("Responce data:",response.data)
          setProducts([...products, ...response.data])
          if (Array.isArray(response.data)) {
            setProducts(response.data);
        } else {
            console.error("Expected an array but received:", response.data);
        }
      }catch(err){  
          console.log('error occur',err)   
      }
  } 
  fetchData()
},[])
  return (
    <Layout>
      <h1>Products page</h1>
      <div className="product-list">
                {products.map((d) => (
                    <li key={d._id}>
                        <div className='b1'>
                            <img className='d-pic' src={d.image} alt='image' />
                            <h2 className='d-name'>{d.name}</h2>
                            <p className='d-price'>₹{d.price}</p>
                            <p className='d-des'>{d.description}</p>
                            <FontAwesomeIcon className='icon' icon={faCartShopping} style={{ color: '#071739' }} />
                            <FontAwesomeIcon className='icon' icon={faHeart} style={{ color: '#071739' }} />
                        </div>
                    </li>
                ))}
            </div>
       
    </Layout>
  )
}

export default Products