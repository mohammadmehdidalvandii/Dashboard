const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/InventoryController')
const {statusCodes} = require('../../constants/constants');
const productModel = require('../../models/Products');

/**
 * @swagger
 * /inventory/update-inventory/{id}:
 *   put:
 *     summary: Update an inventory item
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productID
 *               - quantity
 *               - category
 *               - status
 *             properties:
 *               productID:
 *                 type: string
 *                 description: ID of the product
 *               quantity:
 *                 type: number
 *                 description: Quantity of the product
 *               category:
 *                 type: string
 *                 description: Category of the product
 *               status:
 *                 type: string
 *                 description: Status of the inventory item
 *     responses:
 *       200:
 *         description: Inventory updated successfully
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
 *         description: Bad request - Missing required fields or invalid ID
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
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