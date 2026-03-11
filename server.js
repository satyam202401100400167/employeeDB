require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api", employeeRoutes);


app.get("/", (req, res) => {
    res.send("Employee Management API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});