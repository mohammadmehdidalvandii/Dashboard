const notFoundMiddleware = (err , req , res , next)=>{
    console.error("Error =>" , err.stack)
    res.status(404).send({message : "Not Found" , error : err.message})
}

module.exports = notFoundMiddleware