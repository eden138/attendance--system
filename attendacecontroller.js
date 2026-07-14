const Attendance = require('./attendanceModel');

// Save a new attendance record
exports.logAttendance = async (req, res) => {
    try {
        const { employeeId, verificationMethod } = req.body;

        // Custom logic: Automatically mark as 'Late' if it's past 8:30 AM
        let status = 'Present';
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        if (currentHour > 8 || (currentHour === 8 && currentMinute > 30)) {
            status = 'Late';
        }

        const newRecord = new Attendance({
            employeeId,
            verificationMethod,
            status
        });

        const savedRecord = await newRecord.save();
        return res.status(201).json({ 
            success: true, 
            message: "Attendance logged to database cleanly!", 
            data: savedRecord 
        });

    } catch (error) {
        return res.status(500).json({ 
            success: false, 
            message: "Server error saving log package", 
            error: error.message 
        });
    }
};