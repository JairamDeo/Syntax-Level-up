const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

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

// Enquiry endpoint
router.post('/enquiryForm', async (req, res) => {
  const { name, email, mob, query } = req.body;

  try {
    // Email validation
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const sql = 'INSERT INTO enquirydetails (name, email, mobile, query, date) VALUES (?, ?, ?, ?, NOW())';
    connection.query(sql, [name, email, mob, query], (error, results) => {
      if (error) {
        console.error('Error executing enquiryForm query: ', error);
        return res.status(500).json({ error: 'An error occurred while submitting form' });
      }
      res.status(200).json({ message: 'Form submitted successfully' });
    });
  } catch (error) {
    console.error('Error submitting form: ', error);
    return res.status(500).json({ error: 'An error occurred while submitting form' });
  }
});

// Validate email format function
const isValidEmail = (email) => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
};

// Fetch enquiries endpoint
router.get('/getEnquiries', (req, res) => {
  const sql = 'SELECT name, email, mobile, query, date FROM enquirydetails';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing query:', error.sqlMessage);
      return res.status(500).json({ error: 'An error occurred while fetching enquiries', details: error.sqlMessage });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
