import { Router } from 'express'
import { addEmployee, deleteEmployee, getAllEmployees, updateEmplyoeInfo } from '../controllers/employee.controller.js';

const router = Router();

router.route("/").get(getAllEmployees)
router.route("/add").post(addEmployee)
router.route("/delete/:employeeId").delete(deleteEmployee)
router.route("/update/:employeeId").put(updateEmplyoeInfo)

export default router