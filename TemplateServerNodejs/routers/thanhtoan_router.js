var express = require('express');
var router = express.Router();
var md5 = require('md5');
var querystring = require('qs');
var dateFormat = require('dateformat');
var NhaXe = require('../models/nhaxe_model');
var HuyVe = require('../models/vexe_model');

router.post('/thanhtoanVNPAY', function (request, response) {

    NhaXe.getChoTrong(request.body.idchuyenxe, function (err, rows) {
        if (err) {
            response.send(err);
            return;
        }
        if (rows[0].SOCHOTRONG < request.body.slnguoi) {
            response.json({ "msg": "Không còn trỗ trống" });
            return;
        }
        request.session.ttdv={
            idchuyenxe:request.body.idchuyenxe,
            slnguoi:request.body.slnguoi,
            idkhachhang:request.session.idkhachhang,
        }
        var ipAddr = request.headers['x-forwarded-for'] ||
            request.connection.remoteAddress ||
            request.socket.remoteAddress ||
            request.connection.socket.remoteAddress;
        var url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        var vnp_Params = {};
        var date = new Date();
        vnp_Params['vnp_Amount'] = request.body.sotien * 100;
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_CreateDate'] = dateFormat(date, 'yyyymmddHHmmss');
        vnp_Params['vnp_CurrCode'] = 'VND';
        vnp_Params['vnp_IpAddr'] = ipAddr;
        vnp_Params['vnp_Locale'] = 'vn';
        vnp_Params['vnp_OrderInfo'] = request.body.noidung || "Thanh Toan";
        vnp_Params['vnp_OrderType'] = 'billpayment';
        vnp_Params['vnp_ReturnUrl'] = 'http://localhost:4000/api/thanhtoan/ketquathanhtoanVNPAY/';
        vnp_Params['vnp_TmnCode'] = 'GXHV3M8Z';
        vnp_Params['vnp_TxnRef'] = dateFormat(date, 'HHmmss');
        vnp_Params['vnp_Version'] = '2.0.0';
        if (request.body.nganhang !== null && request.body.nganhang !== '')
            vnp_Params['vnp_BankCode'] = request.body.nganhang;
        vnp_Params = sortObject(vnp_Params);


        var keyhash = "VBTJFVSETQLBDVPGXIMREJKCULKCUEFV";
        var vnp_SecureHash = keyhash + querystring.stringify(vnp_Params, { encode: false });
        vnp_Params['vnp_SecureHashType'] = 'MD5';
        vnp_Params['vnp_SecureHash'] = md5(vnp_SecureHash);


        url = url + "?" + querystring.stringify(vnp_Params, { encode: false });
        response.json(
            {
                url: url
            }
        )
    });



});

router.get('/ketquathanhtoanVNPAY', function (req, res) {
    var xn = 0;
    var vnp_Params = req.query;
    var secureHash = vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];
    vnp_Params = sortObject(vnp_Params);
    var keyhash = "VBTJFVSETQLBDVPGXIMREJKCULKCUEFV";
    var vnp_SecureHash = keyhash + querystring.stringify(vnp_Params, { encode: false });
    var checksum = md5(vnp_SecureHash);

    if (checksum == secureHash) {
        if(vnp_Params['vnp_ResponseCode']==='00')
        {
            NhaXe.insertDatVeXe(req.session.ttdv,function(err,rows){
                console.log(rows);
                if(err)
                  res.json(err);
                else
                   res.redirect('/returnVNPAY?xn=' + vnp_Params['vnp_ResponseCode']+"&IDTHANHTOAN="+rows[0].IDTHANHTOAN);
            });
        }
        else
         res.redirect('/returnVNPAY?xn=' + vnp_Params['vnp_ResponseCode']);
    }
    else
        res.redirect('/returnVNPAY?error');
});

function sortObject(o) {
    var sorted = {},
        key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}


module.exports = router;