var db = require('../db/Dbconnection');

var Admin = {
    getAllTaiKhoanKhachHang: function (callback) {
        return db.query("select kh.id, kh.tenkh,tk.TENDANGNHAP,kh.dienthoai,kh.CMND,kh.DIACHI from taikhoan tk, khachhang kh where tk.idkhachhang=kh.id", callback);
    },

    deleteDanhSachTaiKhoan: function (id, callback) {
        return db.query("DELETE FROM taikhoan WHERE idkhachhang=?;", [id], callback);
    },

    getAllDanhSachNhaXe: function(callback){
        return db.query("select nx.id, nx.tennhaxe,nx.dienthoai,nx.email,nx.diemdanhgia, count(*) as soluongxe from NhaXe nx, Xe x where nx.ID=x.idNhaXe group by nx.id, nx.tennhaxe,nx.dienthoai,nx.email,nx.diemdanhgia", callback);
    },

    getAllDanhSachVe: function(callback){
        return db.query("select cx.id,nx.tennhaxe, cx.giodi,cx.gioden,cx.giave from TuyenXe tx, ChuyenXe cx, Xe x, NhaXe nx where tx.id=cx.idtuyenxe and x.id=cx.idxe and nx.id=x.idnhaxe", callback);
    },

    updateTaiKhoanKhachHang: function (id, danhsachtaikhoan, callback) {
        return db.query("update DanhSachTaiKhoan set tenkh=?,TENDANGNHAP=?,dienthoai=?, CMND=?,DIACHI=? where ID=?", [danhsachtaikhoan.tenkh,danhsachtaikhoan.TENDANGNHAP,danhsachtaikhoan.dienthoai,danhsachtaikhoan.CMND,danhsachtaikhoan.DIACHI, id], callback);
    },
};
module.exports = Admin ;