const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

//database
const MONGOURL = "mongodb://localhost:27017/bookstore";
mongoose.connect(MONGOURL).then(() => {
    console.log('Connected to MongoDB')
})
.catch((error) => console.error('Failed to connect to MongoDB:', error));

//port
const PORT = process.env.PORT || 5000;

//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});