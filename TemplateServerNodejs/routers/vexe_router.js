var express = require('express');
var router = express.Router();
var HuyVe = require('../models/vexe_model');

router.put('/idve/:idve/sodt/:sodt', function (req, res, next) {
    HuyVe.sp_Huyve(req.params.idve, req.params.sodt, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});
module.exports = router;