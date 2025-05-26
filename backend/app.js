import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//router 

import userRouter from "./routes/user.route.js"
import commentRouter from "./routes/comment.route.js";
import postRouter from "./routes/post.route.js"

app.use("users",userRouter);
app.use("/posts",postRouter);
app.use("/comments",commentRouter)

export default app;
