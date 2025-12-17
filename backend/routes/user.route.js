import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
} from "../controllers/user.controller.js";

const router = Router();
// Sample user route
router.get("/getAllUser", getAllUsers);
router.post("/createUser", createUser);
router.get("/getUserById", getUserById);

export default router;
