import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db";
import app from "./app";

connectDB()
  .then(() => {
    const PORT = process.env.PORT | 5000;
    app.listen(PORT, () => {
      console.log(`server start at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed", err.message);
  });
