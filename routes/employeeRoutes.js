const express = require("express");
const router = express.Router();

const {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    searchEmployee
} = require("../controllers/employeeController");


router.post("/employees", createEmployee);

router.get("/employees", getEmployees);

router.get("/employees/search", searchEmployee);

router.get("/employees/:id", getEmployeeById);

router.put("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployee);

module.exports = router;