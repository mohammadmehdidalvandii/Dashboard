const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/OrdersController");
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /orders/delete-order/{id}:
 *   post:
 *     summary: Delete an order
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
 *         description: Order deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - ID is required
 *       500:
 *         description: Server error
 */
router.post('/delete-order/:id' , async (req , res)=>{
    try{
        const {id} = req.params;
        if(!id){
            res.status(statusCodes.BAD_REQUEST)
            .json("is not found ID");
        };

      const deleteOrder = await ordersController.deleteOrderById(id)
      if(deleteOrder){
          res.status(statusCodes.OK)
          .json({
              message:"Delete Order Successfully",
          })
      }
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({  message:"Server Interval Delete Order By id", error:error.message});
    }
})

module.exports = router