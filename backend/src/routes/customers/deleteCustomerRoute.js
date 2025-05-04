const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/CustomerController');
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /customers/delete-customer/{id}:
 *   delete:
 *     summary: Delete a customer
 *     tags: [Customers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer deleted successfully
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
 *         description: Delete customer failed
 *       404:
 *         description: Customer ID is required
 *       500:
 *         description: Server error
 */
router.delete('/delete-customer/:id', async (req , res)=>{
    try{
        // const customerID = req.params.id;
        const {id} = req.params;
        if(!id){
            return res.status(statusCodes.NOT_FOUND),json({
                message:"Customer id id required"
            })
        };
        const deleteCustomer = await customerController.deleteCustomerById(id);
        if(!deleteCustomer){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"Delete Product failed"})
        }
        return res.status(statusCodes.OK)
        .json({
            data:deleteCustomer,
            message:"Customer deleted successfully"
        })
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message:"Server Error internal Delete Customer", error:error.message});
    }
})

module.exports = router