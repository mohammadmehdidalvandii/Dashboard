const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/InventoryController')
const {statusCodes} = require('../../constants/constants');
const productModel = require('../../models/Products');

/**
 * @swagger
 * /inventory/add-inventory:
 *   post:
 *     summary: Add a new inventory item
 *     tags: [Inventory]
 *     security:
 *       - bearerAuth: []
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
 *                 description: ID of the product to add to inventory
 *               quantity:
 *                 type: number
 *                 description: Quantity of the product
 *               category:
 *                 type: string
 *                 description: Category of the inventory item
 *               status:
 *                 type: string
 *                 description: Status of the inventory item
 *               sku:
 *                 type: string
 *                 description: Stock Keeping Unit (optional, will be auto-generated if not provided)
 *     responses:
 *       201:
 *         description: Inventory item created successfully
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
 *                     sku:
 *                       type: string
 *       400:
 *         description: Bad request - Missing required fields or product not found
 *       500:
 *         description: Server error
 */
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