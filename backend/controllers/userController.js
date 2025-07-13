import { asyncHandler } from "../utils/asyncHandler.js";
import userModel from "../models/user.model.js";
import User from "../models/user.model.js";
export const getUserSavedPosts = asyncHandler(async (req, res) => {
  const clerkUserId = req.auth().userId;
  if (!clerkUserId) {
    return res.status(403).json("Not authenticated");
  }
  const user = await userModel.findOne({ clerkUserId: clerkUserId });
  res.status(200).json(user.savedPosts);
});

export const SavePost = asyncHandler(async (req, res) => {
  const clerkUserId = req.auth().userId;
  const postId = req.body.postId;
  if (!clerkUserId) {
    return res.status.json("Not authenticated");
  }
  const user = await userModel.findOne({ clerkUserId: clerkUserId });
  const isSaved = user.savedPosts.some((post) => post == postId);
  if (!isSaved) {
    await User.findByIdAndUpdate(user._id, {
      $push: { savedPosts: postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      $pull: { savedPosts: postId },
    });
  }
  res.status(200).json(isSaved ? "Post unsaved" : "post saved");
});
