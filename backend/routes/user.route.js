import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller.js";

const router = Router();
// Sample user route
router.get("/getAllUser", getAllUsers);
router.post("/createUser", createUser);

export default router;
