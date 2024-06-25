
// const errorHandler=(err,req,res,next)=>{

// const statusCode = res.statusCode ? res.statusCode : 500

// res.status(statusCode)

// res.json({
//     message:err.message,
//     stack:process.env.NODE_ENV==="production" ? null:err.stack,
// })
// }
// module.exports({
//     errorHandler,
// })
// middleware/errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging purposes
    
    // Set a default status code if not already set
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? 'null' : err.stack // Provide stack trace only in development
    });
  };
  
  module.exports = { errorHandler };
  