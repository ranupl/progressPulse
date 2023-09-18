const db = require('../db');

function getEmployeeByEmail(email, callback) {
  db.query('SELECT * FROM employee WHERE email = ?', [email], (error, results) => {
    if (error) {
      console.log(error);
      return callback(error, null);
    }
    return callback(null, results[0]);
  });
}

function getAdminByEmail(email, callback) {
  db.query('SELECT * FROM admin WHERE email = ?', [email], (error, results) => {
    if (error) {
      console.log(error);
      return callback(error, null);
    }
    return callback(null, results[0]);
  });
}

module.exports = {
    getEmployeeByEmail,
    getAdminByEmail
};
