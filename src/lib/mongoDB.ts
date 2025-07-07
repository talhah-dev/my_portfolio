import mongoose from "mongoose";

const mongooseDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("MongoDb connected!!");
    } catch (error) {
        console.error('Mongoose connection error:', error);
        throw new Error('Failed to connect to MongoDB');
    }
}

export default mongooseDB;