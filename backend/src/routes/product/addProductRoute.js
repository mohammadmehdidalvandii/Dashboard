const express = require("express");
const router = express.Router();
const productController = require('../../controllers/ProductController');
const {statusCodes} = require("../../constants/constants");
const upload = require('../../config/multer');
const addProductValidation = require('../../validations/addProductValidation');

/**
 * @swagger
 * /product/add-product:
 *   post:
 *     summary: Add a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *               - category
 *               - stock
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               stock:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Product created successfully
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
 *       400:
 *         description: Bad request - Missing required fields or validation error
 *       500:
 *         description: Server error
 */
router.post('/add-product', upload.single('image')  , async(req , res)=>{
    try{
        const {error} = addProductValidation.validate(req.body);
        
        if(error){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"Error request body fields" ,error:error.message})
        }

        const {name, description, price, category, stock} = req.body;

        const image = req.file ? `uploads/${req.file.filename}`: null;

        if(!image){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"Image is Required"})
        };

        if(!name || !description || !price || !category || !stock){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"All fields are required"})
        };

       const newProduct =  await productController.createProduct({
            name,
            description,
            price,
            category,
            stock,
            sku: "DS-" + crypto.randomUUID(),
            status: "In Stock",
            image: `https://dashboard-admin-api.chbk.dev/${image}`,
            createdAt: new Date(),
        })
        if(newProduct){
            res.status(statusCodes.CREATED)
            .json({message:"Product created successfully" , data:newProduct})
        }
        
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