const express = require("express");

const app = express();

app.use(express.json());

const employees = require("./routes/employees");

app.use("/employees", employees);

app.get("/", (req,res)=>{
    res.send("Adama HR System Backend Running");
});
const leave = require("./routes/leave");

app.use("/leave", leave);


app.listen(3000,()=>{
    console.log("Server running on port 3000");
});