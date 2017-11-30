var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'smoothidb.cllinoeqz94o.us-west-2.rds.amazonaws.com',
    user     : 'Smoothiemakers',
     password : 'angular2',
    database : 'Smoothies',
    ///socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

module.exports = connection;
