import { Router } from 'express';
const router = Router();

import { createPost, readPosts, updatePost, deletePost } from '../controllers/post-controller.js';

router.post('/', createPost);
router.get('/', readPosts);
router.put('/', updatePost);
router.delete('/', deletePost);

export default router