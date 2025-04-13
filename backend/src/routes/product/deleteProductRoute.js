const express = require('express');
const router = express.Router();
const productController = require('../../controllers/ProductController');
const {statusCodes} = require('../../constants/constants');


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