const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/OrdersController");
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Get all orders successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       customerID:
 *                         type: string
 *                       products:
 *                         type: object
 *                         properties:
 *                           productID:
 *                             type: string
 *                       status:
 *                         type: string
 *                       shippingAddress:
 *                         type: object
 *       500:
 *         description: Server error
 */
router.get("/", async (req, res)=>{
    try{

        const orders = await ordersController.getAllOrders();
        console.log("orders" , orders)
        res.status(statusCodes.OK)
        .json({
            message:"Get All order Successfully",
            data:orders
        })
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({message:"Server Error Interval " ,error:error.message});
    }
})

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Get order successfully
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
 *         description: Bad request - ID is required
 *       500:
 *         description: Server error
 */
router.get("/:id", async (req, res)=>{
    try{
        const {id} = req.params
        if(!id){
            res.status(statusCodes.BAD_REQUEST)
            .json({message:"ID is not found"})
        }
        const order = await ordersController.getOrderById(id);
        console.log("order" , order)
        res.status(statusCodes.OK)
        .json({
            message:"Get order successfully",
            data:order
        })
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({message:"Server Error Interval " ,error:error.message});
    }
})



module.exports = router