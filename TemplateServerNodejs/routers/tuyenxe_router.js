var express = require('express');
var router = express.Router();
var Tuyenxe = require('../models/tuyenxe_model');


router.get('/', function (req, res, next) {
    Tuyenxe.getAllTuyenXe(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


// router.get('/', function (req, res, next) {
//     Tuyenxe.getAllDiemDi( function (err, rows) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// });
router.get('/diemdi', function (req, res, next) {
    Tuyenxe.getAllDiemDi(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/diemden', function (req, res, next) {
    Tuyenxe.getAllDiemDen( function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/chuyendiphobien/diemdi/:diemdi', function (req, res, next) {
    Tuyenxe.getAllchuyendiphobien(req.params.diemdi,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});



module.exports = router;