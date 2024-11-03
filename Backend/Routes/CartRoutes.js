const express = require('express');
const Cart = require('../Models/Cart');
const router = express.Router();

router.post('/addtocart',async(req,res)=>{
    try {
        const { name, price, image } = req.body;

        const newCartItem = new Cart({
            name,
            price,
            image
        });

        const savedCartItem = await newCartItem.save();
        res.status(201).json(savedCartItem); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.get('/getcart',async(req,res)=>{
    try{
        const product = await Cart.find();
        res.json(product);
    }
    catch(error){
        res.status(500).json({ 
            message: error.message 
        });
    }
})

module.exports=router;
