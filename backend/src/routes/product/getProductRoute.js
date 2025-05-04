const express = require("express");
const router = express.Router();
const productController = require('../../controllers/ProductController');
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Get all products successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *                       price:
 *                         type: number
 *                       category:
 *                         type: string
 *                       stock:
 *                         type: number
 *                       sku:
 *                         type: string
 *                       status:
 *                         type: string
 *                       image:
 *                         type: string
 *                 message:
 *                   type: string
 *       404:
 *         description: No products found
 *       500:
 *         description: Server error
 */
router.get('/' ,async (req , res) =>{
    try{
        const products = await productController.getAllProduct();
        if (!products) {
            return res.status(statusCodes.NOT_FOUND)
                .json({message: "No products found"});
        }
        return res.status(statusCodes.OK)
            .json({
                data: products,
                message: "Get all products successfully"
            });
    }
    catch(error){
        return res.status(statusCodes.INTERNAL_SERVER_ERROR)
            .json({message: "Error getting products", error: error.message});
    }
})

/**
 * @swagger
 * /product/details-product/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Get product successfully
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
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *                     price:
 *                       type: number
 *                     category:
 *                       type: string
 *                     stock:
 *                       type: number
 *                     sku:
 *                       type: string
 *                     status:
 *                       type: string
 *                     image:
 *                       type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - ID is required
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.get('/details-product/:id', async (req, res) => {
    try{
        const id = req.params.id;

        if(!id){
            return res.status(statusCodes.BAD_REQUEST)
                .json({message: "ID is required"});
        }

        const product = await productController.getProductByID(id);
        if (!product) {
            return res.status(statusCodes.NOT_FOUND)
                .json({message: "Product not found"});
        }

        return res.status(statusCodes.OK)
            .json({
                data: product,
                message: "Get product successfully"
            });
    }
    catch(error){
        return res.status(statusCodes.INTERNAL_SERVER_ERROR)
            .json({message: "Error getting product by id", error: error.message});
    }
})

module.exports = router