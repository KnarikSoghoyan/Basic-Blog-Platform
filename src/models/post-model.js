import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String
    },
    author: {
        type: String
    },
    createdAt: { type: Date, default: Date.now },
    timestamps: { type: Date, updatedAt: true },
},

);

const Post = mongoose.model('Post', postSchema);

export { Post };

