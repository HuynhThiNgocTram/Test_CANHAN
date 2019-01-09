var db = require('../db/Dbconnection');

var HuyVe = {
    sp_Huyve: function (idve, sodt, callback) {
        var sql="call sp_Huyve(?,?)";
        return db.query(sql, [ idve,sodt], callback);
    },
};

module.exports = HuyVe;