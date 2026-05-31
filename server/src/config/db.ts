import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const uri = process.env.MONGOֹֹֹֹ_URI;

        if (!uri) {
            throw new Error("MONGOֹֹֹֹ_URI is not defined in .env file");
        }

        await mongoose.connect(uri);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);

        process.exit(1); 
    }
};

export default connectDB;