var express = require('express');
var router = express.Router();
var Admin = require('../models/admin_model');

router.get('/', function (req, res, next) {
    Admin.getAllTaiKhoanKhachHang( function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.delete('/id/:id', function (req, res, next) {
    Admin.deleteDanhSachTaiKhoan(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.get('/danhsachnhaxe', function (req, res, next) {
    Admin.getAllDanhSachNhaXe( function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/danhsachve', function (req, res, next) {
    Admin.getAllDanhSachVe( function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/capnhattaikhoan/id/:id', function (req, res, next) {
    Admin.updateTaiKhoanKhachHang(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;
