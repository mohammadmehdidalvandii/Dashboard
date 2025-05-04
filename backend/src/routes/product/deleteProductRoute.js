const express = require('express');
const router = express.Router();
const productController = require('../../controllers/ProductController');
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /product/delete-Product/{id}:
 *   delete:
 *     summary: Delete a product
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
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *       400:
 *         description: Delete product failed
 *       404:
 *         description: Product ID is required
 *       500:
 *         description: Server error
 */
router.delete('/delete-Product/:id' , async (req , res)=>{
    try{
        const productID = req.params.id;
        if(!productID){
            return res.status(statusCodes.NOT_FOUND)
            .json({
                message : "Product ID is required"
            })
        };
        const deleteProduct = await productController.deleteProductById(productID);
        if(!deleteProduct){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"Delete product failed"})
        };

        return res.status(statusCodes.OK)
        .json({
            data:deleteProduct,
            message:"delete Product is successful"
        });

    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({
            message:"Error Internal server delete Product",error
        })
    }
})

module.exports = router