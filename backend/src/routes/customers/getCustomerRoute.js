const express = require("express");
const router = express.Router();
const customerController = require('../../controllers/CustomerController');
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all customers or search by name
 *     tags: [Customers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Customer name to search for
 *     responses:
 *       200:
 *         description: Get customers successfully
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
 *                       firstName:
 *                         type: string
 *                       lastName:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       address:
 *                         type: object
 *                         properties:
 *                           street:
 *                             type: string
 *                           city:
 *                             type: string
 *                           state:
 *                             type: string
 *                           zipCode:
 *                             type: string
 *                           country:
 *                             type: string
 *                       membership:
 *                         type: string
 *                       note:
 *                         type: string
 *       500:
 *         description: Server error
 */
router.get('/' , async(req , res)=>{
    try{
        const {name} = req.query;
        if(name){
            const customer = await customerController.getCustomerByUsername(name);
            res.status(statusCodes.OK)
            .json({message:"Get customer by username successfully",data:customer});
        } else{
            const customers = await customerController.getAllCustomer();
            res.status(statusCodes.OK)
            .json({message:"Get all customers successfully",data:customers});
        }
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message : "Internal Server Error" , error:error.message})
    }
});

/**
 * @swagger
 * /customers/details-customer/{id}:
 *   get:
 *     summary: Get customer by ID
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
 *         description: Get customer successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     firstName:
 *                       type: string
 *                     lastName:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     phone:
 *                       type: string
 *                     address:
 *                       type: object
 *                       properties:
 *                         street:
 *                           type: string
 *                         city:
 *                           type: string
 *                         state:
 *                           type: string
 *                         zipCode:
 *                           type: string
 *                         country:
 *                           type: string
 *                     membership:
 *                       type: string
 *                     note:
 *                       type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - ID is required
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get('/details-customer/:id', async (req , res)=>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(statusCodes.BAD_REQUEST)
                .json({message: "ID is required"});
        };
        const customer = await customerController.getCustomerById(id);
        if(!customer){
            return res.status(statusCodes.NOT_FOUND)
            .json({message: "customer not found"});
        };
    
        return res.status(statusCodes.OK)
                    .json({
                        data: customer,
                        message: "Get Customer successfully"
                    });
    }
     catch(error){
        return res.status(statusCodes.INTERNAL_SERVER_ERROR)
            .json({message: "Error getting Customer by id", error: error.message});
     }

})

module.exports = router