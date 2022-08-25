import { Router } from "express";
import { addCourse, deleteCourse, getAllCourses, getCourse, getCourses, updateCourse } from "../controllers";

const router: Router = Router();

router.route("/course").post(addCourse);
router.route("/course").get(getAllCourses);
router.route("/course/:id").get(getCourse);
router.route("/course/:id").put(updateCourse);
router.route("/course/:id").delete(deleteCourse);
router.route("/courses").post(getCourses);

export default router;