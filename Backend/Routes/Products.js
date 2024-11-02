const express = require('express');
const Product = require('../Models/Product.js');
const router = express.Router();

router.get('/products',async(req,res)=>{
    try{
        const product = await Product.find();
        res.json(product);
    }
    catch(error){
        res.status(500).json({ 
            message: error.message 
        });
    }
})

module.exports=router;