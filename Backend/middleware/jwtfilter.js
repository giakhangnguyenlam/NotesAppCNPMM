const jwt = require("jsonwebtoken");

var authenToken = function(req, res, next){
    const header = req.headers['authorization'];
    const token = header.split(' ')[1];
    if(!token) res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
        if(err) res.json({
            err: 'your token is expired'
        })
        if(data.role === 'ROLE_USER'){
            next();
        }
        else{
            return res.json({err: 'Not permission'});
        }
    });
}

module.exports = {
    authenToken
}