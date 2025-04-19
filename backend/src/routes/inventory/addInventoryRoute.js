const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/InventoryController')
const {statusCodes} = require('../../constants/constants');
const productModel = require('../../models/Products');

router.post("/add-inventory" , async (req , res)=>{
    try{
        const {productID ,quantity ,category ,status, sku} = req.body;
        if(!productID || !quantity || !category || !status){
            return res.status(statusCodes.BAD_REQUEST).json({message : "Please fill all the fields"})
        };

        const product = await productModel.findOne({ _id: productID});
        console.log("product detail", product)
        if(!product){
            res.status(statusCodes.BAD_REQUEST)
            .json({message: "ProductID is not found"});
        };

        const newInventory = await inventoryController.createInventory({
            productID : product._id,
            quantity,
            category,
            status,
            sku: crypto.randomUUID()
        })
        if(newInventory){
            res.status(statusCodes.CREATED)
            .json({
                message:"Created new inventory successfully",
                data:newInventory,
            })
        }
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({message:"Error server internal Inventory" , error})
    }
})

module.exports = router