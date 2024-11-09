import React , {useState} from 'react'
import Layout from '../Layout/Layout'
import '../Styles/register.css'
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
 
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const navigate = useNavigate();
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          navigate('/home');
         
        } else {
          alert(data.message || 'Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
      }
    };
    
  return (
    <Layout>
      <div className='login'>
      <div className="register-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">Login</button>
      </form>
    </div>
    </div>
    </Layout>
  )
}

export default Login