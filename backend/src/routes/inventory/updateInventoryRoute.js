const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/InventoryController')
const {statusCodes} = require('../../constants/constants');
const productModel = require('../../models/Products');

router.put('/update-inventory/:id' , async (req, res)=>{
    try{
        const {productID, quantity, category, status} =req.body
        const {id} = req.params;
        if(!productID || !quantity || !category || !status){
            return res.status(statusCodes.BAD_REQUEST).json({message: "Please fill all the fields"})
        }
        if(!id){
            return res.status(statusCodes.BAD_REQUEST).json({message: "Please provide the product id"})
        }
        const product = await productModel.findOne({_id:productID})
        if(!product){
            return res.status(statusCodes.NOT_FOUND).json({message: "Product not found"})
        }
        const updateData = {
            productID:product._id,
            quantity,
            category,
            status
        }
        const update =  await inventoryController.updateInventory(id , updateData);
        if(update){
            res.status(statusCodes.OK)
            .json({
                message:"update inventory successfully",
                data:update
            })
        }
    }
    catch(error){
        res.status(statusCodes.OK)
        .json({
            message:"Internal Server Inventory update",
            error:error.message
        })
    }
})

module.exports = router