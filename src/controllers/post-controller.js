import { Post } from '../models/post-model.js';
import { verifyToken } from '../libs/token-lib.js';

export async function createPost(req, res) {
    try {
        const { authorization } = req.headers
        const { title, body } = req.bodygit

        const user = await verifyToken(authorization);

        if (!user.length) {
            throw new Error('You are not autorized')
        }

        const post = await Post.create({ author: String(user._id), title, body })

        res.status(201).send({ data: post })
    } catch (e) {
        res.status(404).send({ data: e.message })
    }
};

export async function readPosts(req, res) {
    try {
        const posts = await Post.find({})
        res.status(201).send({ data: posts })
    } catch (e) {
        res.status(404).send({ data: e.message })
    }
};

export async function updatePost(req, res) {
    try {
        const { authorization } = req.headers
        const { title, body } = req.body

        const user = await verifyToken(authorization);

        if (!user.length) {
            throw new Error('You are not autorized')
        }

        const author = await Post.find({ title }).select('author')

        if (user._id !== author[0].author) {
            throw new Error("This posts owner is other person")
        }

        await Post.findOneAndUpdate({ title }, { $set: { body } });
        const updatedPost = await Post.findOne({ title })

        res.status(201).send({ data: updatedPost })
    } catch (e) {
        res.status(404).send({ data: e.message })
    }
};


export async function deletePost(req, res) {
    try {
        const { authorization } = req.headers
        const { title } = req.body

        const user = await verifyToken(authorization);

        if (!user.length) {
            throw new Error('You are not autorized')
        }

        const author = await Post.find({ title }).select('author')

        if (user._id !== author[0].author) {
            throw new Error("This posts owner is other person")
        }
        const deletedPost = await Post.findOneAndDelete({ title })
        res.status(201).send({ data: deletedPost })

    } catch (e) {
        res.status(404).send({ data: e.message })
    }
};