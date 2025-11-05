// Import dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");

// Initialize express app
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Home route — clickable links for all tables
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Mall Management Backend</title>
        <style>
          body { font-family: Arial; background: #f9f9f9; padding: 30px; }
          h2 { color: #333; }
          ul { line-height: 1.8; }
          a { color: #0078d7; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h2>Mall Management Backend Running 🏬</h2>
        <p>Available API endpoints:</p>
        <ul>
          <li><a href="/api/malls">/api/malls</a> – View all malls</li>
          <li><a href="/api/shops">/api/shops</a> – View all shops</li>
          <li><a href="/api/restaurants">/api/restaurants</a> – View all restaurants</li>
          <li><a href="/api/parking">/api/parking</a> – View all parking slots</li>
          <li><a href="/api/employees">/api/employees</a> – View all employees</li>
          <li><a href="/api/customers">/api/customers</a> – View all customers</li>
          <li><a href="/api/bookings">/api/bookings</a> – View all bookings</li>
          <li><a href="/api/orders">/api/orders</a> – View all orders</li>
        </ul>
      </body>
    </html>
  `);
});

// ✅ 1. Mall API
app.get("/api/malls", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Mall");
    res.json(rows);
  } catch (err) {
    console.error("❌ Mall DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ 2. Shop API
app.get("/api/shops", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Shop");
    res.json(rows);
  } catch (err) {
    console.error("❌ Shop DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ 3. Restaurant API
app.get("/api/restaurants", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Restaurant");
    res.json(rows);
  } catch (err) {
    console.error("❌ Restaurant DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ 4. Parking API
app.get("/api/parking", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Parking");
    res.json(rows);
  } catch (err) {
    console.error("❌ Parking DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ 5. Employee API
app.get("/api/employees", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Employee");
    res.json(rows);
  } catch (err) {
    console.error("❌ Employee DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ 6. Customer API
app.get("/api/customers", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Customer");
    res.json(rows);
  } catch (err) {
    console.error("❌ Customer DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ 7. Booking API
app.get("/api/bookings", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Booking");
    res.json(rows);
  } catch (err) {
    console.error("❌ Booking DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ 8. Order API
app.get("/api/orders", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM `Order`");
    res.json(rows);
  } catch (err) {
    console.error("❌ Order DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ✅ LOGIN API
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query(
      "SELECT * FROM Users WHERE Username = ? AND Password = ?",
      [username, password]
    );

    if (rows.length > 0) {
      res.json({ success: true, message: "Login successful!" });
    } else {
      res.status(401).json({ success: false, message: "Invalid username or password" });
    }
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Start server with clickable link
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ Server running successfully!");
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});
