const express = require('express');
const User = require('../Models/User.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

//Register
router.post('/register',async(req,res) => {
    try{
        const {username,email,password} = req.body;
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user with hashed password
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({
            message:'User registration success'
        });
    }catch(error){
        res.status(500).json({
            message:'Error in registering user',error
        });
    }
});


//Login
router.post('/login',async(req,res) =>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({ 
                message: 'User not found' 
            });
        }
        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ 
                message: 'Invalid credentials' 
            });
        }
        res.json({ message: 'Login successful', user });
    }catch(error){
        res.status(500).json({ message: 'Server error', error });
    }
});


module.exports = router;

