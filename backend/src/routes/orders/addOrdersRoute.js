const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/OrdersController");
const {statusCodes} = require('../../constants/constants');
const customerModel = require('../../models/Customers');
const productModel = require('../../models/Products');

/**
 * @swagger
 * /orders/add-orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerID
 *               - productID
 *               - status
 *             properties:
 *               customerID:
 *                 type: string
 *                 description: ID of the customer placing the order
 *               productID:
 *                 type: string
 *                 description: ID of the product being ordered
 *               products:
 *                 type: object
 *                 properties:
 *                   productID:
 *                     type: string
 *               status:
 *                 type: string
 *                 description: Status of the order
 *               shippingAddress:
 *                 type: object
 *                 description: Shipping address for the order (optional, will use customer's address if not provided)
 *     responses:
 *       201:
 *         description: Order created successfully
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
 *                     customerID:
 *                       type: string
 *                     products:
 *                       type: object
 *                       properties:
 *                         productID:
 *                           type: string
 *                     status:
 *                       type: string
 *                     shippingAddress:
 *                       type: object
 *       400:
 *         description: Bad request - Missing required fields
 *       404:
 *         description: Customer or product not found
 *       500:
 *         description: Server error
 */
router.post('/add-orders' , async (req , res)=>{
    try{
        const {customerID , productID , products , status  , shippingAddress} = req.body;
        if(!customerID || !productID || !status ){
            return res.status(statusCodes.BAD_REQUEST)
            .json({
                message : "Please fill all the fields"
            })
        };

        const existCustomer = await customerModel.findOne({_id:customerID});
        console.log("existCustomer" , existCustomer)
        if(!existCustomer){
            return res.status(statusCodes.NOT_FOUND)
            .json({
                message:"customer Not Found"
            })
        };
        const existProduct = await productModel.findOne({_id:productID});
        console.log("existProduct" , existProduct)
        if(!existProduct){
            return res.status(statusCodes.NOT_FOUND)
            .json({
                message:"Product Not found"
            })
        };
        const newOrder = await ordersController.createOrder({
         customerID:existCustomer._id,
        products:{
            productID:existProduct.id
        },
         status,
         shippingAddress :existCustomer.address,
        })
        if(newOrder){
            res.status(statusCodes.CREATED)
            .json({
                message:"Create new Order",
                data:newOrder
            })
        }

    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .jsonp(
            {
                message:"Server addOrder error", error:error.message
            }
        )
    }
})

module.exports = router