const jwt = require('jsonwebtoken')
require('dotenv').config()

async function createJWT(user) {
    const { JWT_SECRET } = process.env;
    const token = await jwt.sign({id: user._id}, JWT_SECRET, {
        expiresIn: 86400 // Expires in 24 hours
    });
    return token;
}

module.exports = createJWT;