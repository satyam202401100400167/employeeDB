const Employee = require("../models/Employee");


// CREATE EMPLOYEE
exports.createEmployee = async (req, res) => {
    try {

        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();

        res.status(201).json(savedEmployee);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// GET ALL EMPLOYEES
exports.getEmployees = async (req, res) => {
    try {

        const employees = await Employee.find();

        res.status(200).json(employees);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GET EMPLOYEE BY ID
exports.getEmployeeById = async (req, res) => {
    try {

        const employee = await Employee.findById(req.params.id);

        if (!employee)
            return res.status(404).json({ message: "Employee not found" });

        res.status(200).json(employee);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// UPDATE EMPLOYEE
exports.updateEmployee = async (req, res) => {
    try {

        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!employee)
            return res.status(404).json({ message: "Employee not found" });

        res.status(200).json(employee);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// DELETE EMPLOYEE
exports.deleteEmployee = async (req, res) => {
    try {

        const employee = await Employee.findByIdAndDelete(req.params.id);

        if (!employee)
            return res.status(404).json({ message: "Employee not found" });

        res.status(200).json({ message: "Employee deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// SEARCH EMPLOYEE
exports.searchEmployee = async (req, res) => {
    try {

        const name = req.query.name;
        const department = req.query.department;

        const query = {};

        if (name) {
            query.fullName = { $regex: name, $options: "i" };
        }

        if (department) {
            query.department = department;
        }

        const employees = await Employee.find(query);

        res.status(200).json(employees);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};