const mysql = require("mysql2");
const util = require("util"); // Import the util module

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "progress",
//   password: "pulse",
//   database: "progress_pulse",
// });

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// Use util.promisify to convert callback-style query to promise-style query
const query = util.promisify(db.query).bind(db);

module.exports = { db, query }; // Export both the connection and the query function
