import commentModel from "../models/comment.model.js";
import userModel from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getPostComments = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  if (!postId) throw new ApiError(404, "postId not provided");

  const comments = await commentModel
    .find({ post: postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });
  if (!comments.length) throw new ApiError(404, "comments not found");
  return res
    .status(200)
    .json(new ApiResponse(200, "All comments get successfully", comments));
});

export const addComment = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const clerkUserId = req.auth().userId;
  console.log(clerkUserId);
  if (!clerkUserId) {
    throw new ApiError(400, "User is Not Authenticated!");
  }
  const user = await userModel.findOne({ clerkUserId });
  const newComment = new commentModel({
    ...req.body,
    post: postId,
    user: user._id,
  });
  const saveComment = await newComment.save();
  setTimeout(()=>{
    return res
    .status(201)
    .json(new ApiResponse(201, "comments created successfully!", saveComment));
  },3000)
  return res
    .status(201)
    .json(new ApiResponse(201, "comments created successfully!", saveComment));
});

export const deleteComment=asyncHandler(async(req,res)=>{
    const {commentId}=req.params;
    const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    throw new ApiError(400, "User is Not Authenticated!");
  }
  const user = await userModel.findOne({ clerkUserId });
  const deletedComment=await commentModel.findOneAndDelete({_id:commentId,user:user._id});
  if(!deletedComment){
    throw new ApiError(403,"you can delete only your comment!");
  }
  return res.status(200).json(new ApiResponse(200,"comment deleted successfully",deletedComment))
})
