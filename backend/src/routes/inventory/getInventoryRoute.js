const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/InventoryController')
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /inventory:
 *   get:
 *     summary: Get all inventory items or search by name
 *     tags: [Inventory]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Inventory item name to search for
 *     responses:
 *       200:
 *         description: Get inventory successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       productID:
 *                         type: string
 *                       quantity:
 *                         type: number
 *                       category:
 *                         type: string
 *                       status:
 *                         type: string
 *                       sku:
 *                         type: string
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /inventory/details-inventory/{id}:
 *   get:
 *     summary: Get inventory item by ID
 *     tags: [Inventory]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Inventory item ID
 *     responses:
 *       200:
 *         description: Get inventory successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     productID:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     category:
 *                       type: string
 *                     status:
 *                       type: string
 *                     sku:
 *                       type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - ID is required
 *       404:
 *         description: Inventory item not found
 *       500:
 *         description: Server error
 */
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