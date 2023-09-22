const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    // console.log(token);
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
   
    jwt.verify(token, 'progressPulse', (error, user) => {
        if (error) return res.status(403).json({ error: 'Forbidden' });
        req.session.user = user.employee;
        console.log(req.session.user);
        next();
    });
}

module.exports = authenticateToken;