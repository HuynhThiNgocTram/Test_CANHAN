var express = require('express');
var router = express.Router();

var NhaXe = require('../models/nhaxe_model');
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
router.get('/tuyenxe/diemdi/:diemdi/diemden/:diemden/thoigian/:thoigian', function (req, res, next) {
    NhaXe.getSelectedTuyenXe(req.params.diemdi, req.params.diemden, req.params.thoigian, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/idnhaxe/:idnhaxe/idloaixe/:idloaixe/thoigian/:thoigian/giave/:giave/danhgia/:danhgia', function (req, res, next) {
    NhaXe.getSelectedChuyenXe(req.params.idnhaxe, req.params.idloaixe, req.params.thoigian, req.params.giave, req.params.danhgia, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/getChoNgoi/idchuyenxe/:idchuyenxe', function (req, res, next) {
    NhaXe.getChoNgoiByIDChuyenXe(req.params.idchuyenxe, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.get('/datVeXe/idkhachhang/:idkh/slnguoi/:slnguoi/idchuyenxe/:idchuyen/idloaithanhtoan/:idloaithanhtoan', function (req, res, next) {
    NhaXe.insertDatVeXe(req.params.idkh,req.params.slnguoi,req.params.idchuyen,req.params.idloaithanhtona, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/', function (req, res, next) {
    NhaXe.getAllNhaXe(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/', function (req, res, next) {
    NhaXe.addNhaXe(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.put('/id/:id', function (req, res, next) {
    NhaXe.updateNhaXe(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows[0]);
        }
    });
});

router.delete('/id/:id', function (req, res, next) {
    NhaXe.deleteNhaXe(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.post('/datVeXe', function (req, res, next) {
    NhaXe.insertDatVeXe(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows[0][0]);
        }
    });
});
router.get('/datVeXe/idkhachhang/:idkh/slnguoi/:slnguoi/idchuyenxe/:idchuyen/idloaithanhtoan/:idloaithanhtoan', function (req, res, next) {
    NhaXe.insertDatVeXe(req.params.idkh,req.params.slnguoi,req.params.idchuyen,req.params.idloaithanhtona, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;