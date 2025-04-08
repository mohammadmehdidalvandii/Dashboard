const mongoose = require("mongoose");

const connectToDB = async ()=>{
    try{
        if(mongoose.connections[0].readyState){
            console.log("Using existing database connection");
            return true
        }
        const connection = await mongoose.connect(process.env.DATABASE_URL);
        if(connection){
            console.log("Connected To MongoDB successfully ✅")
            return true;
        }
    } catch(error){
        console.log("DataBase Connection Error" ,error)
        process.exit(1)
    }
};

module.exports = connectToDB;