import express from "express";
const router = express.Router();
import { createUser, loginUser } from "../controllers/userController.js";

router.route('/create-user')
    .post(createUser);

router.route('/login-user')
    .post(loginUser);
export default router;