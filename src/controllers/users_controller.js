import { User } from "../models/users.js";

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ msg: "This is creating a user" });
};
