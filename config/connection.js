const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {

	connection = mysql.createConnection({
		port: '3306',
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burgers_db'
	});

}

connection.connect(function (err) {
	if (err) {
		return console.error('error: ' + err.message);
	}

	console.log('Connected to the MySQL server.');
});

module.exports = connection;
