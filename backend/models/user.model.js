import { mongoose } from "mongoose";

const userModelSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userModelSchema);
export default UserModel;
