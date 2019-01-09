var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'db4free.net',
    user: 'ec1806',
    password: '123456789',
    database: 'datavexe'
});
module.exports = connection;