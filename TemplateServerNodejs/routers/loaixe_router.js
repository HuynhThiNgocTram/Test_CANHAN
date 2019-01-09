var express = require('express');
var router = express.Router();

var LoaiXe = require('../models/loaixe_model');
router.get('/id/:id?', function (req, res, next) {
    if (req.params.id) {
        NhaXe.getNhaXeById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows[0]);
            }
        });
    }
});
router.get('/', function (req, res, next) {
    LoaiXe.getAllLoaiXe(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/', function (req, res, next) {
    LoaiXe.addLoaiXe(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});



module.exports = router;