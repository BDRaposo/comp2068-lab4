'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET login page. */
router.get('/', function (req, res) {
    res.render('login');
});

//Try to login with passport
router.post('/', passport.authenticate('local',{
    successRedirect: '/users',
    failureRedirect: '/login',
    failureMessage: 'Invalid Login'
}));

module.exports = router;
