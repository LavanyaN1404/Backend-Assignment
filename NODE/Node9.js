const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }

    req.user = user;
    next();
  });
}

module.exports = { authenticateToken, app };
