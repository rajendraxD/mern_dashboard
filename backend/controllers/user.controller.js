import UserModel from "../models/user.model.js";
import { getHashedPassword } from "../utils/passwordBcrypt.js";
import expressAsyncHandler from "express-async-handler";

export const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await UserModel.find({});
  res.status(200).json({ message: "fetched...", users });
});
export const getUserById = expressAsyncHandler(async (req, res) => {
  const { id } = req.body;
  const user = await UserModel.find({ _id: id });
  res.status(200).json({ message: "fetched...", user });
});
export const createUser = expressAsyncHandler(async (req, res) => {
  let { username, email, password } = req.body;
  const user = await UserModel.create({
    username,
    email,
    password: await getHashedPassword(password),
  });
  if (!user) {
    res.status(400);
    throw new Error("User creation failed");
  }
  res.status(201).json({ message: "User created successfully", user });
});
