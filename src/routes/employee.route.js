import { Router } from 'express'
import { addEmployee, deleteEmployee, filterWithDepartment, filterWithPosition, findEmployeeWithName, getAllEmployees, updateEmplyoeInfo } from '../controllers/employee.controller.js';

const router = Router();

router.route("/").get(getAllEmployees)
router.route("/add").post(addEmployee)
router.route("/delete/:employeeId").delete(deleteEmployee)
router.route("/update/:employeeId").put(updateEmplyoeInfo)
router.route("/name").get(findEmployeeWithName);

router.route("/filter-department").get(filterWithDepartment);
router.route("/filter-position").get(filterWithPosition)

export default router