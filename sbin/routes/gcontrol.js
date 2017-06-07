var express = require('express')
var router = express.Router()

// define the home page route
router.post('/', function (req, res) {
    var data = (req.body);

    if (data.Method === 'Select')
    {
        res.json([]);
    }
})

module.exports = router
