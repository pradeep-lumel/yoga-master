const express = require('express');
const cartModel = require('../models/cartModel');
const router = express.Router();


//add to the cart
router.post('/add-cart',async(req,res)=>{
    try {
        const newCartItem=req.body
        console.log(newCartItem);
        const item=await cartModel.create(newCartItem)
        res.json({
            success:true,
            item
        })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
})

//get cart item by id
router.post('/cart-item/:id',async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
})

module.exports=router

