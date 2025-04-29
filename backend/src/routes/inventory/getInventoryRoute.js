const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/InventoryController')
const {statusCodes} = require('../../constants/constants');


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
});

router.get('/details-inventory/:id',async (req , res)=>{
    try{
        const id  = req.params.id;
        if(!id){
            return res.status(statusCodes.BAD_REQUEST)
                .json({message: "ID is required"});
        }

        const inventory = await inventoryController.getInventoryById(id);
        if (!inventory) {
            return res.status(statusCodes.NOT_FOUND)
                .json({message: "inventory not found"});
        }
        return res.status(statusCodes.OK)
                    .json({
                        data: inventory,
                        message: "Get inventory successfully"
                    });
    }
    catch(error){
        return res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({message: "Error getting inventory by id", error: error.message});
    }
})

module.exports = router