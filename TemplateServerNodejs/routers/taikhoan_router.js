var express = require('express');
var router = express.Router();
var TaiKhoan = require('../models/taikhoan_model');

router.get('/id/:id?', function (req, res, next) {
    if (req.params.id) {
        TaiKhoan.getTaiKhoanById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows[0]);
            }
        });
    }
});


router.put('/id/:id', function (req, res, next) {
    TaiKhoan.updatematkhau(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});



module.exports = router;