import mongoose from 'mongoose';

async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blogPlatform')
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

connectToMongoDB();

export default mongoose