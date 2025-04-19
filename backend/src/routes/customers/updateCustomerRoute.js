const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/CustomerController');
const {statusCodes} = require('../../constants/constants');

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