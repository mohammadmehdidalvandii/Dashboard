const express = require("express");
const router = express.Router();
const productController = require('../../controllers/ProductController');
const {statusCodes} = require('../../constants/constants');

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