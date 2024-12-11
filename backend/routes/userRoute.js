import express from "express";
import { Login, logOut, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
const router=express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(Login);
router.route("/logout").get(logOut);
router
  .route("/profile/update")
  .post(isAuthenticated, singleUpload,updateProfile);

export default router;