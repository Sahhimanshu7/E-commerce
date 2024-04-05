import express from "express";
const router = express.Router();
import { addProductOnline, createUser, loginUser } from "../controllers/userController.js";

router.route('/create-user')
    .post(createUser);

router.route('/login-user')
    .post(loginUser);

router.route('/add-product-online')
    .put(addProductOnline);
    
export default router;