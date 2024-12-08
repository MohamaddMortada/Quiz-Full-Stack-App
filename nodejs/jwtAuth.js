const express = require('express');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = 'jwt-secret-key';

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });
  
    try {
      const verified = jwt.verify(token, JWT_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid Token' });
    }
  };
  module.exports = verifyToken;