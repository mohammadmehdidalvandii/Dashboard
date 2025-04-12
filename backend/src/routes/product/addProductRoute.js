const express = require("express");
const router = express.Router();
const productController = require('../../controllers/ProductController');
const {statusCodes} = require("../../constants/constants");
const upload = require('../../config/multer');
const addProductValidation = require('../../validations/addProductValidation');


router.post('/add-product', upload.single('image')  , async(req , res)=>{
    try{
        const {error} = addProductValidation.validate(req.body);
        
        if(error){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"Error request body fields" ,error:error.message})
        }

        const {name, description, price, category, stock} = req.body;

        const image = req.file ? `public/uploads/${req.file.filename}`: null;

        if(!image){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"Image is Required"})
        };

        if(!name || !description || !price || !category || !stock){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"All fields are required"})
        };

        await productController.createProduct({
            name,
            description,
            price,
            category,
            stock,
            sku: "DS-" + crypto.randomUUID(),
            status: "active",
            image: image || ["http://localhost:3000/images/default-image.png"],
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        res.status(statusCodes.CREATED)
        .json({message:"Product created successfully"})
        
    }
    catch(error){
        console.log(error);
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error creating product",
            error: error.message
        })
    }
})

module.exports = router