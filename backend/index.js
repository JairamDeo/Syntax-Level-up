// Import necessary modules
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require('google-auth-library');

// Load environment variables
dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL;

// Initialize Google OAuth client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

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

// Middleware CORS handling
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", FRONTEND_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(cors());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());

// Validate email format function
const isValidEmail = (email) => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
};


// Google Authentication endpoint
app.post('/google-auth', async (req, res) => {
  const { token } = req.body;
  
  try {
    // Verify Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    
    const payload = ticket.getPayload();
    const { email, name } = payload;
    
    // Check if user already exists
    const checkUserQuery = 'SELECT * FROM student WHERE email = ?';
    connection.query(checkUserQuery, [email], async (error, results) => {
      if (error) {
        console.error('Error checking user existence: ', error);
        return res.status(500).json({ error: 'An error occurred during authentication' });
      }
      
      let userId;
      
      if (results.length === 0) {
        // User doesn't exist, create a new account
        // Generate a random password for the Google user
        const randomPassword = Math.random().toString(36).slice(-10);
        const hashedPassword = await bcrypt.hash(randomPassword, 10);
        
        // Insert new user
        const insertUserQuery = 'INSERT INTO student (name, email, password, mobile, is_google_user) VALUES (?, ?, ?, ?, ?)';
        connection.query(insertUserQuery, [name, email, hashedPassword, '', 1], (error, insertResults) => {
          if (error) {
            console.error('Error creating user account: ', error);
            return res.status(500).json({ error: 'An error occurred during account creation' });
          }
          
          userId = insertResults.insertId;
          
          // Create JWT token
          const data = {
            user: {
              id: userId
            }
          };
          
          const authToken = jwt.sign(data, process.env.JWT_SECRET);
          return res.status(200).json({ message: 'Google authentication successful', authToken });
        });
      } else {
        // User exists, login the user
        userId = results[0].id;
        
        // Update the is_google_user flag if not already set
        if (!results[0].is_google_user) {
          const updateUserQuery = 'UPDATE student SET is_google_user = 1 WHERE id = ?';
          connection.query(updateUserQuery, [userId], (error) => {
            if (error) {
              console.error('Error updating user as Google user: ', error);
            }
          });
        }
        
        // Create JWT token
        const data = {
          user: {
            id: userId
          }
        };
        
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        return res.status(200).json({ message: 'Google authentication successful', authToken });
      }
    });
  } catch (error) {
    console.error('Error verifying Google token: ', error);
    return res.status(401).json({ error: 'Invalid Google token' });
  }
});

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    // Check if email already exists
    const emailExistsQuery = 'SELECT * FROM student WHERE email = ?';
    connection.query(emailExistsQuery, [email], async (error, emailResults) => {
      if (error) {
        console.error('Error executing email check query: ', error);
        return res.status(500).json({ error: 'An error occurred while signing up' });
      }

      // Check if mobile number already exists
      const mobileExistsQuery = 'SELECT * FROM student WHERE mobile = ?';
      connection.query(mobileExistsQuery, [mobile], async (error, mobileResults) => {
        if (error) {
          console.error('Error executing mobile check query: ', error);
          return res.status(500).json({ error: 'An error occurred while signing up' });
        }

        if (emailResults.length > 0 && mobileResults.length > 0) {
          return res.status(400).json({ error: 'Account already exists. Please try logging in.' });
        }

        if (emailResults.length > 0) {
          return res.status(400).json({ error: 'Email already exists. Please try logging in.' });
        }

        if (mobileResults.length > 0) {
          return res.status(400).json({ error: 'Mobile number already exists. Please try logging in.' });
        }

        // Email and mobile do not exist, proceed with signup
        try {
          // Email validation
          if (!isValidEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
          }

          // Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);

          const sql = 'INSERT INTO student (name, email, password, mobile, is_google_user) VALUES (?, ?, ?, ?, ?)';
          connection.query(sql, [name, email, hashedPassword, mobile, 0], (error, results) => {
            if (error) {
              console.error('Error executing signup query: ', error);
              return res.status(500).json({ error: 'An error occurred while signing up' });
            }
            res.status(200).json({ message: 'Signup successful' });
          });
        } catch (error) {
          console.error('Error signing up: ', error);
          return res.status(500).json({ error: 'An error occurred while signing up' });
        }
      });
    });
  } catch (error) {
    console.error('Error signing up: ', error);
    return res.status(500).json({ error: 'An error occurred while signing up' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const sql = 'SELECT * FROM student WHERE email = ?';
    connection.query(sql, [email], async (error, results) => {
      if (error) {
        console.error('Error executing query: ', error);
        return res.status(500).json({ error: 'An error occurred while logging in' });
      }

      if (results.length === 0) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const user = results[0];
      
      // Compare the password with the hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      // JWT token for logout function
      const data = {
        user: {
          id: user.id
        }
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      res.status(200).json({ message: 'Login successful', authToken: authToken });
    });
  } catch (error) {
    console.error('Error logging in: ', error);
    return res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

// Admin login endpoint
const adminLoginRouter = require('./adminLogin');
app.use('/api', adminLoginRouter);

// Enquiry Form endpoint
const enquiryFormRouter = require('./enquiryForm');
app.use('/api', enquiryFormRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});