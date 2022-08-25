import { Router } from "express";
import { addUniversity, deleteUniversity, getAllUniversity, getUniversity, getUniversities, updateUniversity } from "../controllers";

const router: Router = Router();

router.route("/university").post(addUniversity);
router.route("/university").get(getAllUniversity);
router.route("/university/:id").get(getUniversity);
router.route("/university/:id").put(updateUniversity);
router.route("/university/:id").delete(deleteUniversity);
router.route("/universities").post(getUniversities);

export default router;