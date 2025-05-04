const express = require("express");
const router = express.Router();
const customerController = require('../../controllers/CustomerController');
const {statusCodes} = require('../../constants/constants');
const addCustomerValidation = require('../../validations/addCustomerValidation')

/**
 * @swagger
 * /customers/add-customer:
 *   post:
 *     summary: Add a new customer
 *     tags: [Customers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - street
 *               - city
 *               - state
 *               - zipCode
 *               - country
 *               - membership
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               street:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               zipCode:
 *                 type: string
 *               country:
 *                 type: string
 *               membership:
 *                 type: string
 *               note:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Bad request - Missing required fields or validation error
 *       500:
 *         description: Server error
 */
router.post('/add-customer' , async (req , res)=>{
    try{
        const {error} = addCustomerValidation.validate(req.body);
        
         if(error){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"Error request body fields" ,error:error.message})
        }

        const {firstName , lastName , email , phone , street , city , state , zipCode , country , membership , note , name} = req.body
        if(!firstName || !lastName || !email || !phone || !street || !city || !state || !zipCode || !country || !membership){
           return res.status(statusCodes.BAD_REQUEST)
           .json({message:"All Fields are required"}) 
        };
        
       const createCustomer =  await customerController.createCustomer({
            firstName,
            lastName,
            name:firstName+lastName,
            email,
            phone,
            address: {
                street,
                city,
                state,
                zipCode,
                country
            },
            membership,
            note:note || "Add text to note",
            createdAt:new Date(),
        });
        if(createCustomer){
            res.status(statusCodes.CREATED)
            .json({message:"Created new customer successfully"})
        }
    }
    catch(error){
        console.log(error);
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({message : "Internal Server Error" , error:error.message})
    }
})

module.exports = router