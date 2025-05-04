const express = require("express");
const router = express.Router();
const productController = require("../../controllers/ProductController")
const {statusCodes} = require("../../constants/constants");
const upload = require('../../config/multer');

/**
 * @swagger
 * /product/update-product/{id}:
 *   put:
 *     summary: Update a product
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
 *               status:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Bad request - Missing required fields or ID
 *       500:
 *         description: Server error
 */
router.put('/update-product/:id', upload.single('image'), async (req, res) => {
    try {
        const {name, description, price, category, stock, status} = req.body;
        const id = req.params.id;
        if(!id){
            return res.status(statusCodes.BAD_REQUEST).json({message: "Id is required"});
        }
        const updateData = {
            name,
            description,
            price,
            category,
            stock,
            status: status
        }

        if(req.file){
            updateData.image = `public/uploads/${req.file.filename}`;
        }

        // Validate required fields
        if (!name || !description || !price || !category || !stock) {
            return res.status(statusCodes.BAD_REQUEST)
                .json({message: "Missing required fields"});
        }


        await productController.updateProduct(req.params.id , updateData);
        res.status(statusCodes.OK)
        .json({message: "Product Updated Successfully"})
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({
            message:"Error internal server ", error:error.message
        })
    }
})


module.exports = router