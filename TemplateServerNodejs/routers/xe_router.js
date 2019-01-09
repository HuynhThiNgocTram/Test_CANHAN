var express = require('express');
var router = express.Router();

var NhaXe = require('../models/xe_model');
router.get('/id/:id?', function (req, res, next) {
    if (req.params.id) {
        NhaXe.getXeById(req.params.id, function (err, rows) {
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
    NhaXe.getAllXe(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/', function (req, res, next) {
    NhaXe.addXe(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});



router.delete('/id/:id', function (req, res, next) {
    NhaXe.deleteXe(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

module.exports = router;