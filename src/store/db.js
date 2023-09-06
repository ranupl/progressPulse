const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "progress",
  password: "pulse",
  database: "progress_pulse",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

module.exports = db;