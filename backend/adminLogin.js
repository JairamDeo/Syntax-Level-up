// Import necessary modules
const express = require('express');
const mysql = require('mysql');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Express router
const router = express.Router();

// Create MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Admin login endpoint
router.post('/adminlogin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const sql = 'SELECT * FROM adminlog WHERE username = ? AND password = ?';
    connection.query(sql, [username, password], (error, results) => {
      if (error) {
        console.error('Error executing query: ', error);
        return res.status(500).json({ error: 'An error occurred while logging in' });
      }

      const user1 = results[0];

      if (results.length === 0) {
        return res.status(400).json({ error: 'Invalid admin credentials' });
      }

      // JWT token for admin
      const data1 = {
        user1: {
          id: user1.id
        }
      };
      const authToken1 = jwt.sign(data1, process.env.ADMIN_JWT_SECRET);

      res.status(200).json({ message: 'Admin login successfully', authToken1: authToken1 });
    });
  } catch (error) {
    console.error('Error logging in as admin: ', error);
    return res.status(500).json({ error: 'An error occurred while logging in as admin' });
  }
});

// Export the router
module.exports = router;
