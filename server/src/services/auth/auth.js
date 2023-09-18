const authStore = require('../../store/auth/auth');

function userLogin(email, password, callback) {
    authStore.getEmployeeByEmail(email, (error, employee) => {
        if (error) {
            console.log(error);
            return callback(error, null);
        }
        if (!employee || employee.password !== password) {
            return callback(null, null);
        }
        console.log(employee);
        return callback(null, employee);
    });
}

function adminLogin(email, password, callback) {
    authStore.getAdminByEmail(email, (error, employee) => {
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
    userLogin,
    adminLogin
};
