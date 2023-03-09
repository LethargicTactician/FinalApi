const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "database",
    user: "root",
    password: "password",
    database: "bookapi_db",
});


connection.connect(function (error) {
    if (error) return console.error("Database Error: ", error.message);
    console.log("Successfully connected to the MySQL server");
});
module.exports = connection;