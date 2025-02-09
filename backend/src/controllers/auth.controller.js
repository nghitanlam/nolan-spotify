import { User } from "../models/user.model.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    // [1] Check if user already exists
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      //[2] signup
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }

    // [-1] return data
    res.status(200).json({ success: true, message: "Success" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Internal Server Error ${error}` });
  }
};
