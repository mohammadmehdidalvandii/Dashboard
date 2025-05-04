const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/InventoryController')
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /inventory/delete-inventory/{id}:
 *   delete:
 *     summary: Delete an inventory item
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
 *         description: Inventory deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
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
 *       400:
 *         description: Bad request - ID is required
 *       404:
 *         description: Inventory item not found
 *       500:
 *         description: Server error
 */
router.delete('/delete-inventory/:id', async (req , res)=>{
    try{
        const {id} = req.params;
        if(!id){
            res.status(statusCodes.NOT_FOUND || statusCodes.BAD_REQUEST)
            .json({message: 'id is not found'});
        }
        const deleteInventory = await inventoryController.deleteInventory(id);
        if(deleteInventory){
            res.status(statusCodes.OK)
            .json({
                message:"Delete Inventory Successfully",
                data:deleteInventory
            })
        }
    }
    catch(error){
        res.status(statusCodes.OK)
        .json({message:"internal server delete inventory", error: error.message})
    }
})

module.exports = router