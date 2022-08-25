import { Router } from "express";
import { addLecture, deleteLecture, getAllLectures, getLecture, getLectures, updateLecture } from "../controllers";

const router: Router = Router();

router.route("/lecture").post(addLecture);
router.route("/lecture").get(getAllLectures);
router.route("/lecture/:id").get(getLecture);
router.route("/lecture/:id").put(updateLecture);
router.route("/lecture/:id").delete(deleteLecture);
router.route("/lectures").post(getLectures);

export default router;