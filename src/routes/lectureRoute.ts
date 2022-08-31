import { Router } from "express";
import { addLecture, deleteLecture, getAllLectures, getLecture, getLectures, updateLecture } from "../controllers";
import { validateData } from "../middleware";

const router: Router = Router();

router.route("/lecture").post(validateData, addLecture);
router.route("/lecture").get(getAllLectures);
router.route("/lecture/:id").get(getLecture);
router.route("/lecture/:id").put(validateData, updateLecture);
router.route("/lecture/:id").delete(deleteLecture);
router.route("/lectures").post(validateData, getLectures);

export default router;