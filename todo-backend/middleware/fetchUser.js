var jwt = require('jsonwebtoken')
const JWT_SECRET = 'HitKoladiya434445@#$%'

const fetchUser = (req, res, next) => {
    // get the user from the JWT token and add id to request the object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: 'please authenticate a valid token' })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({ error: 'please authenticate a valid token' })
    }

}

module.exports = fetchUser