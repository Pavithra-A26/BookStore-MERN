const express = require('express');
const WishList = require('../Models/Wish');
const router = express.Router();

router.post('/addtowish',async(req,res)=>{
    try {
        const { name, price, image } = req.body;

        const newWishListItem = new WishList({
            name,
            price,
            image
        });

        const savedItem = await newWishListItem.save();
        res.status(201).json(savedItem); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.get('/getwishlist',async(req,res)=>{
    try{
        const product = await WishList.find();
        res.json(product);
    }
    catch(error){
        res.status(500).json({ 
            message: error.message 
        });
    }
})

module.exports=router;
