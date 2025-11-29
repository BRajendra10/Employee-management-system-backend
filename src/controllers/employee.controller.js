import { ObjectId } from 'mongodb'

const addEmployee = async (req, res) => {
    try {
        const { name, email, phone, department, position, salary } = req.body;
        const db = req.db;

        if ([name, email, phone, department, position, salary].some(f => !f.trim())) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingEmployee = await db.collection("employees").findOne({ name, email })

        if (existingEmployee) {
            return res.status(400).json({
                message: "Employee already exists with this name and email"
            });
        }

        const newEmployee = await db.collection("employees").insertOne({
            name,
            email,
            phone,
            department,
            position,
            salary
        });

        res.status(201).json({
            message: "Employee added successfully",
            data: newEmployee
        });
    } catch (error) {
        console.log("Something went wrong while adding employee !!");

        return res
            .status(500)
            .json({
                success: false,
                message: "Something went wrong while adding employee !!"
            })
    }
};

const getAllEmployees = async (req, res) => {
    try {
        const db = req.db;
        const employees = await db.collection("employees").find({}).toArray();

        return res
            .status(200)
            .json({
                success: true,
                message: "All employees fetch successfully",
                employees
            })

    } catch (error) {
        console.log("Something went wrong while fetching all employees !!")
        res
            .status(500)
            .json({
                success: false,
                message: "Failed to fetch employees",
                error: error.message
            })
    }
};

const updateEmplyoeInfo = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const { name, email, phone, department, position, salary } = req.body;
        const db = req.db;

        if ([name, email, phone, department, position, salary].some(f => !f.trim())) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const employeeInfo = await db.collection("employees").findOne({ _id: new ObjectId(employeeId) });

        if (!employeeInfo) {
            return res.status(404).json({
                message: `Employee not found with ID: ${employeeId}`
            });
        }

        const updatedData = {
            name,
            email,
            phone,
            department,
            position,
            salary,
        };

        const result = await db.collection("employees").updateOne(
            { _id: new ObjectId(employeeId) },
            { $set: updatedData }
        );

        return res.status(200).json({
            message: "Employee updated successfully",
            updatedEmployee: updatedData
        })
    } catch (error) {
        console.error("Error updating employee:", error);
        return res.status(500).json({ message: "Something went wrong while updating employee information !!" });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;

        if (!ObjectId.isValid(employeeId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid employee Id !!"
            })
        }

        const db = req.db;

        await db
            .collection("employees")
            .deleteOne({ _id: new ObjectId(employeeId) })

        return res
            .status(200)
            .json({
                success: true,
                message: "Employee deleted successfully."
            })
    } catch (error) {
        console.log("Something went wrong while deleting employee !!")

        return res
            .status(500)
            .json({
                success: true,
                message: "Something went wrong while deleting employee !!"
            })
    }
};

const filterWithDepartment = async (req, res) => {
    try {
        const { department } = req.query;

        if (!department || !department.trim()) {
            return res.status(400).json({
                success: false,
                message: "Department is required"
            })
        }

        const db = req.db;

        const employees = await db
            .collection("employees")
            .find({ department })
            .toArray();

        if (employees.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No employees found in ${department} department`
            })
        }

        return res.status(200).json({
            success: true,
            message: "Employees fetched successfully",
            data: employees
        })
    } catch (error) {
        console.log("Error while filtering employees by department:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while filtering employees !!"
        });
    }
}

const filterWithPosition = async (req, res) => {
    try {
        const { position } = req.query;

        if (!position || !position.trim()) {
            return res.status(400).json({
                success: false,
                message: "Posistion is required"
            })
        }

        const db = req.db;

        const employees = await db
            .collection("employees")
            .find({ position })
            .toArray();

        if (employees.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No employees found in ${position} position`
            })
        }

        return res.status(200).json({
            success: true,
            message: "Employees fetched successfully",
            data: employees
        })
    } catch (error) {
        console.log("Error while filtering employees by position:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while filtering employees !!"
        });
    }
}

const findEmployeeWithName = async (req, res) => {
    try {
        const { name } = req.query;

        if (!name || !name.trim()) {
            return res.status(400).json({
                success: false,
                message: "Name is required"
            })
        }

        const db = req.db;

        const employees = await db
            .collection("employees")
            .find({ name })
            .toArray();

        if (employees.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No employee found with this name: ${name}`
            })
        }

        return res.status(200).json({
            success: true,
            message: "Employee fetched successfully",
            data: employees
        })
    } catch (error) {
        console.log("Error while finding employee by name:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while searching employee by name !!"
        });
    }
}

export {
    addEmployee,
    getAllEmployees,
    updateEmplyoeInfo,
    deleteEmployee,
    filterWithDepartment,
    filterWithPosition,
    findEmployeeWithName
};
