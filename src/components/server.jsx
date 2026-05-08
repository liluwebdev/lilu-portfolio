const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "/opt/form-api/.env" });

const app = express();
const PORT = 5000;
const secretKey = "IhaveAl33tPass2Life"; // Change this to a strong secret!

app.use(cors({ origin: ["https://lilumedia.com", "https://www.lilumedia.com"] }));
app.use(express.json());

// ✅ **Database Connection**
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed:", err);
        process.exit(1);
    } else {
        console.log("✅ Database connected!");
    }
});

// ✅ **Middleware for Protecting Admin Routes**
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).json({ message: "❌ No token provided" });

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return res.status(401).json({ message: "❌ Unauthorized" });
        req.user = decoded;
        next();
    });
};

// ✅ **Admin Login Route (Returns JWT Token)**
app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "securepassword") { // Change to a better authentication method later!
        const token = jwt.sign({ user: "admin" }, secretKey, { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).json({ message: "❌ Unauthorized" });
    }
});

// ✅ **Protected Route to Fetch Form Submissions**
app.get("/api/admin/submissions", verifyToken, (req, res) => {
    db.query("SELECT * FROM submissions", (err, results) => {
        if (err) return res.status(500).json({ message: "❌ Database error" });
        res.json(results);
    });
});

// ✅ **Public Route for Form Submissions**
app.post("/api/submit-form", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "❌ All fields are required!" });
    }

    const query = "INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)";
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error("❌ Database Insert Error:", err);
            return res.status(500).json({ message: "❌ Internal server error!" });
        }
        res.status(200).json({ message: "✅ Form submitted successfully!" });
    });
});

// ✅ **Start the Server**
app.listen(PORT, () => {
    console.log(`🚀 API running on https://lilumedia.com:${PORT}`);
});
