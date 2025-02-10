import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const currentUserId = req.auth.userId;
    const users = await User.find({ clerkId: { $ne: currentUserId } });
    res.json({
      success: true,
      data: users,
      message: "Get All Users Successfully",
    });
  } catch (error) {
    console.log(`⛔ Error in getAllUsers controller ::${error}`);
    next(error);
  }
};
