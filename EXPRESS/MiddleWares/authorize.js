const authorize = (req,res,next)=>{
    const{user} = req.query;
    console.log('Authorising user...');
    if(user === 'swayam'){
        req.user = {name: 'swayam',id: 3};
        console.log('User authorised successfully.');
        next();
    }else{
        res.status(401).send('Unauthorised');
        console.log('authorization failed');
    }
}

module.exports = authorize;

//practically what happens is : we will check for the json web token and if the token exists then we communicate with database and actually get the user