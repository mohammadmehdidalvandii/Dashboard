const connectToDB = require('./config/db');
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const helmet = require('helmet');
const loggerMiddleware = require('./middleware/loggerMiddleware');
dotenv.config()


// Paras data json
app.use(express.json());

// Middleware Security 
app.use(cors())
app.use(helmet())


// connect to database
connectToDB();

// Middleware Logger 

app.use(loggerMiddleware)


app.get('/', (req, res) => {
    res.send("hello dashboard");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on("error", (err) => {
    console.error("Error starting server:", err);
});