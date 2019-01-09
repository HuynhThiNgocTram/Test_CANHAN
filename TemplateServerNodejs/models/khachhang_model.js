var db = require('../db/Dbconnection');

var KhachHang = {
    getAllKhachHang: function (callback) {
        return db.query("Select * from khachhang", callback);
    },
    getKhachHangById: function (id, callback) {
        return db.query("select * from khachhang where ID=?", [id], callback);
    },
    addKhachHang: function (khachhang, callback) {
        return db.query("Insert into khachhang values(?,?,?,?,?,?)", [khachhang.ID, khachhang.TENKH, khachhang.CMND, khachhang.DIENTHOAI, khachhang.DIACHI, khachhang.EMAIL, khachhang.GIOITINH], callback);
    },
    deleteKhachHang: function (id, callback) {
        return db.query("delete from khachhang where ID=?", [id], callback);
    },
    updateKhachHang: function (id, khachhang, callback) {

        return db.query("update khachhang set TENKH=?, GIOITINH=?, CMND=?,DIENTHOAI=?, DIACHI=?, EMAIL=? where ID=?", [khachhang.TENKH, khachhang.GIOITINH, khachhang.CMND, khachhang.DIENTHOAI, khachhang.DIACHI, khachhang.EMAIL, id], callback);
    },
  
    getAllLichSuHoatDong: function (id, callback) {

        var sql = "select chuyenxe.GIODI,nhaxe.TENNHAXE,tuyenxe.DIEMDI,tuyenxe.DIEMDEN,chuyenxe.GIAVE,trangthai_chuyenxe.TENTRANGTHAI" +
            " from chuyenxe,xe,nhaxe,tuyenxe,trangthai_chuyenxe,khachhang, datvexe " +
            " where nhaxe.ID=xe.IDNHAXE AND chuyenxe.IDXE=XE.id and tuyenxe.ID=chuyenxe.IDTUYENXE and trangthai_chuyenxe.ID=chuyenxe.IDTRANGTHAI_CHUYENXE " +
            "and chuyenxe.ID = datvexe.IDKHACHHANGDATVE and khachhang.ID = ?";
        console.log(sql);
        return db.query(sql, [id], callback);
    }
    
};
module.exports = KhachHang;