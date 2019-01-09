var db = require('../db/Dbconnection');

var LoaiXe = {
    getAllLoaiXe: function (callback) {
        return db.query("Select * from loaixe", callback);
    },
    getLoaiXeById: function (id, callback) {
        return db.query("select * from loaixe where ID=?", [id], callback);
    },
    addLoaiXe: function (loaixe, callback) {
        return db.query("Insert into loaixe values(?,?)", [loaixe.ID, loaixe.TENLOAI], callback);
    },
    
};
module.exports = LoaiXe;