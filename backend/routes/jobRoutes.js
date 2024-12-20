import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { deleteJobById, getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/jobController.js";
const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/getAdminjobs").get(isAuthenticated, getAdminJobs);
router.delete("/delete/:id", deleteJobById);


export default router;
