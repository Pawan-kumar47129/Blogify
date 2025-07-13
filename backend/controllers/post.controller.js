import dotenv from "dotenv";
dotenv.config();
import postModel from "../models/post.model.js";
import userModel from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ImageKit from "imagekit";
import Post from "../models/post.model.js";

export const getPosts = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;
  const posts = await postModel
    .find()
    .populate("user", "username")
    .limit(limit)
    .skip((page - 1) * limit);
  const totalPosts = await Post.countDocuments();
  const hashMore = page * limit < totalPosts;
  if (posts.length == 0) {
    throw new ApiError(404, "No posts found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Posts get Successfully", { posts, hashMore }));
});

export const getPost = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const post = await postModel
    .findOne({ slug: slug })
    .populate("user", "username img");
  if (!post) {
    throw new ApiError(404, "Post not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Post get Successfully", post));
});

export const createPost = asyncHandler(async (req, res) => {
  const clerkUserId = req.auth().userId;;
  if (!clerkUserId) {
    throw new ApiError(401, "user Unauthorized!");
  }
  const user = await userModel.findOne({ clerkUserId });
  if (!user) {
    throw new ApiError(404, "user not found!");
  }
  let slug = req.body.title?.replaceAll(" ", "-").toLowerCase();
  let counter = 1;
  let existPost = await postModel.findOne({ slug: slug });
  while (existPost) {
    slug = `${slug}-${counter}`;
    existPost = await postModel.findOne({ slug: slug });
    counter++;
  }
  const post = new postModel({ user: user._id, ...req.body, slug: slug });
  const resPost = await post.save();
  return res
    .status(201)
    .json(new ApiResponse(201, "post created successfully", resPost));
});

export const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const clerkUserId=req.auth().userId;
  if(!clerkUserId){
    throw new ApiError(403, "You can delete only your post");
  }
  const role=req.auth().sessionClaims?.metadata?.role || "user";
  if(role==="admin"){
    await postModel.findByIdAndDelete(id);
    return res.status(200).json(new ApiResponse(200,"post deleted successfully"));
  }
  const user = await userModel.findOne({clerkUserId:clerkUserId});
  const post = await postModel.findOneAndDelete({ _id: id, user: user._id });
  if (!post) {
    throw new ApiError(403, "You can delete only your post");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Post deleted successfull", post));
});
const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  console.log("called for validation");
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
