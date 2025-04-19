const connectToDB = require('./config/db');
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const helmet = require('helmet');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const notFoundMiddleware = require('./middleware/notFoundMiddleware');
const path = require('path');
const cookieParser = require('cookie-parser')
dotenv.config()

// Serve static files from the 'public' directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/uploads' , express.static(path.join(__dirname, 'public/uploads')))


// Paras data json
app.use(express.json());
app.use(cookieParser())

// Middleware Security 
app.use(cors())
app.use(helmet())


// connect to database
connectToDB();

// Middleware Logger 

app.use(loggerMiddleware)

// Router Users
app.use('/auth' , require('./routes/auth/registerRoute'))
app.use('/auth', require('./routes/auth/loginRoute'))
app.use('/auth' , require('./routes/auth/refreshTokenRoute'))
app.use('/auth' , require('./routes/auth/changePasswordRoute'))
app.use('/auth' , require('./routes/auth/meRoute'))
// Router Products
app.use('/product' , require('./routes/product/updateProductRoute'))
app.use('/product' , require('./routes/product/addProductRoute'))
app.use('/product' , require('./routes/product/getProductRoute'))
app.use('/product' , require('./routes/product/deleteProductRoute'))
// Router customers 
app.use('/customers' , require('./routes/customers/addCustomerRoute'))
app.use('/customers' , require('./routes/customers/getCustomerRoute'))
app.use('/customers' , require('./routes/customers/updateCustomerRoute'));
app.use('/customers' , require('./routes/customers/deleteCustomerRoute'))
// Router orders
app.use('/orders' , require('./routes/orders/addOrdersRoute'))
app.use('/orders' , require('./routes/orders/getAllOrdersRoute'))
app.use('/orders' , require('./routes/orders/deleteOrdersRoute'))
app.use('/orders' , require('./routes/orders/updateOrdersRoute'))
// Router inventory
app.use('/inventory' , require('./routes/inventory/addInventoryRoute'));
app.use('/inventory' , require('./routes/inventory/getInventoryRoute'))
app.use('/inventory' , require('./routes/inventory/deleteInventoryRoute'))
app.use('/inventory' , require('./routes/inventory/updateInventoryRoute'))


// 404 Not Found Middleware 
app.use(notFoundMiddleware)


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on("error", (err) => {
    console.error("Error starting server:", err);
});