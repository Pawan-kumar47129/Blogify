import dotenv from "dotenv";
dotenv.config();
import postModel from "../models/post.model.js";
import userModel from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;
  const query={};
  const cat=req.query.cat;
  const author=req.query.author;
  const searchQuery=req.query.search;
  const sortQuery=req.query.sort;
  const featured=req.query.featured;
  if(cat)query.category=cat;
  if(author){
    const user=await User.findOne({username:author}).select("_id");
    if(!user) return res.status(404).json(new ApiResponse(404,"No Post found!"));
    query.user=user._id;
  }
  if(searchQuery) query.title={$regex:searchQuery,$options:'i'};
  let sortObj={createdAt:-1};
  if(sortQuery){
    switch(sortQuery){
      case "newest":
        sortObj={createdAt:-1};
        break;
      case "oldest":
        sortObj={createdAt:1};
        break;
      case "popular":
        sortObj={visit:1};
        break;
      case "trending":
        sortObj={visit:-1}
        query.createdAt={
          $gte:new Date(new Date().getTime-7*24*60*60*1000)
        }
        break;
    }
  }
  if(featured){
    query.isFeatured=true
  }
  const posts = await postModel
    .find(query)
    .sort(sortObj)
    .populate("user", "username")
    .limit(limit)
    .skip((page - 1) * limit);
  const totalPosts = await Post.countDocuments(query);
  const hashMore = page * limit < totalPosts;
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
  const clerkUserId = req.auth().userId;
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
  const clerkUserId = req.auth().userId;
  if (!clerkUserId) {
    throw new ApiError(403, "You can delete only your post");
  }
  const role = req.auth().sessionClaims?.metadata?.role || "user";
  if (role === "admin") {
    await postModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json(new ApiResponse(200, "post deleted successfully"));
  }
  const user = await userModel.findOne({ clerkUserId: clerkUserId });
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

export const featurePost = asyncHandler(async (req, res) => {
  const clerkUserId = req.auth().userId;
  const postId = req.body.postId;
  if (!clerkUserId) {
    throw new ApiError(403, "You can delete only your post");
  }
  const role = req.auth().sessionClaims?.metadata?.role || "user";
  if (role !== "admin") {
    throw new ApiError(403, "You cannot feature post!");
  }
  const post = await postModel.findById(postId);
  if (!post) {
    throw new ApiError(404, "Post not found!");
  }
  const isFreatured = post.isFeatured;
  const updatePost = await postModel.findByIdAndUpdate(
    id,
    { isFeatured: !isFreatured },
    { new: true }
  );
  return res
    .status(200)
    .json(new ApiResponse(200, "post featured successfully", updatePost));
});
