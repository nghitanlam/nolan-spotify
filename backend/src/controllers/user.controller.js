import { Message } from "../models/message.model.js";
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

export const getMessages = async (req, res, next) => {
  try {
    const myId = req.auth.userId;
    const { userId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: userId, receiverId: myId },
        { senderId: myId, receiverId: userId },
      ],
    }).sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      data: messages,
      message: "Get Message Successfully",
    });
  } catch (error) {
    console.log(`⛔ Error in getMessages controller ::${error}`);
    next(error);
  }
};
