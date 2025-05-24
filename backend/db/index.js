import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(process.env.MONGO_URI);
        console.log(connectionInstance.connection.host);
    } catch (error) {
        console.log(`Database connection failed ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;