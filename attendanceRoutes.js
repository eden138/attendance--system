const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Save attendance
router.post("/", (req, res) => {
    const { employee_id, attendance_date, status } = req.body;

    const sql = "INSERT INTO attendance (employee_id, attendance_date, status) VALUES (?, ?, ?)";

    db.query(sql, [employee_id, attendance_date, status], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Error saving attendance"
            });
        }

        res.json({
            success: true,
            message: "Attendance saved successfully"
        });
    });
});

module.exports = router;