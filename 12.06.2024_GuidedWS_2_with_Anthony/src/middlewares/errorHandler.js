//* Error Handler

module.exports = (err,req,res,next)=>{
    console.log(err)
    const errorStatusCode = res?.errorStatusCode || 500;
    res.status(errorStatusCode).send({
      error: true,
      status: false,
      message: err.message,
      // cause: err.cause,
      // stack: err.stack
    });
}