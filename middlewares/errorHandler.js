const errorHandler = (err, req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message:err?.message,
        // stack:err?.stack it is used in case if we wanted to trace the error, from where it is coming
    })
}

const notFound = (req,res,next)=>{
    const error = new Error(`URL not found: ${req.originalUrl} `);
    res.status(404);
    next(error);
}

module.exports = {errorHandler, notFound};