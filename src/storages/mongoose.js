import mongoose from 'mongoose';

const { MONGO_URL_DB } = process.env;

export async function connectToMongoDB() {
    try {
        await mongoose.connect( MONGO_URL_DB );
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}