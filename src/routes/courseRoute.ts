import { Router } from "express";
import { addCourse, deleteCourse, getAllCourses, getCourse, getCourses, updateCourse } from "../controllers";
import { validateData } from "../middleware";

const router: Router = Router();

router.route("/course").post(validateData, addCourse);
router.route("/course").get(getAllCourses);
router.route("/course/:id").get(getCourse);
router.route("/course/:id").put(validateData, updateCourse);
router.route("/course/:id").delete(deleteCourse);
router.route("/courses").post(validateData, getCourses);

export default router;