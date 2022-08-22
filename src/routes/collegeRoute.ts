import { Router } from "express";
import { addCollege, deleteCollege, getAllColleges, getCollege, getColleges, updateCollege } from "../controllers";

const router: Router = Router();

router.route("/college").post(addCollege);
router.route("/college").get(getAllColleges);
router.route("/college/:id").get(getCollege);
router.route("/college/:id").put(updateCollege);
router.route("/college/:id").delete(deleteCollege);
router.route("/colleges").post(getColleges);

export default router;