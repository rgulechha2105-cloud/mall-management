const mysql = require("mysql2/promise");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306, // Always 3306 for MySQL
  ssl: { rejectUnauthorized: true } // Needed for Clever Cloud remote access
});

module.exports = db;
