var db = require('../db/Dbconnection');

var Xe = {
    getAllXe: function (callback) {
        return db.query("Select * from xe", callback);
    },
    getXeById: function (id, callback) {
        return db.query("select * from xe where ID=?", [id], callback);
    },
    addXe: function (xe, callback) {
        return db.query("Insert into xe values(?,?,?,?,?)", [xe.ID, xe.BIENSO, xe.IDNHAXE, xe.IDLOAIXE, xe.SOCHONGOI], callback);
    },
    deleteXe: function (id, callback) {
        return db.query("delete from xe where ID=?", [id], callback);
    },
    
};
module.exports = Xe;