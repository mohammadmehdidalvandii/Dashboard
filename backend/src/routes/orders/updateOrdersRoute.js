const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/OrdersController");
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /orders/update-order/{id}:
 *   put:
 *     summary: Update an order's status
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 description: New status of the order
 *     responses:
 *       200:
 *         description: Order updated successfully
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
 *         description: Order not found
 *       500:
 *         description: Server error
 */
router.put('/update-order/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const {status} = req.body;
        if(!status){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message: "Missing required fields"});
        };
        const data = {status}
        const orderUpdate = await ordersController.updateOrderById(id , data);
        if(!orderUpdate){
            return res.status(statusCodes.NOT_FOUND)
            .json({message: "Order not found"});
        }
        res.status(statusCodes.OK)
        .json({
            message:"Update order Successfully",
            data:orderUpdate,
        })
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({
            message:"Server Internal Error",
            error:error.message
        })
    }
})

module.exports = router