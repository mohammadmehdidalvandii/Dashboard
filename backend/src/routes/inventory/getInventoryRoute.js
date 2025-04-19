const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/InventoryController')
const {statusCodes} = require('../../constants/constants');
const productModel = require('../../models/Products');

router.get('/' , async (req , res)=>{
    try{
        const {name} = req.params;
        if(name){
            const inventory = await inventoryController.getInventoryByName(name);
            res.status(statusCodes.OK)
            .json({
                message:"get inventory by name",
                data:inventory
            })
        }else{
            const inventory = await inventoryController.getAllInventory();
            res.status(statusCodes.OK)
            .json({message:"get all inventory" ,data:inventory})
        }
    }
    catch(error){
        res.status(statusCodes.BAD_REQUEST)
        .json({message:"Internal Server Error " , error: error.message})
    }
})

module.exports = router