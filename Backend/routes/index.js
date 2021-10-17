const express = require('express');
const router = express.Router();
const {login, signup} = require('../services/UserService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
