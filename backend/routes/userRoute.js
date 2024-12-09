import express from "express";
import { Login, logOut, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(Login);
router.route("/logout").get(logOut);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;