// const jwt = require('jsonwebtoken');
const User = require('../schemas/UserSchema');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel')

var signup = (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if(err) return res.json({mess: err});
        if(user==null){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) return res.json({mess: err});
                const user = new User(req.body);
                user.password = hash;
                user.role = "ROLE_USER";
                user.save((err, result) => {
                    if(err) return res.json({mess: err});
                    const data = {
                        username: result.username,
                        role: result.role
                    }
                    const accessToken =  jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn:"24h"});
                    let userModel = new UserModel(result._id, result.username, result.name, accessToken);
                    return res.json(userModel)
                })
            })
        }
        else{
            res.json({mess: 'User is already existed'});
        }
    })
} 


var login = (req, res) => {
    User.findOne({username: req.body.username}, (err, user)=> {
        if(err) return res.json(err)
        if(user!=null){
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err) return res.json({mess: err});
                if(result === true){
                    const data = {
                        username: user.username,
                        role: user.role
                    }
                    const accessToken =  jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn:"24h"});
                    let userModel = new UserModel(user._id, user.username, user.name, accessToken);
                    return res.json(userModel);
                }
                else{
                    return res.json({mess: 'Username or password is incorrect'});
                }
            })
        }  
        else{
            return res.json({mess: 'Username or password is incorrect !!!!!'});
        }
    })
}

var updateUser = (req, res) => {
    User.findOne({username: req.params.username}, (err, user) => {
        if(err) return res.json({mess: err});
        if(user!=null){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err)  return res.json({mess: err})
                user.name = req.body.name;
                user.password = hash;
                user.save((err, result) => {
                    if(err) return res.json({mess: err})
                    const data = {
                        username: result.username,
                        role: result.role
                    }
                    const accessToken =  jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn:"24h"});
                    let userModel = new UserModel(result._id, result.username, result.name, accessToken);
                    return res.json(userModel)
                })
            })
        }
        else{
            res.json({mess: "User isn't existed"});
        }
    })
}


module.exports = {
    signup,
    login,
    updateUser
}