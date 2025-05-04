const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/CustomerController');
const {statusCodes} = require('../../constants/constants');

/**
 * @swagger
 * /customers/edit-customer/{id}:
 *   put:
 *     summary: Update customer information
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
 *       200:
 *         description: Customer updated successfully
 *       400:
 *         description: Bad request - Missing required fields
 *       500:
 *         description: Server error
 */
router.put('/edit-customer/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, phone, street, city, state, zipCode, country, membership, note } = req.body;
        
        if (!firstName || !lastName || !email || !phone || !street || !city || !state || !zipCode || !country || !membership) {
            return res.status(statusCodes.BAD_REQUEST)
                .json({ message: "All Fields are required" });
        }

        const customerData = {
            firstName,
            lastName,
            name: firstName + lastName,
            email,
            phone,
            street,
            state,
            city,
            zipCode,
            country,
            membership,
            note: note || '',
            updatedAt: new Date(),
        };

        const update =  await customerController.updateCustomer(id, customerData);
        if(update){
            res.status(statusCodes.OK)
            .json({ message: "Update data Customers successfully" });
        }
    } catch (error) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
            .json({
                message: "Error Server Internal Edit-customer",
                error: error.message
            });
    }
});

module.exports = router