const db = require("./config/db");

// Employee table
db.run(`
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id TEXT UNIQUE,
    name TEXT,
    department TEXT,
    position TEXT,
    status TEXT,
    photo TEXT
);
`);

// Attendance table
db.run(`
CREATE TABLE IF NOT EXISTS attendance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id TEXT,
    date TEXT,
    check_in TEXT,
    check_out TEXT,
    status TEXT,
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id)
);
`);

// Leave request table
db.run(`
CREATE TABLE IF NOT EXISTS leave_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id TEXT,
    leave_type TEXT,
    start_date TEXT,
    end_date TEXT,
    reason TEXT,
    status TEXT,
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id)
);
`);

// Users table (login/admin)
db.run(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    role TEXT
);
`);

console.log("All HR tables created successfully");