const authStore = require('../../store/auth/auth');

function login(email, password, callback) {
    authStore.getEmployeeByEmail(email, (error, employee) => {
        if (error) {
            console.log(error);
            return callback(error, null);
        }
        if (!employee || employee.password !== password) {
            return callback(null, null);
        }
        return callback(null, employee);
    });
}

module.exports = {
    login,
};
