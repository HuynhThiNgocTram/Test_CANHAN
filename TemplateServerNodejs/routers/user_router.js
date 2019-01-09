var express = require('express');
var router = express.Router();
var User = require('../models/user_model');
router.post('/authorize', function (req, res, next) {
    User.checkUser(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            req.session.idkhachhang=rows[0].id;
            res.json(rows[0]);
        }
    });
});

module.exports = router;