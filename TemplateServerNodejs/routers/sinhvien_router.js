var express = require('express');
var router = express.Router();
var SinhVien = require('../models/sinhvien_model');
router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        SinhVien.getSinhVienById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});
router.post('/', function (req, res, next) {
    SinhVien.addSV(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.put('/:id', function (req, res, next) {
    SinhVien.updateSV(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    SinhVien.deleteSV(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

module.exports = router;