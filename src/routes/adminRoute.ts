import { Router } from "express";
import { addAdmin, deleteAdmin, getAllAdmins, getAdmin, getAdmins, updateAdmins } from "../controllers";

const router: Router = Router();

router.route("/admin").post(addAdmin);
router.route("/admin").get(getAllAdmins);
router.route("/admin/:id").get(getAdmin);
router.route("/admin/:id").put(updateAdmins);
router.route("/admin/:id").delete(deleteAdmin);
router.route("/admins").post(getAdmins);

export default router;