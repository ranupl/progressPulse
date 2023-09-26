// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "progress",
//   password: "pulse",
//   database: "progress_pulse",
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL database");
// });

// module.exports = db;



// const mysql = require("mysql2/promise"); 

// const db = mysql.createPool({
//   host: "localhost",
//   user: "progress",
//   password: "pulse",
//   database: "progress_pulse",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// module.exports = db;

const mysql = require("mysql2");
const util = require("util"); // Import the util module

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

// Use util.promisify to convert callback-style query to promise-style query
const query = util.promisify(db.query).bind(db);

module.exports = { db, query }; // Export both the connection and the query function



