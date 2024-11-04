const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authroutes = require('./Routes/Auth.js');
const productRoutes = require('./Routes/Products.js');
const cartRoutes = require('./Routes/CartRoutes.js')
const wishRoutes = require('./Routes/WishList.js');


require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


//database
const MONGOURL = "mongodb://localhost:27017/bookstore";
mongoose.connect(MONGOURL).then(() => {
    console.log('Connected to MongoDB')
})
.catch((error) => console.error('Failed to connect to MongoDB:', error));


//Routes
app.use('/auth',authroutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',wishRoutes);


//port
const PORT = process.env.PORT || 5000;

//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});