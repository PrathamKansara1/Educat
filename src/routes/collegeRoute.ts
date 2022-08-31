import { Router } from "express";
import { addCollege, deleteCollege, getAllColleges, getCollege, getColleges, updateCollege } from "../controllers";
import { validateData } from "../middleware";

const router: Router = Router();

router.route("/college").post(validateData, addCollege);
router.route("/college").get(getAllColleges);
router.route("/college/:id").get(getCollege);
router.route("/college/:id").put(validateData, updateCollege);
router.route("/college/:id").delete(deleteCollege);
router.route("/colleges").post(validateData, getColleges);

export default router;