import dotenv from "dotenv";
dotenv.config({path:".env"});
import express from "express";
import { ApiError } from "./utils/ApiError.js";
import webHookRouter from "./routes/webhook.route.js"
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'
const app = express();
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use("/webhooks",webHookRouter);
app.use(express.json());
app.use(clerkMiddleware());
// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//router

import userRouter from "./routes/user.route.js"
import commentRouter from "./routes/comment.route.js";
import postRouter from "./routes/post.route.js"
app.use("/users",userRouter);
app.use("/posts",postRouter);
app.use("/comments",commentRouter);
app.use("/webhooks",webHookRouter);

app.use("/*splat", async (req, res, next) => {
  const message = `${req.originalUrl} and ${req.method} method does not exists`
  const err = new ApiError(400, message);
  next(err);
})

//error middleware to handle error
app.use((err, req, res, next) => {
  console.log(err);
  const { statusCode = 500, message = "Some went wrong",data=null } = err;
  res.status(statusCode).json({
    statusCode: statusCode,
    success: false,
    message: message,
    data:data
  });
});

export default app;
