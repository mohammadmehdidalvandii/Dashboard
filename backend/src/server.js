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


// 404 Not Found Middleware 
app.use(notFoundMiddleware)


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on("error", (err) => {
    console.error("Error starting server:", err);
});