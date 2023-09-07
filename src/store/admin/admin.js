const db = require("../db");

async function getAdminById(adminId) {
    const query = "SELECT * FROM admin WHERE id = ?";
    try {
        const queryResult = await new Promise((resolve, reject) => {
            db.query(query, [adminId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return queryResult;
    } catch (error) {
        console.log(error);
    }
}

async function updateAdmin(adminId, updatedAdminData) {
    const query = "UPDATE admin SET ? WHERE id = ?";
    try {
        const queryResult = await new Promise((resolve, reject) => {
            db.query(query, [updatedAdminData, adminId], (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results.affectedRows > 0);
            });
        });
        return queryResult;
    } catch (error) {
        console.log(error);
    }
}

async function deleteAdmin(adminId) {
    const query = "DELETE FROM admin WHERE id = ?";
    try {
        const queryResult = await new Promise((resolve, reject) => {
            db.query(query, [adminId], (err, results) => {
                if (err) reject(err);
                resolve(results.affectedRows > 0);
            });
        });
        return queryResult;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAdminById,
    updateAdmin,
    deleteAdmin
}