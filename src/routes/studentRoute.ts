import { Router } from "express";
import { addStudent, deleteStudent, getAllStudents, getStudent, getStudents, updateStudent } from "../controllers";
import { validateData } from "../middleware";

const router: Router = Router();

router.route("/student").post(validateData,addStudent);
router.route("/student").get(getAllStudents);
router.route("/student/:id").get(getStudent);
router.route("/student/:id").put(validateData,updateStudent);
router.route("/student/:id").delete(deleteStudent);
router.route("/students").post(validateData,getStudents);

export default router;