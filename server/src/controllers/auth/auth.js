const authService = require("../../services/auth/auth");

async function login(req, res) {
    try {
        const { email, password } = req.body;
        authService.login(email, password, (error, employee) => {
            if (error) {
                // return res.status(500).json({ error: 'Internal Server Error' });
                res.json(false);
            }
            if (!employee) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            // res.status(200).json({ message: 'Login successful', employee });
            res.json(true);
        });
    } catch (error) {
        console.error("Error while login:", error);
        res
            .status(500)
            .json({ error: "An error occurred while login" });
    }
}

module.exports = {
    login
}