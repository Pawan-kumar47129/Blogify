import express from "express"
import {requireAuth,getAuth} from "@clerk/express"
import { getPost, getPosts,createPost,deletePost ,uploadAuth} from "../controllers/post.controller.js";
const router=express.Router({mergeParams:true});

router.get("/upload-auth",uploadAuth);
router.get("/",getPosts);
router.get("/:slug",getPost);
router.post('/',createPost);
router.delete("/:id",deletePost);
export default router;