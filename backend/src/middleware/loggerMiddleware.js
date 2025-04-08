const loggerMiddleware = (req , res ,next)=>{
    const currentTime = new Date().toISOString();
    console.log(`[time:${currentTime}]-method:${req.method}-url:${req.url}`);
    next();
}

module.exports = loggerMiddleware