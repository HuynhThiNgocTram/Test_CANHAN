var db = require('../db/Dbconnection');

var User = {
    getAlluser: function (callback) {
        return db.query("Select * from user", callback);
    },
    checkUser: function (user, callback) {
        return db.query("select IDKHACHHANG as id from taikhoan where TENDANGNHAP=? and MATKHAU=?", [user.username, user.password], callback);
    },
    addUser: function (user, callback) {
        return db.query("Insert into user(username,password,sinhvienid) values(?,?,?)", [user.username, user.password, user.sinhvienid], callback);
    },
    deleteUser: function (username, callback) {
        return db.query("delete from user where username=?", [username], callback);
    },
    updateUser: function (user, callback) {
        return db.query("update user set password=? where username=?", [user.password, user.username], callback);
    }
};
module.exports = User;