var express = require('express');
var router = express.Router();
var KhachHang = require('../models/khachhang_model');
router.get('/id/:id?', function (req, res, next) {
    if (req.params.id) {
        KhachHang.getKhachHangById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows[0]);
            }
        });
    }
});

router.post('/id/:id', function (req, res, next) {
    KhachHang.addKhachHang(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.put('/id/:id', function (req, res, next) {
    KhachHang.updateKhachHang(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.delete('/id/:id', function (req, res, next) {
    KhachHang.deleteKhachHang(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.get('/lichsuhoatdong/id/:id', function (req, res, next) {
    KhachHang.getAllLichSuHoatDong(req.params.id,  function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;