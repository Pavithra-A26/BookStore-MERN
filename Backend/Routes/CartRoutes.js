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

router.delete('/deletecart/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the item by its ID and remove it from the database
      const deletedItem = await Cart.findByIdAndDelete(id);
  
      if (!deletedItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
  
      res.status(200).json({ message: 'Cart item deleted successfully' });
    } catch (error) {
      console.error('Error deleting cart item:', error);
      res.status(500).json({ message: 'Error while deleting cart item' });
    }
  });
  

module.exports=router;
