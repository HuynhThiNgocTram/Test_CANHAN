var db = require('../db/Dbconnection');

var TaiKhoan = {
    getAllTaiKhoan: function (callback) {
        return db.query("Select * from taikhoan", callback);
    },
    getTaiKhoanById: function (id, callback) {
        return db.query("select * from taikhoan where IDKHACHHANG=?", [id], callback);
    },
    addTaiKhoan: function (taikhoan, callback) {
        return db.query("Insert into taikhoan values(?,?,?,?)", [ taikhoan.IDKHACHHANG, taikhoan.TENDANGNHAP, taikhoan.MATKHAU], callback);
    },
    deleteTaiKhoan: function (id, callback) {
        return db.query("delete from taikhoan where IDKHACHHANG=?", [id], callback);
    },
    /*updateTaiKhoan: function (id, taikhoan, callback) {
        return db.query("update taikhoan set MATKHAU=? where ID=?", [taikhoan.MATKHAU, id], callback);
    },*/
    updatematkhau: function (id, taikhoan, callback) {
        return db.query("update taikhoan set MATKHAU=? where IDKHACHHANG=? AND MATKHAU=?", [taikhoan.MATKHAUMOI, id, taikhoan.MATKHAU], callback);
      
    }
};
module.exports = TaiKhoan;