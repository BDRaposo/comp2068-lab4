'use strict';
var express = require('express');
var router = express.Router();
var Account = require('../models/account');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

//Get all accounts
router.get('/users', isLoggedIn, function (req, res) {
    Account.find(function (err, accounts) {
        if (err) console.log(err);
        else res.render('users', { allAccounts: accounts });
    });
});


//Is the user logged in?
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    console.log('Not authenticated!');
    res.redirect('/');
}

module.exports = router;
