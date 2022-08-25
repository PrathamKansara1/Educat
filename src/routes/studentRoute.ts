import { Router } from "express";
import { addStudent, deleteStudent, getAllStudents, getStudent, getStudents, updateStudent } from "../controllers";

const router: Router = Router();

router.route("/student").post(addStudent);
router.route("/student").get(getAllStudents);
router.route("/student/:id").get(getStudent);
router.route("/student/:id").put(updateStudent);
router.route("/student/:id").delete(deleteStudent);
router.route("/students").post(getStudents);

export default router;