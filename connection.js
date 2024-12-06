var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    "host":"bkknvcwajtx29ol6vdvd-mysql.services.clever-cloud.com",
    "user":"udkdb3bdcd3w0qls",
    "password":"3DiDyr6xsy4nC8phiW5f",
    "database":"bkknvcwajtx29ol6vdvd"
});

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
