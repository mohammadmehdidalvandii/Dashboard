const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/InventoryController')
const {statusCodes} = require('../../constants/constants');

router.delete('/delete-inventory/:id', async (req , res)=>{
    try{
        const {id} = req.params;
        if(!id){
            res.status(statusCodes.NOT_FOUND || statusCodes.BAD_REQUEST)
            .json({message: 'id is not found'});
        }
        const deleteInventory = await inventoryController.deleteInventory(id);
        res.status(statusCodes.OK)
        .json({
            message:"Delete Inventory Successfully",
            data:deleteInventory
        })
    }
    catch(error){
        res.status(statusCodes.OK)
        .json({message:"internal server delete inventory", error: error.message})
    }
})

module.exports = router