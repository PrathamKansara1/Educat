import { Router } from "express";
import { addFaculty, deleteFaculty, getAllFaculties, getFaculty, getFaculties, updateFaculty } from "../controllers";
import { validateData } from "../middleware";

const router: Router = Router();

router.route("/faculty").post(validateData, addFaculty);
router.route("/faculty").get(getAllFaculties);
router.route("/faculty/:id").get(getFaculty);
router.route("/faculty/:id").put(validateData, updateFaculty);
router.route("/faculty/:id").delete(deleteFaculty);
router.route("/faculties").post(validateData, getFaculties);

export default router;