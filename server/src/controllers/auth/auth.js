const authService = require("../../services/auth/auth");
const errorCodes = require("../../models/error");

async function userLogin(req, res) {
    try {
        const { email, password } = req.body;
        authService.userLogin(email, password, (error, employee) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (!employee) {
                return res.status(200).json({ error: 'Invalid credentials' });
            }
            req.session.employeeId = employee.id;
            delete employee.password;
            res.status(200).json({ message: 'Login successful', employee });
        });
    } catch (error) {
        console.error("Error while login:", error);
        res
            .status(500)
            .json({ error: "An error occurred while login" });
    }
}

async function adminLogin(req, res) {
    try {
        const { email, password } = req.body;
        authService.adminLogin(email, password, (error, employee) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (!employee) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            const token = jwt.sign({ userId: employee.id }, 'progressPulse', { expiresIn: '1h' });
            // res.status(200).json({ message: 'Login successful', employee });
            res.status(200).json({ message: 'Login successful', token });
        });
    } catch (error) {
        console.error("Error while login:", error);
        res
            .status(500)
            .json({ error: "An error occurred while login" });
    }
}

module.exports = {
    userLogin,
    adminLogin
}