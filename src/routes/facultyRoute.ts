import { Router } from "express";
import { addFaculty, deleteFaculty, getAllFaculties, getFaculty , getFaculties , updateFaculty } from "../controllers";

const router: Router = Router();

router.route("/faculty").post(addFaculty);
router.route("/faculty").get(getAllFaculties);
router.route("/faculty/:id").get(getFaculty);
router.route("/faculty/:id").put(updateFaculty);
router.route("/faculty/:id").delete(deleteFaculty);
router.route("/faculties").post(getFaculties);

export default router;