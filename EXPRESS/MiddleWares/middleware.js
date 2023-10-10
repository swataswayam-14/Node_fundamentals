const middleware = (req,res,next)=>{
    console.log('User is trying to get the products.');
    next();
}
module.exports = middleware;