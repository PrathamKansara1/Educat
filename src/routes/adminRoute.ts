import { Router } from "express";
import { addAdmin, deleteAdmin, getAllAdmins, getAdmin, getAdmins, updateAdmins } from "../controllers";
import { validateData } from "../middleware";

const router: Router = Router();

router.route("/admin").post(validateData, addAdmin);
router.route("/admin").get(getAllAdmins);
router.route("/admin/:id").get(getAdmin);
router.route("/admin/:id").put(validateData, updateAdmins);
router.route("/admin/:id").delete(deleteAdmin);
router.route("/admins").post(validateData, getAdmins);

export default router;