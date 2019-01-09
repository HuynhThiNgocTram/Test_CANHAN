var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var session = require('express-session');
var app = express();
app.use(session({secret: 'yourpassword'}));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(function (req, res, next) {
  if (req.originalUrl.substr(0, 5) != '/api/')
    res.redirect('/#' + req.originalUrl);
  else
    next();
});


var sinhvien_router = require('./routers/sinhvien_router');
var user_router = require('./routers/user_router');
var khachhang_router = require('./routers/khachhang_router');
var nhaxe_router = require('./routers/nhaxe_router');
var loaixe_router = require('./routers/loaixe_router');
var taikhoan_router = require('./routers/taikhoan_router');
var vexe_router = require('./routers/vexe_router');
var tuyenxe_router=require('./routers/tuyenxe_router');
var admin_router=require('./routers/admin_router');
var thanhtoan_router = require('./routers/thanhtoan_router');

app.use('/api/huyve', vexe_router);
app.use('/api/sinhvien', sinhvien_router);
app.use('/api/user', user_router);
app.use('/api/khachhang', khachhang_router);
app.use('/api/nhaxe', nhaxe_router);
app.use('/api/loaixe', loaixe_router);
app.use('/api/taikhoan', taikhoan_router);
app.use('/api/tuyenxe',tuyenxe_router);
app.use('/api/admin',admin_router);
app.use('/api/thanhtoan', thanhtoan_router);

var port = 4000;
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
module.exports = app;