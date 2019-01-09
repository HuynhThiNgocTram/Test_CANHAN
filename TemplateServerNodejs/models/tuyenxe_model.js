var db = require('../db/Dbconnection');

var TuyenXe = {
    getAllDiemDi: function (callback) {
        return db.query("Select distinct DiemDi from TuyenXe", callback);
    },

    getAllDiemDen: function (callback) {
        return db.query("Select distinct DiemDen from TuyenXe", callback);
    } ,
    getAllTuyenXe: function (callback) {
        return db.query("Select * from tuyenxe", callback);
    }, 
    addTuyenXe: function (tuyenxe, callback) {
        return db.query("Insert into tuyenxe values(?,?,?)", [tuyenxe.ID, tuyenxe.DIEMDI, tuyenxe.DIEMDEN], callback);
    },
    getAllchuyendiphobien: function (diemdi,callback) {
        var sql="select tx.DiemDi,tx.DiemDen, Min(cx.giave) as minGiaVe "+
        "from ChuyenXe cx,TuyenXe tx  where tx.id = cx.idtuyenxe  and tx.DiemDi=? group by tx.DiemDi , tx.DiemDen LIMIT 8";
        return db.query(sql,[diemdi],callback);
    }
};
module.exports = TuyenXe;