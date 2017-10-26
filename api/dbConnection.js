var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'smoothiDB',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

module.exports = connection;