import { Router } from "express";
import { addUniversity, deleteUniversity, getAllUniversity, getUniversity, getUniversities, updateUniversity } from "../controllers";
import { validateData } from "../middleware";

const router: Router = Router();

router.route("/university").post(validateData, addUniversity);
router.route("/university").get(getAllUniversity);
router.route("/university/:id").get(getUniversity);
router.route("/university/:id").put(validateData, updateUniversity);
router.route("/university/:id").delete(deleteUniversity);
router.route("/universities").post(validateData, getUniversities);

export default router;