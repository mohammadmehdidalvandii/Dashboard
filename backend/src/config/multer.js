const multer = require("multer");
const path = require('path');

// configure Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null , Date.now() + "-" + file.originalname);
    }
})

// File filter
const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')){
        cb(null, true);
    }else{
        cb(new Error("Just image Required"), false);
    }
};

// created multer instance;
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5MB
});

module.exports = upload