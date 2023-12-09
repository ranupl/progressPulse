const mysql = require("mysql2");
const util = require("util"); // Import the util module

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "progress",
//   password: "pulse",
//   database: "progress_pulse",
// });

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12668686",
  password: "lPFwGM8SVP",
  database: "sql12668686",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// Use util.promisify to convert callback-style query to promise-style query
const query = util.promisify(db.query).bind(db);

module.exports = { db, query }; // Export both the connection and the query function
