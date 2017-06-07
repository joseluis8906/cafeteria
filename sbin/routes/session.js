var express = require('express')
var router = express.Router()

var Crypt = require('./index').Crypt;
var User = require('../models/user');

router.post('/', function (req, res) {
    var data = (req.body);

    if (data.Method === 'Start')
    {
        User.findOne({ where: {UserName: data.UserName, Password: Crypt(data.Password)}})
        .then(R => {
            (R !== null) ? res.json({Result: 1}) : res.json({Result: 0});
        });
    }

    else if (data.Method === 'Renew')
    {
        res.json({Result: true});
    }

    else if (data.Method === 'Terminate')
    {
        res.json({Result: 1});
    }

    else
    {
        res.json({Result: 0, Error: 'Method not supported.'});
    }
})

module.exports = router
