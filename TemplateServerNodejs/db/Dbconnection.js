var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '200797',
    database: 'vexe'
});
module.exports = connection;