import dotenv from "dotenv";
dotenv.config({path:".env"});

import connectDB from "./db/index.js";
import app from "./app.js";

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
