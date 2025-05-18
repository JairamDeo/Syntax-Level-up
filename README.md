
# 🗃️ MySQL Database Setup for Syntax Web Application

This guide helps you set up the **MySQL database** for the project. It includes all the SQL commands required to create the database and tables as used in the original setup.

---
## 📦Required Database Credentials 
DB_HOST ,

DB_USER ( your username of db) ,

DB_PASSWORD ,

DB_NAME

update your db credentials in backend env do not chnage variable names!

## 📦 Database Details

- **Tables**: `student`, `enquirydetails`, `adminlog`

# Do not change this table name
---

## 🧾 SQL Script to Create Database and Tables

> 📌 Run this entire script in your MySQL environment (Windows CMD or Linux terminal) after logging in.

## 💻 MySQL Login Instructions

### 🪟 Windows (CMD)

```bash
mysql -u root -p
# Enter your password (e.g., jairamdb)
```

### 🐧 Ubuntu (Amazon EC2 Linux)

```bash
sudo mysql -u root -p
# Enter your MySQL root password
```

```sql
-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS syntax;
USE syntax;

-- Step 2: Create the student table
CREATE TABLE IF NOT EXISTS student (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    mobile VARCHAR(15) NOT NULL UNIQUE,
    is_google_user TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 3: Create the enquirydetails table
CREATE TABLE IF NOT EXISTS enquirydetails (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    query TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 4: Create the adminlog table
CREATE TABLE IF NOT EXISTS adminlog (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 5: Insert default admin credentials
INSERT INTO adminlog (username, password) VALUES ('AdminWizard', 'Admin@123');
```

---

# after all must Run this sql query with your datbase crendetials other wise database will failed to connect with backend

```bash
ALTER USER 'your_username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
FLUSH PRIVILEGES;
```

---

## 📌 Notes

- The `created_at` and `date` fields use `CURRENT_TIMESTAMP` by default.
- Make sure MySQL is running before executing the commands.
- If using EC2, open MySQL port (default 3306) in your security group for remote access (⚠️ only if needed).

---

## 🤝 Contributing

If you're joining the team:
1. Clone the repo.
2. Create the database as shown.
3. Start developing 🚀

---

📧 For help, contact `jairamdeo2002@gmail.com`, `8830973046`.