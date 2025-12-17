import UserModel from "../models/user.model.js";
import { getHashedPassword } from "../utils/passwordBcrypt.js";

export const getAllUsers = (req, res) => {
  res.status(200).json({ message: "Get all users" });
};
export const createUser = async (req, res) => {
  let { username, email, password } = req.body;

  const user = await UserModel.create({
    username,
    email,
    password: await getHashedPassword(password),
  });
  res.status(201).json({ message: "User created successfully", user });
};
