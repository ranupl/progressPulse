const db = require('../db');

function getEmployeeByEmail(email, callback) {
  db.query('SELECT * FROM employee WHERE email = ?', [email], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results[0]);
  });
}

module.exports = {
    getEmployeeByEmail
};
