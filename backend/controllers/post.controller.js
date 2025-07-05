import postModel from "../models/post.model.js";
import userModel from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getPosts = asyncHandler(async (req,res) => {
  const posts = await postModel.find({});
  console.log("hello");
  if (posts.length == 0) {
    throw new ApiError(404, "No posts found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Posts get Successfully", posts));
});

export const getPost = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const post = await postModel.findOne({ slug: slug });
  if (!post) {
    throw new ApiError(404, "Post not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Post get Successfully", post));
});

export const createPost = asyncHandler(async (req, res) =>{
  const clerkUserId=req.auth.userId;
  if(!clerkUserId){
    throw new ApiError(401, "user Unauthorized!");
  }
  const user=await userModel.findOne({clerkUserId});
  if(!user){
    throw new ApiError(404, "user not found!");
  }
  let slug=req.body.title?.replaceAll(" ","-").toLowerCase();
  let counter=1;
  let existPost=await postModel.findOne({slug:slug});
  while(existPost){
    slug=`${slug}-${counter}`;
    existPost=await postModel.findOne({slug:slug});
    counter++;
  }
  const post = new postModel({user:user._id,...req.body,slug:slug});
  const resPost=await post.save();
  return res.status(201).json(new ApiResponse(201,"post created successfully",resPost));
});

export const deletePost=asyncHandler(async(req,res)=>{
  const {id}=req.params;
  const user=await userModel.findOne({clerkUserId:req.auth.userId});
  const post=await postModel.findOneAndDelete({_id:id,user:user._id});
  if(!post){
    throw new ApiError(403,"You can delete only your post");
  }
  return res.status(200).json(new ApiResponse(200,"Post deleted successfull",post));
});
const imagekit = new ImageKit({
  urlEndpoint: 'https://ik.imagekit.io/vbygr1pkk0/blog>', // https://ik.imagekit.io/your_imagekit_id
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

app.get('/auth', function (req, res) {
  // Your application logic to authenticate the user
  // For example, you can check if the user is logged in or has the necessary permissions
  // If the user is not authenticated, you can return an error response
  const { token, expire, signature } = imagekit.getAuthenticationParameters();
  res.send({ token, expire, signature, publicKey: process.env.IMAGEKIT_PUBLIC_KEY });
});